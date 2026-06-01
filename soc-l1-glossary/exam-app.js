/**
 * ============================================================================
 * 🛡️ SOC L1 — Aplicación de Examen Interactivo
 * ============================================================================
 * 
 * Aplicación completa de examen para entrenamiento de Analista SOC Nivel 1.
 * Requiere que `questionsBank1` y `questionsBank2` estén definidos como 
 * arrays globales antes de cargar este script.
 * 
 * Características:
 *  - Múltiples modos de examen (completo, por sección, aleatorio, por dificultad)
 *  - Temporizador configurable con advertencias visuales
 *  - Retroalimentación inmediata con explicaciones
 *  - Panel de navegación de preguntas
 *  - Persistencia de estado y puntuaciones en localStorage
 *  - Navegación por teclado completa
 *  - Dashboard de estadísticas
 *  - Exportación de resultados
 *  - Animaciones y efectos visuales
 *  - Diseño responsivo con tema cyberseguridad oscuro
 *  - Inyección dinámica de CSS
 * 
 * @author SOC L1 Training Platform
 * @version 1.0.0
 */

// ============================================================================
// SECCIÓN 0: INYECCIÓN DINÁMICA DE CSS
// ============================================================================

(function inyectarEstilosExamen() {
    // Crear elemento <style> e inyectar todos los estilos del examen
    const styleEl = document.createElement('style');
    styleEl.id = 'exam-dynamic-styles';
    styleEl.textContent = `
    /* ========================================================================
       GOOGLE FONTS — Inter & JetBrains Mono (ya cargadas en HTML principal)
       ======================================================================== */

    /* ========================================================================
       VARIABLES CSS DEL EXAMEN
       ======================================================================== */
    :root {
        --exam-bg-primary: #0a0e17;
        --exam-bg-secondary: #0f1623;
        --exam-bg-card: rgba(15, 22, 35, 0.85);
        --exam-bg-card-hover: rgba(20, 30, 50, 0.95);
        --exam-accent-cyan: #00d4ff;
        --exam-accent-cyan-glow: rgba(0, 212, 255, 0.3);
        --exam-green: #00ff88;
        --exam-green-glow: rgba(0, 255, 136, 0.25);
        --exam-red: #ff4757;
        --exam-red-glow: rgba(255, 71, 87, 0.25);
        --exam-amber: #f59e0b;
        --exam-amber-glow: rgba(245, 158, 11, 0.25);
        --exam-purple: #a855f7;
        --exam-purple-glow: rgba(168, 85, 247, 0.25);
        --exam-text-primary: #e2e8f0;
        --exam-text-secondary: #94a3b8;
        --exam-text-muted: #64748b;
        --exam-border: rgba(0, 212, 255, 0.12);
        --exam-glass-bg: rgba(15, 22, 35, 0.7);
        --exam-glass-border: rgba(0, 212, 255, 0.15);
        --exam-glass-blur: 16px;
        --exam-radius: 16px;
        --exam-radius-sm: 10px;
        --exam-radius-xs: 6px;
        --exam-font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        --exam-font-mono: 'JetBrains Mono', 'Fira Code', monospace;
        --exam-transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* ========================================================================
       ANIMACIONES KEYFRAMES
       ======================================================================== */
    @keyframes examFadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes examSlideInRight {
        from { opacity: 0; transform: translateX(60px); }
        to   { opacity: 1; transform: translateX(0); }
    }

    @keyframes examSlideOutLeft {
        from { opacity: 1; transform: translateX(0); }
        to   { opacity: 0; transform: translateX(-60px); }
    }

    @keyframes examPulse {
        0%, 100% { opacity: 1; }
        50%      { opacity: 0.5; }
    }

    @keyframes examPulseGlow {
        0%, 100% { box-shadow: 0 0 5px var(--exam-accent-cyan-glow); }
        50%      { box-shadow: 0 0 25px var(--exam-accent-cyan-glow), 0 0 50px var(--exam-accent-cyan-glow); }
    }

    @keyframes examCountUp {
        from { opacity: 0; transform: scale(0.5); }
        to   { opacity: 1; transform: scale(1); }
    }

    @keyframes examShakeError {
        0%, 100% { transform: translateX(0); }
        20%      { transform: translateX(-8px); }
        40%      { transform: translateX(8px); }
        60%      { transform: translateX(-5px); }
        80%      { transform: translateX(5px); }
    }

    @keyframes examConfetti {
        0%   { opacity: 1; transform: translateY(0) rotate(0deg) scale(1); }
        50%  { opacity: 0.8; }
        100% { opacity: 0; transform: translateY(-100px) rotate(720deg) scale(0); }
    }

    @keyframes examSparkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50%      { opacity: 1; transform: scale(1); }
    }

    @keyframes examTimerWarn {
        0%, 100% { color: var(--exam-red); text-shadow: 0 0 10px var(--exam-red-glow); }
        50%      { color: #ff6b7a; text-shadow: 0 0 20px var(--exam-red-glow), 0 0 40px var(--exam-red-glow); }
    }

    @keyframes examScoreCircleFill {
        from { stroke-dashoffset: 314; }
    }

    @keyframes examProgressStripe {
        0%   { background-position: 0 0; }
        100% { background-position: 40px 0; }
    }

    @keyframes examBounceIn {
        0%   { opacity: 0; transform: scale(0.3); }
        50%  { opacity: 1; transform: scale(1.05); }
        70%  { transform: scale(0.95); }
        100% { transform: scale(1); }
    }

    @keyframes examGlowPulse {
        0%, 100% { border-color: var(--exam-accent-cyan); box-shadow: 0 0 15px var(--exam-accent-cyan-glow); }
        50%      { border-color: var(--exam-purple); box-shadow: 0 0 15px var(--exam-purple-glow); }
    }

    /* ========================================================================
       CONTENEDOR PRINCIPAL DEL EXAMEN
       ======================================================================== */
    #examContainer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--exam-bg-primary);
        z-index: 10000;
        overflow-y: auto;
        overflow-x: hidden;
        font-family: var(--exam-font-body);
        color: var(--exam-text-primary);
        display: none;
    }

    #examContainer.active {
        display: block;
    }

    /* ========================================================================
       PANTALLA DE INICIO — SELECCIÓN DE MODO
       ======================================================================== */
    #startScreen {
        min-height: 100vh;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: examFadeInUp 0.6s ease-out;
    }

    .exam-start-header {
        text-align: center;
        margin-bottom: 40px;
    }

    .exam-start-header h1 {
        font-size: 2.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--exam-accent-cyan), var(--exam-purple));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 8px;
    }

    .exam-start-header p {
        color: var(--exam-text-secondary);
        font-size: 1.1rem;
    }

    /* Panel de estadísticas */
    .exam-stats-dashboard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        width: 100%;
        max-width: 800px;
        margin-bottom: 40px;
    }

    .exam-stat-card {
        background: var(--exam-glass-bg);
        backdrop-filter: blur(var(--exam-glass-blur));
        -webkit-backdrop-filter: blur(var(--exam-glass-blur));
        border: 1px solid var(--exam-glass-border);
        border-radius: var(--exam-radius-sm);
        padding: 20px 16px;
        text-align: center;
        animation: examFadeInUp 0.5s ease-out both;
    }

    .exam-stat-card:nth-child(1) { animation-delay: 0.1s; }
    .exam-stat-card:nth-child(2) { animation-delay: 0.15s; }
    .exam-stat-card:nth-child(3) { animation-delay: 0.2s; }
    .exam-stat-card:nth-child(4) { animation-delay: 0.25s; }

    .exam-stat-value {
        font-size: 1.8rem;
        font-weight: 800;
        color: var(--exam-accent-cyan);
        font-family: var(--exam-font-mono);
    }

    .exam-stat-label {
        font-size: 0.75rem;
        color: var(--exam-text-muted);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 4px;
    }

    /* Cuadrícula de modos de examen */
    .exam-modes-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        width: 100%;
        max-width: 900px;
        margin-bottom: 30px;
    }

    .exam-mode-card {
        background: var(--exam-glass-bg);
        backdrop-filter: blur(var(--exam-glass-blur));
        -webkit-backdrop-filter: blur(var(--exam-glass-blur));
        border: 1px solid var(--exam-glass-border);
        border-radius: var(--exam-radius);
        padding: 28px 20px;
        text-align: center;
        cursor: pointer;
        transition: all var(--exam-transition);
        position: relative;
        overflow: hidden;
        animation: examFadeInUp 0.5s ease-out both;
    }

    .exam-mode-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--exam-accent-cyan), var(--exam-purple));
        opacity: 0;
        transition: opacity var(--exam-transition);
    }

    .exam-mode-card:hover {
        transform: translateY(-4px);
        border-color: var(--exam-accent-cyan);
        box-shadow: 0 8px 32px var(--exam-accent-cyan-glow);
        background: var(--exam-bg-card-hover);
    }

    .exam-mode-card:hover::before { opacity: 1; }

    .exam-mode-card .mode-icon {
        font-size: 2rem;
        margin-bottom: 12px;
        display: block;
    }

    .exam-mode-card .mode-title {
        font-size: 1rem;
        font-weight: 700;
        color: var(--exam-text-primary);
        margin-bottom: 6px;
    }

    .exam-mode-card .mode-desc {
        font-size: 0.8rem;
        color: var(--exam-text-muted);
    }

    .exam-mode-card .mode-badge {
        display: inline-block;
        margin-top: 10px;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 600;
        font-family: var(--exam-font-mono);
        background: rgba(0, 212, 255, 0.1);
        color: var(--exam-accent-cyan);
        border: 1px solid rgba(0, 212, 255, 0.2);
    }

    /* Secciones como botones */
    .exam-section-buttons {
        display: none;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        width: 100%;
        max-width: 900px;
        margin-top: 20px;
        animation: examFadeInUp 0.4s ease-out;
    }

    .exam-section-buttons.visible { display: flex; }

    .exam-section-btn {
        background: var(--exam-glass-bg);
        border: 1px solid var(--exam-glass-border);
        border-radius: var(--exam-radius-sm);
        padding: 12px 20px;
        color: var(--exam-text-primary);
        cursor: pointer;
        font-family: var(--exam-font-body);
        font-size: 0.85rem;
        font-weight: 500;
        transition: all var(--exam-transition);
    }

    .exam-section-btn:hover {
        border-color: var(--exam-accent-cyan);
        background: rgba(0, 212, 255, 0.08);
        transform: translateY(-2px);
    }

    .exam-section-btn .section-count {
        display: block;
        font-size: 0.7rem;
        color: var(--exam-text-muted);
        font-family: var(--exam-font-mono);
        margin-top: 3px;
    }

    /* Diálogo de reanudar examen */
    .exam-resume-dialog {
        background: var(--exam-glass-bg);
        backdrop-filter: blur(var(--exam-glass-blur));
        border: 1px solid var(--exam-amber);
        border-radius: var(--exam-radius);
        padding: 24px;
        margin-bottom: 30px;
        max-width: 500px;
        text-align: center;
        animation: examGlowPulse 3s infinite;
    }

    .exam-resume-dialog h3 {
        color: var(--exam-amber);
        margin-bottom: 10px;
    }

    .exam-resume-dialog p {
        color: var(--exam-text-secondary);
        margin-bottom: 16px;
        font-size: 0.9rem;
    }

    .exam-resume-dialog .resume-btns {
        display: flex;
        gap: 12px;
        justify-content: center;
    }

    /* ========================================================================
       PANTALLA DE EXAMEN ACTIVO
       ======================================================================== */
    #examScreen {
        display: none;
        min-height: 100vh;
        padding-bottom: 100px;
    }

    #examScreen.active { display: block; }

    /* Barra superior del examen */
    .exam-topbar {
        position: sticky;
        top: 0;
        z-index: 100;
        background: rgba(10, 14, 23, 0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--exam-border);
        padding: 12px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    }

    .exam-topbar-left {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .exam-quit-btn {
        background: none;
        border: 1px solid var(--exam-red);
        color: var(--exam-red);
        border-radius: var(--exam-radius-xs);
        padding: 6px 14px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: all var(--exam-transition);
        font-family: var(--exam-font-body);
    }

    .exam-quit-btn:hover {
        background: var(--exam-red);
        color: #fff;
    }

    .exam-question-counter {
        font-family: var(--exam-font-mono);
        font-size: 0.9rem;
        color: var(--exam-text-secondary);
    }

    .exam-question-counter strong {
        color: var(--exam-accent-cyan);
    }

    .exam-topbar-center {
        flex: 1;
        max-width: 400px;
    }

    /* Barra de progreso del examen */
    .exam-progress-bar {
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 3px;
        overflow: hidden;
    }

    .exam-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--exam-accent-cyan), var(--exam-purple));
        border-radius: 3px;
        transition: width 0.5s ease;
        position: relative;
    }

    .exam-progress-fill.striped {
        background-image: linear-gradient(
            45deg,
            rgba(255,255,255,0.1) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.1) 50%,
            rgba(255,255,255,0.1) 75%,
            transparent 75%
        );
        background-size: 40px 40px;
        animation: examProgressStripe 1s linear infinite;
    }

    .exam-topbar-right {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    /* Temporizador */
    .exam-timer {
        font-family: var(--exam-font-mono);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--exam-accent-cyan);
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .exam-timer .timer-icon { font-size: 1rem; }

    .exam-timer.warning {
        animation: examTimerWarn 1s infinite;
    }

    /* Zona de pregunta */
    .exam-question-area {
        max-width: 800px;
        margin: 0 auto;
        padding: 32px 24px;
    }

    .exam-question-meta {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 16px;
        flex-wrap: wrap;
        animation: examSlideInRight 0.4s ease-out;
    }

    .exam-section-tag {
        background: rgba(0, 212, 255, 0.1);
        color: var(--exam-accent-cyan);
        border: 1px solid rgba(0, 212, 255, 0.2);
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .exam-difficulty-badge {
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .exam-difficulty-badge.basico {
        background: rgba(0, 255, 136, 0.1);
        color: var(--exam-green);
        border: 1px solid rgba(0, 255, 136, 0.2);
    }

    .exam-difficulty-badge.intermedio {
        background: rgba(245, 158, 11, 0.1);
        color: var(--exam-amber);
        border: 1px solid rgba(245, 158, 11, 0.2);
    }

    .exam-difficulty-badge.avanzado {
        background: rgba(168, 85, 247, 0.1);
        color: var(--exam-purple);
        border: 1px solid rgba(168, 85, 247, 0.2);
    }

    /* Texto de la pregunta */
    .exam-question-text {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.6;
        margin-bottom: 28px;
        color: var(--exam-text-primary);
        animation: examSlideInRight 0.45s ease-out;
    }

    /* Opciones de respuesta */
    .exam-options-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 24px;
    }

    .exam-option-card {
        background: var(--exam-glass-bg);
        backdrop-filter: blur(var(--exam-glass-blur));
        border: 1px solid var(--exam-glass-border);
        border-radius: var(--exam-radius-sm);
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 14px;
        cursor: pointer;
        transition: all var(--exam-transition);
        animation: examSlideInRight 0.5s ease-out both;
        position: relative;
        overflow: hidden;
    }

    .exam-option-card:nth-child(1) { animation-delay: 0.05s; }
    .exam-option-card:nth-child(2) { animation-delay: 0.1s; }
    .exam-option-card:nth-child(3) { animation-delay: 0.15s; }
    .exam-option-card:nth-child(4) { animation-delay: 0.2s; }

    .exam-option-card:hover:not(.disabled) {
        border-color: var(--exam-accent-cyan);
        background: rgba(0, 212, 255, 0.06);
        transform: translateX(6px);
    }

    .exam-option-card.disabled {
        cursor: default;
        pointer-events: none;
    }

    .exam-option-letter {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid var(--exam-glass-border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.9rem;
        font-family: var(--exam-font-mono);
        color: var(--exam-text-secondary);
        flex-shrink: 0;
        transition: all var(--exam-transition);
    }

    .exam-option-text {
        flex: 1;
        font-size: 0.95rem;
        line-height: 1.5;
        color: var(--exam-text-primary);
    }

    .exam-option-indicator {
        font-size: 1.2rem;
        opacity: 0;
        transition: opacity var(--exam-transition);
    }

    /* Estado correcto */
    .exam-option-card.correct {
        border-color: var(--exam-green);
        background: rgba(0, 255, 136, 0.08);
        box-shadow: 0 0 20px var(--exam-green-glow), inset 0 0 20px rgba(0, 255, 136, 0.03);
    }

    .exam-option-card.correct .exam-option-letter {
        border-color: var(--exam-green);
        background: var(--exam-green);
        color: #000;
    }

    .exam-option-card.correct .exam-option-indicator {
        opacity: 1;
        color: var(--exam-green);
    }

    /* Estado incorrecto */
    .exam-option-card.incorrect {
        border-color: var(--exam-red);
        background: rgba(255, 71, 87, 0.08);
        box-shadow: 0 0 20px var(--exam-red-glow), inset 0 0 20px rgba(255, 71, 87, 0.03);
        animation: examShakeError 0.5s ease-out;
    }

    .exam-option-card.incorrect .exam-option-letter {
        border-color: var(--exam-red);
        background: var(--exam-red);
        color: #fff;
    }

    .exam-option-card.incorrect .exam-option-indicator {
        opacity: 1;
        color: var(--exam-red);
    }

    /* Explicación */
    .exam-explanation {
        background: rgba(0, 212, 255, 0.05);
        border: 1px solid rgba(0, 212, 255, 0.15);
        border-left: 3px solid var(--exam-accent-cyan);
        border-radius: var(--exam-radius-xs);
        padding: 16px 20px;
        margin-bottom: 24px;
        font-size: 0.9rem;
        line-height: 1.6;
        color: var(--exam-text-secondary);
        animation: examFadeInUp 0.4s ease-out;
        display: none;
    }

    .exam-explanation.visible { display: block; }

    .exam-explanation strong {
        color: var(--exam-accent-cyan);
    }

    /* Botones de navegación */
    .exam-nav-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 24px;
    }

    .exam-btn {
        padding: 10px 24px;
        border-radius: var(--exam-radius-xs);
        font-family: var(--exam-font-body);
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: all var(--exam-transition);
        border: none;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .exam-btn-primary {
        background: linear-gradient(135deg, var(--exam-accent-cyan), #0099cc);
        color: #000;
    }

    .exam-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 20px var(--exam-accent-cyan-glow);
    }

    .exam-btn-secondary {
        background: var(--exam-glass-bg);
        border: 1px solid var(--exam-glass-border);
        color: var(--exam-text-secondary);
    }

    .exam-btn-secondary:hover {
        border-color: var(--exam-accent-cyan);
        color: var(--exam-text-primary);
    }

    .exam-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
        transform: none !important;
    }

    .exam-btn-next { display: none; }
    .exam-btn-next.visible { display: flex; }

    /* ========================================================================
       PANEL DE NAVEGACIÓN DE PREGUNTAS
       ======================================================================== */
    .exam-nav-panel {
        max-width: 800px;
        margin: 24px auto 0;
        padding: 0 24px;
    }

    .exam-nav-panel-toggle {
        background: var(--exam-glass-bg);
        border: 1px solid var(--exam-glass-border);
        border-radius: var(--exam-radius-xs);
        padding: 8px 16px;
        color: var(--exam-text-secondary);
        cursor: pointer;
        font-size: 0.8rem;
        font-family: var(--exam-font-body);
        width: 100%;
        text-align: center;
        transition: all var(--exam-transition);
    }

    .exam-nav-panel-toggle:hover {
        border-color: var(--exam-accent-cyan);
        color: var(--exam-text-primary);
    }

    .exam-nav-dots {
        display: none;
        flex-wrap: wrap;
        gap: 6px;
        padding: 16px 0;
        justify-content: center;
    }

    .exam-nav-dots.visible { display: flex; }

    .exam-nav-dot {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid var(--exam-glass-border);
        background: var(--exam-glass-bg);
        color: var(--exam-text-muted);
        font-size: 0.65rem;
        font-family: var(--exam-font-mono);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all var(--exam-transition);
    }

    .exam-nav-dot:hover {
        border-color: var(--exam-accent-cyan);
        color: var(--exam-text-primary);
    }

    .exam-nav-dot.current {
        border-color: var(--exam-accent-cyan);
        background: rgba(0, 212, 255, 0.15);
        color: var(--exam-accent-cyan);
        box-shadow: 0 0 10px var(--exam-accent-cyan-glow);
    }

    .exam-nav-dot.correct-dot {
        border-color: var(--exam-green);
        background: rgba(0, 255, 136, 0.15);
        color: var(--exam-green);
    }

    .exam-nav-dot.incorrect-dot {
        border-color: var(--exam-red);
        background: rgba(255, 71, 87, 0.15);
        color: var(--exam-red);
    }

    /* ========================================================================
       PANTALLA DE RESULTADOS
       ======================================================================== */
    #resultsScreen {
        display: none;
        min-height: 100vh;
        padding: 40px 24px;
        overflow-y: auto;
    }

    #resultsScreen.active { display: block; }

    .results-container {
        max-width: 800px;
        margin: 0 auto;
        animation: examFadeInUp 0.6s ease-out;
    }

    .results-header {
        text-align: center;
        margin-bottom: 40px;
    }

    .results-header h2 {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 8px;
    }

    .results-pass { color: var(--exam-green); }
    .results-fail { color: var(--exam-red); }

    /* Círculo de puntuación */
    .score-circle-container {
        display: flex;
        justify-content: center;
        margin: 30px 0;
    }

    .score-circle-wrapper {
        position: relative;
        width: 180px;
        height: 180px;
    }

    .score-circle-svg {
        width: 180px;
        height: 180px;
        transform: rotate(-90deg);
    }

    .score-circle-bg {
        fill: none;
        stroke: rgba(255, 255, 255, 0.05);
        stroke-width: 10;
    }

    .score-circle-progress {
        fill: none;
        stroke-width: 10;
        stroke-linecap: round;
        transition: stroke-dashoffset 2s ease-out;
    }

    .score-circle-progress.pass { stroke: var(--exam-green); filter: drop-shadow(0 0 8px var(--exam-green-glow)); }
    .score-circle-progress.fail { stroke: var(--exam-red); filter: drop-shadow(0 0 8px var(--exam-red-glow)); }

    .score-circle-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .score-percent-display {
        font-size: 2.8rem;
        font-weight: 800;
        font-family: var(--exam-font-mono);
        line-height: 1;
    }

    .score-fraction-display {
        font-size: 0.9rem;
        color: var(--exam-text-secondary);
        margin-top: 4px;
        font-family: var(--exam-font-mono);
    }

    /* Cuadrícula de info de resultados */
    .results-info-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        margin-bottom: 32px;
    }

    .results-info-item {
        background: var(--exam-glass-bg);
        border: 1px solid var(--exam-glass-border);
        border-radius: var(--exam-radius-sm);
        padding: 16px;
        text-align: center;
    }

    .results-info-value {
        font-size: 1.3rem;
        font-weight: 700;
        font-family: var(--exam-font-mono);
        color: var(--exam-accent-cyan);
    }

    .results-info-label {
        font-size: 0.7rem;
        color: var(--exam-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-top: 4px;
    }

    /* Tabla de desglose por sección */
    .results-breakdown {
        margin-bottom: 32px;
    }

    .results-breakdown h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 16px;
        color: var(--exam-text-primary);
    }

    .results-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.85rem;
    }

    .results-table th {
        background: rgba(0, 212, 255, 0.06);
        padding: 10px 14px;
        text-align: left;
        font-weight: 600;
        color: var(--exam-accent-cyan);
        border-bottom: 1px solid var(--exam-border);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .results-table td {
        padding: 10px 14px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        color: var(--exam-text-secondary);
    }

    .results-table tr:hover td {
        background: rgba(0, 212, 255, 0.03);
    }

    .results-table .cell-score {
        font-family: var(--exam-font-mono);
        font-weight: 600;
    }

    .mini-progress-bar {
        width: 80px;
        height: 4px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 2px;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
        margin-left: 8px;
    }

    .mini-progress-bar .fill {
        height: 100%;
        border-radius: 2px;
        transition: width 1s ease;
    }

    /* Botones de acción de resultados */
    .results-actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 32px;
    }

    .results-actions .exam-btn {
        min-width: 160px;
        justify-content: center;
    }

    /* ========================================================================
       PANTALLA DE REVISIÓN
       ======================================================================== */
    #reviewScreen {
        display: none;
        min-height: 100vh;
        padding: 24px;
        overflow-y: auto;
    }

    #reviewScreen.active { display: block; }

    .review-container {
        max-width: 800px;
        margin: 0 auto;
    }

    .review-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        flex-wrap: wrap;
        gap: 12px;
    }

    .review-header h2 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .review-filter-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--exam-glass-bg);
        border: 1px solid var(--exam-glass-border);
        border-radius: 20px;
        padding: 6px 16px;
        cursor: pointer;
        font-size: 0.8rem;
        color: var(--exam-text-secondary);
        transition: all var(--exam-transition);
        font-family: var(--exam-font-body);
    }

    .review-filter-toggle:hover, .review-filter-toggle.active {
        border-color: var(--exam-red);
        color: var(--exam-red);
        background: rgba(255, 71, 87, 0.08);
    }

    .review-question-card {
        background: var(--exam-glass-bg);
        border: 1px solid var(--exam-glass-border);
        border-radius: var(--exam-radius);
        padding: 24px;
        margin-bottom: 16px;
        animation: examFadeInUp 0.4s ease-out;
    }

    .review-question-card.review-correct {
        border-left: 3px solid var(--exam-green);
    }

    .review-question-card.review-incorrect {
        border-left: 3px solid var(--exam-red);
    }

    .review-q-number {
        font-family: var(--exam-font-mono);
        font-size: 0.75rem;
        color: var(--exam-text-muted);
        margin-bottom: 8px;
    }

    .review-q-text {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 16px;
        line-height: 1.5;
    }

    .review-option {
        padding: 8px 14px;
        border-radius: var(--exam-radius-xs);
        margin-bottom: 6px;
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .review-option.user-wrong {
        background: rgba(255, 71, 87, 0.1);
        border: 1px solid rgba(255, 71, 87, 0.2);
        color: var(--exam-red);
    }

    .review-option.correct-answer {
        background: rgba(0, 255, 136, 0.1);
        border: 1px solid rgba(0, 255, 136, 0.2);
        color: var(--exam-green);
    }

    .review-option.neutral {
        color: var(--exam-text-muted);
    }

    .review-explanation {
        background: rgba(0, 212, 255, 0.04);
        border-left: 2px solid var(--exam-accent-cyan);
        padding: 10px 14px;
        margin-top: 12px;
        font-size: 0.82rem;
        color: var(--exam-text-secondary);
        line-height: 1.5;
        border-radius: 0 var(--exam-radius-xs) var(--exam-radius-xs) 0;
    }

    /* ========================================================================
       EFECTO CONFETI / SPARKLE (solo CSS)
       ======================================================================== */
    .sparkle-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 99999;
        overflow: hidden;
    }

    .sparkle-particle {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        animation: examConfetti 1.5s ease-out forwards;
    }

    .sparkle-star {
        position: absolute;
        width: 12px;
        height: 12px;
        animation: examSparkle 0.8s ease-in-out forwards;
    }

    .sparkle-star::before, .sparkle-star::after {
        content: '';
        position: absolute;
        background: var(--exam-accent-cyan);
    }

    .sparkle-star::before {
        width: 12px;
        height: 2px;
        top: 5px;
        left: 0;
        border-radius: 1px;
    }

    .sparkle-star::after {
        width: 2px;
        height: 12px;
        top: 0;
        left: 5px;
        border-radius: 1px;
    }

    /* Diálogo de confirmación de salida */
    .exam-confirm-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        z-index: 100000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: examFadeInUp 0.2s ease-out;
    }

    .exam-confirm-dialog {
        background: var(--exam-bg-secondary);
        border: 1px solid var(--exam-border);
        border-radius: var(--exam-radius);
        padding: 32px;
        max-width: 400px;
        text-align: center;
    }

    .exam-confirm-dialog h3 {
        color: var(--exam-amber);
        font-size: 1.2rem;
        margin-bottom: 12px;
    }

    .exam-confirm-dialog p {
        color: var(--exam-text-secondary);
        margin-bottom: 24px;
        font-size: 0.9rem;
    }

    .exam-confirm-dialog .confirm-btns {
        display: flex;
        gap: 12px;
        justify-content: center;
    }

    /* ========================================================================
       RESPONSIVO
       ======================================================================== */
    @media (max-width: 768px) {
        .exam-stats-dashboard {
            grid-template-columns: repeat(2, 1fr);
        }

        .exam-modes-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .exam-start-header h1 {
            font-size: 1.8rem;
        }

        .exam-topbar {
            padding: 10px 16px;
            flex-wrap: wrap;
        }

        .exam-topbar-center {
            order: 3;
            max-width: 100%;
            flex-basis: 100%;
        }

        .exam-question-area {
            padding: 20px 16px;
        }

        .exam-question-text {
            font-size: 1.05rem;
        }

        .results-info-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .exam-nav-buttons {
            padding: 0 16px;
        }

        .review-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .exam-nav-dot {
            width: 28px;
            height: 28px;
            font-size: 0.6rem;
        }
    }

    @media (max-width: 480px) {
        .exam-stats-dashboard {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }

        .exam-modes-grid {
            grid-template-columns: 1fr;
        }

        .exam-mode-card {
            padding: 20px 16px;
        }

        .exam-start-header h1 {
            font-size: 1.5rem;
        }

        .exam-option-card {
            padding: 12px 14px;
        }

        .exam-option-letter {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
        }

        .exam-timer {
            font-size: 1rem;
        }

        .results-info-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }

        .score-circle-wrapper {
            width: 150px;
            height: 150px;
        }

        .score-circle-svg {
            width: 150px;
            height: 150px;
        }

        .score-percent-display {
            font-size: 2.2rem;
        }

        .results-actions {
            flex-direction: column;
        }

        .results-actions .exam-btn {
            width: 100%;
        }

        .exam-nav-buttons {
            flex-direction: column;
        }

        .exam-btn {
            width: 100%;
            justify-content: center;
        }
    }
    `;
    document.head.appendChild(styleEl);
})();


