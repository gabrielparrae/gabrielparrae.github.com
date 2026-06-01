// ============================================================
// SOC L1 EXAM — QUESTION BANK 1
// Sections: Introducción, Fundamentos de Redes, Protocolos de Red, Modelos de Red
// Language: Spanish (technical terms in English)
// ============================================================

const questionsBank1 = [

    // ========================================================
    // SECTION: Introducción (~20 questions)
    // ========================================================
    {
        id: 1,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿Qué significa SOC?",
        options: [
            "Security Operations Center",
            "System Operations Control",
            "Secure Online Connection",
            "Server Operations Command"
        ],
        correct: 0,
        explanation: "SOC significa Security Operations Center (Centro de Operaciones de Seguridad), el equipo encargado de monitorear, detectar y responder a incidentes de ciberseguridad en tiempo real."
    },
    {
        id: 2,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿Cuál es la función principal del Analista SOC L1?",
        options: [
            "Desarrollar exploits para pruebas de penetración",
            "Realizar triage de alertas y clasificar eventos de seguridad",
            "Diseñar la arquitectura de red de la organización",
            "Gestionar los presupuestos del departamento de TI"
        ],
        correct: 1,
        explanation: "El Analista SOC L1 se encarga del triage (clasificación inicial) de alertas, determinando si son verdaderas amenazas o falsos positivos, y escalando cuando es necesario."
    },
    {
        id: 3,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿Qué es un falso positivo en el contexto del SOC?",
        options: [
            "Un ataque real que no fue detectado por el SIEM",
            "Una alerta generada por actividad que NO es maliciosa",
            "Un malware que evade la detección del antivirus",
            "Un incidente que fue escalado incorrectamente al SOC L3"
        ],
        correct: 1,
        explanation: "Un falso positivo es una alerta que indica actividad maliciosa, pero al investigarla se determina que la actividad es legítima y no representa una amenaza real."
    },
    {
        id: 4,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿A quién escala normalmente el Analista SOC L1 cuando identifica un incidente confirmado?",
        options: [
            "Directamente al CISO",
            "Al equipo de desarrollo de software",
            "Al Analista SOC L2",
            "Al departamento legal"
        ],
        correct: 2,
        explanation: "El SOC L1 escala los incidentes confirmados al SOC L2, quien realiza una investigación más profunda y determina las acciones de contención y remediación necesarias."
    },
    {
        id: 5,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿Qué es un falso negativo?",
        options: [
            "Una alerta que se genera por actividad benigna",
            "Un ataque real que NO fue detectado por las herramientas de seguridad",
            "Un evento de seguridad correctamente clasificado como benigno",
            "Una regla del SIEM que genera demasiadas alertas"
        ],
        correct: 1,
        explanation: "Un falso negativo ocurre cuando una actividad verdaderamente maliciosa NO genera una alerta, lo que es extremadamente peligroso porque el ataque pasa desapercibido."
    },
    {
        id: 6,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿Qué es un verdadero positivo (True Positive)?",
        options: [
            "Una alerta que se descarta como ruido",
            "Una alerta que identifica correctamente una actividad maliciosa real",
            "Un log que no contiene información relevante",
            "Un evento benigno clasificado como amenaza"
        ],
        correct: 1,
        explanation: "Un verdadero positivo es una alerta que identifica correctamente actividad maliciosa real. Es el resultado deseado de las detecciones del SOC."
    },
    {
        id: 7,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Cuántas fases tiene el ciclo de vida de respuesta a incidentes según NIST SP 800-61?",
        options: [
            "4 fases",
            "5 fases",
            "6 fases",
            "3 fases"
        ],
        correct: 0,
        explanation: "El NIST SP 800-61 define 4 fases: Preparación, Detección y Análisis, Contención/Erradicación/Recuperación, y Actividad Post-Incidente (Lecciones Aprendidas)."
    },
    {
        id: 8,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Cuál es la primera fase del ciclo de vida de incidentes según NIST SP 800-61?",
        options: [
            "Detección y Análisis",
            "Contención",
            "Preparación",
            "Erradicación"
        ],
        correct: 2,
        explanation: "La fase de Preparación es la primera y más importante, incluye la creación de planes, playbooks, herramientas y capacitación del equipo antes de que ocurra un incidente."
    },
    {
        id: 9,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Qué es un playbook en el contexto del SOC?",
        options: [
            "Un software de automatización de respuesta a incidentes",
            "Un documento con procedimientos paso a paso para responder a tipos específicos de alertas",
            "Un registro de todos los incidentes previos de la organización",
            "Un dashboard de visualización de métricas del SOC"
        ],
        correct: 1,
        explanation: "Un playbook es una guía documentada con pasos específicos que el analista debe seguir al recibir un tipo particular de alerta, asegurando respuestas consistentes y eficientes."
    },
    {
        id: 10,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿Qué herramienta es la fuente principal de alertas para un Analista SOC L1?",
        options: [
            "Un escáner de vulnerabilidades",
            "Un SIEM (Security Information and Event Management)",
            "Un firewall de aplicaciones web (WAF)",
            "Un sistema de backup"
        ],
        correct: 1,
        explanation: "El SIEM es la herramienta central del SOC que recopila, correlaciona y analiza logs de múltiples fuentes, generando alertas que el L1 debe investigar."
    },
    {
        id: 11,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Qué diferencia principal existe entre un SOC L2 y un SOC L1?",
        options: [
            "El L2 solo trabaja en horario diurno",
            "El L2 realiza investigación más profunda y respuesta a incidentes confirmados",
            "El L2 se encarga de monitorear las alertas del SIEM",
            "El L2 únicamente gestiona firewalls y proxies"
        ],
        correct: 1,
        explanation: "El SOC L2 toma los incidentes escalados por el L1 y realiza análisis forense más detallado, investigación profunda, contención y determina el alcance del compromiso."
    },
    {
        id: 12,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Qué función cumple un EDR (Endpoint Detection and Response) como fuente de datos del SOC?",
        options: [
            "Filtrar tráfico web malicioso en el perímetro",
            "Detectar y responder a amenazas a nivel de endpoints (estaciones de trabajo y servidores)",
            "Gestionar las contraseñas de los usuarios de la organización",
            "Realizar escaneos de vulnerabilidades de red programados"
        ],
        correct: 1,
        explanation: "Un EDR monitorea la actividad en los endpoints (computadoras, servidores), detectando comportamientos sospechosos como ejecución de procesos maliciosos, movimiento lateral y exfiltración de datos."
    },
    {
        id: 13,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿Qué es el proceso de triage en el SOC?",
        options: [
            "El proceso de instalar parches de seguridad en servidores",
            "La clasificación y priorización inicial de alertas según su severidad e impacto",
            "La eliminación de malware de un sistema comprometido",
            "La configuración de nuevas reglas en el firewall"
        ],
        correct: 1,
        explanation: "El triage es el proceso de clasificar rápidamente las alertas, evaluando su severidad, relevancia y urgencia para determinar cuáles requieren investigación inmediata y cuáles pueden ser descartadas."
    },
    {
        id: 14,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Qué fase del ciclo de vida NIST incluye la documentación de lecciones aprendidas?",
        options: [
            "Preparación",
            "Detección y Análisis",
            "Contención, Erradicación y Recuperación",
            "Actividad Post-Incidente"
        ],
        correct: 3,
        explanation: "La fase de Actividad Post-Incidente (Post-Incident Activity / Lessons Learned) se enfoca en documentar lo sucedido, qué funcionó, qué no, y cómo mejorar los procesos para futuros incidentes."
    },
    {
        id: 15,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "avanzado",
        question: "Un analista SOC L1 recibe una alerta de conexión SSH desde una IP interna hacia un servidor de producción a las 3:00 AM. El usuario asociado normalmente trabaja de 9 AM a 6 PM. ¿Cuál debería ser su primera acción?",
        options: [
            "Ignorar la alerta porque es tráfico interno",
            "Bloquear inmediatamente la IP de origen en el firewall",
            "Investigar la actividad y validar si es legítima verificando horarios y contexto, y escalar al L2 si es sospechosa",
            "Reiniciar el servidor de producción por precaución"
        ],
        correct: 2,
        explanation: "El L1 debe investigar el contexto (horario inusual, usuario, destino) antes de tomar acciones drásticas. Si la actividad es sospechosa tras la validación, debe escalar al L2 siguiendo el playbook."
    },
    {
        id: 16,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "basico",
        question: "¿Qué es un IDS (Intrusion Detection System)?",
        options: [
            "Un sistema que bloquea automáticamente el tráfico malicioso",
            "Un sistema que detecta actividad sospechosa o maliciosa en la red y genera alertas",
            "Un software de cifrado de comunicaciones",
            "Un sistema de respaldo de datos críticos"
        ],
        correct: 1,
        explanation: "Un IDS detecta tráfico o actividad sospechosa y genera alertas, pero a diferencia de un IPS (Intrusion Prevention System), no bloquea el tráfico automáticamente."
    },
    {
        id: 17,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Qué es Threat Intelligence (TI) y cómo la utiliza un SOC L1?",
        options: [
            "Es un software antivirus de última generación",
            "Son datos contextuales sobre amenazas (IoCs, TTPs) que ayudan a identificar y correlacionar actividad maliciosa",
            "Es una certificación de ciberseguridad avanzada",
            "Es el nombre de un tipo específico de firewall"
        ],
        correct: 1,
        explanation: "Threat Intelligence proporciona indicadores de compromiso (IoCs), tácticas, técnicas y procedimientos (TTPs) de atacantes, que el SOC utiliza para contextualizar alertas y detectar amenazas conocidas."
    },
    {
        id: 18,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Qué debe incluir un buen handover (traspaso de turno) entre analistas SOC?",
        options: [
            "Solo el número total de alertas del turno",
            "Incidentes abiertos, alertas pendientes de investigación, cambios recientes y contexto relevante",
            "Únicamente los falsos positivos identificados",
            "Un resumen de las noticias de ciberseguridad del día"
        ],
        correct: 1,
        explanation: "Un handover efectivo debe comunicar el estado de incidentes abiertos, alertas en investigación, cambios en la infraestructura y cualquier contexto que el siguiente turno necesite para continuar la operación."
    },
    {
        id: 19,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "avanzado",
        question: "¿Cuál de las siguientes NO es una responsabilidad típica del SOC L1?",
        options: [
            "Monitorear alertas del SIEM",
            "Realizar triage y clasificación de eventos",
            "Desarrollar firmas de detección personalizadas y realizar threat hunting avanzado",
            "Documentar y escalar incidentes confirmados"
        ],
        correct: 2,
        explanation: "El desarrollo de firmas de detección personalizadas y el threat hunting avanzado son responsabilidades del SOC L3 o del equipo de ingeniería de detección. El L1 se enfoca en monitoreo, triage y escalación."
    },
    {
        id: 20,
        section: "Introducción",
        sectionId: "introduccion",
        difficulty: "intermedio",
        question: "¿Qué fase del ciclo NIST incluye la identificación y el aislamiento de sistemas comprometidos?",
        options: [
            "Preparación",
            "Detección y Análisis",
            "Contención, Erradicación y Recuperación",
            "Actividad Post-Incidente"
        ],
        correct: 2,
        explanation: "La contención (parte de la tercera fase) implica aislar los sistemas comprometidos para evitar la propagación del ataque, seguida por la erradicación de la amenaza y la recuperación de los sistemas."
    },

    // ========================================================
    // SECTION: Fundamentos de Redes - Conceptos (~35 questions)
    // ========================================================
    {
        id: 21,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Cuál es el rango de direcciones IP privadas de Clase A según RFC 1918?",
        options: [
            "172.16.0.0 - 172.31.255.255",
            "192.168.0.0 - 192.168.255.255",
            "10.0.0.0 - 10.255.255.255",
            "169.254.0.0 - 169.254.255.255"
        ],
        correct: 2,
        explanation: "El rango de Clase A privado definido en RFC 1918 es 10.0.0.0 a 10.255.255.255 (/8), proporcionando más de 16 millones de direcciones para redes internas grandes."
    },
    {
        id: 22,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Cuántos bits tiene una dirección IPv4?",
        options: [
            "16 bits",
            "64 bits",
            "128 bits",
            "32 bits"
        ],
        correct: 3,
        explanation: "Una dirección IPv4 tiene 32 bits divididos en 4 octetos de 8 bits cada uno, representados en formato decimal separados por puntos (ej: 192.168.1.1)."
    },
    {
        id: 23,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Cuántos bits tiene una dirección IPv6?",
        options: [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        correct: 2,
        explanation: "Una dirección IPv6 tiene 128 bits, representados en formato hexadecimal separados por dos puntos (ej: 2001:0db8::1), proporcionando un espacio de direcciones enormemente mayor que IPv4."
    },
    {
        id: 24,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Cuántos hosts usables tiene una red con máscara /24?",
        options: [
            "256",
            "254",
            "252",
            "128"
        ],
        correct: 1,
        explanation: "Una red /24 tiene 256 direcciones (2^8), pero se restan 2: la dirección de red y la de broadcast, dejando 254 hosts usables."
    },
    {
        id: 25,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Cuántos hosts usables tiene una red con máscara /28?",
        options: [
            "16",
            "30",
            "14",
            "12"
        ],
        correct: 2,
        explanation: "Una red /28 tiene 16 direcciones (2^4), menos 2 (red y broadcast) = 14 hosts usables. Este tipo de subred se usa comúnmente para segmentos DMZ pequeños."
    },
    {
        id: 26,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Cuántos hosts usables tiene una red con máscara /30?",
        options: [
            "4",
            "6",
            "2",
            "1"
        ],
        correct: 2,
        explanation: "Una red /30 tiene 4 direcciones (2^2), menos 2 (red y broadcast) = 2 hosts usables. Se usa típicamente para enlaces punto a punto entre routers."
    },
    {
        id: 27,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué tipo de dirección es una /32?",
        options: [
            "Una subred con 2 hosts",
            "Una dirección de broadcast",
            "Una dirección de host único (host route)",
            "Una red completa de Clase C"
        ],
        correct: 2,
        explanation: "Una máscara /32 representa un único host (1 dirección). Se utiliza comúnmente en reglas de firewall, listas de acceso y tablas de enrutamiento para referirse a una IP específica."
    },
    {
        id: 28,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Qué dirección IP se conoce como loopback?",
        options: [
            "10.0.0.1",
            "192.168.1.1",
            "127.0.0.1",
            "0.0.0.0"
        ],
        correct: 2,
        explanation: "La dirección 127.0.0.1 (localhost) es la dirección de loopback que permite a un dispositivo comunicarse consigo mismo, utilizada comúnmente para pruebas y diagnósticos."
    },
    {
        id: 29,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué rango de IP indica una dirección APIPA (Automatic Private IP Addressing)?",
        options: [
            "10.0.0.0/8",
            "172.16.0.0/12",
            "192.168.0.0/16",
            "169.254.0.0/16"
        ],
        correct: 3,
        explanation: "Las direcciones APIPA (169.254.x.x) se asignan automáticamente cuando un dispositivo no puede contactar un servidor DHCP. Ver esta IP en un endpoint puede indicar un problema de red."
    },
    {
        id: 30,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Cuántos bits tiene una dirección MAC?",
        options: [
            "32 bits",
            "64 bits",
            "48 bits",
            "128 bits"
        ],
        correct: 2,
        explanation: "Una dirección MAC (Media Access Control) tiene 48 bits (6 bytes), representados en hexadecimal (ej: AA:BB:CC:DD:EE:FF). Los primeros 24 bits son el OUI del fabricante."
    },
    {
        id: 31,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué identifica el OUI (Organizationally Unique Identifier) en una dirección MAC?",
        options: [
            "La ubicación geográfica del dispositivo",
            "El fabricante del dispositivo de red",
            "El tipo de sistema operativo instalado",
            "El número de serie del hardware"
        ],
        correct: 1,
        explanation: "El OUI son los primeros 3 bytes (24 bits) de una dirección MAC y están asignados por la IEEE al fabricante del hardware. Esto permite identificar el vendor del dispositivo."
    },
    {
        id: 32,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Cuál es el rango de IP privadas de Clase B según RFC 1918?",
        options: [
            "10.0.0.0 - 10.255.255.255",
            "172.16.0.0 - 172.31.255.255",
            "192.168.0.0 - 192.168.255.255",
            "172.0.0.0 - 172.255.255.255"
        ],
        correct: 1,
        explanation: "El rango de Clase B privado es 172.16.0.0 a 172.31.255.255 (/12). Es importante no confundir: no todo el rango 172.x.x.x es privado, solo de 172.16 a 172.31."
    },
    {
        id: 33,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Cuál es el rango de IP privadas de Clase C según RFC 1918?",
        options: [
            "10.0.0.0 - 10.255.255.255",
            "172.16.0.0 - 172.31.255.255",
            "192.168.0.0 - 192.168.255.255",
            "224.0.0.0 - 239.255.255.255"
        ],
        correct: 2,
        explanation: "El rango de Clase C privado es 192.168.0.0 a 192.168.255.255 (/16). Es el rango más comúnmente utilizado en redes domésticas y pequeñas oficinas."
    },
    {
        id: 34,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué es NAT (Network Address Translation)?",
        options: [
            "Un protocolo de cifrado de datos en tránsito",
            "Un mecanismo que traduce direcciones IP privadas a públicas para permitir acceso a Internet",
            "Un sistema de detección de intrusos basado en red",
            "Un protocolo de asignación automática de direcciones IP"
        ],
        correct: 1,
        explanation: "NAT traduce direcciones IP privadas (internas) a direcciones IP públicas (externas), permitiendo que múltiples dispositivos de una red interna compartan una o pocas IPs públicas para acceder a Internet."
    },
    {
        id: 35,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué tipo de NAT permite que múltiples dispositivos internos compartan una sola IP pública usando diferentes puertos?",
        options: [
            "Static NAT",
            "Dynamic NAT",
            "PAT (Port Address Translation)",
            "Reverse NAT"
        ],
        correct: 2,
        explanation: "PAT (también conocido como NAT Overload) usa números de puerto para diferenciar las conexiones de múltiples hosts internos que comparten una sola IP pública. Es el tipo de NAT más utilizado."
    },
    {
        id: 36,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Qué tipo de registro DNS asocia un nombre de dominio con una dirección IPv4?",
        options: [
            "Registro AAAA",
            "Registro CNAME",
            "Registro A",
            "Registro MX"
        ],
        correct: 2,
        explanation: "El registro A (Address) mapea un nombre de dominio a una dirección IPv4. Por ejemplo, ejemplo.com → 93.184.216.34."
    },
    {
        id: 37,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Qué tipo de registro DNS asocia un nombre de dominio con una dirección IPv6?",
        options: [
            "Registro A",
            "Registro AAAA",
            "Registro PTR",
            "Registro NS"
        ],
        correct: 1,
        explanation: "El registro AAAA (quad-A) mapea un nombre de dominio a una dirección IPv6. Es el equivalente del registro A para el protocolo IPv6."
    },
    {
        id: 38,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué tipo de registro DNS se utiliza para identificar servidores de correo electrónico?",
        options: [
            "Registro A",
            "Registro CNAME",
            "Registro MX",
            "Registro TXT"
        ],
        correct: 2,
        explanation: "El registro MX (Mail Exchange) indica los servidores responsables de recibir correo electrónico para un dominio, y se usan con una prioridad para definir el orden de preferencia."
    },
    {
        id: 39,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué tipo de registro DNS se usa para resolución inversa (IP a nombre de dominio)?",
        options: [
            "Registro A",
            "Registro CNAME",
            "Registro NS",
            "Registro PTR"
        ],
        correct: 3,
        explanation: "El registro PTR (Pointer) permite la resolución inversa, traduciendo una dirección IP a un nombre de dominio. Se usa comúnmente para verificar la identidad de servidores de correo."
    },
    {
        id: 40,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿En qué puerto opera DNS normalmente?",
        options: [
            "TCP/80",
            "UDP/53",
            "TCP/443",
            "UDP/67"
        ],
        correct: 1,
        explanation: "DNS opera en el puerto UDP/53 para consultas estándar. También usa TCP/53 para transferencias de zona (AXFR) y respuestas que exceden los 512 bytes."
    },
    {
        id: 41,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "avanzado",
        question: "¿Qué es DNS tunneling y por qué es relevante para el SOC?",
        options: [
            "Un método para acelerar las consultas DNS mediante caché",
            "Una técnica que encapsula datos no-DNS dentro de consultas/respuestas DNS para exfiltrar datos o establecer canales C2",
            "Un proceso de cifrado de consultas DNS usando DNSSEC",
            "Una configuración de DNS para balanceo de carga entre servidores"
        ],
        correct: 1,
        explanation: "DNS tunneling es una técnica donde los atacantes codifican datos en consultas DNS para exfiltrar información o comunicarse con servidores C2, evadiendo firewalls ya que el tráfico DNS suele estar permitido."
    },
    {
        id: 42,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "avanzado",
        question: "¿Qué es un DGA (Domain Generation Algorithm) y cómo afecta al SOC?",
        options: [
            "Un algoritmo para optimizar la resolución DNS en redes grandes",
            "Un algoritmo que genera automáticamente dominios pseudoaleatorios para comunicación C2 del malware",
            "Un protocolo de seguridad para validar certificados DNS",
            "Un método de distribución geográfica de servidores DNS"
        ],
        correct: 1,
        explanation: "Un DGA genera dominios aparentemente aleatorios (ej: xk3m9f2.com) que el malware usa para contactar servidores C2. Los analistas SOC deben buscar patrones de consultas DNS con alta entropía en sus dominios."
    },
    {
        id: 43,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "avanzado",
        question: "¿Qué es fast flux en el contexto de DNS?",
        options: [
            "Un protocolo DNS de alta velocidad",
            "Una técnica que cambia rápidamente las IPs asociadas a un dominio para evadir detección y bloqueo",
            "Un tipo de caché DNS agresivo",
            "Un método de compresión de paquetes DNS"
        ],
        correct: 1,
        explanation: "Fast flux es una técnica donde los atacantes cambian frecuentemente los registros A de un dominio para apuntar a diferentes IPs (usualmente bots comprometidos), dificultando el rastreo y bloqueo de la infraestructura maliciosa."
    },
    {
        id: 44,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué es typosquatting en relación con DNS?",
        options: [
            "Un error en la configuración del servidor DNS",
            "El registro de dominios con errores tipográficos similares a sitios legítimos para engañar a usuarios",
            "Un ataque de envenenamiento de caché DNS",
            "La creación de subdominios maliciosos en un dominio legítimo comprometido"
        ],
        correct: 1,
        explanation: "Typosquatting consiste en registrar dominios similares a los legítimos (ej: gooogle.com, g00gle.com) para capturar tráfico de usuarios que cometen errores tipográficos y dirigirlos a sitios de phishing."
    },
    {
        id: 45,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Qué protocolo resuelve direcciones IP a direcciones MAC?",
        options: [
            "DNS",
            "DHCP",
            "ARP",
            "ICMP"
        ],
        correct: 2,
        explanation: "ARP (Address Resolution Protocol) resuelve direcciones IP a direcciones MAC dentro de una red local. Un dispositivo envía un ARP Request broadcast y recibe un ARP Reply unicast."
    },
    {
        id: 46,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué es un ataque de ARP Spoofing?",
        options: [
            "Un ataque que satura la tabla ARP de un switch con direcciones falsas",
            "Un ataque donde el atacante envía respuestas ARP falsas para asociar su MAC con la IP de otro dispositivo (como el gateway)",
            "Un ataque que explota vulnerabilidades en el protocolo DHCP",
            "Un ataque de denegación de servicio contra servidores DNS"
        ],
        correct: 1,
        explanation: "En ARP Spoofing, el atacante envía respuestas ARP falsificadas para que el tráfico destinado a otra IP (como el gateway) se envíe a su MAC, permitiendo un ataque Man-in-the-Middle (MITM)."
    },
    {
        id: 47,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué proceso utiliza DHCP para asignar una dirección IP a un cliente? (en orden)",
        options: [
            "Request, Offer, Discover, Acknowledge",
            "Discover, Offer, Request, Acknowledge (DORA)",
            "Offer, Request, Acknowledge, Discover",
            "Discover, Acknowledge, Request, Offer"
        ],
        correct: 1,
        explanation: "El proceso DHCP DORA: 1) Discover - el cliente busca servidores DHCP, 2) Offer - el servidor ofrece una IP, 3) Request - el cliente solicita la IP ofrecida, 4) Acknowledge - el servidor confirma la asignación."
    },
    {
        id: 48,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿En qué puertos opera el protocolo DHCP?",
        options: [
            "TCP 80 y TCP 443",
            "UDP 67 (servidor) y UDP 68 (cliente)",
            "UDP 53 y TCP 53",
            "TCP 25 y TCP 587"
        ],
        correct: 1,
        explanation: "DHCP usa UDP 67 para el servidor y UDP 68 para el cliente. Al ser un protocolo UDP, no establece conexión previa antes de enviar datos."
    },
    {
        id: 49,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué es una VLAN y cuál es su propósito principal en seguridad?",
        options: [
            "Una red privada virtual que cifra todo el tráfico",
            "Una segmentación lógica de la red que aísla dominios de broadcast para limitar el movimiento lateral",
            "Un protocolo de autenticación de red inalámbrica",
            "Un tipo de firewall basado en la nube"
        ],
        correct: 1,
        explanation: "Una VLAN (Virtual LAN) segmenta lógicamente la red en diferentes dominios de broadcast, limitando la comunicación entre segmentos y dificultando el movimiento lateral de un atacante dentro de la red."
    },
    {
        id: 50,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "avanzado",
        question: "¿Qué es un ataque de VLAN Hopping?",
        options: [
            "Un ataque que desactiva todas las VLANs del switch",
            "Un ataque que permite a un atacante acceder a tráfico de una VLAN diferente a la suya, típicamente mediante switch spoofing o double tagging",
            "Un ataque de fuerza bruta contra la contraseña del switch",
            "Un ataque que intercepta el tráfico entre dos VLANs legítimas"
        ],
        correct: 1,
        explanation: "VLAN Hopping permite al atacante saltar entre VLANs usando técnicas como switch spoofing (haciéndose pasar por un trunk) o double tagging (añadiendo dos tags 802.1Q para cruzar VLANs)."
    },
    {
        id: 51,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Qué flag TCP se usa para INICIAR una conexión (3-way handshake)?",
        options: [
            "ACK",
            "FIN",
            "SYN",
            "RST"
        ],
        correct: 2,
        explanation: "El flag SYN (Synchronize) inicia una conexión TCP. El 3-way handshake es: 1) Cliente envía SYN, 2) Servidor responde SYN-ACK, 3) Cliente envía ACK."
    },
    {
        id: 52,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "basico",
        question: "¿Cuál es la secuencia correcta del 3-way handshake de TCP?",
        options: [
            "ACK → SYN → SYN-ACK",
            "SYN → SYN-ACK → ACK",
            "SYN → ACK → SYN-ACK",
            "SYN-ACK → SYN → ACK"
        ],
        correct: 1,
        explanation: "El 3-way handshake de TCP es: 1) El cliente envía SYN, 2) El servidor responde con SYN-ACK, 3) El cliente confirma con ACK. Esto establece una conexión fiable entre ambos extremos."
    },
    {
        id: 53,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué es un ataque SYN Flood?",
        options: [
            "Un ataque que envía paquetes FIN masivos al servidor",
            "Un ataque de denegación de servicio que envía miles de paquetes SYN sin completar el handshake, agotando los recursos del servidor",
            "Un ataque que intercepta los paquetes SYN-ACK para robar sesiones",
            "Un ataque que modifica los números de secuencia TCP"
        ],
        correct: 1,
        explanation: "Un SYN Flood envía miles de paquetes SYN sin completar el 3-way handshake (no envía el ACK final), dejando conexiones medio abiertas que agotan la tabla de conexiones del servidor (ataque DoS)."
    },
    {
        id: 54,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "avanzado",
        question: "Un analista observa en el SIEM miles de conexiones TCP desde una misma IP que solo envían paquetes SYN a diferentes puertos del servidor, sin completar el handshake. ¿Qué tipo de actividad es?",
        options: [
            "Un ataque de fuerza bruta SSH",
            "Un escaneo de puertos SYN (SYN scan / half-open scan)",
            "Una transferencia de archivos FTP normal",
            "Un ataque de DNS amplification"
        ],
        correct: 1,
        explanation: "Un SYN scan (también llamado half-open scan) envía paquetes SYN a múltiples puertos y analiza las respuestas (SYN-ACK = abierto, RST = cerrado) sin completar el handshake, siendo una técnica común de reconocimiento."
    },
    {
        id: 55,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "avanzado",
        question: "¿Qué flags TCP están activos en un escaneo XMAS scan?",
        options: [
            "SYN, ACK y RST",
            "FIN, PSH y URG",
            "SYN y FIN",
            "ACK y RST"
        ],
        correct: 1,
        explanation: "Un XMAS scan envía paquetes con los flags FIN, PSH y URG activados. Se llama así porque los flags 'iluminan' el paquete como un árbol de Navidad. Un puerto cerrado responde con RST; uno abierto no responde."
    },
    {
        id: 56,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "avanzado",
        question: "¿Qué flags TCP están activos en un NULL scan?",
        options: [
            "Solo SYN",
            "FIN, PSH y URG",
            "Ningún flag está activo",
            "Solo ACK"
        ],
        correct: 2,
        explanation: "Un NULL scan envía paquetes TCP sin ningún flag activo. Al igual que el XMAS scan, un puerto cerrado responde con RST mientras que un puerto abierto no responde, permitiendo la enumeración de puertos."
    },
    {
        id: 57,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué flag TCP indica un cierre abrupto de la conexión?",
        options: [
            "FIN",
            "ACK",
            "RST",
            "PSH"
        ],
        correct: 2,
        explanation: "El flag RST (Reset) indica un cierre abrupto e inmediato de la conexión TCP, sin el proceso normal de cierre (FIN/ACK). Puede indicar que un puerto está cerrado o que se detectó un paquete inesperado."
    },
    {
        id: 58,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué función tiene el flag PSH en TCP?",
        options: [
            "Resetear la conexión abruptamente",
            "Indicar al receptor que procese los datos inmediatamente sin esperar a que se llene el buffer",
            "Iniciar una nueva conexión TCP",
            "Finalizar una conexión TCP de forma ordenada"
        ],
        correct: 1,
        explanation: "El flag PSH (Push) indica al receptor que debe entregar los datos a la aplicación inmediatamente sin esperar a que el buffer se llene. Se usa comúnmente en conexiones interactivas como SSH o Telnet."
    },
    {
        id: 59,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué función tiene el gateway (puerta de enlace) predeterminado en una red?",
        options: [
            "Asignar direcciones IP automáticamente a los dispositivos",
            "Enrutar el tráfico que va dirigido a redes fuera de la subred local",
            "Filtrar todo el tráfico malicioso de la red",
            "Resolver nombres de dominio a direcciones IP"
        ],
        correct: 1,
        explanation: "El gateway predeterminado es la dirección del router que un dispositivo utiliza para enviar tráfico a destinos fuera de su subred local. Sin un gateway, el dispositivo solo puede comunicarse dentro de su red."
    },
    {
        id: 60,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué tipo de registro DNS se utiliza para crear alias de un dominio a otro?",
        options: [
            "Registro A",
            "Registro CNAME",
            "Registro MX",
            "Registro NS"
        ],
        correct: 1,
        explanation: "El registro CNAME (Canonical Name) crea un alias que apunta un dominio a otro dominio. Por ejemplo, www.ejemplo.com (CNAME) → ejemplo.com (A) → IP."
    },
    {
        id: 61,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Para qué se utilizan los registros TXT de DNS en seguridad?",
        options: [
            "Solo para almacenar comentarios del administrador",
            "Para verificación de dominio y registros de seguridad de correo como SPF, DKIM y DMARC",
            "Para definir el tiempo de vida (TTL) de las consultas DNS",
            "Para establecer la prioridad de los servidores de correo"
        ],
        correct: 1,
        explanation: "Los registros TXT se usan para SPF (validar remitentes autorizados), DKIM (firma digital de correos) y DMARC (política de autenticación de correo), siendo esenciales para la seguridad del correo electrónico."
    },
    {
        id: 62,
        section: "Fundamentos de Redes",
        sectionId: "redes-conceptos",
        difficulty: "intermedio",
        question: "¿Qué tipo de registro DNS identifica los servidores de nombres autoritativos para una zona?",
        options: [
            "Registro A",
            "Registro PTR",
            "Registro NS",
            "Registro SOA"
        ],
        correct: 2,
        explanation: "El registro NS (Name Server) indica qué servidores DNS son autoritativos para una zona específica, es decir, qué servidores tienen la información oficial sobre ese dominio."
    },

    // ========================================================
    // SECTION: Protocolos de Red (~35 questions)
    // ========================================================
    {
        id: 63,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿Cuál es la diferencia principal entre TCP y UDP?",
        options: [
            "TCP es más rápido que UDP",
            "TCP es orientado a conexión y garantiza la entrega; UDP no es orientado a conexión y no garantiza la entrega",
            "UDP usa puertos y TCP no",
            "TCP solo se usa para correo electrónico y UDP solo para video"
        ],
        correct: 1,
        explanation: "TCP (Transmission Control Protocol) es orientado a conexión, usa 3-way handshake y garantiza la entrega ordenada de datos. UDP (User Datagram Protocol) no establece conexión y no garantiza entrega, siendo más rápido pero menos fiable."
    },
    {
        id: 64,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿En qué puerto opera HTTP?",
        options: [
            "443",
            "22",
            "80",
            "8080"
        ],
        correct: 2,
        explanation: "HTTP (HyperText Transfer Protocol) opera en el puerto TCP 80 por defecto. El tráfico HTTP no está cifrado, por lo que toda la información viaja en texto plano."
    },
    {
        id: 65,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿En qué puerto opera HTTPS?",
        options: [
            "80",
            "443",
            "8443",
            "8080"
        ],
        correct: 1,
        explanation: "HTTPS opera en el puerto TCP 443 por defecto. Utiliza TLS (Transport Layer Security) para cifrar la comunicación, protegiendo la confidencialidad e integridad de los datos."
    },
    {
        id: 66,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿En qué puerto opera SSH?",
        options: [
            "21",
            "23",
            "22",
            "25"
        ],
        correct: 2,
        explanation: "SSH (Secure Shell) opera en el puerto TCP 22. Proporciona acceso remoto cifrado a sistemas, a diferencia de Telnet que transmite todo en texto plano."
    },
    {
        id: 67,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué código de estado HTTP indica que el acceso está prohibido (Forbidden)?",
        options: [
            "401 Unauthorized",
            "403 Forbidden",
            "404 Not Found",
            "400 Bad Request"
        ],
        correct: 1,
        explanation: "El código 403 Forbidden indica que el servidor entiende la solicitud pero la rechaza porque el cliente no tiene permisos para acceder al recurso, independientemente de la autenticación."
    },
    {
        id: 68,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué código de estado HTTP indica que se requiere autenticación?",
        options: [
            "400 Bad Request",
            "403 Forbidden",
            "401 Unauthorized",
            "500 Internal Server Error"
        ],
        correct: 2,
        explanation: "El código 401 Unauthorized indica que el cliente debe autenticarse para obtener acceso al recurso. Múltiples intentos 401 desde una misma IP pueden indicar un ataque de fuerza bruta."
    },
    {
        id: 69,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué código HTTP indica un error interno del servidor?",
        options: [
            "400",
            "404",
            "500",
            "503"
        ],
        correct: 2,
        explanation: "El código 500 Internal Server Error indica un fallo inesperado en el servidor. Desde la perspectiva del SOC, un aumento repentino de errores 500 podría indicar un ataque o una explotación de vulnerabilidad."
    },
    {
        id: 70,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué código HTTP 503 indica?",
        options: [
            "Recurso no encontrado",
            "Servicio no disponible (Service Unavailable)",
            "Solicitud incorrecta",
            "Redirección permanente"
        ],
        correct: 1,
        explanation: "El código 503 Service Unavailable indica que el servidor no puede manejar la solicitud temporalmente, normalmente por sobrecarga o mantenimiento. Un aumento repentino podría indicar un ataque DDoS."
    },
    {
        id: 71,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué vulnerabilidad de SMB fue explotada por el ransomware WannaCry?",
        options: [
            "Heartbleed (CVE-2014-0160)",
            "BlueKeep (CVE-2019-0708)",
            "EternalBlue (CVE-2017-0144)",
            "Log4Shell (CVE-2021-44228)"
        ],
        correct: 2,
        explanation: "EternalBlue (CVE-2017-0144) es una vulnerabilidad en SMBv1 de Windows que permite ejecución remota de código. Fue explotada por WannaCry y NotPetya en 2017, causando daños masivos a nivel mundial."
    },
    {
        id: 72,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿En qué puerto opera SMB (Server Message Block)?",
        options: [
            "Port 22",
            "Port 3389",
            "Port 445",
            "Port 443"
        ],
        correct: 2,
        explanation: "SMB opera principalmente en el puerto TCP 445. Históricamente también usaba el puerto 139 (NetBIOS over TCP). SMB se utiliza para compartir archivos, impresoras y otros recursos en redes Windows."
    },
    {
        id: 73,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿En qué puerto opera RDP (Remote Desktop Protocol)?",
        options: [
            "Port 22",
            "Port 445",
            "Port 3389",
            "Port 8080"
        ],
        correct: 2,
        explanation: "RDP opera en el puerto TCP 3389 por defecto. Es un protocolo de acceso remoto de Windows que es frecuentemente objetivo de ataques de fuerza bruta y credential spraying."
    },
    {
        id: 74,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué vulnerabilidad crítica de RDP fue conocida como BlueKeep?",
        options: [
            "CVE-2017-0144",
            "CVE-2019-0708",
            "CVE-2021-44228",
            "CVE-2014-0160"
        ],
        correct: 1,
        explanation: "BlueKeep (CVE-2019-0708) es una vulnerabilidad crítica de RDP que permite ejecución remota de código sin autenticación en sistemas Windows antiguos. Es 'wormable', lo que significa que puede propagarse automáticamente."
    },
    {
        id: 75,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué ataque Kerberos implica solicitar Service Tickets (TGS) y crackearlos offline?",
        options: [
            "Pass-the-Ticket",
            "Golden Ticket",
            "Kerberoasting",
            "AS-REP Roasting"
        ],
        correct: 2,
        explanation: "Kerberoasting consiste en solicitar Service Tickets (TGS) para cuentas de servicio con SPN y luego intentar crackear el hash offline, ya que el ticket está cifrado con la contraseña de la cuenta de servicio."
    },
    {
        id: 76,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "avanzado",
        question: "¿Qué ataque Kerberos permite a un atacante generar tickets TGT falsos para cualquier usuario, incluyendo administradores de dominio?",
        options: [
            "Kerberoasting",
            "AS-REP Roasting",
            "Silver Ticket",
            "Golden Ticket"
        ],
        correct: 3,
        explanation: "Un Golden Ticket se crea cuando el atacante obtiene el hash NTLM de la cuenta KRBTGT. Con este hash puede forjar TGTs para cualquier usuario del dominio, obteniendo acceso persistente y total."
    },
    {
        id: 77,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "avanzado",
        question: "¿Qué diferencia principal existe entre un Golden Ticket y un Silver Ticket?",
        options: [
            "El Golden Ticket ataca el KDC; el Silver Ticket ataca servicios específicos sin contactar al KDC",
            "No hay diferencia, son nombres diferentes para el mismo ataque",
            "El Silver Ticket es más peligroso que el Golden Ticket",
            "El Golden Ticket funciona solo en Linux y el Silver Ticket solo en Windows"
        ],
        correct: 0,
        explanation: "Un Golden Ticket forja TGTs (requiere hash de KRBTGT) y da acceso a todo el dominio. Un Silver Ticket forja Service Tickets para servicios específicos (requiere hash de la cuenta de servicio) sin contactar al KDC."
    },
    {
        id: 78,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿En qué puerto opera Kerberos?",
        options: [
            "Port 389",
            "Port 636",
            "Port 88",
            "Port 464"
        ],
        correct: 2,
        explanation: "Kerberos opera en el puerto TCP/UDP 88. Es el protocolo de autenticación predeterminado en entornos Active Directory de Windows."
    },
    {
        id: 79,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué es AS-REP Roasting?",
        options: [
            "Un ataque que roba los tickets TGT de la memoria del controlador de dominio",
            "Un ataque contra cuentas que tienen deshabilitada la pre-autenticación de Kerberos, permitiendo crackear su hash offline",
            "Un ataque que intercepta comunicaciones LDAP no cifradas",
            "Un ataque de fuerza bruta contra el servicio Kerberos"
        ],
        correct: 1,
        explanation: "AS-REP Roasting ataca cuentas con la pre-autenticación de Kerberos deshabilitada. Sin pre-auth, cualquiera puede solicitar un AS-REP cifrado con el hash de la contraseña del usuario y crackearlo offline."
    },
    {
        id: 80,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "avanzado",
        question: "¿Qué es un ataque Pass-the-Ticket en Kerberos?",
        options: [
            "Crackear tickets Kerberos offline mediante fuerza bruta",
            "Robar y reutilizar un ticket Kerberos (TGT o TGS) capturado de la memoria para autenticarse sin contraseña",
            "Generar un Golden Ticket desde cero",
            "Interceptar el tráfico entre el cliente y el KDC"
        ],
        correct: 1,
        explanation: "Pass-the-Ticket consiste en extraer tickets Kerberos de la memoria de un sistema (usando herramientas como Mimikatz) y reutilizarlos en otro sistema para autenticarse sin conocer la contraseña."
    },
    {
        id: 81,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿Qué protocolo transmite credenciales en texto plano y opera en el puerto 23?",
        options: [
            "SSH",
            "Telnet",
            "FTP",
            "HTTPS"
        ],
        correct: 1,
        explanation: "Telnet (puerto 23) transmite toda la información, incluyendo credenciales, en texto plano sin cifrado. Por esta razón se considera inseguro y debe reemplazarse por SSH."
    },
    {
        id: 82,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿En qué puertos opera FTP (File Transfer Protocol)?",
        options: [
            "Puerto 22 (control) y Puerto 23 (datos)",
            "Puerto 20 (datos) y Puerto 21 (control)",
            "Puerto 80 (control) y Puerto 443 (datos)",
            "Puerto 25 (control) y Puerto 110 (datos)"
        ],
        correct: 1,
        explanation: "FTP usa el puerto TCP 21 para el canal de control (comandos) y el puerto TCP 20 para el canal de datos (transferencia de archivos). FTP transmite credenciales y datos en texto plano."
    },
    {
        id: 83,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Por qué FTP es considerado un riesgo de seguridad desde la perspectiva del SOC?",
        options: [
            "Porque es un protocolo demasiado lento",
            "Porque transmite credenciales y datos en texto plano, facilitando la interceptación y posible exfiltración de datos",
            "Porque solo funciona en redes locales",
            "Porque no permite transferir archivos grandes"
        ],
        correct: 1,
        explanation: "FTP es un riesgo porque no cifra las credenciales ni los datos transferidos. Un atacante puede capturar credenciales con un sniffer, y el protocolo puede usarse para exfiltrar datos sensibles."
    },
    {
        id: 84,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué herramienta se usa comúnmente para ejecutar comandos remotos a través de SMB en entornos Windows?",
        options: [
            "Nmap",
            "PsExec",
            "Wireshark",
            "Nessus"
        ],
        correct: 1,
        explanation: "PsExec (de Sysinternals) permite ejecutar procesos remotamente en otros sistemas Windows a través de SMB. Es una herramienta legítima que los atacantes abusan frecuentemente para movimiento lateral."
    },
    {
        id: 85,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "avanzado",
        question: "¿Qué es un ataque Pass-the-Hash y cómo se relaciona con SMB?",
        options: [
            "Un ataque que descifra los hashes de contraseñas almacenados en Active Directory",
            "Un ataque donde se usa el hash NTLM de una contraseña directamente para autenticarse vía SMB sin conocer la contraseña en texto plano",
            "Un ataque de inyección SQL contra servidores de archivos",
            "Un ataque de denegación de servicio contra puertos SMB"
        ],
        correct: 1,
        explanation: "Pass-the-Hash permite autenticarse en servicios como SMB usando directamente el hash NTLM de la contraseña, sin necesidad de crackearlo. Es una técnica clave de movimiento lateral en entornos Windows."
    },
    {
        id: 86,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué puertos utiliza LDAP y su versión segura (LDAPS)?",
        options: [
            "LDAP: 389 / LDAPS: 636",
            "LDAP: 445 / LDAPS: 443",
            "LDAP: 88 / LDAPS: 464",
            "LDAP: 636 / LDAPS: 389"
        ],
        correct: 0,
        explanation: "LDAP (Lightweight Directory Access Protocol) opera en el puerto 389 sin cifrado, y LDAPS (LDAP Secure) opera en el puerto 636 con cifrado TLS. LDAP se usa para consultar directorios como Active Directory."
    },
    {
        id: 87,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué versión de SNMP es considerada segura?",
        options: [
            "SNMPv1",
            "SNMPv2c",
            "SNMPv3",
            "Todas las versiones son igualmente seguras"
        ],
        correct: 2,
        explanation: "SNMPv3 es la única versión segura ya que soporta autenticación y cifrado. SNMPv1 y v2c usan community strings (como contraseñas) en texto plano, siendo vulnerables a interceptación."
    },
    {
        id: 88,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿En qué puertos opera SNMP?",
        options: [
            "UDP 161 (agente) y UDP 162 (traps/notificaciones)",
            "TCP 80 y TCP 443",
            "UDP 53 y TCP 53",
            "TCP 389 y TCP 636"
        ],
        correct: 0,
        explanation: "SNMP usa UDP 161 para consultas al agente (GET/SET) y UDP 162 para recibir traps/notificaciones del agente. Los community strings por defecto ('public'/'private') deben cambiarse siempre."
    },
    {
        id: 89,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "basico",
        question: "¿Qué protocolo se usa para enviar correo electrónico?",
        options: [
            "POP3",
            "IMAP",
            "SMTP",
            "HTTP"
        ],
        correct: 2,
        explanation: "SMTP (Simple Mail Transfer Protocol) se usa para enviar correo electrónico. Opera en los puertos 25 (relay entre servidores), 465 (SMTPS) y 587 (submission con STARTTLS)."
    },
    {
        id: 90,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Por qué el tráfico HTTPS puede representar un desafío para el SOC?",
        options: [
            "Porque HTTPS es un protocolo antiguo y lento",
            "Porque el cifrado TLS impide inspeccionar el contenido del tráfico, y los atacantes lo usan para tráfico C2 y exfiltración",
            "Porque HTTPS solo funciona en navegadores modernos",
            "Porque no se pueden crear reglas de firewall para tráfico HTTPS"
        ],
        correct: 1,
        explanation: "El cifrado de HTTPS dificulta la inspección del contenido. Los atacantes aprovechan esto para ocultar tráfico C2 y exfiltrar datos, ya que parece tráfico web legítimo cifrado."
    },
    {
        id: 91,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué es ICMP tunneling?",
        options: [
            "Un método para acelerar las respuestas ICMP",
            "Una técnica para encapsular datos dentro de paquetes ICMP (como ping) para establecer canales de comunicación ocultos",
            "Un tipo de ping extendido para diagnóstico de red",
            "Un protocolo de cifrado para paquetes ICMP"
        ],
        correct: 1,
        explanation: "ICMP tunneling encapsula datos dentro de paquetes ICMP (echo request/reply) para crear canales de comunicación encubiertos. Los atacantes lo usan para exfiltrar datos porque el tráfico ICMP rara vez se bloquea."
    },
    {
        id: 92,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué es un ataque Smurf?",
        options: [
            "Un ataque de inyección SQL contra servidores web",
            "Un ataque DDoS que envía paquetes ICMP echo request con la IP de la víctima como origen a una dirección de broadcast",
            "Un ataque de fuerza bruta contra servicios SSH",
            "Un ataque de phishing dirigido a ejecutivos"
        ],
        correct: 1,
        explanation: "Un ataque Smurf envía paquetes ICMP echo request (ping) a la dirección de broadcast de una red con la IP de la víctima como origen (spoofed), provocando que todos los hosts respondan a la víctima, amplificando el tráfico."
    },
    {
        id: 93,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué código HTTP indica una redirección temporal?",
        options: [
            "200 OK",
            "301 Moved Permanently",
            "302 Found (Redirección temporal)",
            "404 Not Found"
        ],
        correct: 2,
        explanation: "El código 302 Found indica una redirección temporal: el recurso se ha movido temporalmente a otra URL. El código 301 indica una redirección permanente."
    },
    {
        id: 94,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "avanzado",
        question: "Un analista detecta conexiones SSH salientes desde un servidor web hacia IPs externas desconocidas. ¿Qué podría indicar esta actividad?",
        options: [
            "Actualizaciones normales del sistema operativo",
            "Un servidor proxy SSH legítimo",
            "Posible túnel SSH para exfiltración de datos o comunicación C2 (command & control)",
            "Una configuración SFTP para backups programados"
        ],
        correct: 2,
        explanation: "Conexiones SSH salientes desde un servidor web a IPs desconocidas son altamente sospechosas. Los atacantes usan túneles SSH para establecer canales C2 cifrados y exfiltrar datos, eludiendo firewalls y sistemas de detección."
    },
    {
        id: 95,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "avanzado",
        question: "Un analista observa múltiples intentos de conexión RDP desde diferentes IPs con un solo intento de login por IP. ¿Qué tipo de ataque es probable?",
        options: [
            "Ataque de fuerza bruta clásico",
            "Credential spraying (pulverización de contraseñas)",
            "Ataque DDoS contra RDP",
            "Explotación de BlueKeep"
        ],
        correct: 1,
        explanation: "Credential spraying intenta una o pocas contraseñas comunes contra muchas cuentas/IPs para evitar bloqueos de cuenta. A diferencia de fuerza bruta (muchos intentos con una cuenta), usa pocas contraseñas contra muchas cuentas."
    },
    {
        id: 96,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué componentes de Kerberos emite el TGT (Ticket Granting Ticket)?",
        options: [
            "El servidor de archivos",
            "El KDC (Key Distribution Center) a través del servicio AS (Authentication Service)",
            "El cliente directamente",
            "El servidor DNS del dominio"
        ],
        correct: 1,
        explanation: "El KDC (Key Distribution Center), específicamente su componente AS (Authentication Service), emite el TGT después de autenticar al usuario. El TGT permite luego solicitar Service Tickets sin re-autenticarse."
    },
    {
        id: 97,
        section: "Protocolos de Red",
        sectionId: "protocolos",
        difficulty: "intermedio",
        question: "¿Qué puerto usa NTP (Network Time Protocol)?",
        options: [
            "TCP 25",
            "UDP 123",
            "TCP 389",
            "UDP 161"
        ],
        correct: 1,
        explanation: "NTP opera en el puerto UDP 123 y es crucial para la sincronización de tiempo en redes. Los atacantes pueden abusar de NTP para ataques de amplificación DDoS aprovechando el comando monlist."
    },

    // ========================================================
    // SECTION: Modelos de Red (~15 questions)
    // ========================================================
    {
        id: 98,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "basico",
        question: "¿Cuántas capas tiene el modelo OSI?",
        options: [
            "4 capas",
            "5 capas",
            "7 capas",
            "6 capas"
        ],
        correct: 2,
        explanation: "El modelo OSI (Open Systems Interconnection) tiene 7 capas: Física, Enlace de Datos, Red, Transporte, Sesión, Presentación y Aplicación."
    },
    {
        id: 99,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "basico",
        question: "¿Cuántas capas tiene el modelo TCP/IP?",
        options: [
            "7 capas",
            "5 capas",
            "4 capas",
            "3 capas"
        ],
        correct: 2,
        explanation: "El modelo TCP/IP tiene 4 capas: Acceso a Red (Network Access), Internet, Transporte y Aplicación. Es un modelo más práctico y simplificado que el OSI."
    },
    {
        id: 100,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "basico",
        question: "¿En qué capa del modelo OSI opera el enrutamiento (routing) de paquetes?",
        options: [
            "Capa 1 - Física",
            "Capa 2 - Enlace de Datos",
            "Capa 3 - Red",
            "Capa 4 - Transporte"
        ],
        correct: 2,
        explanation: "La Capa 3 (Red) del modelo OSI maneja el enrutamiento de paquetes entre redes diferentes. Los routers operan en esta capa y usan direcciones IP para determinar la mejor ruta."
    },
    {
        id: 101,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "basico",
        question: "¿En qué capa del modelo OSI opera el protocolo ARP?",
        options: [
            "Capa 1 - Física",
            "Capa 2 - Enlace de Datos",
            "Capa 3 - Red",
            "Capa 4 - Transporte"
        ],
        correct: 1,
        explanation: "ARP opera en la Capa 2 (Enlace de Datos) ya que su función es resolver direcciones IP (Capa 3) a direcciones MAC (Capa 2) dentro de un segmento de red local."
    },
    {
        id: 102,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "basico",
        question: "¿En qué capa del modelo OSI opera HTTP?",
        options: [
            "Capa 4 - Transporte",
            "Capa 5 - Sesión",
            "Capa 6 - Presentación",
            "Capa 7 - Aplicación"
        ],
        correct: 3,
        explanation: "HTTP opera en la Capa 7 (Aplicación) del modelo OSI. Esta capa es la más cercana al usuario y proporciona servicios de red directamente a las aplicaciones."
    },
    {
        id: 103,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "basico",
        question: "¿Qué capa del modelo OSI se encarga del transporte extremo a extremo (end-to-end)?",
        options: [
            "Capa 2 - Enlace de Datos",
            "Capa 3 - Red",
            "Capa 4 - Transporte",
            "Capa 5 - Sesión"
        ],
        correct: 2,
        explanation: "La Capa 4 (Transporte) proporciona comunicación extremo a extremo, controlando flujo, segmentación y fiabilidad. TCP y UDP operan en esta capa."
    },
    {
        id: 104,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "intermedio",
        question: "¿Cuál es el orden correcto de las capas del modelo OSI de abajo hacia arriba?",
        options: [
            "Física, Red, Enlace de Datos, Transporte, Sesión, Presentación, Aplicación",
            "Física, Enlace de Datos, Red, Transporte, Sesión, Presentación, Aplicación",
            "Aplicación, Presentación, Sesión, Transporte, Red, Enlace de Datos, Física",
            "Física, Enlace de Datos, Transporte, Red, Sesión, Aplicación, Presentación"
        ],
        correct: 1,
        explanation: "El orden correcto de abajo (Capa 1) a arriba (Capa 7) es: Física → Enlace de Datos → Red → Transporte → Sesión → Presentación → Aplicación."
    },
    {
        id: 105,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "intermedio",
        question: "¿Cómo se mapea la Capa de Aplicación del modelo TCP/IP al modelo OSI?",
        options: [
            "Solo se mapea a la Capa 7 del OSI",
            "Se mapea a las Capas 5, 6 y 7 del OSI (Sesión, Presentación y Aplicación)",
            "Se mapea a las Capas 3 y 4 del OSI",
            "Se mapea a la Capa 4 del OSI"
        ],
        correct: 1,
        explanation: "La Capa de Aplicación del modelo TCP/IP abarca las funciones de las Capas 5 (Sesión), 6 (Presentación) y 7 (Aplicación) del modelo OSI, ya que TCP/IP simplifica estas tres en una sola."
    },
    {
        id: 106,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "intermedio",
        question: "¿Qué dispositivo de red opera principalmente en la Capa 2 del modelo OSI?",
        options: [
            "Router",
            "Switch",
            "Firewall de Capa 7",
            "Proxy"
        ],
        correct: 1,
        explanation: "Un switch opera en la Capa 2 (Enlace de Datos), utilizando direcciones MAC para reenviar tramas al puerto correcto. Los switches gestionados también pueden operar en Capa 3."
    },
    {
        id: 107,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "avanzado",
        question: "¿En qué capa del modelo OSI ocurre un ataque de ARP Spoofing?",
        options: [
            "Capa 1 - Física",
            "Capa 2 - Enlace de Datos",
            "Capa 3 - Red",
            "Capa 4 - Transporte"
        ],
        correct: 1,
        explanation: "ARP Spoofing ocurre en la Capa 2 (Enlace de Datos) porque manipula las tablas ARP que mapean direcciones IP a direcciones MAC. El atacante falsifica respuestas ARP para interceptar tráfico."
    },
    {
        id: 108,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "avanzado",
        question: "Un ataque de SQL Injection contra una aplicación web ocurre en qué capa del modelo OSI?",
        options: [
            "Capa 3 - Red",
            "Capa 4 - Transporte",
            "Capa 5 - Sesión",
            "Capa 7 - Aplicación"
        ],
        correct: 3,
        explanation: "SQL Injection es un ataque de Capa 7 (Aplicación) porque explota vulnerabilidades en la lógica de la aplicación web, manipulando las consultas SQL a través de campos de entrada del usuario."
    },
    {
        id: 109,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "intermedio",
        question: "¿Qué capa del modelo OSI se encarga del cifrado y la compresión de datos?",
        options: [
            "Capa 4 - Transporte",
            "Capa 5 - Sesión",
            "Capa 6 - Presentación",
            "Capa 7 - Aplicación"
        ],
        correct: 2,
        explanation: "La Capa 6 (Presentación) se encarga de la representación de datos: cifrado/descifrado, compresión/descompresión y conversión de formatos. SSL/TLS conceptualmente opera aquí."
    },
    {
        id: 110,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "intermedio",
        question: "¿Qué capa del modelo OSI gestiona el establecimiento, mantenimiento y terminación de sesiones?",
        options: [
            "Capa 4 - Transporte",
            "Capa 5 - Sesión",
            "Capa 6 - Presentación",
            "Capa 7 - Aplicación"
        ],
        correct: 1,
        explanation: "La Capa 5 (Sesión) gestiona el establecimiento, mantenimiento y cierre de sesiones entre aplicaciones. Controla el diálogo y la sincronización entre los sistemas comunicantes."
    },
    {
        id: 111,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "avanzado",
        question: "Un atacante realiza un ataque SYN Flood. ¿En qué capa del modelo OSI se clasifica este ataque?",
        options: [
            "Capa 2 - Enlace de Datos",
            "Capa 3 - Red",
            "Capa 4 - Transporte",
            "Capa 7 - Aplicación"
        ],
        correct: 2,
        explanation: "Un SYN Flood es un ataque de Capa 4 (Transporte) porque explota el mecanismo de 3-way handshake de TCP, inundando al servidor con paquetes SYN para agotar sus recursos de conexión."
    },
    {
        id: 112,
        section: "Modelos de Red",
        sectionId: "modelos-red",
        difficulty: "avanzado",
        question: "¿Cuáles son las 4 capas del modelo TCP/IP en orden de abajo hacia arriba?",
        options: [
            "Física, Internet, Transporte, Aplicación",
            "Acceso a Red, Internet, Transporte, Aplicación",
            "Enlace de Datos, Red, Transporte, Aplicación",
            "Hardware, Red, Sesión, Aplicación"
        ],
        correct: 1,
        explanation: "Las 4 capas del modelo TCP/IP son: 1) Acceso a Red (Network Access/Link), 2) Internet, 3) Transporte, 4) Aplicación. La capa de Acceso a Red corresponde a las Capas 1 y 2 del modelo OSI."
    }
];
