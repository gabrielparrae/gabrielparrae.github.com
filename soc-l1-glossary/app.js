/**
 * ============================================================
 *  SOC L1 Master Glossary — Aplicación Principal
 * ============================================================
 *  Vanilla JS · ES6+ · Sin dependencias externas
 *  Autor: SOC L1 Training Team
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ──────────────────────────────────────────────
  //  1. REFERENCIAS AL DOM
  // ──────────────────────────────────────────────
  const sidebar        = document.querySelector('.sidebar');
  const navLinks       = document.querySelectorAll('.nav-link');
  const navSublinks    = document.querySelectorAll('.nav-sublink');
  const allNavItems    = document.querySelectorAll('.nav-link, .nav-sublink');
  const sections       = document.querySelectorAll('.section');
  const searchInput    = document.querySelector('.search-input');
  const topbar         = document.querySelector('.topbar');
  const progressBar    = document.querySelector('.progress-bar');
  const backToTopBtn   = document.querySelector('.back-to-top');
  const mobileToggle   = document.querySelector('.mobile-toggle');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  const codeBlocks     = document.querySelectorAll('.code-block');
  const tocContainer   = document.querySelector('.toc-container');

  // IDs de las secciones principales y sub-secciones
  const SECTION_IDS = [
    'introduccion',
    'seccion-1', 'seccion-2', 'seccion-3', 'seccion-4',
    'seccion-5', 'seccion-6', 'seccion-7', 'seccion-8',
    'seccion-9', 'seccion-10', 'seccion-11', 'seccion-12'
  ];

  const STORAGE_KEY = 'soc-glossary-progress';

  // ──────────────────────────────────────────────
  //  2. UTILIDADES
  // ──────────────────────────────────────────────

  /**
   * Debounce — retrasa la ejecución hasta que el usuario
   * deje de escribir durante `delay` milisegundos.
   */
  const debounce = (fn, delay = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  /**
   * Desplazamiento suave hacia un elemento del DOM.
   * Compensa la altura del topbar fijo.
   */
  const scrollToElement = (el, offset = 80) => {
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  /**
   * Escapa caracteres HTML para prevenir XSS en snippets de búsqueda.
   */
  const escapeHTML = (str) =>
    str.replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/"/g, '&quot;');

  /**
   * Extrae el texto plano de un elemento, excluyendo botones.
   */
  const getCleanText = (el) => {
    const clone = el.cloneNode(true);
    clone.querySelectorAll('button, .copy-btn').forEach(b => b.remove());
    return clone.textContent.trim();
  };

  // ──────────────────────────────────────────────
  //  3. NAVEGACIÓN CON SCROLL SUAVE
  // ──────────────────────────────────────────────

  /** Maneja el clic en cualquier enlace de navegación */
  const handleNavClick = (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    const sectionId = link.dataset.section;
    const target = document.getElementById(sectionId);

    if (target) {
      scrollToElement(target);
      // En móvil cerramos el sidebar tras navegar
      closeMobileSidebar();
    }
  };

  // Registrar listeners en todos los enlaces de navegación
  allNavItems.forEach(link => link.addEventListener('click', handleNavClick));

  // ──────────────────────────────────────────────
  //  4. SCROLL SPY — SEGUIMIENTO DE SECCIÓN ACTIVA
  // ──────────────────────────────────────────────

  /** Conjunto de secciones actualmente visibles */
  const visibleSections = new Set();

  /**
   * Actualiza las clases .active y .active-parent
   * en la barra lateral según la sección visible.
   */
  const updateActiveNav = () => {
    // Encontrar la sección visible más cercana al top
    let currentId = null;
    let minDistance = Infinity;

    visibleSections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const dist = Math.abs(el.getBoundingClientRect().top);
        if (dist < minDistance) {
          minDistance = dist;
          currentId = id;
        }
      }
    });

    if (!currentId) return;

    // Limpiar estados previos
    allNavItems.forEach(link => {
      link.classList.remove('active');
    });
    navLinks.forEach(link => {
      link.classList.remove('active-parent');
    });

    // Activar el enlace correspondiente
    const activeLink = document.querySelector(
      `.nav-link[data-section="${currentId}"], .nav-sublink[data-section="${currentId}"]`
    );

    if (activeLink) {
      activeLink.classList.add('active');

      // Si es una sub-sección, activar también el padre
      if (activeLink.classList.contains('nav-sublink')) {
        const parentLink = activeLink.closest('.nav-group')?.querySelector('.nav-link')
          || findParentNavLink(currentId);
        if (parentLink) {
          parentLink.classList.add('active-parent');
        }
      }

      // Asegurar que el enlace activo sea visible en el sidebar
      activeLink.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' });
    }
  };

  /**
   * Busca el enlace padre de una sub-sección por convención de ID.
   * Ej: 'sec-3-2' → padre 'seccion-3'
   */
  const findParentNavLink = (subId) => {
    const match = subId.match(/^sec-(\d+)/);
    if (match) {
      const parentId = `seccion-${match[1]}`;
      return document.querySelector(`.nav-link[data-section="${parentId}"]`);
    }
    return null;
  };

  // Observer para el scroll spy
  const scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          visibleSections.add(id);
        } else {
          visibleSections.delete(id);
        }
      });
      updateActiveNav();
    },
    {
      rootMargin: '-80px 0px -40% 0px',
      threshold: [0, 0.25]
    }
  );

  // Observar todas las secciones y sub-secciones
  sections.forEach(section => {
    if (section.id) {
      scrollSpyObserver.observe(section);
    }
  });

  // También observar sub-secciones (elementos con IDs tipo sec-X-Y)
  document.querySelectorAll('[id^="sec-"]').forEach(sub => {
    scrollSpyObserver.observe(sub);
  });

  // ──────────────────────────────────────────────
  //  5. BARRA DE PROGRESO DE LECTURA
  // ──────────────────────────────────────────────

  const updateProgressBar = () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  };

  // ──────────────────────────────────────────────
  //  6. BOTÓN "VOLVER ARRIBA"
  // ──────────────────────────────────────────────

  const handleBackToTop = () => {
    if (!backToTopBtn) return;

    // Mostrar/ocultar según posición de scroll
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ──────────────────────────────────────────────
  //  7. MENÚ MÓVIL (SIDEBAR TOGGLE)
  // ──────────────────────────────────────────────

  const openMobileSidebar = () => {
    if (!sidebar) return;
    sidebar.classList.add('sidebar-open');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
  };

  const closeMobileSidebar = () => {
    if (!sidebar) return;
    sidebar.classList.remove('sidebar-open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (sidebar.classList.contains('sidebar-open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileSidebar);
  }

  // ──────────────────────────────────────────────
  //  8. BÚSQUEDA EN TIEMPO REAL
  // ──────────────────────────────────────────────

  let searchResultsContainer = null;

  /** Crea el contenedor de resultados de búsqueda si no existe */
  const ensureSearchContainer = () => {
    if (searchResultsContainer) return searchResultsContainer;

    searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'search-results';
    searchResultsContainer.setAttribute('role', 'listbox');
    searchResultsContainer.setAttribute('aria-label', 'Resultados de búsqueda');

    // Insertar justo después del input de búsqueda
    const searchWrapper = searchInput?.parentElement;
    if (searchWrapper) {
      searchWrapper.style.position = 'relative';
      searchWrapper.appendChild(searchResultsContainer);
    } else {
      topbar?.appendChild(searchResultsContainer);
    }

    return searchResultsContainer;
  };

  /**
   * Busca coincidencias en el texto de todas las secciones.
   * Devuelve un arreglo de objetos { sectionId, title, snippet }.
   */
  const searchContent = (query) => {
    const results = [];
    const lowerQuery = query.toLowerCase();

    sections.forEach(section => {
      const id = section.id;
      if (!id) return;

      // Obtener título de la sección
      const heading = section.querySelector('h1, h2, h3, h4');
      const title = heading ? heading.textContent.trim() : id;

      // Obtener texto completo de la sección
      const fullText = section.textContent;
      const lowerText = fullText.toLowerCase();
      const index = lowerText.indexOf(lowerQuery);

      if (index === -1) return;

      // Extraer snippet con contexto alrededor de la coincidencia
      const snippetStart = Math.max(0, index - 40);
      const snippetEnd = Math.min(fullText.length, index + query.length + 60);
      let snippet = fullText.slice(snippetStart, snippetEnd).trim();

      // Añadir elipsis si el snippet no empieza/termina en los límites
      if (snippetStart > 0) snippet = '…' + snippet;
      if (snippetEnd < fullText.length) snippet += '…';

      results.push({ sectionId: id, title, snippet, query });
    });

    return results;
  };

  /**
   * Resalta la coincidencia dentro del snippet de texto.
   */
  const highlightMatch = (text, query) => {
    const escaped = escapeHTML(text);
    const escapedQuery = escapeHTML(query);
    const regex = new RegExp(`(${escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
  };

  /**
   * Renderiza los resultados de búsqueda en el contenedor.
   */
  const renderSearchResults = (results) => {
    const container = ensureSearchContainer();

    if (results.length === 0) {
      container.innerHTML = `
        <div class="search-no-results">
          <span>🔍</span> No se encontraron resultados
        </div>`;
      container.classList.add('active');
      return;
    }

    // Limitar a 10 resultados para rendimiento
    const limited = results.slice(0, 10);

    container.innerHTML = limited.map((r, i) => `
      <div class="search-result-item ${i === 0 ? 'selected' : ''}"
           data-section="${r.sectionId}"
           role="option"
           tabindex="-1">
        <div class="search-result-title">${escapeHTML(r.title)}</div>
        <div class="search-result-snippet">${highlightMatch(r.snippet, r.query)}</div>
      </div>
    `).join('');

    container.classList.add('active');

    // Registrar clics en cada resultado
    container.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const target = document.getElementById(item.dataset.section);
        if (target) {
          scrollToElement(target);
          closeSearch();
        }
      });
    });
  };

  /** Cierra el dropdown de resultados de búsqueda */
  const closeSearch = () => {
    if (searchResultsContainer) {
      searchResultsContainer.classList.remove('active');
      searchResultsContainer.innerHTML = '';
    }
  };

  /** Ejecuta la búsqueda con el valor actual del input */
  const performSearch = () => {
    if (!searchInput) return;
    const query = searchInput.value.trim();

    if (query.length < 2) {
      closeSearch();
      return;
    }

    const results = searchContent(query);
    renderSearchResults(results);
  };

  // Búsqueda con debounce de 300ms
  const debouncedSearch = debounce(performSearch, 300);

  if (searchInput) {
    searchInput.addEventListener('input', debouncedSearch);

    // Navegación con teclado dentro de los resultados
    searchInput.addEventListener('keydown', (e) => {
      if (!searchResultsContainer || !searchResultsContainer.classList.contains('active')) {
        if (e.key === 'Escape') {
          searchInput.blur();
        }
        return;
      }

      const items = searchResultsContainer.querySelectorAll('.search-result-item');
      const currentIndex = [...items].findIndex(i => i.classList.contains('selected'));

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          const next = Math.min(currentIndex + 1, items.length - 1);
          items.forEach(i => i.classList.remove('selected'));
          items[next]?.classList.add('selected');
          items[next]?.scrollIntoView({ block: 'nearest' });
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const prev = Math.max(currentIndex - 1, 0);
          items.forEach(i => i.classList.remove('selected'));
          items[prev]?.classList.add('selected');
          items[prev]?.scrollIntoView({ block: 'nearest' });
          break;
        }
        case 'Enter': {
          e.preventDefault();
          const selected = searchResultsContainer.querySelector('.search-result-item.selected');
          if (selected) {
            const target = document.getElementById(selected.dataset.section);
            if (target) {
              scrollToElement(target);
              closeSearch();
              searchInput.blur();
            }
          }
          break;
        }
        case 'Escape': {
          e.preventDefault();
          closeSearch();
          searchInput.blur();
          break;
        }
      }
    });

    // Cerrar resultados cuando se pierde el foco (con delay para permitir clics)
    searchInput.addEventListener('blur', () => {
      setTimeout(closeSearch, 200);
    });
  }

  // ──────────────────────────────────────────────
  //  9. COPIAR BLOQUES DE CÓDIGO
  // ──────────────────────────────────────────────

  codeBlocks.forEach(block => {
    const copyBtn = block.querySelector('.copy-btn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      try {
        // Extraer texto del bloque sin incluir el texto del botón
        const textToCopy = getCleanText(block);

        // Intentar usar la API moderna del portapapeles
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback para contextos no seguros (HTTP)
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.cssText = 'position:fixed;opacity:0;left:-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        // Feedback visual al usuario
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '¡Copiado!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
          copyBtn.textContent = originalText || 'Copiar';
          copyBtn.classList.remove('copied');
        }, 2000);

      } catch (err) {
        console.error('Error al copiar:', err);
        copyBtn.textContent = 'Error';
        setTimeout(() => {
          copyBtn.textContent = 'Copiar';
        }, 2000);
      }
    });
  });

  // ──────────────────────────────────────────────
  //  10. ANIMACIÓN DE REVELACIÓN DE SECCIONES
  // ──────────────────────────────────────────────

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Una vez visible, dejar de observar (no se oculta de nuevo)
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observar secciones y tarjetas para animaciones de entrada
  const revealTargets = document.querySelectorAll('.section, .card');
  revealTargets.forEach(el => revealObserver.observe(el));

  // ──────────────────────────────────────────────
  //  11. ATAJOS DE TECLADO
  // ──────────────────────────────────────────────

  document.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement?.tagName.toLowerCase();
    const isInputFocused = ['input', 'textarea', 'select'].includes(activeTag);

    // Ctrl+K → enfocar búsqueda (funciona siempre)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput?.focus();
      searchInput?.select();
      return;
    }

    // "/" → enfocar búsqueda (solo si no estamos en un input)
    if (e.key === '/' && !isInputFocused) {
      e.preventDefault();
      searchInput?.focus();
      searchInput?.select();
      return;
    }

    // Escape → cerrar resultados de búsqueda y sidebar móvil
    if (e.key === 'Escape') {
      closeSearch();
      closeMobileSidebar();
      if (isInputFocused) {
        document.activeElement.blur();
      }
    }
  });

  // ──────────────────────────────────────────────
  //  12. TABLA DE CONTENIDOS DINÁMICA
  // ──────────────────────────────────────────────

  const buildTableOfContents = () => {
    if (!tocContainer) return;

    const headings = document.querySelectorAll('.section h2, .section h3');
    if (headings.length === 0) return;

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach(heading => {
      // Asegurar que el heading tenga un ID para enlazar
      if (!heading.id) {
        heading.id = heading.textContent
          .trim()
          .toLowerCase()
          .replace(/[^\w\sáéíóúñü-]/g, '')
          .replace(/\s+/g, '-')
          .slice(0, 60);
      }

      const li = document.createElement('li');
      li.className = heading.tagName === 'H3' ? 'toc-item toc-sub' : 'toc-item';

      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.className = 'toc-link';
      link.textContent = heading.textContent.trim();
      link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToElement(heading);
      });

      li.appendChild(link);
      tocList.appendChild(li);
    });

    tocContainer.innerHTML = '';
    const tocTitle = document.createElement('h4');
    tocTitle.className = 'toc-title';
    tocTitle.textContent = 'Contenido de esta sección';
    tocContainer.appendChild(tocTitle);
    tocContainer.appendChild(tocList);
  };

  buildTableOfContents();

  // ──────────────────────────────────────────────
  //  13. PROGRESO CON LOCAL STORAGE
  // ──────────────────────────────────────────────

  /** Carga el progreso guardado desde localStorage */
  const loadProgress = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : { visitedSections: [] };
    } catch {
      return { visitedSections: [] };
    }
  };

  /** Guarda el progreso actual en localStorage */
  const saveProgress = (progressData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
    } catch (err) {
      console.warn('No se pudo guardar el progreso:', err);
    }
  };

  /** Calcula y muestra el porcentaje de completado */
  const updateCompletionDisplay = () => {
    const progress = loadProgress();
    const totalSections = SECTION_IDS.length;
    const visited = progress.visitedSections.length;
    const percentage = totalSections > 0
      ? Math.round((visited / totalSections) * 100)
      : 0;

    // Buscar o crear el elemento de progreso en el footer del sidebar
    let progressDisplay = document.querySelector('.sidebar-progress');
    if (!progressDisplay) {
      progressDisplay = document.createElement('div');
      progressDisplay.className = 'sidebar-progress';
      sidebar?.appendChild(progressDisplay);
    }

    progressDisplay.innerHTML = `
      <div class="progress-label">
        <span>📖 Progreso de lectura</span>
        <span class="progress-percent">${percentage}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${percentage}%"></div>
      </div>
      <div class="progress-detail">${visited} de ${totalSections} secciones</div>
    `;
  };

  /**
   * Observer para rastrear qué secciones principales ha visitado el usuario.
   * Una sección se marca como "visitada" cuando el 30% de ella entra en viewport.
   */
  const progressObserver = new IntersectionObserver(
    (entries) => {
      const progress = loadProgress();
      let changed = false;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (SECTION_IDS.includes(id) && !progress.visitedSections.includes(id)) {
            progress.visitedSections.push(id);
            changed = true;
          }
        }
      });

      if (changed) {
        saveProgress(progress);
        updateCompletionDisplay();
      }
    },
    { threshold: 0.3 }
  );

  // Observar solo las secciones principales para el progreso
  SECTION_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) progressObserver.observe(el);
  });

  // Inicializar la visualización del progreso
  updateCompletionDisplay();

  // ──────────────────────────────────────────────
  //  14. LISTENER DE SCROLL UNIFICADO
  // ──────────────────────────────────────────────

  /**
   * Usamos requestAnimationFrame para optimizar las actualizaciones
   * durante el scroll y evitar janking (tirones visuales).
   */
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgressBar();
        handleBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Ejecutar una vez al inicio para setear estado inicial
  updateProgressBar();
  handleBackToTop();

  // ──────────────────────────────────────────────
  //  15. CERRAR MENÚS AL REDIMENSIONAR
  // ──────────────────────────────────────────────

  window.addEventListener('resize', debounce(() => {
    // Si la pantalla pasa a escritorio, cerrar sidebar móvil
    if (window.innerWidth > 1024) {
      closeMobileSidebar();
    }
  }, 150));

  // ──────────────────────────────────────────────
  //  16. ESTILOS DINÁMICOS PARA BÚSQUEDA
  // ──────────────────────────────────────────────

  /**
   * Inyecta los estilos CSS necesarios para el contenedor
   * de resultados de búsqueda creado dinámicamente.
   */
  const injectSearchStyles = () => {
    if (document.getElementById('search-dynamic-styles')) return;

    const style = document.createElement('style');
    style.id = 'search-dynamic-styles';
    style.textContent = `
      /* Contenedor de resultados de búsqueda */
      .search-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(15, 20, 35, 0.98);
        border: 1px solid rgba(0, 255, 170, 0.15);
        border-radius: 0 0 12px 12px;
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
      }

      .search-results.active {
        display: block;
        animation: searchSlideIn 0.2s ease-out;
      }

      @keyframes searchSlideIn {
        from { opacity: 0; transform: translateY(-8px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      .search-result-item {
        padding: 12px 16px;
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        transition: background 0.15s ease;
      }

      .search-result-item:hover,
      .search-result-item.selected {
        background: rgba(0, 255, 170, 0.08);
      }

      .search-result-item:last-child {
        border-bottom: none;
      }

      .search-result-title {
        font-size: 0.85rem;
        font-weight: 600;
        color: #00ffaa;
        margin-bottom: 4px;
      }

      .search-result-snippet {
        font-size: 0.78rem;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .search-result-snippet mark {
        background: rgba(0, 255, 170, 0.25);
        color: #00ffaa;
        padding: 1px 3px;
        border-radius: 3px;
      }

      .search-no-results {
        padding: 20px;
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
        font-size: 0.85rem;
      }

      /* Progreso en el sidebar */
      .sidebar-progress {
        padding: 16px 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        margin-top: auto;
      }

      .progress-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 8px;
      }

      .progress-percent {
        color: #00ffaa;
        font-weight: 700;
        font-size: 0.85rem;
      }

      .progress-track {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 4px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #00ffaa, #00d4ff);
        border-radius: 4px;
        transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .progress-detail {
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.35);
        margin-top: 6px;
        text-align: center;
      }

      /* Tabla de contenidos */
      .toc-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .toc-item {
        margin-bottom: 4px;
      }

      .toc-item.toc-sub {
        padding-left: 16px;
      }

      .toc-link {
        display: block;
        padding: 6px 12px;
        font-size: 0.82rem;
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        border-radius: 6px;
        transition: all 0.2s ease;
        border-left: 2px solid transparent;
      }

      .toc-link:hover {
        color: #00ffaa;
        background: rgba(0, 255, 170, 0.06);
        border-left-color: #00ffaa;
      }

      .toc-title {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.5);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 12px;
        font-weight: 600;
      }

      /* Botón copiado – estado feedback */
      .copy-btn.copied {
        background: rgba(0, 255, 170, 0.2) !important;
        color: #00ffaa !important;
      }

      /* Resultados scroll personalizado */
      .search-results::-webkit-scrollbar {
        width: 6px;
      }
      .search-results::-webkit-scrollbar-track {
        background: transparent;
      }
      .search-results::-webkit-scrollbar-thumb {
        background: rgba(0, 255, 170, 0.2);
        border-radius: 3px;
      }
    `;

    document.head.appendChild(style);
  };

  injectSearchStyles();

  // ──────────────────────────────────────────────
  //  17. MANEJO DE HASH EN URL
  // ──────────────────────────────────────────────

  /**
   * Si la URL tiene un hash (#seccion-3), desplazarse
   * automáticamente a esa sección al cargar la página.
   */
  const handleInitialHash = () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Pequeño delay para que el DOM esté completamente renderizado
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          scrollToElement(target);
        }
      }, 100);
    }
  };

  handleInitialHash();

  // ──────────────────────────────────────────────
  //  18. ACCESIBILIDAD — ATRIBUTOS ARIA
  // ──────────────────────────────────────────────

  // Marcar la navegación como tal para lectores de pantalla
  if (sidebar) {
    sidebar.setAttribute('role', 'navigation');
    sidebar.setAttribute('aria-label', 'Navegación principal del glosario');
  }

  // Marcar el botón de búsqueda
  if (searchInput) {
    searchInput.setAttribute('role', 'combobox');
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.setAttribute('aria-label', 'Buscar en el glosario (Ctrl+K)');
    searchInput.setAttribute('placeholder',
      searchInput.getAttribute('placeholder') || 'Buscar… (Ctrl+K)');
  }

  // Actualizar aria-expanded cuando se abren/cierran resultados
  const originalEnsure = ensureSearchContainer;
  const updateAriaExpanded = () => {
    if (searchInput && searchResultsContainer) {
      const isOpen = searchResultsContainer.classList.contains('active');
      searchInput.setAttribute('aria-expanded', String(isOpen));
    }
  };

  // Observar cambios en la clase del contenedor de resultados
  if (typeof MutationObserver !== 'undefined' && searchResultsContainer) {
    const ariaObserver = new MutationObserver(updateAriaExpanded);
    ariaObserver.observe(searchResultsContainer, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // ──────────────────────────────────────────────
  //  19. LOG DE INICIALIZACIÓN
  // ──────────────────────────────────────────────

  console.log(
    '%c🛡️ SOC L1 Master Glossary — Cargado correctamente',
    'color: #00ffaa; font-size: 14px; font-weight: bold;'
  );
  console.log(
    `%c   Secciones: ${sections.length} | Links: ${allNavItems.length} | Bloques de código: ${codeBlocks.length}`,
    'color: rgba(255,255,255,0.5); font-size: 11px;'
  );
});