// ============================================================================
// SECCIÓN 1: GESTIÓN DEL BANCO DE PREGUNTAS
// ============================================================================

/**
 * Fusionar ambos bancos de preguntas en un solo array.
 * Si alguno no existe, usar array vacío como fallback.
 */
const allQuestions = [
    ...(typeof questionsBank1 !== 'undefined' ? questionsBank1 : []),
    ...(typeof questionsBank2 !== 'undefined' ? questionsBank2 : [])
];

/**
 * Mezclar (shuffle) un array usando el algoritmo Fisher-Yates
 * @param {Array} array - El array a mezclar
 * @returns {Array} - Array mezclado (nueva referencia)
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Filtrar preguntas por sección
 * @param {string} section - Nombre de la sección
 * @returns {Array} - Preguntas filtradas
 */
function filterBySection(section) {
    return allQuestions.filter(q => q.section === section);
}

/**
 * Filtrar preguntas por dificultad
 * @param {string} difficulty - 'basico', 'intermedio', 'avanzado'
 * @returns {Array} - Preguntas filtradas
 */
function filterByDifficulty(difficulty) {
    return allQuestions.filter(q => q.difficulty === difficulty);
}

/**
 * Obtener un subconjunto aleatorio de preguntas
 * @param {number} count - Cantidad de preguntas deseadas
 * @param {Array} [source] - Fuente de preguntas (default: allQuestions)
 * @returns {Array} - Subconjunto aleatorio
 */
