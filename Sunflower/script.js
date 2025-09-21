// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos del DOM
    const magicButton = document.getElementById('magicBtn');
    const bouquetBtn = document.getElementById('bouquetBtn');
    const personalSection = document.getElementById('personalSection');
    const closePersonalBtn = document.getElementById('closePersonal');
    const flowers = document.querySelectorAll('.flower, .sunflower');
    const floatingFlowers = document.querySelectorAll('.floating-flower');
    const fxCanvas = document.getElementById('fxCanvas');
    const heartsWrap = document.getElementById('floatingHearts');
    const nightSky = document.getElementById('nightSky');
    
    // Contador de clics para diferentes sorpresas
    let clickCount = 0;
    
    // Función para crear partículas mágicas
    function createMagicParticles(x, y) {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: linear-gradient(45deg, #fdcb6e, #ffeaa7);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${x}px;
                top: ${y}px;
                animation: particleExplosion 1.5s ease-out forwards;
            `;
            
            // Dirección aleatoria para cada partícula
            const angle = (Math.PI * 2 * i) / 15;
            const velocity = 100 + Math.random() * 50;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--vx', vx + 'px');
            particle.style.setProperty('--vy', vy + 'px');
            
            document.body.appendChild(particle);
            
            // Remover partícula después de la animación
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1500);
        }
    }
    
    // Agregar CSS para animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleExplosion {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(var(--vx), var(--vy)) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes flowerGlow {
            0%, 100% {
                filter: drop-shadow(0 0 10px rgba(253, 203, 110, 0.5));
                transform: scale(1);
            }
            50% {
                filter: drop-shadow(0 0 20px rgba(253, 203, 110, 0.8));
                transform: scale(1.1);
            }
        }
        
        @keyframes rainbowText {
            0% { color: #e17055; }
            25% { color: #fdcb6e; }
            50% { color: #00b894; }
            75% { color: #6c5ce7; }
            100% { color: #e17055; }
        }
        
        .flower-glow {
            animation: flowerGlow 2s ease-in-out infinite;
        }
        
        .rainbow-text {
            animation: rainbowText 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);

    // --- Cielo nocturno: estrellas y fugaces ---
    function createStars(count = 180) {
        if (!nightSky) return;
        // limpiar previas
        nightSky.innerHTML = '';
        const frag = document.createDocumentFragment();
        for (let i = 0; i < count; i++) {
            const s = document.createElement('div');
            s.className = 'star';
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            s.style.left = x + 'vw';
            s.style.top = y + 'vh';
            s.style.setProperty('--twinkleDur', (2 + Math.random() * 3).toFixed(2) + 's');
            s.style.setProperty('--twinkleDelay', (Math.random() * 3).toFixed(2) + 's');
            frag.appendChild(s);
        }
        nightSky.appendChild(frag);
    }

    function spawnShootingStar() {
        if (!nightSky) return;
        const el = document.createElement('div');
        el.className = 'shooting-star';
        // posición inicial aleatoria en la parte superior/izquierda
        const startX = Math.random() * window.innerWidth * 0.6; // 0-60% ancho
        const startY = Math.random() * window.innerHeight * 0.4; // 0-40% alto
        el.style.left = startX + 'px';
        el.style.top = startY + 'px';
        // trayecto hacia abajo-derecha o arriba-derecha
        const tx = 500 + Math.random() * 500;
        const ty = (Math.random() < 0.5 ? -1 : 1) * (100 + Math.random() * 200);
        el.style.setProperty('--tx', tx + 'px');
        el.style.setProperty('--ty', ty + 'px');
        el.style.setProperty('--dur', (1.6 + Math.random()).toFixed(2) + 's');
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2500);
    }

    createStars(200);
    setInterval(spawnShootingStar, 4000);
    // fugaz extra aleatoria
    setInterval(() => { if (Math.random() < 0.5) spawnShootingStar(); }, 7000);

    // --- Toggle Tema Día/Noche ---
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement; // <html>
    function applyTheme(theme) {
        if (theme === 'day') {
            root.classList.add('theme-day');
        } else {
            root.classList.remove('theme-day');
        }
    }
    // Determinar tema por hora local SIEMPRE al cargar (ignoramos preferencia guardada al inicio)
    const hour = new Date().getHours();
    const initialTheme = (hour >= 7 && hour < 19) ? 'day' : 'night';
    // Asegurar estado limpio
    root.classList.remove('theme-day');
    document.body.classList.remove('theme-day');
    applyTheme(initialTheme);
    if (initialTheme === 'day') document.body.classList.add('theme-day');
    else document.body.classList.remove('theme-day');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDay = root.classList.toggle('theme-day');
            // Sincronizar también en <body> para evitar estilos heredados
            if (isDay) document.body.classList.add('theme-day');
            else document.body.classList.remove('theme-day');
            const t = isDay ? 'day' : 'night';
            localStorage.setItem('theme', t);
            themeToggle.title = t === 'day' ? 'Modo Día (clic para cambiar a Noche)' : 'Modo Noche (clic para cambiar a Día)';
            // Si pasamos a noche y no hay estrellas (por haber estado en día), recrearlas
            if (t === 'night' && nightSky && nightSky.children.length === 0) {
                createStars(200);
            }
            // Disparar animaciones CSS en el switch
            themeToggle.classList.add('animate');
            setTimeout(() => themeToggle.classList.remove('animate'), 500);
        });
        // Establecer título inicial
        themeToggle.title = initialTheme === 'day' ? 'Modo Día (clic para cambiar a Noche)' : 'Modo Noche (clic para cambiar a Día)';
    }

    // --- Canvas efectos (fuegos artificiales y confeti) ---
    let ctx = null;
    if (fxCanvas) {
        ctx = fxCanvas.getContext('2d');
        const resize = () => {
            fxCanvas.width = window.innerWidth;
            fxCanvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
    }

    const particles = [];
    const constellations = [];
    function addParticle(x, y, color, vx, vy, life) {
        particles.push({ x, y, color, vx, vy, life, maxLife: life });
    }
    function fireworkBurst(cx, cy) {
        const colors = ['#ffd166', '#f6bd60', '#ff9f1c', '#ffe66d', '#ffeaa7'];
        const count = 120;
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            const speed = 2 + Math.random() * 3;
            addParticle(
                cx,
                cy,
                colors[i % colors.length],
                Math.cos(angle) * speed,
                Math.sin(angle) * speed,
                60 + Math.random() * 20
            );
        }
    }
    function confettiBurst(times = 1) {
        const colors = ['#ffd166', '#ffeaa7', '#fdcb6e', '#e17055', '#00b894'];
        const spawn = () => {
            for (let i = 0; i < 250; i++) {
                addParticle(
                    Math.random() * (fxCanvas?.width || window.innerWidth),
                    -10,
                    colors[Math.floor(Math.random() * colors.length)],
                    (Math.random() - 0.5) * 2,
                    2 + Math.random() * 2.5,
                    100 + Math.random() * 40
                );
            }
        };
        for (let t = 0; t < times; t++) {
            setTimeout(spawn, t * 250);
        }
    }
    function animateCanvas() {
        if (!ctx) return;
        ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
        // Dibujar constelaciones (líneas que se desvanecen)
        for (let i = constellations.length - 1; i >= 0; i--) {
            const c = constellations[i];
            c.life--;
            const alpha = Math.max(0, c.life / c.maxLife);
            ctx.strokeStyle = `rgba(255, 209, 102, ${alpha})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(c.points[0].x, c.points[0].y);
            for (let k = 1; k < c.points.length; k++) ctx.lineTo(c.points[k].x, c.points[k].y);
            ctx.stroke();
            if (c.life <= 0) constellations.splice(i, 1);
        }
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.02; // gravedad suave
            p.life--;
            const alpha = Math.max(0, p.life / p.maxLife);
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
            if (p.life <= 0) particles.splice(i, 1);
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(animateCanvas);
    }
    animateCanvas();

    // Conectar constelaciones al hacer clic en el cielo nocturno
    if (nightSky) {
        nightSky.addEventListener('click', (e) => {
            if (root.classList.contains('theme-day')) return; // sólo de noche
            const rect = nightSky.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            const stars = nightSky.querySelectorAll('.star');
            // Mapear estrellas a coords absolutas
            const pts = Array.from(stars).map(s => ({
                x: s.offsetLeft + 1,
                y: s.offsetTop + 1
            }));
            // Elegir N más cercanas al clic
            pts.sort((a,b) => ((a.x-clickX)**2 + (a.y-clickY)**2) - ((b.x-clickX)**2 + (b.y-clickY)**2));
            const chosen = pts.slice(0, Math.min(6, pts.length)).map(p => ({ x: p.x, y: p.y }));
            if (chosen.length >= 2) {
                constellations.push({ points: chosen, life: 180, maxLife: 180 });
            }
        });
    }

    // Activar pulso de brillo en girasoles
    document.querySelectorAll('.sunflower').forEach(el => el.classList.add('glow-pulse'));

    // Función para hacer brillar las flores
    function makeFlowersGlow() {
        flowers.forEach((flower, index) => {
            setTimeout(() => {
                flower.classList.add('flower-glow');
                setTimeout(() => {
                    flower.classList.remove('flower-glow');
                }, 3000);
            }, index * 500);
        });
    }
    
    // Función para crear lluvia de flores
    function createFlowerRain() {
        const flowerEmojis = ['🌻', '🌼', '🌸', '🌺', '🌷'];
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const flower = document.createElement('div');
                flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
                flower.style.cssText = `
                    position: fixed;
                    font-size: ${20 + Math.random() * 20}px;
                    left: ${Math.random() * window.innerWidth}px;
                    top: -50px;
                    pointer-events: none;
                    z-index: 1000;
                    animation: fallDown ${3 + Math.random() * 2}s linear forwards;
                `;
                
                document.body.appendChild(flower);
                
                setTimeout(() => {
                    if (flower.parentNode) {
                        flower.parentNode.removeChild(flower);
                    }
                }, 5000);
            }, i * 200);
        }
    }
    
    // Agregar animación de caída
    const fallStyle = document.createElement('style');
    fallStyle.textContent = `
        @keyframes fallDown {
            0% {
                transform: translateY(-50px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(${window.innerHeight + 50}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(fallStyle);
    
    // Función para cambiar el mensaje del botón
    function updateButtonMessage() {
        const messages = [
            '✨ ¡Más sorpresas! ✨',
            '💛 ¡Otra sorpresa! 💛',
            '🌻 ¡Sigue haciendo clic! 🌻',
            '💫 ¡Magia infinita! 💫',
            '🌼 ¡Para ti siempre! 🌼'
        ];
        
        magicButton.textContent = messages[clickCount % messages.length];
    }
    
    // Event listener para el botón mágico
    magicButton.addEventListener('click', function(e) {
        clickCount++;
        
        // Crear partículas en la posición del clic
        const rect = magicButton.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        createMagicParticles(x, y);
        
        // Diferentes efectos según el número de clics
        switch (clickCount) {
            case 1:
                // Primera sorpresa: mostrar mensaje personal (no autocerrar)
                setTimeout(() => {
                    personalSection.classList.add('show');
                }, 500);
                break;
                
            case 2:
                // Segunda sorpresa: hacer brillar las flores
                personalSection.classList.remove('show');
                setTimeout(() => {
                    makeFlowersGlow();
                }, 300);
                break;
                
            case 3:
                // Tercera sorpresa: lluvia de flores
                createFlowerRain();
                fireworkBurst(x, y);
                confettiBurst(3);
                break;
                
            case 4:
                // Cuarta sorpresa: texto arcoíris
                document.querySelector('.main-title').classList.add('rainbow-text');
                setTimeout(() => {
                    document.querySelector('.main-title').classList.remove('rainbow-text');
                }, 3000);
                confettiBurst(2);
                break;
                
            default:
                // Sorpresas aleatorias
                const randomEffect = Math.floor(Math.random() * 3);
                switch (randomEffect) {
                    case 0:
                        makeFlowersGlow();
                        break;
                    case 1:
                        createFlowerRain(); confettiBurst(2);
                        break;
                    case 2:
                        personalSection.classList.add('show');
                        // Mantener visible 15s si no se cierra manualmente
                        setTimeout(() => {
                            if (personalSection.classList.contains('show')) {
                                personalSection.classList.remove('show');
                            }
                        }, 15000);
                        break;
                }
        }
        
        // Actualizar mensaje del botón
        updateButtonMessage();
        
        // Efecto de vibración en el botón
        magicButton.style.animation = 'none';
        setTimeout(() => {
            magicButton.style.animation = '';
        }, 10);
    });
    
    // Cerrar mensaje personal al hacer clic fuera
    personalSection.addEventListener('click', function(e) {
        if (e.target === personalSection) {
            personalSection.classList.remove('show');
        }
    });
    // Cerrar mensaje con el botón de cierre
    if (closePersonalBtn) {
        closePersonalBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            personalSection.classList.remove('show');
        });
    }
    
    // Entregar ramo (bouquet) - Ramo en corazón con paletas
    function showBouquet() {
        const overlay = document.createElement('div');
        overlay.className = 'bouquet-overlay show';
        document.body.appendChild(overlay);

        // Wrap principal con paleta por defecto (seguir tema actual)
        const wrap = document.createElement('div');
        wrap.className = 'heart-wrap palette-' + (document.documentElement.classList.contains('theme-day') ? 'gold' : 'night');

        // Selector de paleta
        const switchBar = document.createElement('div');
        switchBar.className = 'palette-switch';
        ['gold','sunset','night','cream'].forEach((p, idx) => {
            const b = document.createElement('button');
            b.className = 'palette-btn' + (idx === 0 ? ' active' : '');
            b.setAttribute('data-p', p);
            b.title = p;
            b.addEventListener('click', (e) => {
                e.stopPropagation();
                wrap.classList.remove('palette-gold','palette-sunset','palette-night','palette-cream');
                wrap.classList.add('palette-' + p);
                switchBar.querySelectorAll('.palette-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
            });
            switchBar.appendChild(b);
        });

        // Contenedor del corazón
        const heart = document.createElement('div');
        heart.className = 'heart-container';

        // Outline de corazón simplificado
        const outline = document.createElement('div');
        outline.className = 'heart-outline';
        // Posiciones fijas para formar un corazón simple
        const heartPoints = [
            {x: 50, y: 20, emoji: '🌼'}, {x: 35, y: 15, emoji: '🍃'}, {x: 65, y: 15, emoji: '🍃'},
            {x: 25, y: 25, emoji: '🌼'}, {x: 75, y: 25, emoji: '🌼'}, {x: 15, y: 40, emoji: '🍃'},
            {x: 85, y: 40, emoji: '🍃'}, {x: 20, y: 55, emoji: '🌼'}, {x: 80, y: 55, emoji: '🌼'},
            {x: 30, y: 70, emoji: '🍃'}, {x: 70, y: 70, emoji: '🍃'}, {x: 40, y: 80, emoji: '🌼'},
            {x: 60, y: 80, emoji: '🌼'}, {x: 50, y: 90, emoji: '🍃'}
        ];
        heartPoints.forEach((point, i) => {
            const piece = document.createElement('div');
            piece.className = 'outline-piece';
            piece.textContent = point.emoji;
            piece.style.left = point.x + '%';
            piece.style.top = point.y + '%';
            piece.style.setProperty('--delay', (i * 0.1) + 's');
            outline.appendChild(piece);
        });

        // Centro: 3 girasoles
        const centers = document.createElement('div');
        centers.className = 'heart-centers';
        const imgSrc = 'assets/pngwing.com (1).png';
        for (let k = 0; k < 3; k++) {
            const img = document.createElement('img');
            img.alt = 'Girasol';
            img.src = imgSrc;
            centers.appendChild(img);
        }

        // Papel y lazo
        const paper = document.createElement('div');
        paper.className = 'heart-paper';
        const bow = document.createElement('div');
        bow.className = 'heart-bow';
        bow.textContent = '🎀';

        heart.appendChild(outline);
        heart.appendChild(centers);
        heart.appendChild(paper);
        heart.appendChild(bow);

        // Botón cerrar
        const btnClose = document.createElement('button');
        btnClose.className = 'overlay-close';
        btnClose.textContent = '✕';

        wrap.appendChild(switchBar);
        wrap.appendChild(heart);
        overlay.appendChild(wrap);
        overlay.appendChild(btnClose);

        // Efectos visuales suaves
        confettiBurst(2);
        fireworkBurst(window.innerWidth/2, window.innerHeight*0.32);
        const petals = ['🌼','🌻'];
        for (let i = 0; i < 18; i++) {
            setTimeout(() => {
                const p = document.createElement('div');
                p.className = 'petal-piece';
                p.textContent = petals[Math.floor(Math.random()*petals.length)];
                p.style.left = (Math.random()*100) + 'vw';
                p.style.setProperty('--dur', (5 + Math.random()*2.5) + 's');
                document.body.appendChild(p);
                setTimeout(() => p.remove(), 8000);
            }, i * 120);
        }

        const closeOverlay = () => { overlay.classList.remove('show'); setTimeout(() => overlay.remove(), 250); };
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });
        btnClose.addEventListener('click', (e) => { e.stopPropagation(); closeOverlay(); });
    }
    if (bouquetBtn) {
        bouquetBtn.addEventListener('click', showBouquet);
    }

    // Corazones flotantes periódicos
    function spawnHeart() {
        if (!heartsWrap) return;
        const heart = document.createElement('div');
        heart.className = 'heart-piece';
        heart.textContent = Math.random() > 0.5 ? '💛' : '🧡';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-20px';
        heartsWrap.appendChild(heart);
        setTimeout(() => heart.remove(), 6500);
    }
    setInterval(spawnHeart, 1200);

    // Efecto máquina de escribir para el mensaje principal
    const msgEl = document.querySelector('.romantic-message');
    if (msgEl) {
        const fullText = msgEl.textContent.trim();
        msgEl.textContent = '';
        msgEl.classList.add('typewriter');
        let idx = 0;
        const typeTimer = setInterval(() => {
            msgEl.textContent = fullText.slice(0, idx++);
            if (idx > fullText.length) {
                clearInterval(typeTimer);
                msgEl.classList.remove('typewriter');
            }
        }, 35);
    }

    // Efecto de entrada suave para las flores flotantes
    setTimeout(() => {
        floatingFlowers.forEach((flower, index) => {
            setTimeout(() => {
                flower.style.opacity = '0.7';
                flower.style.animation = `float ${8 + index * 2}s ease-in-out infinite`;
                flower.style.animationDelay = `${index * 0.5}s`;
            }, index * 1000);
        });
    }, 2000);
    
    // Efecto de paralaje suave en las flores principales
    window.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        flowers.forEach((el, index) => {
            const speed = (index + 1) * 1.2;
            const x = (mouseX - 0.5) * speed * 4;
            const y = (mouseY - 0.5) * speed * 2;
            if (el.classList.contains('sunflower')) {
                el.style.marginLeft = `${x}px`;
                el.style.marginBottom = `${y}px`;
            } else {
                el.style.transform = `translate(${x}px, ${y}px)`;
            }
        });
    });
    
    // Animación de entrada para el contenido principal
    setTimeout(() => {
        document.querySelector('.main-content').style.opacity = '1';
        document.querySelector('.main-content').style.transform = 'translateY(0)';
    }, 500);
    
    // Efecto de brillo en el corazón al pasar el mouse
    const heart = document.querySelector('.heart');
    heart.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        this.style.transform = 'scale(1.3)';
    });
    
    heart.addEventListener('mouseleave', function() {
        this.style.textShadow = '';
        this.style.transform = 'scale(1)';
    });
    
    // Mensaje de bienvenida después de cargar
    setTimeout(() => {
        console.log('💛 ¡Bienvenida a tu jardín de flores amarillas! 💛');
        console.log('🌻 Haz clic en el botón mágico para sorpresas especiales 🌻');
    }, 1000);
    
    // Efecto de respiración en las flores cada cierto tiempo
    setInterval(() => {
        const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
        randomFlower.style.animation = 'none';
        setTimeout(() => {
            randomFlower.style.animation = 'sway 4s ease-in-out infinite, flowerGlow 2s ease-in-out';
            setTimeout(() => {
                randomFlower.style.animation = 'sway 4s ease-in-out infinite';
            }, 2000);
        }, 10);
    }, 8000);
    
    // Inicializar opacidad del contenido principal
    document.querySelector('.main-content').style.opacity = '0';
    document.querySelector('.main-content').style.transform = 'translateY(20px)';
    document.querySelector('.main-content').style.transition = 'all 1s ease-out';
});