function getRandomSubset(count, source = allQuestions) {
    const shuffled = shuffleArray(source);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Obtener todas las secciones únicas con conteo de preguntas
 * @returns {Array<{name: string, count: number}>}
 */
function getAllSections() {
    const sectionMap = {};
    allQuestions.forEach(q => {
        if (!sectionMap[q.section]) {
            sectionMap[q.section] = 0;
        }
        sectionMap[q.section]++;
    });
    return Object.entries(sectionMap).map(([name, count]) => ({ name, count }));
}

/**
 * Preparar preguntas para un examen: mezclar preguntas y opciones
 * @param {Array} questions - Preguntas a preparar
 * @returns {Array} - Preguntas con opciones mezcladas
 */
function prepareExamQuestions(questions) {
    return shuffleArray(questions).map(q => {
        // Crear copia de la pregunta con opciones mezcladas
        const optionLetters = ['A', 'B', 'C', 'D'];
        const correctOptionText = q.options[q.correctIndex];

        // Mezclar opciones
        const shuffledOptions = shuffleArray(q.options);
        const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);

        return {
            ...q,
            options: shuffledOptions,
            correctIndex: newCorrectIndex,
            originalOptions: q.options
        };
    });
}


// ============================================================================
// SECCIÓN 2: ESTADO GLOBAL DEL EXAMEN
// ============================================================================

/**
 * Estado central del examen — contiene toda la información de la sesión activa
 */
const examState = {
    active: false,                  // ¿Examen en curso?
    mode: '',                       // Modo actual (completo, seccion, aleatorio25, etc.)
    modeName: '',                   // Nombre legible del modo
    questions: [],                  // Preguntas del examen actual (ya mezcladas)
    currentIndex: 0,                // Índice de pregunta actual
    answers: [],                    // Respuestas del usuario: {selectedIndex, correct}
    startTime: null,                // Timestamp de inicio
    endTime: null,                  // Timestamp de fin
    timerDuration: 0,               // Duración en segundos
    timerRemaining: 0,              // Tiempo restante en segundos
    timerInterval: null,            // ID del intervalo del temporizador
    navPanelOpen: false             // ¿Panel de navegación abierto?
};

// Claves de localStorage
const STORAGE_KEY_STATE = 'soc-exam-state';
const STORAGE_KEY_SCORES = 'soc-exam-scores';


// ============================================================================
// SECCIÓN 3: UTILIDADES Y HELPERS
// ============================================================================

/**
 * Obtener o crear el contenedor principal del examen
 */
function getExamContainer() {
    let container = document.getElementById('examContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'examContainer';
        document.body.appendChild(container);
    }
    return container;
}

/**
 * Calcular la calificación letra basada en porcentaje
 * @param {number} percent - Porcentaje (0-100)
 * @returns {string} - Letra de calificación
 */
function getGrade(percent) {
    if (percent >= 90) return 'A';
    if (percent >= 80) return 'B';
    if (percent >= 70) return 'C';
    if (percent >= 60) return 'D';
    return 'F';
}

/**
 * Formatear segundos a formato mm:ss
 * @param {number} totalSeconds - Segundos totales
 * @returns {string} - Formato mm:ss
 */
function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/**
 * Formatear milisegundos a formato legible (ej: "12m 34s")
 * @param {number} ms - Milisegundos
 * @returns {string}
 */
function formatDuration(ms) {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}m ${s}s`;
}

/**
 * Crear efecto de confeti/sparkle (solo CSS, sin librerías)
 */
function createSparkleEffect() {
    const container = document.createElement('div');
    container.className = 'sparkle-container';
    document.body.appendChild(container);

    // Crear partículas de colores
    const colors = ['#00d4ff', '#00ff88', '#a855f7', '#f59e0b', '#ff4757'];
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'sparkle-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${50 + Math.random() * 40}%`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        particle.style.animationDuration = `${1 + Math.random() * 1}s`;
        container.appendChild(particle);
    }

    // Crear estrellas de brillo
    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.className = 'sparkle-star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${30 + Math.random() * 50}%`;
        star.style.animationDelay = `${Math.random() * 0.8}s`;
        container.appendChild(star);
    }

    // Limpiar después de la animación
    setTimeout(() => container.remove(), 2500);
}

/**
 * Animar un contador numérico (count-up)
 * @param {HTMLElement} element - Elemento donde mostrar el número
 * @param {number} target - Número objetivo
 * @param {number} duration - Duración en ms
 * @param {string} [suffix=''] - Sufijo (ej: '%')
 */
function animateCounter(element, target, duration = 1500, suffix = '') {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (target - start) * eased);
        element.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}


// ============================================================================
// SECCIÓN 4: PERSISTENCIA EN LOCALSTORAGE
// ============================================================================

/**
 * Guardar el estado actual del examen en localStorage
 */
function saveExamState() {
    if (!examState.active) return;

    const stateToSave = {
        mode: examState.mode,
        modeName: examState.modeName,
        questions: examState.questions,
        currentIndex: examState.currentIndex,
        answers: examState.answers,
        startTime: examState.startTime,
        timerDuration: examState.timerDuration,
        timerRemaining: examState.timerRemaining
    };

    try {
        localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(stateToSave));
    } catch (e) {
        console.warn('No se pudo guardar el estado del examen:', e);
    }
}

/**
 * Cargar el estado guardado del examen desde localStorage
 * @returns {Object|null} - Estado guardado o null
 */
function loadExamState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY_STATE);
        return saved ? JSON.parse(saved) : null;
    } catch (e) {
        console.warn('No se pudo cargar el estado del examen:', e);
        return null;
    }
}

/**
 * Limpiar el estado guardado del examen
 */
function clearExamState() {
    localStorage.removeItem(STORAGE_KEY_STATE);
}

/**
 * Guardar puntuación del examen en el historial
 * @param {Object} result - Resultado del examen
 */
function saveScore(result) {
    try {
        const scores = JSON.parse(localStorage.getItem(STORAGE_KEY_SCORES) || '[]');
        scores.push({
            date: new Date().toISOString(),
            mode: result.mode,
            modeName: result.modeName,
            totalQuestions: result.totalQuestions,
            correct: result.correct,
            percentage: result.percentage,
            timeTaken: result.timeTaken,
            grade: result.grade
        });
        // Mantener solo los últimos 50 registros
        if (scores.length > 50) scores.splice(0, scores.length - 50);
        localStorage.setItem(STORAGE_KEY_SCORES, JSON.stringify(scores));
    } catch (e) {
        console.warn('No se pudo guardar la puntuación:', e);
    }
}

/**
 * Obtener estadísticas del historial de exámenes
 * @returns {Object} - Estadísticas calculadas
 */
function getExamStats() {
    try {
        const scores = JSON.parse(localStorage.getItem(STORAGE_KEY_SCORES) || '[]');
        if (scores.length === 0) {
            return { totalExams: 0, bestScore: 0, avgScore: 0, lastDate: 'Nunca' };
        }

        const percentages = scores.map(s => s.percentage);
        const best = Math.max(...percentages);
        const avg = Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length);
        const lastDate = new Date(scores[scores.length - 1].date);
        const formattedDate = lastDate.toLocaleDateString('es-ES', {
            day: 'numeric', month: 'short', year: 'numeric'
        });

        return {
            totalExams: scores.length,
            bestScore: best,
            avgScore: avg,
            lastDate: formattedDate
        };
    } catch (e) {
        return { totalExams: 0, bestScore: 0, avgScore: 0, lastDate: 'Nunca' };
    }
}


// ============================================================================
// SECCIÓN 5: RENDERIZADO — PANTALLA DE INICIO
// ============================================================================

/**
 * Renderizar la pantalla de inicio con selección de modo y estadísticas
 */
function renderStartScreen() {
    const container = getExamContainer();
    const stats = getExamStats();
    const sections = getAllSections();
    const savedState = loadExamState();

    // Verificar si hay examen en progreso guardado
    let resumeHTML = '';
    if (savedState) {
        const answered = savedState.answers.filter(a => a !== null).length;
        resumeHTML = `
            <div class="exam-resume-dialog" id="resumeDialog">
                <h3>⚡ Examen en Progreso</h3>
                <p>Tienes un examen "${savedState.modeName}" con ${answered}/${savedState.questions.length} preguntas respondidas.</p>
                <div class="resume-btns">
                    <button class="exam-btn exam-btn-primary" onclick="resumeExam()">Continuar</button>
                    <button class="exam-btn exam-btn-secondary" onclick="discardSavedExam()">Descartar</button>
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div id="startScreen">
            <div class="exam-start-header">
                <h1>🛡️ Examen SOC L1</h1>
                <p>Pon a prueba tus conocimientos de ciberseguridad</p>
            </div>

            ${resumeHTML}

            <!-- Dashboard de estadísticas -->
            <div class="exam-stats-dashboard">
                <div class="exam-stat-card">
                    <div class="exam-stat-value">${stats.totalExams}</div>
                    <div class="exam-stat-label">Exámenes Realizados</div>
                </div>
                <div class="exam-stat-card">
                    <div class="exam-stat-value">${stats.bestScore}%</div>
                    <div class="exam-stat-label">Mejor Puntuación</div>
                </div>
                <div class="exam-stat-card">
                    <div class="exam-stat-value">${stats.avgScore}%</div>
                    <div class="exam-stat-label">Promedio</div>
                </div>
                <div class="exam-stat-card">
                    <div class="exam-stat-value" style="font-size:0.9rem;">${stats.lastDate}</div>
                    <div class="exam-stat-label">Último Examen</div>
                </div>
            </div>

            <!-- Modos de examen -->
            <div class="exam-modes-grid">
                <div class="exam-mode-card" onclick="startExamMode('completo')" style="animation-delay:0.1s">
                    <span class="mode-icon">📋</span>
                    <div class="mode-title">Examen Completo</div>
                    <div class="mode-desc">Todas las preguntas disponibles</div>
                    <span class="mode-badge">${allQuestions.length} preguntas • 180 min</span>
                </div>

                <div class="exam-mode-card" onclick="toggleSectionPicker()" style="animation-delay:0.15s">
                    <span class="mode-icon">📂</span>
                    <div class="mode-title">Por Sección</div>
                    <div class="mode-desc">Elige un tema específico</div>
                    <span class="mode-badge">${sections.length} secciones</span>
                </div>

                <div class="exam-mode-card" onclick="startExamMode('aleatorio25')" style="animation-delay:0.2s">
                    <span class="mode-icon">🎲</span>
                    <div class="mode-title">Aleatorio 25</div>
                    <div class="mode-desc">Examen rápido aleatorio</div>
                    <span class="mode-badge">25 preguntas • 30 min</span>
                </div>

                <div class="exam-mode-card" onclick="startExamMode('aleatorio50')" style="animation-delay:0.25s">
                    <span class="mode-icon">🎯</span>
                    <div class="mode-title">Aleatorio 50</div>
                    <div class="mode-desc">Examen medio aleatorio</div>
                    <span class="mode-badge">50 preguntas • 60 min</span>
                </div>

                <div class="exam-mode-card" onclick="startExamMode('aleatorio100')" style="animation-delay:0.3s">
                    <span class="mode-icon">🏆</span>
                    <div class="mode-title">Aleatorio 100</div>
                    <div class="mode-desc">Examen largo aleatorio</div>
                    <span class="mode-badge">100 preguntas • 90 min</span>
                </div>

                <div class="exam-mode-card" onclick="startExamMode('basico')" style="animation-delay:0.35s">
                    <span class="mode-icon">🟢</span>
                    <div class="mode-title">Solo Básico</div>
                    <div class="mode-desc">Preguntas de nivel básico</div>
                    <span class="mode-badge">${filterByDifficulty('basico').length} preguntas</span>
                </div>

                <div class="exam-mode-card" onclick="startExamMode('intermedio')" style="animation-delay:0.4s">
                    <span class="mode-icon">🟡</span>
                    <div class="mode-title">Solo Intermedio</div>
                    <div class="mode-desc">Preguntas de nivel intermedio</div>
                    <span class="mode-badge">${filterByDifficulty('intermedio').length} preguntas</span>
                </div>

                <div class="exam-mode-card" onclick="startExamMode('avanzado')" style="animation-delay:0.45s">
                    <span class="mode-icon">🔴</span>
                    <div class="mode-title">Solo Avanzado</div>
                    <div class="mode-desc">Preguntas de nivel avanzado</div>
                    <span class="mode-badge">${filterByDifficulty('avanzado').length} preguntas</span>
                </div>

                <div class="exam-mode-card" onclick="goBackToGlossary()" style="animation-delay:0.5s">
                    <span class="mode-icon">📖</span>
                    <div class="mode-title">Volver al Glosario</div>
                    <div class="mode-desc">Regresar al material de estudio</div>
                    <span class="mode-badge">← Atrás</span>
                </div>
            </div>

            <!-- Selector de secciones (oculto por defecto) -->
            <div class="exam-section-buttons" id="sectionPicker">
                ${sections.map(s => `
                    <button class="exam-section-btn" onclick="startExamMode('seccion', '${s.name}')">
                        ${s.name}
                        <span class="section-count">${s.count} preguntas</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    container.classList.add('active');
}

/**
 * Alternar la visibilidad del selector de secciones
 */
function toggleSectionPicker() {
    const picker = document.getElementById('sectionPicker');
    if (picker) {
        picker.classList.toggle('visible');
    }
}

/**
 * Volver al glosario (cerrar el contenedor de examen)
 */
function goBackToGlossary() {
    if (window.location.pathname.endsWith('exam.html')) {
        window.location.href = 'index.html';
        return;
    }

    const container = getExamContainer();
    container.classList.remove('active');
    // Detener temporizador si existe
    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
        examState.timerInterval = null;
    }
}

/**
 * Descartar el examen guardado y limpiar
 */
function discardSavedExam() {
    clearExamState();
    const dialog = document.getElementById('resumeDialog');
    if (dialog) dialog.remove();
}


// ============================================================================
// SECCIÓN 6: INICIO Y CONFIGURACIÓN DEL EXAMEN
// ============================================================================

/**
 * Iniciar un modo de examen específico
 * @param {string} mode - Identificador del modo
 * @param {string} [sectionName] - Nombre de sección (solo para modo 'seccion')
 */
function startExamMode(mode, sectionName = '') {
    let questions = [];
    let timerMinutes = 0;
    let modeName = '';

    switch (mode) {
        case 'completo':
            questions = prepareExamQuestions(allQuestions);
            timerMinutes = 180;
            modeName = 'Examen Completo';
            break;

        case 'seccion':
            questions = prepareExamQuestions(filterBySection(sectionName));
            timerMinutes = Math.max(15, Math.ceil(questions.length * 1.2)); // ~1.2 min por pregunta
            modeName = `Sección: ${sectionName}`;
            break;

        case 'aleatorio25':
            questions = prepareExamQuestions(getRandomSubset(25));
            timerMinutes = 30;
            modeName = 'Aleatorio 25';
            break;

        case 'aleatorio50':
            questions = prepareExamQuestions(getRandomSubset(50));
            timerMinutes = 60;
            modeName = 'Aleatorio 50';
            break;

        case 'aleatorio100':
            questions = prepareExamQuestions(getRandomSubset(100));
            timerMinutes = 90;
            modeName = 'Aleatorio 100';
            break;

        case 'basico':
            questions = prepareExamQuestions(filterByDifficulty('basico'));
            timerMinutes = Math.max(15, Math.ceil(questions.length * 1));
            modeName = 'Solo Básico';
            break;

        case 'intermedio':
            questions = prepareExamQuestions(filterByDifficulty('intermedio'));
            timerMinutes = Math.max(15, Math.ceil(questions.length * 1.2));
            modeName = 'Solo Intermedio';
            break;

        case 'avanzado':
            questions = prepareExamQuestions(filterByDifficulty('avanzado'));
            timerMinutes = Math.max(15, Math.ceil(questions.length * 1.5));
            modeName = 'Solo Avanzado';
            break;

        default:
            console.error('Modo de examen no reconocido:', mode);
            return;
    }

    // Verificar que hay preguntas
    if (questions.length === 0) {
        alert('No hay preguntas disponibles para este modo.');
        return;
    }

    // Configurar estado del examen
    examState.active = true;
    examState.mode = mode;
    examState.modeName = modeName;
    examState.questions = questions;
    examState.currentIndex = 0;
    examState.answers = new Array(questions.length).fill(null);
    examState.startTime = Date.now();
    examState.endTime = null;
    examState.timerDuration = timerMinutes * 60;
    examState.timerRemaining = timerMinutes * 60;
    examState.navPanelOpen = false;

    // Guardar estado inicial
    saveExamState();

    // Renderizar pantalla de examen
    renderExamScreen();
    startTimer();
}

/**
 * Reanudar un examen guardado
 */
function resumeExam() {
    const saved = loadExamState();
    if (!saved) return;

    examState.active = true;
    examState.mode = saved.mode;
    examState.modeName = saved.modeName;
    examState.questions = saved.questions;
    examState.currentIndex = saved.currentIndex;
    examState.answers = saved.answers;
    examState.startTime = saved.startTime;
    examState.endTime = null;
    examState.timerDuration = saved.timerDuration;
    examState.timerRemaining = saved.timerRemaining;
    examState.navPanelOpen = false;

    renderExamScreen();
    startTimer();
}


// ============================================================================
// SECCIÓN 7: TEMPORIZADOR
// ============================================================================

/**
 * Iniciar el temporizador del examen
 */
function startTimer() {
    // Limpiar intervalo previo si existe
    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
    }

    examState.timerInterval = setInterval(() => {
        examState.timerRemaining--;

        // Actualizar display del timer
        const timerEl = document.getElementById('examTimer');
        if (timerEl) {
            timerEl.textContent = formatTime(examState.timerRemaining);

            // Advertencia cuando quedan menos de 5 minutos
            if (examState.timerRemaining <= 300) {
                timerEl.parentElement.classList.add('warning');
            }
        }

        // Guardar estado periódicamente (cada 30 segundos)
        if (examState.timerRemaining % 30 === 0) {
            saveExamState();
        }

        // Tiempo agotado — enviar examen automáticamente
        if (examState.timerRemaining <= 0) {
            clearInterval(examState.timerInterval);
            examState.timerInterval = null;
            finishExam();
        }
    }, 1000);
}


// ============================================================================
// SECCIÓN 8: RENDERIZADO — PANTALLA DE EXAMEN
// ============================================================================

/**
 * Renderizar la pantalla completa del examen activo
 */
function renderExamScreen() {
    const container = getExamContainer();
    const q = examState.questions[examState.currentIndex];
    const answered = examState.answers[examState.currentIndex];
    const totalAnswered = examState.answers.filter(a => a !== null).length;
    const progressPercent = (totalAnswered / examState.questions.length) * 100;

    container.innerHTML = `
        <div id="examScreen" class="active">
            <!-- Barra superior -->
            <div class="exam-topbar">
                <div class="exam-topbar-left">
                    <button class="exam-quit-btn" onclick="confirmQuit()">✕ Salir</button>
                    <span class="exam-question-counter">
                        Pregunta <strong>${examState.currentIndex + 1}</strong> de <strong>${examState.questions.length}</strong>
                    </span>
                </div>
                <div class="exam-topbar-center">
                    <div class="exam-progress-bar">
                        <div class="exam-progress-fill striped" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
                <div class="exam-topbar-right">
                    <div class="exam-timer${examState.timerRemaining <= 300 ? ' warning' : ''}">
                        <span class="timer-icon">⏱️</span>
                        <span id="examTimer">${formatTime(examState.timerRemaining)}</span>
                    </div>
                </div>
            </div>

            <!-- Zona de pregunta -->
            <div class="exam-question-area">
                <div class="exam-question-meta">
                    <span class="exam-section-tag">${q.section || 'General'}</span>
                    <span class="exam-difficulty-badge ${q.difficulty || 'basico'}">${(q.difficulty || 'básico').toUpperCase()}</span>
                </div>

                <div class="exam-question-text">${q.question}</div>

                <div class="exam-options-list" id="optionsList">
                    ${q.options.map((opt, i) => {
                        const letters = ['A', 'B', 'C', 'D'];
                        let stateClass = '';
                        let indicatorHTML = '';
                        let disabledClass = '';

                        if (answered !== null) {
                            disabledClass = 'disabled';
                            if (i === q.correctIndex) {
                                stateClass = 'correct';
                                indicatorHTML = '✓';
                            } else if (i === answered.selectedIndex && !answered.correct) {
                                stateClass = 'incorrect';
                                indicatorHTML = '✗';
                            }
                        }

                        return `
                            <div class="exam-option-card ${stateClass} ${disabledClass}"
                                 onclick="selectAnswer(${i})"
                                 data-index="${i}">
                                <span class="exam-option-letter">${letters[i]}</span>
                                <span class="exam-option-text">${opt}</span>
                                <span class="exam-option-indicator">${indicatorHTML}</span>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- Explicación (visible solo después de responder) -->
                <div class="exam-explanation ${answered !== null ? 'visible' : ''}" id="explanationBox">
                    <strong>💡 Explicación:</strong> ${q.explanation || 'No hay explicación disponible para esta pregunta.'}
                </div>
            </div>

            <!-- Botones de navegación -->
            <div class="exam-nav-buttons">
                <button class="exam-btn exam-btn-secondary" onclick="goToPrevQuestion()"
                        ${examState.currentIndex === 0 ? 'disabled' : ''}>
                    ← Anterior
                </button>

                <span style="font-size:0.75rem; color: var(--exam-text-muted);">
                    ${totalAnswered}/${examState.questions.length} respondidas
                </span>

                <button class="exam-btn exam-btn-primary exam-btn-next ${answered !== null ? 'visible' : ''}"
                        id="nextBtn"
                        onclick="goToNextQuestion()">
                    ${examState.currentIndex === examState.questions.length - 1 ? 'Finalizar ✓' : 'Siguiente →'}
                </button>
            </div>

            <!-- Panel de navegación de preguntas -->
            <div class="exam-nav-panel">
                <button class="exam-nav-panel-toggle" onclick="toggleNavPanel()">
                    ${examState.navPanelOpen ? '▲ Ocultar Navegación' : '▼ Navegación de Preguntas'}
                </button>
                <div class="exam-nav-dots ${examState.navPanelOpen ? 'visible' : ''}" id="navDots">
                    ${examState.questions.map((_, i) => {
                        let dotClass = '';
                        if (i === examState.currentIndex) dotClass = 'current';
                        else if (examState.answers[i] !== null) {
                            dotClass = examState.answers[i].correct ? 'correct-dot' : 'incorrect-dot';
                        }
                        return `<button class="exam-nav-dot ${dotClass}" onclick="goToQuestion(${i})">${i + 1}</button>`;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * Alternar el panel de navegación de preguntas
 */
function toggleNavPanel() {
    examState.navPanelOpen = !examState.navPanelOpen;
    const dots = document.getElementById('navDots');
    const toggle = document.querySelector('.exam-nav-panel-toggle');
    if (dots) dots.classList.toggle('visible');
    if (toggle) toggle.textContent = examState.navPanelOpen ? '▲ Ocultar Navegación' : '▼ Navegación de Preguntas';
}


// ============================================================================
// SECCIÓN 9: INTERACCIÓN — SELECCIÓN DE RESPUESTAS Y NAVEGACIÓN
// ============================================================================

/**
 * Manejar la selección de una respuesta
 * @param {number} optionIndex - Índice de la opción seleccionada (0-3)
 */
function selectAnswer(optionIndex) {
    // No permitir cambiar respuesta si ya fue respondida
    if (examState.answers[examState.currentIndex] !== null) return;

    const q = examState.questions[examState.currentIndex];
    const isCorrect = optionIndex === q.correctIndex;

    // Registrar respuesta
    examState.answers[examState.currentIndex] = {
        selectedIndex: optionIndex,
        correct: isCorrect
    };

    // Actualizar visualmente las opciones
    const optionCards = document.querySelectorAll('.exam-option-card');
    optionCards.forEach((card, i) => {
        card.classList.add('disabled');

        if (i === q.correctIndex) {
            card.classList.add('correct');
            card.querySelector('.exam-option-indicator').textContent = '✓';
            card.querySelector('.exam-option-indicator').style.opacity = '1';
        }

        if (i === optionIndex && !isCorrect) {
            card.classList.add('incorrect');
            card.querySelector('.exam-option-indicator').textContent = '✗';
            card.querySelector('.exam-option-indicator').style.opacity = '1';
        }
    });

    // Mostrar explicación
    const explanation = document.getElementById('explanationBox');
    if (explanation) explanation.classList.add('visible');

    // Mostrar botón siguiente
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.classList.add('visible');

    // Efecto sparkle si es correcto
    if (isCorrect) {
        createSparkleEffect();
    }

    // Actualizar dot de navegación
    const dots = document.querySelectorAll('.exam-nav-dot');
    if (dots[examState.currentIndex]) {
        dots[examState.currentIndex].className = `exam-nav-dot ${isCorrect ? 'correct-dot' : 'incorrect-dot'}`;
    }

    // Actualizar barra de progreso
    const totalAnswered = examState.answers.filter(a => a !== null).length;
    const progressPercent = (totalAnswered / examState.questions.length) * 100;
    const progressFill = document.querySelector('.exam-progress-fill');
    if (progressFill) progressFill.style.width = `${progressPercent}%`;

    // Guardar estado
    saveExamState();
}

/**
 * Ir a la pregunta siguiente
 */
function goToNextQuestion() {
    if (examState.currentIndex < examState.questions.length - 1) {
        examState.currentIndex++;
        renderExamScreen();
    } else {
        // Última pregunta — finalizar examen
        finishExam();
    }
}

/**
 * Ir a la pregunta anterior (sin poder cambiar respuesta)
 */
function goToPrevQuestion() {
    if (examState.currentIndex > 0) {
        examState.currentIndex--;
        renderExamScreen();
    }
}

/**
 * Ir a una pregunta específica por su índice
 * @param {number} index - Índice de la pregunta
 */
function goToQuestion(index) {
    if (index >= 0 && index < examState.questions.length) {
        examState.currentIndex = index;
        renderExamScreen();
    }
}

/**
 * Mostrar diálogo de confirmación para salir del examen
 */
function confirmQuit() {
    const overlay = document.createElement('div');
    overlay.className = 'exam-confirm-overlay';
    overlay.id = 'confirmOverlay';
    overlay.innerHTML = `
        <div class="exam-confirm-dialog">
            <h3>⚠️ ¿Salir del Examen?</h3>
            <p>Tu progreso se guardará y podrás reanudarlo después.</p>
            <div class="confirm-btns">
                <button class="exam-btn exam-btn-secondary" onclick="document.getElementById('confirmOverlay').remove()">
                    Cancelar
                </button>
                <button class="exam-btn" style="background:var(--exam-red); color:#fff;" onclick="quitExam()">
                    Salir
                </button>
            </div>
        </div>
    `;
    document.getElementById('examContainer').appendChild(overlay);
}

/**
 * Salir del examen, guardando progreso
 */
function quitExam() {
    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
        examState.timerInterval = null;
    }
    saveExamState();
    examState.active = false;
    renderStartScreen();
}


// ============================================================================
// SECCIÓN 10: FINALIZACIÓN DEL EXAMEN Y RESULTADOS
// ============================================================================

/**
 * Finalizar el examen y mostrar resultados
 */
function finishExam() {
    // Detener temporizador
    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
        examState.timerInterval = null;
    }

    examState.endTime = Date.now();
    examState.active = false;

    // Calcular resultados
    const totalQuestions = examState.questions.length;
    const answeredQuestions = examState.answers.filter(a => a !== null);
    const correctAnswers = answeredQuestions.filter(a => a.correct).length;
    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const grade = getGrade(percentage);
    const passed = percentage >= 70;
    const timeTaken = examState.endTime - examState.startTime;

    // Desglose por sección
    const sectionBreakdown = {};
    examState.questions.forEach((q, i) => {
        const section = q.section || 'General';
        if (!sectionBreakdown[section]) {
            sectionBreakdown[section] = { total: 0, correct: 0 };
        }
        sectionBreakdown[section].total++;
        if (examState.answers[i] && examState.answers[i].correct) {
            sectionBreakdown[section].correct++;
        }
    });

    // Desglose por dificultad
    const diffBreakdown = { basico: { total: 0, correct: 0 }, intermedio: { total: 0, correct: 0 }, avanzado: { total: 0, correct: 0 } };
    examState.questions.forEach((q, i) => {
        const diff = q.difficulty || 'basico';
        if (diffBreakdown[diff]) {
            diffBreakdown[diff].total++;
            if (examState.answers[i] && examState.answers[i].correct) {
                diffBreakdown[diff].correct++;
            }
        }
    });

    // Guardar puntuación
    const result = {
        mode: examState.mode,
        modeName: examState.modeName,
        totalQuestions,
        correct: correctAnswers,
        percentage,
        grade,
        timeTaken
    };
    saveScore(result);

    // Limpiar estado guardado (examen finalizado)
    clearExamState();

    // Renderizar resultados
    renderResultsScreen(result, sectionBreakdown, diffBreakdown, passed);
}


// ============================================================================
// SECCIÓN 11: RENDERIZADO — PANTALLA DE RESULTADOS
// ============================================================================

/**
 * Renderizar la pantalla de resultados con animaciones
 */
function renderResultsScreen(result, sectionBreakdown, diffBreakdown, passed) {
    const container = getExamContainer();

    // Calcular circunferencia para el SVG del score circle
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (result.percentage / 100) * circumference;

    // Generar filas de la tabla de secciones
    const sectionRows = Object.entries(sectionBreakdown).map(([name, data]) => {
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const barColor = pct >= 70 ? 'var(--exam-green)' : pct >= 50 ? 'var(--exam-amber)' : 'var(--exam-red)';
        return `
            <tr>
                <td>${name}</td>
                <td class="cell-score">${data.total}</td>
                <td class="cell-score">${data.correct}</td>
                <td class="cell-score" style="color: ${barColor}">${pct}%
                    <div class="mini-progress-bar"><div class="fill" style="width:${pct}%; background:${barColor}"></div></div>
                </td>
            </tr>
        `;
    }).join('');

    // Generar filas de dificultad
    const diffRows = ['basico', 'intermedio', 'avanzado'].map(diff => {
        const data = diffBreakdown[diff];
        if (data.total === 0) return '';
        const pct = Math.round((data.correct / data.total) * 100);
        const label = diff.charAt(0).toUpperCase() + diff.slice(1);
        const barColor = pct >= 70 ? 'var(--exam-green)' : pct >= 50 ? 'var(--exam-amber)' : 'var(--exam-red)';
        return `
            <tr>
                <td>${label}</td>
                <td class="cell-score">${data.total}</td>
                <td class="cell-score">${data.correct}</td>
                <td class="cell-score" style="color: ${barColor}">${pct}%
                    <div class="mini-progress-bar"><div class="fill" style="width:${pct}%; background:${barColor}"></div></div>
                </td>
            </tr>
        `;
    }).join('');

    container.innerHTML = `
        <div id="resultsScreen" class="active">
            <div class="results-container">
                <div class="results-header">
                    <h2 class="${passed ? 'results-pass' : 'results-fail'}">
                        ${passed ? '🎉 ¡APROBADO!' : '❌ NO APROBADO'}
                    </h2>
                    <p style="color: var(--exam-text-secondary);">${result.modeName}</p>
                </div>

                <!-- Círculo de puntuación animado -->
                <div class="score-circle-container">
                    <div class="score-circle-wrapper">
                        <svg class="score-circle-svg" viewBox="0 0 120 120">
                            <circle class="score-circle-bg" cx="60" cy="60" r="${radius}"/>
                            <circle class="score-circle-progress ${passed ? 'pass' : 'fail'}"
                                    cx="60" cy="60" r="${radius}"
                                    stroke-dasharray="${circumference}"
                                    stroke-dashoffset="${circumference}"
                                    id="scoreCircle"/>
                        </svg>
                        <div class="score-circle-text">
                            <div class="score-percent-display ${passed ? 'results-pass' : 'results-fail'}" id="scorePercentDisplay">0%</div>
                            <div class="score-fraction-display">${result.correct}/${result.totalQuestions}</div>
                        </div>
                    </div>
                </div>

                <!-- Info del examen -->
                <div class="results-info-grid">
                    <div class="results-info-item">
                        <div class="results-info-value">${result.grade}</div>
                        <div class="results-info-label">Calificación</div>
                    </div>
                    <div class="results-info-item">
                        <div class="results-info-value">${result.correct}/${result.totalQuestions}</div>
                        <div class="results-info-label">Correctas</div>
                    </div>
                    <div class="results-info-item">
                        <div class="results-info-value">${formatDuration(result.timeTaken)}</div>
                        <div class="results-info-label">Tiempo</div>
                    </div>
                    <div class="results-info-item">
                        <div class="results-info-value">${passed ? '✓' : '✗'}</div>
                        <div class="results-info-label">${passed ? 'Aprobado (≥70%)' : 'Reprobado (<70%)'}</div>
                    </div>
                </div>

                <!-- Desglose por sección -->
                <div class="results-breakdown">
                    <h3>📊 Desglose por Sección</h3>
                    <table class="results-table">
                        <thead><tr><th>Sección</th><th>Total</th><th>Correctas</th><th>Porcentaje</th></tr></thead>
                        <tbody>${sectionRows}</tbody>
                    </table>
                </div>

                <!-- Desglose por dificultad -->
                <div class="results-breakdown">
                    <h3>🎯 Desglose por Dificultad</h3>
                    <table class="results-table">
                        <thead><tr><th>Dificultad</th><th>Total</th><th>Correctas</th><th>Porcentaje</th></tr></thead>
                        <tbody>${diffRows}</tbody>
                    </table>
                </div>

                <!-- Acciones -->
                <div class="results-actions">
                    <button class="exam-btn exam-btn-primary" onclick="renderReviewScreen()">
                        🔍 Revisar Respuestas
                    </button>
                    <button class="exam-btn exam-btn-secondary" onclick="renderStartScreen()">
                        🔄 Nuevo Examen
                    </button>
                    <button class="exam-btn exam-btn-secondary" onclick="exportResults()">
                        📥 Exportar Resultados
                    </button>
                </div>
            </div>
        </div>
    `;

    // Animar el círculo de puntuación y el contador
    requestAnimationFrame(() => {
        // Animar el trazo SVG
        const circle = document.getElementById('scoreCircle');
        if (circle) {
            setTimeout(() => {
                circle.style.strokeDashoffset = offset;
            }, 200);
        }

        // Animar el contador de porcentaje
        const percentDisplay = document.getElementById('scorePercentDisplay');
        if (percentDisplay) {
            animateCounter(percentDisplay, result.percentage, 2000, '%');
        }
    });

    // Efecto confeti si aprobó
    if (passed) {
        setTimeout(() => createSparkleEffect(), 500);
    }
}


// ============================================================================
// SECCIÓN 12: RENDERIZADO — PANTALLA DE REVISIÓN
// ============================================================================

/**
 * Renderizar la pantalla de revisión de respuestas
 */
function renderReviewScreen() {
    const container = getExamContainer();
    const letters = ['A', 'B', 'C', 'D'];

    // Generar las tarjetas de revisión
    const reviewCards = examState.questions.map((q, i) => {
        const answer = examState.answers[i];
        const isCorrect = answer && answer.correct;
        const wasAnswered = answer !== null;

        const optionsHTML = q.options.map((opt, j) => {
            let optClass = 'neutral';
            let prefix = '';

            if (j === q.correctIndex) {
                optClass = 'correct-answer';
                prefix = '✓ ';
            }

            if (wasAnswered && j === answer.selectedIndex && !isCorrect) {
                optClass = 'user-wrong';
                prefix = '✗ ';
            }

            return `<div class="review-option ${optClass}">${prefix}${letters[j]}) ${opt}</div>`;
        }).join('');

        return `
            <div class="review-question-card ${isCorrect ? 'review-correct' : 'review-incorrect'}"
                 data-correct="${isCorrect}">
                <div class="review-q-number">#${i + 1} — ${q.section || 'General'} • ${(q.difficulty || 'básico').toUpperCase()}</div>
                <div class="review-q-text">${q.question}</div>
                ${optionsHTML}
                <div class="review-explanation">
                    <strong>💡 Explicación:</strong> ${q.explanation || 'Sin explicación disponible.'}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div id="reviewScreen" class="active">
            <div class="review-container">
                <div class="review-header">
                    <h2>🔍 Revisión de Respuestas</h2>
                    <div style="display:flex; gap:10px; align-items:center;">
                        <button class="review-filter-toggle" id="filterToggle" onclick="toggleReviewFilter()">
                            ❌ Mostrar Solo Incorrectas
                        </button>
                        <button class="exam-btn exam-btn-secondary" onclick="renderResultsScreenFromReview()">
                            ← Resultados
                        </button>
                    </div>
                </div>

                <div id="reviewCards">
                    ${reviewCards}
                </div>
            </div>
        </div>
    `;
}

/**
 * Alternar filtro para mostrar solo preguntas incorrectas en revisión
 */
function toggleReviewFilter() {
    const toggle = document.getElementById('filterToggle');
    const cards = document.querySelectorAll('.review-question-card');

    toggle.classList.toggle('active');
    const showOnlyWrong = toggle.classList.contains('active');

    cards.forEach(card => {
        if (showOnlyWrong && card.dataset.correct === 'true') {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });

    toggle.textContent = showOnlyWrong ? '✓ Mostrando Solo Incorrectas' : '❌ Mostrar Solo Incorrectas';
}

/**
 * Volver a la pantalla de resultados desde la revisión.
 * Re-calcula los resultados y los muestra de nuevo.
 */
function renderResultsScreenFromReview() {
    // Recalcular resultados
    const totalQuestions = examState.questions.length;
    const correctAnswers = examState.answers.filter(a => a && a.correct).length;
    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const grade = getGrade(percentage);
    const passed = percentage >= 70;
    const timeTaken = (examState.endTime || Date.now()) - examState.startTime;

    const sectionBreakdown = {};
    examState.questions.forEach((q, i) => {
        const section = q.section || 'General';
        if (!sectionBreakdown[section]) sectionBreakdown[section] = { total: 0, correct: 0 };
        sectionBreakdown[section].total++;
        if (examState.answers[i] && examState.answers[i].correct) sectionBreakdown[section].correct++;
    });

    const diffBreakdown = { basico: { total: 0, correct: 0 }, intermedio: { total: 0, correct: 0 }, avanzado: { total: 0, correct: 0 } };
    examState.questions.forEach((q, i) => {
        const diff = q.difficulty || 'basico';
        if (diffBreakdown[diff]) {
            diffBreakdown[diff].total++;
            if (examState.answers[i] && examState.answers[i].correct) diffBreakdown[diff].correct++;
        }
    });

    renderResultsScreen(
        { mode: examState.mode, modeName: examState.modeName, totalQuestions, correct: correctAnswers, percentage, grade, timeTaken },
        sectionBreakdown, diffBreakdown, passed
    );
}


// ============================================================================
// SECCIÓN 13: EXPORTACIÓN DE RESULTADOS
// ============================================================================

/**
 * Exportar los resultados del examen como archivo de texto descargable
 */
function exportResults() {
    const totalQuestions = examState.questions.length;
    const correctAnswers = examState.answers.filter(a => a && a.correct).length;
    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const grade = getGrade(percentage);
    const passed = percentage >= 70;
    const timeTaken = (examState.endTime || Date.now()) - examState.startTime;

    // Desglose por sección
    const sectionBreakdown = {};
    examState.questions.forEach((q, i) => {
        const section = q.section || 'General';
        if (!sectionBreakdown[section]) sectionBreakdown[section] = { total: 0, correct: 0 };
        sectionBreakdown[section].total++;
        if (examState.answers[i] && examState.answers[i].correct) sectionBreakdown[section].correct++;
    });

    const letters = ['A', 'B', 'C', 'D'];
    const separator = '═'.repeat(60);
    const now = new Date().toLocaleString('es-ES');

    let txt = `
${separator}
  🛡️  RESULTADOS — EXAMEN SOC L1
${separator}

📅 Fecha:          ${now}
📋 Modo:           ${examState.modeName}
✅ Resultado:      ${passed ? 'APROBADO' : 'NO APROBADO'}
📊 Puntuación:     ${correctAnswers}/${totalQuestions} (${percentage}%)
🏆 Calificación:   ${grade}
⏱️  Tiempo:         ${formatDuration(timeTaken)}

${separator}
  DESGLOSE POR SECCIÓN
${separator}
`;

    Object.entries(sectionBreakdown).forEach(([name, data]) => {
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        txt += `\n  ${name}: ${data.correct}/${data.total} (${pct}%)`;
    });

    txt += `\n\n${separator}\n  DETALLE DE PREGUNTAS\n${separator}\n`;

    examState.questions.forEach((q, i) => {
        const answer = examState.answers[i];
        const wasAnswered = answer !== null;
        const isCorrect = wasAnswered && answer.correct;

        txt += `\n#${i + 1} [${isCorrect ? '✓ CORRECTA' : '✗ INCORRECTA'}] — ${q.section || 'General'} (${q.difficulty || 'básico'})\n`;
        txt += `   ${q.question}\n`;

        q.options.forEach((opt, j) => {
            let marker = '  ';
            if (wasAnswered && j === answer.selectedIndex && !isCorrect) marker = '✗ ';
            if (j === q.correctIndex) marker = '✓ ';
            txt += `   ${marker}${letters[j]}) ${opt}\n`;
        });

        if (wasAnswered && !isCorrect) {
            txt += `   → Tu respuesta: ${letters[answer.selectedIndex]}\n`;
            txt += `   → Correcta:     ${letters[q.correctIndex]}\n`;
        }

        if (q.explanation) {
            txt += `   💡 ${q.explanation}\n`;
        }
    });

    txt += `\n${separator}\n  Generado por SOC L1 Training Platform\n${separator}\n`;

    // Crear y descargar archivo
    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SOC-L1-Examen-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}


// ============================================================================
// SECCIÓN 14: NAVEGACIÓN POR TECLADO
// ============================================================================

/**
 * Configurar listeners de teclado para navegación rápida
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Solo actuar si el examen está visible y activo
        const container = document.getElementById('examContainer');
        if (!container || !container.classList.contains('active')) return;

        const examScreen = document.getElementById('examScreen');
        if (!examScreen || !examScreen.classList.contains('active')) return;

        // Ignorar si hay un diálogo de confirmación abierto
        if (document.getElementById('confirmOverlay')) {
            if (e.key === 'Escape') {
                document.getElementById('confirmOverlay').remove();
            }
            return;
        }

        const currentAnswer = examState.answers[examState.currentIndex];

        switch (e.key) {
            // Seleccionar opción con teclas numéricas o letras
            case '1': case 'a': case 'A':
                e.preventDefault();
                if (currentAnswer === null) selectAnswer(0);
                break;

            case '2': case 'b': case 'B':
                e.preventDefault();
                if (currentAnswer === null) selectAnswer(1);
                break;

            case '3': case 'c': case 'C':
                e.preventDefault();
                if (currentAnswer === null) selectAnswer(2);
                break;

            case '4': case 'd': case 'D':
                e.preventDefault();
                if (currentAnswer === null) selectAnswer(3);
                break;

            // Siguiente pregunta (Enter o Flecha Derecha)
            case 'Enter':
            case 'ArrowRight':
                e.preventDefault();
                if (currentAnswer !== null) goToNextQuestion();
                break;

            // Pregunta anterior (Flecha Izquierda)
            case 'ArrowLeft':
                e.preventDefault();
                goToPrevQuestion();
                break;

            // Salir del examen (Escape)
            case 'Escape':
                e.preventDefault();
                confirmQuit();
                break;
        }
    });
}


// ============================================================================
// SECCIÓN 15: INICIALIZACIÓN
// ============================================================================

/**
 * Inicializar la aplicación de examen al cargar la página.
 * Verifica si hay datos de preguntas y configura los listeners.
 */
function initExamApp() {
    // Verificar que hay preguntas disponibles
    if (allQuestions.length === 0) {
        console.warn('SOC Exam: No se encontraron preguntas. Asegúrese de que questionsBank1 y/o questionsBank2 estén definidos.');
    } else {
        console.log(`SOC Exam: ${allQuestions.length} preguntas cargadas exitosamente.`);
    }

    // Configurar navegación por teclado
    setupKeyboardNavigation();

    // Crear contenedor del examen si no existe
    getExamContainer();

    // Renderizar la pantalla inicial del examen
    openExamApp();

    console.log('🛡️ SOC L1 Exam App inicializada correctamente.');
}

/**
 * Abrir la aplicación de examen (llamar desde el glosario principal)
 */
function openExamApp() {
    renderStartScreen();
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExamApp);
} else {
    initExamApp();
}

// Exponer funciones globales necesarias para los onclick del HTML generado
window.startExamMode = startExamMode;
window.toggleSectionPicker = toggleSectionPicker;
window.goBackToGlossary = goBackToGlossary;
window.discardSavedExam = discardSavedExam;
window.resumeExam = resumeExam;
window.selectAnswer = selectAnswer;
window.goToNextQuestion = goToNextQuestion;
window.goToPrevQuestion = goToPrevQuestion;
window.goToQuestion = goToQuestion;
window.confirmQuit = confirmQuit;
window.quitExam = quitExam;
window.toggleNavPanel = toggleNavPanel;
window.renderReviewScreen = renderReviewScreen;
window.renderResultsScreenFromReview = renderResultsScreenFromReview;
window.toggleReviewFilter = toggleReviewFilter;
window.exportResults = exportResults;
window.renderStartScreen = renderStartScreen;
window.openExamApp = openExamApp;
