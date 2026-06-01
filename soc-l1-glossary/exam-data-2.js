// ============================================================
//  SOC L1 – Banco de Preguntas (Parte 2)
//  IDs 200 – 349  |  ~150 preguntas
// ============================================================

const questionsBank2 = [

    // ========================================================
    //  SECCIÓN: Sistemas Operativos - Windows  (~30 preguntas)
    // ========================================================

    {
        id: 200,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "básico",
        question: "¿Qué componente de Active Directory almacena la base de datos de todos los objetos del dominio?",
        options: [
            "NTDS.dit",
            "SAM",
            "SYSTEM hive",
            "GPO Store"
        ],
        correct: 0,
        explanation: "NTDS.dit es la base de datos de Active Directory que contiene todos los objetos del dominio, incluidas las credenciales de los usuarios."
    },
    {
        id: 201,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "básico",
        question: "¿Qué Event ID de Windows registra un inicio de sesión exitoso?",
        options: [
            "4625",
            "4624",
            "4634",
            "4688"
        ],
        correct: 1,
        explanation: "El Event ID 4624 registra cada inicio de sesión exitoso en un sistema Windows, incluyendo el tipo de logon y la cuenta utilizada."
    },
    {
        id: 202,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "básico",
        question: "¿Qué Event ID indica un intento de inicio de sesión fallido?",
        options: [
            "4624",
            "4720",
            "4625",
            "4672"
        ],
        correct: 2,
        explanation: "El Event ID 4625 registra cada intento de inicio de sesión fallido, útil para detectar ataques de fuerza bruta."
    },
    {
        id: 203,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Logon Type corresponde a una conexión por RDP (Remote Desktop)?",
        options: [
            "Tipo 3 – Network",
            "Tipo 7 – Unlock",
            "Tipo 10 – RemoteInteractive",
            "Tipo 2 – Interactive"
        ],
        correct: 2,
        explanation: "El Logon Type 10 (RemoteInteractive) indica un inicio de sesión a través de Remote Desktop Protocol (RDP)."
    },
    {
        id: 204,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "En un escenario de lateral movement, un atacante se conecta a un recurso compartido SMB. ¿Qué Logon Type verías en el Event ID 4624?",
        options: [
            "Tipo 2 – Interactive",
            "Tipo 10 – RemoteInteractive",
            "Tipo 3 – Network",
            "Tipo 5 – Service"
        ],
        correct: 2,
        explanation: "El Logon Type 3 (Network) se genera cuando un usuario accede a recursos de red como carpetas compartidas SMB sin iniciar una sesión interactiva."
    },
    {
        id: 205,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "¿Qué Event ID de Sysmon captura la creación de un hilo remoto, técnica usada para inyección de código en procesos?",
        options: [
            "Sysmon Event ID 1 – Process Create",
            "Sysmon Event ID 8 – CreateRemoteThread",
            "Sysmon Event ID 10 – ProcessAccess",
            "Sysmon Event ID 3 – Network Connection"
        ],
        correct: 1,
        explanation: "Sysmon Event ID 8 detecta CreateRemoteThread, una API utilizada frecuentemente para inyectar código malicioso en otros procesos."
    },
    {
        id: 206,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Event ID indica que se ha creado una nueva cuenta de usuario?",
        options: [
            "4728",
            "4720",
            "4732",
            "4740"
        ],
        correct: 1,
        explanation: "El Event ID 4720 se genera cuando se crea una nueva cuenta de usuario, lo que puede indicar actividad de persistencia si no es autorizada."
    },
    {
        id: 207,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "Un analista observa un Event ID 4648 (Explicit Credentials). ¿Qué escenario es más probable?",
        options: [
            "Un usuario desbloqueó su estación de trabajo",
            "Un proceso está autenticándose con credenciales distintas a las de la sesión actual",
            "Se eliminó una cuenta de usuario del dominio",
            "Se modificó una política de auditoría"
        ],
        correct: 1,
        explanation: "El Event ID 4648 se genera cuando un proceso usa credenciales explícitas (runas o Pass-the-Hash), diferente a las credenciales de la sesión activa."
    },
    {
        id: 208,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "básico",
        question: "¿Cuál es la función principal de una GPO (Group Policy Object) en Active Directory?",
        options: [
            "Gestionar el almacenamiento de archivos en el servidor",
            "Aplicar configuraciones y políticas de seguridad de forma centralizada",
            "Monitorear el tráfico de red en tiempo real",
            "Realizar copias de seguridad del Domain Controller"
        ],
        correct: 1,
        explanation: "Las GPO permiten aplicar configuraciones y políticas de seguridad de forma centralizada a usuarios y equipos del dominio."
    },
    {
        id: 209,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "¿Qué Event ID de Sysmon registra acceso a procesos, útil para detectar volcado de credenciales de LSASS?",
        options: [
            "Sysmon Event ID 1",
            "Sysmon Event ID 7",
            "Sysmon Event ID 10",
            "Sysmon Event ID 25"
        ],
        correct: 2,
        explanation: "Sysmon Event ID 10 (ProcessAccess) detecta cuando un proceso accede a otro, como Mimikatz accediendo a lsass.exe para extraer credenciales."
    },
    {
        id: 210,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Event ID se genera cuando se instala un nuevo servicio en Windows?",
        options: [
            "4688",
            "4697",
            "7045",
            "4663"
        ],
        correct: 2,
        explanation: "El Event ID 7045 del log System registra la instalación de un nuevo servicio, técnica común de persistencia para atacantes."
    },
    {
        id: 211,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "Un atacante modifica las claves de registro Run y RunOnce. ¿Qué técnica MITRE ATT&CK está utilizando?",
        options: [
            "Credential Dumping",
            "Boot or Logon Autostart Execution: Registry Run Keys",
            "Scheduled Task/Job",
            "DLL Search Order Hijacking"
        ],
        correct: 1,
        explanation: "Modificar las claves de registro Run/RunOnce es una técnica de persistencia (T1547.001) que ejecuta código automáticamente al iniciar sesión."
    },
    {
        id: 212,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué herramienta de Sysinternals permite identificar programas configurados para ejecutarse automáticamente al inicio?",
        options: [
            "Process Monitor",
            "TCPView",
            "Autoruns",
            "PsExec"
        ],
        correct: 2,
        explanation: "Autoruns de Sysinternals muestra todos los programas configurados para auto-inicio, incluyendo Run keys, servicios, tareas programadas y más."
    },
    {
        id: 213,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "básico",
        question: "¿Qué componente de Active Directory agrupa objetos como usuarios, equipos y grupos para aplicar políticas?",
        options: [
            "Forest",
            "Domain Controller",
            "Organizational Unit (OU)",
            "KRBTGT"
        ],
        correct: 2,
        explanation: "Una Organizational Unit (OU) es un contenedor lógico en AD que permite organizar objetos y aplicar GPOs de forma granular."
    },
    {
        id: 214,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "¿Qué cuenta especial en Active Directory se usa para firmar los tickets de Kerberos (TGT)?",
        options: [
            "Administrator",
            "KRBTGT",
            "SYSTEM",
            "DnsAdmins"
        ],
        correct: 1,
        explanation: "La cuenta KRBTGT se usa para cifrar y firmar todos los Ticket Granting Tickets (TGT) de Kerberos. Si se compromete, permite ataques Golden Ticket."
    },
    {
        id: 215,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Logon Type indica que un usuario se autenticó con credenciales en caché, sin contactar al Domain Controller?",
        options: [
            "Tipo 3 – Network",
            "Tipo 10 – RemoteInteractive",
            "Tipo 11 – CachedInteractive",
            "Tipo 8 – NetworkCleartext"
        ],
        correct: 2,
        explanation: "El Logon Type 11 (CachedInteractive) indica que el usuario inició sesión con credenciales almacenadas localmente, sin contactar al DC."
    },
    {
        id: 216,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "Un analista detecta múltiples Event ID 4625 con Logon Type 3 desde una sola IP hacia varias cuentas. ¿Qué ataque es más probable?",
        options: [
            "Phishing",
            "Password Spraying",
            "SQL Injection",
            "DDoS"
        ],
        correct: 1,
        explanation: "Password Spraying intenta unas pocas contraseñas comunes contra múltiples cuentas, generando eventos 4625 Tipo 3 desde la misma IP origen."
    },
    {
        id: 217,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Event ID indica que se ha asignado privilegios especiales a un inicio de sesión?",
        options: [
            "4624",
            "4672",
            "4688",
            "4720"
        ],
        correct: 1,
        explanation: "El Event ID 4672 se genera cuando una cuenta inicia sesión con privilegios especiales (admin), útil para rastrear uso de cuentas privilegiadas."
    },
    {
        id: 218,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "¿Qué Event ID de PowerShell registra el contenido completo de los scripts ejecutados (Script Block Logging)?",
        options: [
            "4103",
            "4104",
            "4688",
            "7045"
        ],
        correct: 1,
        explanation: "El Event ID 4104 de PowerShell registra el contenido decodificado de los scripts ejecutados, esencial para detectar ataques fileless."
    },
    {
        id: 219,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "Un analista observa un comando PowerShell con los parámetros `-enc` y `IEX(New-Object Net.WebClient).DownloadString(...)`. ¿Qué indicador de compromiso representa?",
        options: [
            "Un script de mantenimiento de Windows Update",
            "Un ataque fileless que descarga y ejecuta código en memoria",
            "Una auditoría de seguridad automatizada",
            "Un backup de configuración del sistema"
        ],
        correct: 1,
        explanation: "El uso de -enc (codificado en Base64) junto con IEX y DownloadString es un patrón clásico de ataques fileless que descargan y ejecutan payloads en memoria."
    },
    {
        id: 220,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Event ID indica que una cuenta de usuario fue bloqueada?",
        options: [
            "4725",
            "4740",
            "4767",
            "4723"
        ],
        correct: 1,
        explanation: "El Event ID 4740 se genera cuando una cuenta se bloquea por exceder los intentos fallidos, posible indicador de fuerza bruta."
    },
    {
        id: 221,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Cuál es la diferencia principal entre el log Security y el log System en Event Viewer?",
        options: [
            "Security registra errores de hardware; System registra inicios de sesión",
            "Security registra eventos de auditoría y acceso; System registra eventos del sistema operativo y servicios",
            "Ambos registran exactamente la misma información",
            "Security solo existe en servidores; System en estaciones de trabajo"
        ],
        correct: 1,
        explanation: "El log Security contiene eventos de auditoría (logon, acceso a objetos), mientras que System registra eventos del SO, drivers y servicios."
    },
    {
        id: 222,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Event ID de Sysmon captura las consultas DNS realizadas por procesos?",
        options: [
            "Sysmon Event ID 3",
            "Sysmon Event ID 11",
            "Sysmon Event ID 22",
            "Sysmon Event ID 12"
        ],
        correct: 2,
        explanation: "Sysmon Event ID 22 (DNS Query) registra las consultas DNS realizadas por cada proceso, útil para detectar C2 sobre DNS o DGA."
    },
    {
        id: 223,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "¿Qué Event ID de Sysmon detecta manipulación de procesos (Process Tampering), como técnicas de Process Hollowing?",
        options: [
            "Sysmon Event ID 8",
            "Sysmon Event ID 10",
            "Sysmon Event ID 25",
            "Sysmon Event ID 1"
        ],
        correct: 2,
        explanation: "Sysmon Event ID 25 (ProcessTampering) detecta técnicas de evasión como Process Hollowing y Process Herpaderping."
    },
    {
        id: 224,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué clave del registro de Windows se utiliza comúnmente para lograr persistencia ejecutando programas al iniciar sesión del usuario actual?",
        options: [
            "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run",
            "HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run",
            "HKLM\\SYSTEM\\CurrentControlSet\\Services",
            "HKCU\\Control Panel\\Desktop"
        ],
        correct: 1,
        explanation: "HKCU\\...\\Run permite persistencia a nivel de usuario, ejecutando programas automáticamente cuando ese usuario inicia sesión."
    },
    {
        id: 225,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "básico",
        question: "¿Qué es un Domain Controller (DC) en Active Directory?",
        options: [
            "Un firewall que protege la red interna",
            "Un servidor que autentica usuarios y gestiona la base de datos del dominio",
            "Un switch que segmenta las VLANs",
            "Un servidor de archivos compartidos"
        ],
        correct: 1,
        explanation: "Un Domain Controller es el servidor que ejecuta Active Directory, autenticando usuarios, aplicando políticas y gestionando la base de datos del dominio."
    },
    {
        id: 226,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "avanzado",
        question: "¿Qué Event ID indica que la política de auditoría del sistema fue modificada?",
        options: [
            "4719",
            "4663",
            "4688",
            "4672"
        ],
        correct: 0,
        explanation: "El Event ID 4719 se genera cuando se cambia la política de auditoría, lo que podría indicar un atacante intentando cubrir sus huellas."
    },
    {
        id: 227,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Logon Type indica que las credenciales se transmitieron en texto claro por la red?",
        options: [
            "Tipo 3 – Network",
            "Tipo 5 – Service",
            "Tipo 8 – NetworkCleartext",
            "Tipo 4 – Batch"
        ],
        correct: 2,
        explanation: "El Logon Type 8 (NetworkCleartext) indica que las credenciales se enviaron en texto claro, como en autenticación HTTP Basic sin TLS."
    },
    {
        id: 228,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "¿Qué Event ID de Sysmon registra modificaciones en el registro de Windows?",
        options: [
            "Sysmon Event ID 11",
            "Sysmon Event ID 12 y 13",
            "Sysmon Event ID 6",
            "Sysmon Event ID 22"
        ],
        correct: 1,
        explanation: "Sysmon Event IDs 12 (RegistryEvent Create/Delete) y 13 (RegistryEvent Value Set) capturan cambios en el registro, útiles para detectar persistencia."
    },
    {
        id: 229,
        section: "Sistemas Operativos - Windows",
        sectionId: "windows",
        difficulty: "intermedio",
        question: "En Active Directory, ¿qué es un Forest?",
        options: [
            "Un grupo de usuarios con los mismos permisos",
            "La estructura jerárquica más alta que contiene uno o más dominios con confianza transitiva",
            "Un servidor dedicado a almacenar logs",
            "Una política de grupo aplicada a nivel global"
        ],
        correct: 1,
        explanation: "Un Forest es el nivel más alto de la jerarquía de AD, conteniendo uno o más dominios con relaciones de confianza transitiva entre ellos."
    },

    // ========================================================
    //  SECCIÓN: Sistemas Operativos - Linux  (~15 preguntas)
    // ========================================================

    {
        id: 230,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "básico",
        question: "¿Qué permisos otorga el valor octal 755 en Linux?",
        options: [
            "Lectura y escritura para todos",
            "Lectura, escritura y ejecución para el dueño; lectura y ejecución para grupo y otros",
            "Solo lectura para todos",
            "Lectura y escritura para dueño; solo lectura para grupo y otros"
        ],
        correct: 1,
        explanation: "755 otorga rwx (7) al propietario y r-x (5) al grupo y otros. Es el permiso estándar para directorios y ejecutables."
    },
    {
        id: 231,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "básico",
        question: "¿En qué archivo de log de Linux se registran los intentos de autenticación SSH?",
        options: [
            "/var/log/syslog",
            "/var/log/auth.log",
            "/var/log/messages",
            "/var/log/kern.log"
        ],
        correct: 1,
        explanation: "El archivo /var/log/auth.log (Debian/Ubuntu) o /var/log/secure (RHEL/CentOS) registra todos los eventos de autenticación, incluyendo SSH."
    },
    {
        id: 232,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "intermedio",
        question: "¿Qué es el bit SUID en Linux y por qué es relevante para la seguridad?",
        options: [
            "Un permiso que permite solo lectura a todos los usuarios",
            "Un permiso que ejecuta el archivo con los privilegios del propietario del archivo, no del usuario que lo ejecuta",
            "Un permiso que impide la eliminación de archivos",
            "Un permiso que cifra el archivo automáticamente"
        ],
        correct: 1,
        explanation: "El bit SUID ejecuta un binario con los permisos del propietario (frecuentemente root), lo que puede ser explotado para escalación de privilegios."
    },
    {
        id: 233,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "básico",
        question: "¿Qué comando se utiliza para cambiar el propietario de un archivo en Linux?",
        options: [
            "chmod",
            "chown",
            "chgrp",
            "usermod"
        ],
        correct: 1,
        explanation: "El comando chown (change owner) permite cambiar el propietario y/o grupo de un archivo o directorio."
    },
    {
        id: 234,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "intermedio",
        question: "¿Qué permisos otorga el valor octal 600 en Linux?",
        options: [
            "Lectura y escritura solo para el propietario, sin acceso para grupo y otros",
            "Lectura y ejecución para todos",
            "Lectura, escritura y ejecución para el propietario",
            "Solo lectura para el propietario"
        ],
        correct: 0,
        explanation: "600 otorga rw- (6) al propietario y --- (0) al grupo y otros. Es el permiso recomendado para archivos sensibles como claves SSH privadas."
    },
    {
        id: 235,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "intermedio",
        question: "¿En qué directorio se almacenan los logs de Apache en distribuciones Debian/Ubuntu?",
        options: [
            "/var/log/httpd/",
            "/var/log/apache2/",
            "/etc/apache2/logs/",
            "/var/log/nginx/"
        ],
        correct: 1,
        explanation: "En Debian/Ubuntu, los logs de Apache se almacenan en /var/log/apache2/, incluyendo access.log y error.log."
    },
    {
        id: 236,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "avanzado",
        question: "¿Qué es el Sticky Bit y dónde se usa comúnmente?",
        options: [
            "Un permiso que cifra archivos; se usa en /etc/shadow",
            "Un permiso que permite que solo el propietario de un archivo pueda eliminarlo; se usa en /tmp",
            "Un permiso que hereda el grupo del directorio padre; se usa en /home",
            "Un permiso que ejecuta el archivo como root; se usa en /usr/bin"
        ],
        correct: 1,
        explanation: "El Sticky Bit en un directorio (como /tmp) evita que usuarios eliminen archivos de otros usuarios, aunque tengan permiso de escritura en el directorio."
    },
    {
        id: 237,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "intermedio",
        question: "¿Qué archivo de log en RHEL/CentOS es equivalente a /var/log/auth.log de Debian/Ubuntu?",
        options: [
            "/var/log/audit/audit.log",
            "/var/log/secure",
            "/var/log/messages",
            "/var/log/faillog"
        ],
        correct: 1,
        explanation: "/var/log/secure en RHEL/CentOS registra los eventos de autenticación, igual que /var/log/auth.log en Debian/Ubuntu."
    },
    {
        id: 238,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "básico",
        question: "¿Qué comando se utiliza para cambiar los permisos de un archivo en Linux?",
        options: [
            "chown",
            "chmod",
            "chattr",
            "setfacl"
        ],
        correct: 1,
        explanation: "El comando chmod (change mode) permite modificar los permisos de lectura, escritura y ejecución de archivos y directorios."
    },
    {
        id: 239,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "intermedio",
        question: "¿Qué archivo de log de Linux contiene registros de auditoría del kernel generados por auditd?",
        options: [
            "/var/log/syslog",
            "/var/log/kern.log",
            "/var/log/audit/audit.log",
            "/var/log/auth.log"
        ],
        correct: 2,
        explanation: "El archivo /var/log/audit/audit.log contiene los registros generados por el daemon auditd, usado para auditoría avanzada del sistema."
    },
    {
        id: 240,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "avanzado",
        question: "Un analista busca binarios con SUID habilitado que podrían usarse para escalación de privilegios. ¿Qué comando es el más apropiado?",
        options: [
            "ls -la /usr/bin/",
            "find / -perm -4000 -type f 2>/dev/null",
            "grep -r 'suid' /etc/",
            "ps aux | grep root"
        ],
        correct: 1,
        explanation: "El comando find / -perm -4000 busca archivos con el bit SUID activado en todo el sistema, útil para identificar vectores de escalación de privilegios."
    },
    {
        id: 241,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "básico",
        question: "¿Qué permisos otorga el valor octal 644 en Linux?",
        options: [
            "Lectura y escritura para el propietario; solo lectura para grupo y otros",
            "Lectura y ejecución para todos",
            "Lectura, escritura y ejecución para el propietario",
            "Solo lectura para el propietario y el grupo"
        ],
        correct: 0,
        explanation: "644 otorga rw- (6) al propietario y r-- (4) al grupo y otros. Es el permiso estándar para archivos de configuración."
    },
    {
        id: 242,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "avanzado",
        question: "¿Qué riesgo de seguridad representa un binario con el bit SGID activado?",
        options: [
            "El binario se ejecuta sin ningún permiso",
            "El binario se ejecuta con los permisos del grupo propietario, potencialmente escalando privilegios",
            "El binario no puede ser ejecutado por nadie",
            "El binario se elimina automáticamente después de ejecutarse"
        ],
        correct: 1,
        explanation: "El bit SGID hace que un programa se ejecute con los permisos del grupo propietario, lo que puede ser aprovechado para acceder a recursos restringidos."
    },
    {
        id: 243,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "intermedio",
        question: "¿Qué archivo de log genérico en Linux registra mensajes del sistema, daemons y aplicaciones?",
        options: [
            "/var/log/auth.log",
            "/var/log/syslog",
            "/var/log/secure",
            "/var/log/boot.log"
        ],
        correct: 1,
        explanation: "/var/log/syslog es el archivo de log principal en distribuciones Debian/Ubuntu que registra mensajes generales del sistema y aplicaciones."
    },
    {
        id: 244,
        section: "Sistemas Operativos - Linux",
        sectionId: "linux",
        difficulty: "avanzado",
        question: "Un analista detecta en /var/log/auth.log múltiples líneas 'Failed password for invalid user' desde una IP externa. ¿Qué ataque sugiere?",
        options: [
            "SQL Injection contra un servidor web",
            "Ataque de fuerza bruta SSH",
            "Escaneo de puertos pasivo",
            "DNS Spoofing"
        ],
        correct: 1,
        explanation: "Múltiples fallos de autenticación SSH desde una misma IP con diferentes usuarios inválidos es un indicador clásico de fuerza bruta SSH."
    },

    // ========================================================
    //  SECCIÓN: Ciberseguridad Básica  (~20 preguntas)
    // ========================================================

    {
        id: 245,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "básico",
        question: "¿Qué pilar de la tríada CIA se refiere a que la información solo sea accesible para personas autorizadas?",
        options: [
            "Integridad",
            "Disponibilidad",
            "Confidencialidad",
            "Autenticación"
        ],
        correct: 2,
        explanation: "La Confidencialidad garantiza que la información solo sea accesible para las personas autorizadas, mediante controles como cifrado y control de acceso."
    },
    {
        id: 246,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "básico",
        question: "¿Qué tipo de malware se propaga automáticamente por la red sin necesidad de interacción del usuario?",
        options: [
            "Virus",
            "Troyano",
            "Gusano (Worm)",
            "Spyware"
        ],
        correct: 2,
        explanation: "Un gusano (worm) se propaga automáticamente por la red explotando vulnerabilidades, sin requerir que el usuario abra un archivo. WannaCry es un ejemplo famoso."
    },
    {
        id: 247,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué técnica de ataque inyecta código malicioso en los campos de entrada de una aplicación web para manipular la base de datos?",
        options: [
            "Cross-Site Scripting (XSS)",
            "SQL Injection",
            "CSRF",
            "DDoS"
        ],
        correct: 1,
        explanation: "SQL Injection permite al atacante inyectar consultas SQL maliciosas a través de campos de entrada, pudiendo leer, modificar o eliminar datos de la base de datos."
    },
    {
        id: 248,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "básico",
        question: "¿Cuál es la diferencia principal entre cifrado simétrico y asimétrico?",
        options: [
            "El simétrico es más lento que el asimétrico",
            "El simétrico usa la misma clave para cifrar y descifrar; el asimétrico usa un par de claves (pública y privada)",
            "El asimétrico solo se usa para hashing",
            "No hay diferencia; son términos intercambiables"
        ],
        correct: 1,
        explanation: "El cifrado simétrico (AES, DES) usa una clave compartida, mientras que el asimétrico (RSA, ECC) usa un par de claves pública/privada."
    },
    {
        id: 249,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué tipo de malware se disfraza como software legítimo para engañar al usuario y obtener acceso no autorizado?",
        options: [
            "Virus",
            "Gusano",
            "Troyano",
            "Rootkit"
        ],
        correct: 2,
        explanation: "Un troyano se presenta como software legítimo o útil, pero contiene funcionalidad maliciosa oculta, como un backdoor o un RAT."
    },
    {
        id: 250,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué algoritmo de hashing se considera actualmente INSEGURO para verificación de integridad?",
        options: [
            "SHA-256",
            "SHA-512",
            "MD5",
            "SHA-3"
        ],
        correct: 2,
        explanation: "MD5 está considerado inseguro debido a vulnerabilidades de colisión conocidas. SHA-1 también es inseguro. Se recomienda usar SHA-256 o superior."
    },
    {
        id: 251,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "avanzado",
        question: "¿Qué tipo de ataque envía la misma contraseña contra múltiples cuentas de usuario?",
        options: [
            "Brute Force",
            "Credential Stuffing",
            "Password Spraying",
            "Dictionary Attack"
        ],
        correct: 2,
        explanation: "Password Spraying prueba una o pocas contraseñas comunes contra muchas cuentas, evitando bloqueos por intentos fallidos en una sola cuenta."
    },
    {
        id: 252,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué tipo de ataque utiliza credenciales robadas de una brecha para intentar acceder a otros servicios?",
        options: [
            "Password Spraying",
            "Brute Force",
            "Credential Stuffing",
            "Phishing"
        ],
        correct: 2,
        explanation: "Credential Stuffing usa pares usuario/contraseña filtrados de brechas previas para probar en otros servicios, explotando la reutilización de contraseñas."
    },
    {
        id: 253,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "básico",
        question: "¿Cuáles son los tres factores de autenticación?",
        options: [
            "Usuario, contraseña y PIN",
            "Algo que sabes, algo que tienes y algo que eres",
            "Correo electrónico, teléfono y dirección",
            "Nombre, apellido y fecha de nacimiento"
        ],
        correct: 1,
        explanation: "Los tres factores de autenticación son: algo que sabes (contraseña), algo que tienes (token/teléfono) y algo que eres (biometría)."
    },
    {
        id: 254,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué tipo de malware registra las pulsaciones del teclado del usuario?",
        options: [
            "Ransomware",
            "Keylogger",
            "Rootkit",
            "Adware"
        ],
        correct: 1,
        explanation: "Un keylogger captura todas las pulsaciones del teclado, permitiendo al atacante robar contraseñas, mensajes y otra información sensible."
    },
    {
        id: 255,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "avanzado",
        question: "¿Qué malware fue un ejemplo devastador de ransomware con capacidades de worm que afectó a hospitales y empresas en 2017?",
        options: [
            "Emotet",
            "Pegasus",
            "WannaCry",
            "Mirai"
        ],
        correct: 2,
        explanation: "WannaCry (2017) combinó ransomware con propagación de gusano usando el exploit EternalBlue (MS17-010), afectando hospitales del NHS y empresas globales."
    },
    {
        id: 256,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué es un ataque de Cross-Site Scripting (XSS)?",
        options: [
            "Inyectar consultas SQL en formularios web",
            "Inyectar scripts maliciosos en páginas web que son ejecutados por el navegador de otros usuarios",
            "Interceptar tráfico entre el cliente y el servidor",
            "Enviar múltiples solicitudes para sobrecargar un servidor"
        ],
        correct: 1,
        explanation: "XSS permite inyectar código JavaScript malicioso en una página web que es ejecutado en el navegador de otros usuarios, pudiendo robar cookies o sesiones."
    },
    {
        id: 257,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "avanzado",
        question: "¿Qué botnet famosa infectó dispositivos IoT y fue usada para lanzar ataques DDoS masivos en 2016?",
        options: [
            "WannaCry",
            "Emotet",
            "Mirai",
            "Pegasus"
        ],
        correct: 2,
        explanation: "Mirai infectó dispositivos IoT con credenciales por defecto, creando una botnet masiva que lanzó ataques DDoS contra Dyn DNS, afectando servicios como Twitter y Netflix."
    },
    {
        id: 258,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué tipo de malware opera en memoria sin escribir archivos en disco?",
        options: [
            "Virus",
            "Rootkit",
            "Fileless Malware",
            "Ransomware"
        ],
        correct: 2,
        explanation: "El Fileless Malware opera enteramente en memoria, usando herramientas legítimas del sistema (PowerShell, WMI) para evitar la detección por antivirus basados en firmas."
    },
    {
        id: 259,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "básico",
        question: "¿Qué pilar de la tríada CIA garantiza que los datos no sean modificados sin autorización?",
        options: [
            "Confidencialidad",
            "Disponibilidad",
            "Integridad",
            "No repudio"
        ],
        correct: 2,
        explanation: "La Integridad asegura que la información no sea alterada de forma no autorizada. Se verifica con hashes, firmas digitales y controles de acceso."
    },
    {
        id: 260,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué tipo de ataque intercepta la comunicación entre dos partes sin que éstas lo sepan?",
        options: [
            "Phishing",
            "Man-in-the-Middle (MITM)",
            "Brute Force",
            "SQL Injection"
        ],
        correct: 1,
        explanation: "Un ataque MITM intercepta y potencialmente modifica la comunicación entre dos partes, pudiendo capturar credenciales o inyectar contenido malicioso."
    },
    {
        id: 261,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "avanzado",
        question: "¿Qué tipo de malware oculta su presencia modificando el sistema operativo para ser indetectable?",
        options: [
            "Spyware",
            "Rootkit",
            "Adware",
            "Troyano"
        ],
        correct: 1,
        explanation: "Un rootkit modifica componentes del sistema operativo (kernel, drivers) para ocultar procesos, archivos y conexiones maliciosas de las herramientas de detección."
    },
    {
        id: 262,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "intermedio",
        question: "¿Qué ataque engaña al navegador de un usuario autenticado para que ejecute acciones no deseadas en un sitio web?",
        options: [
            "XSS",
            "SQL Injection",
            "CSRF (Cross-Site Request Forgery)",
            "DDoS"
        ],
        correct: 2,
        explanation: "CSRF fuerza al navegador de un usuario autenticado a enviar solicitudes no deseadas a un sitio donde ya está logueado, ejecutando acciones sin su consentimiento."
    },
    {
        id: 263,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "básico",
        question: "¿Qué tipo de malware cifra los archivos de la víctima y exige un rescate para descifrarlos?",
        options: [
            "Spyware",
            "Ransomware",
            "Keylogger",
            "Gusano"
        ],
        correct: 1,
        explanation: "El Ransomware cifra los archivos del sistema de la víctima y exige un pago (generalmente en criptomonedas) para proporcionar la clave de descifrado."
    },
    {
        id: 264,
        section: "Ciberseguridad Básica",
        sectionId: "ciberseguridad",
        difficulty: "avanzado",
        question: "¿Qué es un RAT (Remote Access Trojan)?",
        options: [
            "Un tipo de ransomware que cifra archivos remotamente",
            "Un troyano que permite al atacante controlar el sistema de la víctima de forma remota",
            "Un escáner de vulnerabilidades remoto",
            "Un protocolo de administración remota legítimo"
        ],
        correct: 1,
        explanation: "Un RAT permite al atacante tomar control total de la máquina víctima de forma remota: ejecutar comandos, exfiltrar datos, capturar pantalla y activar cámara/micrófono."
    },

    // ========================================================
    //  SECCIÓN: Logs y Monitoreo  (~10 preguntas)
    // ========================================================

    {
        id: 265,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "básico",
        question: "¿Qué protocolo estándar se utiliza para centralizar logs de múltiples dispositivos de red?",
        options: [
            "SNMP",
            "Syslog",
            "NetFlow",
            "SMTP"
        ],
        correct: 1,
        explanation: "Syslog (definido en RFC 5424) es el protocolo estándar para enviar mensajes de log de dispositivos de red a un servidor centralizado."
    },
    {
        id: 266,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "intermedio",
        question: "¿Qué fuente de logs es más relevante para detectar movimientos laterales en una red corporativa?",
        options: [
            "Logs del servidor de correo",
            "Logs de Active Directory y firewall interno",
            "Logs del proxy web",
            "Logs de DNS externo"
        ],
        correct: 1,
        explanation: "Los logs de Active Directory (autenticación) combinados con logs de firewall interno son clave para detectar movimientos laterales entre sistemas."
    },
    {
        id: 267,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "intermedio",
        question: "¿Qué componentes incluye un mensaje Syslog según RFC 5424?",
        options: [
            "Solo timestamp y mensaje",
            "Prioridad (facility + severity), timestamp, hostname, app-name, PID y mensaje",
            "Solo IP origen y puerto destino",
            "Solo nivel de severidad y descripción del error"
        ],
        correct: 1,
        explanation: "Un mensaje Syslog RFC 5424 incluye prioridad (facility×8+severity), versión, timestamp, hostname, app-name, procid, msgid y datos estructurados."
    },
    {
        id: 268,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "básico",
        question: "¿Qué tipo de logs genera un EDR (Endpoint Detection and Response)?",
        options: [
            "Solo logs de tráfico de red",
            "Logs de procesos, archivos, conexiones de red y comportamiento en endpoints",
            "Solo logs de autenticación",
            "Solo logs de actualizaciones del sistema"
        ],
        correct: 1,
        explanation: "Un EDR genera logs detallados de actividad en endpoints: creación de procesos, modificación de archivos, conexiones de red, cambios en el registro y comportamiento sospechoso."
    },
    {
        id: 269,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "intermedio",
        question: "¿Qué formato utilizan los logs de eventos de Windows?",
        options: [
            "JSON plano",
            "Texto CSV",
            "XML estructurado (EVTX)",
            "Syslog RFC 5424"
        ],
        correct: 2,
        explanation: "Los eventos de Windows se almacenan en formato EVTX (XML estructurado), que permite búsquedas avanzadas con XPath y exportación para análisis."
    },
    {
        id: 270,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "avanzado",
        question: "¿Qué campos se encuentran típicamente en un log de acceso de Apache (access.log)?",
        options: [
            "Solo la URL y el código de respuesta",
            "IP del cliente, fecha, método HTTP, URL, código de respuesta, tamaño y User-Agent",
            "Solo el nombre de usuario y la contraseña",
            "Solo el puerto y el protocolo"
        ],
        correct: 1,
        explanation: "El access.log de Apache en formato Combined incluye: IP cliente, identidad, usuario, fecha, request line, código HTTP, tamaño de respuesta, referrer y User-Agent."
    },
    {
        id: 271,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "intermedio",
        question: "¿Qué fuente de logs es más útil para detectar comunicaciones Command and Control (C2)?",
        options: [
            "Logs de impresoras",
            "Logs de DNS y proxy web",
            "Logs de copias de seguridad",
            "Logs de GPO de Active Directory"
        ],
        correct: 1,
        explanation: "Los logs de DNS (consultas sospechosas, DGA) y proxy web (conexiones a dominios C2) son las fuentes más efectivas para detectar comunicaciones C2."
    },
    {
        id: 272,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "avanzado",
        question: "¿Qué fuente de logs permite detectar intentos de exfiltración de datos a través de correo electrónico?",
        options: [
            "Logs de firewall perimetral",
            "Logs del Email Security Gateway",
            "Logs de DHCP",
            "Logs de DNS"
        ],
        correct: 1,
        explanation: "El Email Security Gateway registra adjuntos, destinatarios externos y patrones de envío anómalos, clave para detectar exfiltración por correo."
    },
    {
        id: 273,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "intermedio",
        question: "¿Qué logs deberías revisar primero al investigar una conexión VPN sospechosa?",
        options: [
            "Logs del servidor de archivos",
            "Logs del servidor VPN y logs de autenticación de Active Directory",
            "Logs del servicio DNS",
            "Logs de actualización de Windows"
        ],
        correct: 1,
        explanation: "Los logs del servidor VPN muestran IPs de origen y duración, mientras que los logs de AD confirman la autenticación, ambos cruciales para investigar accesos VPN sospechosos."
    },
    {
        id: 274,
        section: "Logs y Monitoreo",
        sectionId: "logs",
        difficulty: "avanzado",
        question: "Un analista SOC recibe una alerta de tráfico excesivo a un dominio desconocido. ¿Qué logs correlacionaría primero?",
        options: [
            "Solo los logs del firewall",
            "Logs de DNS, proxy, EDR del endpoint origen y threat intelligence del dominio",
            "Solo los logs de antivirus",
            "Solo los logs del servidor DHCP"
        ],
        correct: 1,
        explanation: "La correlación de DNS (resolución), proxy (URLs completas), EDR (proceso responsable) y TI (reputación del dominio) proporciona el contexto completo del incidente."
    },

    // ========================================================
    //  SECCIÓN: Herramientas SOC  (~15 preguntas)
    // ========================================================

    {
        id: 275,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "básico",
        question: "¿Cuál es la función principal de un SIEM?",
        options: [
            "Bloquear malware en endpoints",
            "Recopilar, correlacionar y analizar logs de seguridad de múltiples fuentes para detectar amenazas",
            "Gestionar las contraseñas de los usuarios",
            "Realizar respaldos automáticos de la información"
        ],
        correct: 1,
        explanation: "Un SIEM (Security Information and Event Management) centraliza logs, los correlaciona con reglas de detección y genera alertas para el equipo SOC."
    },
    {
        id: 276,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "básico",
        question: "¿Cuál de las siguientes es una solución SIEM de Microsoft?",
        options: [
            "CrowdStrike Falcon",
            "Microsoft Sentinel",
            "Carbon Black",
            "Snort"
        ],
        correct: 1,
        explanation: "Microsoft Sentinel es el SIEM nativo de la nube de Microsoft, integrado con Azure y Microsoft 365, que usa KQL como lenguaje de consulta."
    },
    {
        id: 277,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Cuál es la diferencia fundamental entre un IDS y un IPS?",
        options: [
            "El IDS es más caro que el IPS",
            "El IDS solo detecta y alerta; el IPS detecta y bloquea activamente el tráfico malicioso",
            "El IPS solo funciona en la nube; el IDS es on-premise",
            "No hay diferencia; son sinónimos"
        ],
        correct: 1,
        explanation: "El IDS (Intrusion Detection System) es pasivo: solo detecta y alerta. El IPS (Intrusion Prevention System) es activo: puede bloquear tráfico malicioso en tiempo real."
    },
    {
        id: 278,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Qué herramienta se utiliza para el análisis de capturas de tráfico de red (PCAP)?",
        options: [
            "Volatility",
            "Autopsy",
            "Wireshark",
            "YARA"
        ],
        correct: 2,
        explanation: "Wireshark es la herramienta estándar para capturar y analizar paquetes de red (PCAP), permitiendo inspeccionar protocolos y contenido del tráfico."
    },
    {
        id: 279,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Qué herramienta se utiliza para análisis forense de memoria RAM?",
        options: [
            "Wireshark",
            "Autopsy",
            "Volatility",
            "Nmap"
        ],
        correct: 2,
        explanation: "Volatility es un framework de análisis forense de memoria que permite extraer procesos, conexiones de red, DLLs y artefactos de un volcado de RAM."
    },
    {
        id: 280,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Qué herramienta permite escribir reglas para identificar y clasificar malware basándose en patrones?",
        options: [
            "Snort",
            "YARA",
            "Suricata",
            "Nmap"
        ],
        correct: 1,
        explanation: "YARA permite crear reglas basadas en patrones de texto, binarios o condiciones para identificar y clasificar muestras de malware."
    },
    {
        id: 281,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "básico",
        question: "¿Qué plataforma en línea permite verificar si un archivo o URL es malicioso utilizando múltiples motores antivirus?",
        options: [
            "Shodan",
            "VirusTotal",
            "AbuseIPDB",
            "Censys"
        ],
        correct: 1,
        explanation: "VirusTotal analiza archivos, URLs, dominios e IPs contra más de 70 motores antivirus y herramientas de detección, proporcionando un veredicto agregado."
    },
    {
        id: 282,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Qué es un SOAR y cómo complementa al SIEM?",
        options: [
            "Un tipo de firewall que complementa al SIEM bloqueando tráfico",
            "Una plataforma que automatiza la respuesta a incidentes mediante playbooks, reduciendo el tiempo de respuesta",
            "Un escáner de vulnerabilidades integrado en el SIEM",
            "Un sistema de backup que complementa los logs del SIEM"
        ],
        correct: 1,
        explanation: "SOAR (Security Orchestration, Automation, and Response) automatiza tareas repetitivas del SOC mediante playbooks, permitiendo respuesta más rápida a alertas del SIEM."
    },
    {
        id: 283,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Qué herramienta de IDS/IPS es conocida por su capacidad de análisis profundo del tráfico de red y generación de logs de conexión?",
        options: [
            "Snort",
            "Zeek (antes Bro)",
            "YARA",
            "Nessus"
        ],
        correct: 1,
        explanation: "Zeek (anteriormente Bro) se enfoca en el análisis profundo del tráfico de red, generando logs detallados de conexiones, DNS, HTTP, SSL y más."
    },
    {
        id: 284,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "básico",
        question: "¿Qué plataforma permite buscar IPs reportadas como maliciosas por la comunidad?",
        options: [
            "VirusTotal",
            "AbuseIPDB",
            "Shodan",
            "Censys"
        ],
        correct: 1,
        explanation: "AbuseIPDB es una base de datos colaborativa donde se reportan IPs maliciosas, útil para verificar si una IP está asociada con actividad maliciosa."
    },
    {
        id: 285,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Qué motor de búsqueda permite encontrar dispositivos conectados a Internet y sus servicios expuestos?",
        options: [
            "Google",
            "VirusTotal",
            "Shodan",
            "AbuseIPDB"
        ],
        correct: 2,
        explanation: "Shodan escanea Internet e indexa dispositivos conectados, mostrando puertos abiertos, servicios, versiones y banners, útil para identificar exposiciones."
    },
    {
        id: 286,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "avanzado",
        question: "¿Qué lenguaje de consulta se utiliza en Splunk para buscar y analizar logs?",
        options: [
            "KQL (Kusto Query Language)",
            "SQL",
            "SPL (Search Processing Language)",
            "Lucene"
        ],
        correct: 2,
        explanation: "SPL (Search Processing Language) es el lenguaje nativo de Splunk para buscar, filtrar, transformar y visualizar datos de logs."
    },
    {
        id: 287,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Qué herramienta de código abierto combina funciones de SIEM, EDR y gestión de vulnerabilidades?",
        options: [
            "Splunk",
            "QRadar",
            "Wazuh",
            "Carbon Black"
        ],
        correct: 2,
        explanation: "Wazuh es una plataforma open-source que combina SIEM, EDR, FIM, detección de vulnerabilidades y cumplimiento normativo en una sola solución."
    },
    {
        id: 288,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "intermedio",
        question: "¿Qué herramienta forense se utiliza para análisis de discos y sistemas de archivos?",
        options: [
            "Volatility",
            "Wireshark",
            "Autopsy",
            "Burp Suite"
        ],
        correct: 2,
        explanation: "Autopsy es una plataforma forense digital de código abierto para análisis de discos, que permite recuperar archivos borrados, analizar timelines y artefactos."
    },
    {
        id: 289,
        section: "Herramientas SOC",
        sectionId: "herramientas",
        difficulty: "avanzado",
        question: "Un analista necesita identificar qué proceso en un endpoint está generando tráfico hacia un dominio C2 conocido. ¿Qué herramienta es más útil?",
        options: [
            "Wireshark en el perímetro",
            "EDR instalado en el endpoint (CrowdStrike, Defender for Endpoint, SentinelOne)",
            "Escáner de vulnerabilidades Nessus",
            "Servidor DHCP"
        ],
        correct: 1,
        explanation: "El EDR en el endpoint permite correlacionar procesos con conexiones de red, identificando exactamente qué ejecutable genera el tráfico hacia el C2."
    },

    // ========================================================
    //  SECCIÓN: Frameworks y Metodologías  (~15 preguntas)
    // ========================================================

    {
        id: 290,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "básico",
        question: "¿Qué es MITRE ATT&CK?",
        options: [
            "Un antivirus empresarial",
            "Una base de conocimiento que cataloga tácticas, técnicas y procedimientos (TTPs) de adversarios reales",
            "Un framework de desarrollo de software seguro",
            "Una herramienta de escaneo de vulnerabilidades"
        ],
        correct: 1,
        explanation: "MITRE ATT&CK es una base de conocimiento global que documenta TTPs de adversarios reales, organizada en 14 tácticas que cubren todo el ciclo de ataque."
    },
    {
        id: 291,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "intermedio",
        question: "¿Cuántas tácticas tiene el framework MITRE ATT&CK para Enterprise?",
        options: [
            "7",
            "10",
            "14",
            "20"
        ],
        correct: 2,
        explanation: "MITRE ATT&CK Enterprise tiene 14 tácticas: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, C2, Exfiltration e Impact."
    },
    {
        id: 292,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "intermedio",
        question: "¿Cuáles son las 7 fases de la Cyber Kill Chain de Lockheed Martin?",
        options: [
            "Plan, Do, Check, Act, Monitor, Review, Improve",
            "Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, Actions on Objectives",
            "Identify, Protect, Detect, Respond, Recover, Monitor, Report",
            "Scan, Enumerate, Exploit, Escalate, Persist, Exfiltrate, Cover"
        ],
        correct: 1,
        explanation: "La Cyber Kill Chain tiene 7 fases secuenciales que describen las etapas de un ciberataque, desde el reconocimiento hasta lograr los objetivos finales."
    },
    {
        id: 293,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "intermedio",
        question: "¿Cuáles son las 5 funciones principales del NIST Cybersecurity Framework (CSF)?",
        options: [
            "Plan, Build, Run, Monitor, Improve",
            "Identify, Protect, Detect, Respond, Recover",
            "Confidentiality, Integrity, Availability, Authentication, Authorization",
            "Prevent, Detect, Analyze, Contain, Eradicate"
        ],
        correct: 1,
        explanation: "NIST CSF define 5 funciones: Identify (activos y riesgos), Protect (salvaguardas), Detect (monitoreo), Respond (respuesta) y Recover (recuperación)."
    },
    {
        id: 294,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "intermedio",
        question: "¿Cuáles son los 4 elementos del Diamond Model of Intrusion Analysis?",
        options: [
            "Atacante, Víctima, Método y Motivo",
            "Adversary, Capability, Infrastructure y Victim",
            "Source, Target, Payload y Impact",
            "Who, What, When y Where"
        ],
        correct: 1,
        explanation: "El Diamond Model conecta cuatro elementos: Adversary (quién), Capability (cómo), Infrastructure (desde dónde) y Victim (a quién), facilitando el análisis de intrusiones."
    },
    {
        id: 295,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "avanzado",
        question: "En MITRE ATT&CK, ¿qué táctica describe las técnicas que un atacante usa para establecer comunicación con los sistemas comprometidos?",
        options: [
            "Exfiltration",
            "Lateral Movement",
            "Command and Control (C2)",
            "Persistence"
        ],
        correct: 2,
        explanation: "La táctica Command and Control (C2) en MITRE ATT&CK describe cómo los atacantes se comunican con los sistemas comprometidos para enviar comandos y recibir datos."
    },
    {
        id: 296,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "básico",
        question: "¿Qué lista de OWASP clasifica las 10 vulnerabilidades más críticas en aplicaciones web?",
        options: [
            "OWASP Testing Guide",
            "OWASP Top 10",
            "OWASP ASVS",
            "OWASP SAMM"
        ],
        correct: 1,
        explanation: "El OWASP Top 10 es la lista de referencia de las 10 vulnerabilidades más críticas en aplicaciones web, actualizada periódicamente por la comunidad."
    },
    {
        id: 297,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "intermedio",
        question: "¿Qué estándar internacional establece requisitos para un Sistema de Gestión de Seguridad de la Información (SGSI)?",
        options: [
            "NIST 800-53",
            "PCI DSS",
            "ISO 27001",
            "SOC 2"
        ],
        correct: 2,
        explanation: "ISO 27001 es el estándar internacional que define los requisitos para establecer, implementar, mantener y mejorar un SGSI de forma continua."
    },
    {
        id: 298,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "avanzado",
        question: "¿En qué fase de la Cyber Kill Chain el atacante combina un exploit con un payload para crear el artefacto de ataque?",
        options: [
            "Reconnaissance",
            "Weaponization",
            "Delivery",
            "Exploitation"
        ],
        correct: 1,
        explanation: "En la fase de Weaponization, el atacante combina un exploit con un payload (por ejemplo, un documento con macro maliciosa) para crear el arma del ataque."
    },
    {
        id: 299,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "intermedio",
        question: "¿Qué significan las siglas TTP en el contexto de MITRE ATT&CK?",
        options: [
            "Tools, Targets, Protocols",
            "Tactics, Techniques, and Procedures",
            "Threats, Trends, and Predictions",
            "Testing, Tracking, and Patching"
        ],
        correct: 1,
        explanation: "TTP (Tactics, Techniques, and Procedures) describe el comportamiento de un adversario: qué quiere lograr (Tactic), cómo lo hace (Technique) y los detalles específicos (Procedure)."
    },
    {
        id: 300,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "avanzado",
        question: "En MITRE ATT&CK, un atacante usa Mimikatz para extraer credenciales de LSASS. ¿Bajo qué táctica se clasifica?",
        options: [
            "Execution",
            "Credential Access",
            "Persistence",
            "Discovery"
        ],
        correct: 1,
        explanation: "El volcado de credenciales con Mimikatz se clasifica bajo la táctica Credential Access (T1003 - OS Credential Dumping), específicamente sub-técnica LSASS Memory."
    },
    {
        id: 301,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "avanzado",
        question: "¿Qué táctica de MITRE ATT&CK cubre las técnicas para evitar la detección por herramientas de seguridad?",
        options: [
            "Execution",
            "Persistence",
            "Defense Evasion",
            "Lateral Movement"
        ],
        correct: 2,
        explanation: "Defense Evasion incluye técnicas como ofuscación de código, deshabilitación de logs, process injection y timestomping, diseñadas para evitar la detección."
    },
    {
        id: 302,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "intermedio",
        question: "¿Cuál es la primera fase de la Cyber Kill Chain?",
        options: [
            "Delivery",
            "Weaponization",
            "Reconnaissance",
            "Exploitation"
        ],
        correct: 2,
        explanation: "Reconnaissance es la primera fase, donde el atacante recopila información sobre el objetivo: IPs, empleados, tecnologías, correos electrónicos, etc."
    },
    {
        id: 303,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "avanzado",
        question: "¿Qué función del NIST CSF se enfoca en restaurar servicios y capacidades afectados después de un incidente?",
        options: [
            "Respond",
            "Detect",
            "Recover",
            "Protect"
        ],
        correct: 2,
        explanation: "La función Recover del NIST CSF abarca las actividades de restauración de servicios afectados, planificación de recuperación e implementación de mejoras post-incidente."
    },
    {
        id: 304,
        section: "Frameworks y Metodologías",
        sectionId: "frameworks",
        difficulty: "intermedio",
        question: "En el Diamond Model, ¿qué vértice representa las herramientas y técnicas que usa el atacante?",
        options: [
            "Adversary",
            "Victim",
            "Capability",
            "Infrastructure"
        ],
        correct: 2,
        explanation: "El vértice Capability en el Diamond Model representa las herramientas, técnicas, malware y exploits que el adversario utiliza para ejecutar su ataque."
    },

    // ========================================================
    //  SECCIÓN: Threat Hunting y Detección  (~10 preguntas)
    // ========================================================

    {
        id: 305,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "básico",
        question: "¿Qué es Threat Hunting?",
        options: [
            "Escaneo automático de vulnerabilidades en la red",
            "Búsqueda proactiva de amenazas que han evadido los controles de seguridad existentes",
            "Respuesta automática a alertas del SIEM",
            "Instalación y configuración de firewalls"
        ],
        correct: 1,
        explanation: "Threat Hunting es la búsqueda proactiva e iterativa de amenazas que no han sido detectadas por las herramientas automatizadas de seguridad."
    },
    {
        id: 306,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "intermedio",
        question: "¿Cuáles son las fases típicas de la metodología de Threat Hunting?",
        options: [
            "Scan, Exploit, Report, Patch",
            "Hypothesis, Investigation, Discovery, Response",
            "Plan, Do, Check, Act",
            "Identify, Protect, Detect, Respond"
        ],
        correct: 1,
        explanation: "La metodología de Threat Hunting sigue: formular una Hipótesis, Investigar los datos, Descubrir actividad maliciosa y Responder con acciones de mitigación."
    },
    {
        id: 307,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "básico",
        question: "¿Qué es un Indicador de Compromiso (IoC)?",
        options: [
            "Una política de seguridad corporativa",
            "Un artefacto observable que indica que un sistema ha sido comprometido (IP, hash, dominio)",
            "Una técnica de cifrado para proteger datos",
            "Un tipo de firewall de nueva generación"
        ],
        correct: 1,
        explanation: "Un IoC es una evidencia técnica observable de una intrusión: IPs maliciosas, hashes de malware, dominios C2, URLs, claves de registro sospechosas, etc."
    },
    {
        id: 308,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "intermedio",
        question: "¿Cuál es la diferencia principal entre un IoC y un IoA?",
        options: [
            "No hay diferencia; son términos intercambiables",
            "Un IoC es un indicador estático/reactivo de compromiso pasado; un IoA es un indicador dinámico/proactivo de ataque en curso",
            "Un IoA solo aplica a malware; un IoC aplica a todo",
            "Un IoC es más avanzado que un IoA"
        ],
        correct: 1,
        explanation: "Los IoC son evidencias estáticas de compromiso pasado (hash, IP). Los IoA (Indicators of Attack) detectan comportamientos de ataque en tiempo real, siendo más proactivos."
    },
    {
        id: 309,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "avanzado",
        question: "Un threat hunter formula la hipótesis: 'Un atacante puede estar usando PowerShell para descargar payloads'. ¿Qué datos buscaría primero?",
        options: [
            "Logs de acceso físico al edificio",
            "Event ID 4104 buscando comandos como IEX, DownloadString, -enc y Invoke-WebRequest",
            "Logs del servidor DHCP",
            "Registros de inventario de hardware"
        ],
        correct: 1,
        explanation: "El Event ID 4104 (Script Block Logging) captura el contenido decodificado de scripts PowerShell, donde se buscarían patrones de descarga como IEX y DownloadString."
    },
    {
        id: 310,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "intermedio",
        question: "¿Qué tipo de IoC es un hash SHA-256 de un archivo sospechoso?",
        options: [
            "IoC de red (Network)",
            "IoC de host (basado en archivo)",
            "IoC de comportamiento",
            "IoC de correo electrónico"
        ],
        correct: 1,
        explanation: "Un hash de archivo es un IoC basado en host que identifica de forma única un archivo específico, permitiendo buscar ese mismo malware en otros sistemas."
    },
    {
        id: 311,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "avanzado",
        question: "¿Por qué los IoA (Indicators of Attack) son más efectivos que los IoC para detectar amenazas avanzadas?",
        options: [
            "Porque los IoA son más baratos de implementar",
            "Porque los IoA detectan comportamientos de ataque independientemente del malware específico, mientras los IoC se vuelven obsoletos al cambiar el hash",
            "Porque los IoA solo funcionan en la nube",
            "Porque los IoA reemplazan completamente al SIEM"
        ],
        correct: 1,
        explanation: "Los IoA detectan patrones de comportamiento (ej: proceso inyectando en otro) que persisten aunque el atacante cambie sus herramientas, mientras los IoC se invalidan al modificar un byte."
    },
    {
        id: 312,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "intermedio",
        question: "¿Qué regla se usaría para detectar un archivo malicioso basándose en cadenas de texto y patrones binarios?",
        options: [
            "Regla de Snort",
            "Regla de firewall",
            "Regla YARA",
            "Regla de GPO"
        ],
        correct: 2,
        explanation: "Las reglas YARA permiten definir patrones de texto, hexadecimales y condiciones lógicas para identificar y clasificar familias de malware en archivos."
    },
    {
        id: 313,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "avanzado",
        question: "Un hunter detecta consultas DNS a dominios con alta entropía y patrones aleatorios (ej: xk7f9m2.evil.com). ¿Qué técnica sospecha?",
        options: [
            "DNS Spoofing",
            "Domain Generation Algorithm (DGA) para comunicación C2",
            "DNS Zone Transfer",
            "DNS Cache Poisoning"
        ],
        correct: 1,
        explanation: "Los DGA generan dominios pseudo-aleatorios para C2, haciendo difícil bloquearlos por lista negra. La alta entropía en nombres de dominio es un indicador clave."
    },
    {
        id: 314,
        section: "Threat Hunting y Detección",
        sectionId: "threat-hunting",
        difficulty: "intermedio",
        question: "¿Qué concepto describe el conjunto completo de comportamientos de un grupo de amenaza (sus tácticas, técnicas y procedimientos)?",
        options: [
            "IoC",
            "CVE",
            "TTP (Tactics, Techniques, and Procedures)",
            "CVSS"
        ],
        correct: 2,
        explanation: "Los TTP describen el modus operandi completo de un grupo de amenaza: sus objetivos (tácticas), métodos (técnicas) e implementaciones específicas (procedimientos)."
    },

    // ========================================================
    //  SECCIÓN: Respuesta a Incidentes  (~10 preguntas)
    // ========================================================

    {
        id: 315,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "básico",
        question: "¿Cuáles son las 6 fases del proceso de Respuesta a Incidentes según NIST SP 800-61?",
        options: [
            "Plan, Do, Check, Act, Review, Improve",
            "Preparación, Detección y Análisis, Contención, Erradicación, Recuperación y Lecciones Aprendidas",
            "Identify, Protect, Detect, Respond, Recover, Monitor",
            "Scan, Detect, Alert, Block, Patch, Report"
        ],
        correct: 1,
        explanation: "NIST define 6 fases: Preparación, Detección y Análisis, Contención, Erradicación, Recuperación y Actividades Post-Incidente (Lecciones Aprendidas)."
    },
    {
        id: 316,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "intermedio",
        question: "¿Qué acción de contención es más apropiada al detectar un endpoint comprometido con ransomware activo?",
        options: [
            "Apagar el equipo inmediatamente",
            "Aislar el equipo de la red manteniendo el EDR activo para recolección de evidencia",
            "Formatear el disco duro inmediatamente",
            "Enviar un correo al usuario pidiéndole que reinicie"
        ],
        correct: 1,
        explanation: "Aislar el equipo de la red previene propagación mientras el EDR sigue recopilando evidencia. Apagar podría destruir evidencia volátil en memoria."
    },
    {
        id: 317,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "intermedio",
        question: "¿Qué nivel de severidad tendría un incidente de ransomware activo cifrando servidores de producción?",
        options: [
            "Bajo (Low)",
            "Medio (Medium)",
            "Alto (High)",
            "Crítico (Critical)"
        ],
        correct: 3,
        explanation: "Un ransomware activo en producción es Crítico: afecta la disponibilidad de sistemas esenciales del negocio y requiere respuesta inmediata (< 15-30 minutos)."
    },
    {
        id: 318,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "avanzado",
        question: "Un usuario reporta un correo de phishing con un adjunto que ya abrió. ¿Cuál es el primer paso del playbook de phishing?",
        options: [
            "Borrar el correo y olvidar el incidente",
            "Contener: aislar el endpoint del usuario, buscar el mismo correo en otros buzones y bloquear el remitente/dominio",
            "Esperar a que el antivirus lo detecte automáticamente",
            "Pedir al usuario que cambie su contraseña y continúe trabajando"
        ],
        correct: 1,
        explanation: "El playbook de phishing requiere contención inmediata: aislar el endpoint afectado, buscar el correo en todos los buzones, bloquear el IoC y verificar si hubo ejecución."
    },
    {
        id: 319,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "intermedio",
        question: "¿Cuál es el objetivo principal de la fase de 'Lecciones Aprendidas' (Post-Mortem)?",
        options: [
            "Asignar culpables por el incidente",
            "Documentar lo ocurrido, identificar mejoras y actualizar procedimientos para prevenir incidentes similares",
            "Eliminar toda evidencia del incidente",
            "Notificar a la prensa sobre el incidente"
        ],
        correct: 1,
        explanation: "El Post-Mortem documenta la cronología, acciones tomadas, lo que funcionó/falló y las mejoras recomendadas, sin buscar culpables (blameless post-mortem)."
    },
    {
        id: 320,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "intermedio",
        question: "¿Qué tiempo de respuesta se espera típicamente para un incidente de severidad Crítica?",
        options: [
            "Dentro de 24 horas",
            "Dentro de 4 horas",
            "Inmediato (15-30 minutos)",
            "Dentro de 1 semana"
        ],
        correct: 2,
        explanation: "Los incidentes Críticos requieren respuesta inmediata (15-30 minutos), ya que afectan sistemas esenciales del negocio con impacto activo."
    },
    {
        id: 321,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "avanzado",
        question: "Durante la contención de un incidente, ¿por qué es importante NO apagar inmediatamente un servidor comprometido?",
        options: [
            "Porque el servidor necesita seguir dando servicio a los usuarios",
            "Porque se perdería la evidencia volátil en memoria RAM (procesos, conexiones, credenciales en uso)",
            "Porque apagar un servidor siempre causa daños de hardware",
            "Porque las políticas de la empresa prohíben apagar servidores"
        ],
        correct: 1,
        explanation: "La memoria RAM contiene evidencia forense valiosa: procesos activos, conexiones de red, malware en ejecución y credenciales. Apagar el equipo destruye esta evidencia."
    },
    {
        id: 322,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "intermedio",
        question: "¿Qué estrategia de contención implica bloquear una IP maliciosa en el firewall perimetral?",
        options: [
            "Aislamiento de endpoint",
            "Bloqueo de indicadores (IP/dominio/hash)",
            "Deshabilitación de cuenta",
            "Segmentación de red"
        ],
        correct: 1,
        explanation: "El bloqueo de IoCs en el firewall (IPs, dominios) es una medida de contención rápida que interrumpe la comunicación con la infraestructura del atacante."
    },
    {
        id: 323,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "avanzado",
        question: "¿Qué fase del proceso NIST IR se encarga de eliminar completamente la presencia del atacante del entorno?",
        options: [
            "Contención",
            "Erradicación",
            "Recuperación",
            "Detección"
        ],
        correct: 1,
        explanation: "La fase de Erradicación elimina completamente la presencia del atacante: malware, backdoors, cuentas creadas y mecanismos de persistencia."
    },
    {
        id: 324,
        section: "Respuesta a Incidentes",
        sectionId: "respuesta-incidentes",
        difficulty: "intermedio",
        question: "¿Qué nivel de severidad correspondería a un escaneo de puertos detectado desde una IP externa?",
        options: [
            "Crítico (Critical)",
            "Alto (High)",
            "Medio (Medium)",
            "Bajo (Low)"
        ],
        correct: 3,
        explanation: "Un escaneo de puertos externo es típicamente de severidad Baja: es actividad de reconocimiento sin impacto directo, aunque debe monitorearse por si escala."
    },

    // ========================================================
    //  SECCIÓN: Cloud Security  (~10 preguntas)
    // ========================================================

    {
        id: 325,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "básico",
        question: "¿Qué modelo de servicio en la nube proporciona máquinas virtuales e infraestructura sobre la cual el cliente gestiona todo lo demás?",
        options: [
            "SaaS",
            "PaaS",
            "IaaS",
            "FaaS"
        ],
        correct: 2,
        explanation: "IaaS (Infrastructure as a Service) proporciona recursos de infraestructura (VMs, redes, almacenamiento). Ejemplos: AWS EC2, Azure VMs, Google Compute Engine."
    },
    {
        id: 326,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "intermedio",
        question: "¿Qué riesgo de seguridad representa un bucket de S3 configurado como público?",
        options: [
            "Solo afecta al rendimiento de la aplicación",
            "Exposición de datos sensibles a cualquier persona en Internet",
            "El bucket se elimina automáticamente",
            "Solo afecta a la facturación de AWS"
        ],
        correct: 1,
        explanation: "Un bucket S3 público expone todos sus datos a Internet, pudiendo filtrar información sensible como credenciales, datos de clientes o backups de bases de datos."
    },
    {
        id: 327,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "intermedio",
        question: "¿Qué servicio de AWS registra todas las llamadas API realizadas en la cuenta?",
        options: [
            "AWS GuardDuty",
            "AWS CloudTrail",
            "VPC Flow Logs",
            "AWS Config"
        ],
        correct: 1,
        explanation: "AWS CloudTrail registra todas las llamadas API de la cuenta AWS, incluyendo quién hizo qué, cuándo y desde dónde. Es esencial para auditoría y forense en la nube."
    },
    {
        id: 328,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "avanzado",
        question: "¿Qué amenaza en la nube ocurre cuando un atacante usa recursos comprometidos para minar criptomonedas?",
        options: [
            "Shadow IT",
            "Data Exfiltration",
            "Cryptojacking / Crypto Mining",
            "Credential Stuffing"
        ],
        correct: 2,
        explanation: "El cryptojacking en la nube ocurre cuando atacantes comprometen cuentas cloud para desplegar instancias de minería, generando costos elevados inesperados."
    },
    {
        id: 329,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "intermedio",
        question: "En el modelo de responsabilidad compartida, ¿quién es responsable de la seguridad de los datos en una solución SaaS?",
        options: [
            "Solo el proveedor cloud",
            "Solo el cliente",
            "El cliente es responsable de los datos y acceso; el proveedor de la infraestructura y aplicación",
            "Ninguno; la seguridad es automática"
        ],
        correct: 2,
        explanation: "En SaaS, el proveedor gestiona infraestructura, plataforma y aplicación, pero el cliente sigue siendo responsable de sus datos, configuración de acceso y gestión de usuarios."
    },
    {
        id: 330,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "avanzado",
        question: "¿Qué servicio de AWS detecta amenazas automáticamente analizando CloudTrail, VPC Flow Logs y DNS?",
        options: [
            "AWS CloudTrail",
            "AWS GuardDuty",
            "AWS Inspector",
            "AWS WAF"
        ],
        correct: 1,
        explanation: "AWS GuardDuty es un servicio de detección de amenazas que analiza automáticamente CloudTrail, VPC Flow Logs y DNS Logs para identificar actividad maliciosa."
    },
    {
        id: 331,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "intermedio",
        question: "¿Qué logs de Azure son equivalentes a AWS CloudTrail para auditar actividades de gestión?",
        options: [
            "Azure Blob Logs",
            "Azure Activity Log",
            "Azure SQL Audit",
            "Azure Metrics"
        ],
        correct: 1,
        explanation: "Azure Activity Log registra las operaciones de gestión en los recursos de Azure (quién, qué, cuándo), siendo el equivalente de AWS CloudTrail."
    },
    {
        id: 332,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "avanzado",
        question: "¿Qué riesgo representa una política IAM con permisos 'Action: *, Resource: *' en AWS?",
        options: [
            "Es la configuración recomendada por AWS",
            "Otorga permisos administrativos completos, violando el principio de mínimo privilegio",
            "Solo permite lectura de recursos",
            "Bloquea todo acceso a la cuenta"
        ],
        correct: 1,
        explanation: "Una política con Action:* y Resource:* otorga permisos totales (equivalente a admin), violando el principio de mínimo privilegio y creando un riesgo crítico si la cuenta se compromete."
    },
    {
        id: 333,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "intermedio",
        question: "¿Qué es Shadow IT en el contexto de cloud security?",
        options: [
            "Una técnica de cifrado avanzada",
            "Uso de servicios cloud no autorizados por el departamento de IT sin conocimiento de la organización",
            "Un tipo de ataque DDoS contra servicios cloud",
            "Una herramienta de monitoreo en la nube"
        ],
        correct: 1,
        explanation: "Shadow IT se refiere al uso de servicios y aplicaciones cloud no aprobados por la organización, creando riesgos de seguridad por falta de visibilidad y control."
    },
    {
        id: 334,
        section: "Cloud Security",
        sectionId: "cloud-security",
        difficulty: "avanzado",
        question: "¿Qué logs de Azure registran los intentos de inicio de sesión y actividades de autenticación en Azure Active Directory?",
        options: [
            "Azure Activity Log",
            "Azure AD Sign-in Logs",
            "Azure Network Watcher",
            "Azure Resource Logs"
        ],
        correct: 1,
        explanation: "Los Azure AD Sign-in Logs registran todos los intentos de autenticación, incluyendo éxitos, fallos, MFA, acceso condicional y ubicación geográfica."
    },

    // ========================================================
    //  SECCIÓN: Glosario General  (~15 preguntas)
    // ========================================================

    {
        id: 335,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "básico",
        question: "¿Qué significan las siglas APT (Advanced Persistent Threat)?",
        options: [
            "Application Protocol Testing",
            "Amenaza Persistente Avanzada: un grupo de ataque sofisticado y con objetivos a largo plazo",
            "Automated Penetration Tool",
            "Advanced Proxy Technology"
        ],
        correct: 1,
        explanation: "Un APT es un grupo de amenaza altamente sofisticado (frecuentemente patrocinado por estados) que mantiene acceso prolongado a sus objetivos para espionaje o sabotaje."
    },
    {
        id: 336,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "básico",
        question: "¿Qué es un CVE (Common Vulnerabilities and Exposures)?",
        options: [
            "Un tipo de malware",
            "Un identificador único para vulnerabilidades de seguridad conocidas públicamente",
            "Un protocolo de cifrado",
            "Un framework de respuesta a incidentes"
        ],
        correct: 1,
        explanation: "CVE es un sistema de identificación estandarizado que asigna un ID único (ej: CVE-2021-44228) a cada vulnerabilidad de seguridad conocida públicamente."
    },
    {
        id: 337,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "intermedio",
        question: "¿Qué mide el CVSS (Common Vulnerability Scoring System)?",
        options: [
            "El costo económico de un incidente",
            "La severidad de una vulnerabilidad en una escala de 0.0 a 10.0",
            "El número de sistemas afectados",
            "La probabilidad de que ocurra un terremoto"
        ],
        correct: 1,
        explanation: "CVSS asigna una puntuación de 0.0 a 10.0 que mide la severidad de una vulnerabilidad basándose en su complejidad, impacto y vector de ataque."
    },
    {
        id: 338,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "intermedio",
        question: "¿Qué es una DMZ (Demilitarized Zone) en redes?",
        options: [
            "Una red completamente aislada sin acceso a Internet",
            "Una subred intermedia entre la red interna y externa que aloja servicios públicos con controles de seguridad",
            "Un tipo de VPN para acceso remoto",
            "Una zona geográfica sin cobertura de red"
        ],
        correct: 1,
        explanation: "La DMZ es una subred que separa la red interna de la externa, alojando servidores que necesitan acceso público (web, email) con firewalls en ambos lados."
    },
    {
        id: 339,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "intermedio",
        question: "¿Qué es un WAF (Web Application Firewall)?",
        options: [
            "Un firewall que filtra tráfico a nivel de capa 3 (IP)",
            "Un firewall especializado en proteger aplicaciones web contra ataques como SQL Injection y XSS",
            "Un antivirus para servidores web",
            "Un protocolo de autenticación web"
        ],
        correct: 1,
        explanation: "Un WAF opera en capa 7 (aplicación) e inspecciona el tráfico HTTP/HTTPS para bloquear ataques web como SQL Injection, XSS, CSRF y otros del OWASP Top 10."
    },
    {
        id: 340,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "avanzado",
        question: "¿Qué son los LOLBins (Living Off the Land Binaries)?",
        options: [
            "Malware personalizado creado por APTs",
            "Binarios legítimos del sistema operativo que los atacantes abusan para ejecutar acciones maliciosas",
            "Herramientas de pentesting comerciales",
            "Bibliotecas de código abierto con vulnerabilidades"
        ],
        correct: 1,
        explanation: "LOLBins son ejecutables legítimos del SO (PowerShell, certutil, mshta, rundll32) que los atacantes aprovechan para ejecutar código malicioso, evadiendo detección."
    },
    {
        id: 341,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "intermedio",
        question: "¿Qué es DLP (Data Loss Prevention)?",
        options: [
            "Un protocolo de transferencia de datos",
            "Una tecnología que detecta y previene la fuga de datos sensibles fuera de la organización",
            "Un tipo de backup incremental",
            "Un sistema de detección de intrusiones"
        ],
        correct: 1,
        explanation: "DLP monitorea, detecta y bloquea la transferencia no autorizada de datos sensibles (PII, financieros, IP) a través de email, USB, cloud y otros canales."
    },
    {
        id: 342,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "avanzado",
        question: "¿Qué es XDR (Extended Detection and Response)?",
        options: [
            "Una versión avanzada de XSS",
            "Una plataforma que integra detección y respuesta a través de múltiples capas: endpoint, red, email y cloud",
            "Un protocolo de cifrado extendido",
            "Un estándar de formato de logs"
        ],
        correct: 1,
        explanation: "XDR extiende las capacidades de EDR integrando datos de endpoint, red, email y cloud en una sola plataforma para detección y respuesta unificada."
    },
    {
        id: 343,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "intermedio",
        question: "¿Qué es OSINT (Open Source Intelligence)?",
        options: [
            "Software de código abierto para seguridad",
            "Inteligencia recopilada de fuentes públicamente disponibles (redes sociales, registros DNS, foros)",
            "Un protocolo de comunicación abierto",
            "Un tipo de licencia de software"
        ],
        correct: 1,
        explanation: "OSINT es la recopilación y análisis de información de fuentes públicas como redes sociales, registros WHOIS, documentos públicos y foros para inteligencia de amenazas."
    },
    {
        id: 344,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "avanzado",
        question: "¿Qué es una vulnerabilidad Zero-Day?",
        options: [
            "Una vulnerabilidad que fue parcheada hace cero días",
            "Una vulnerabilidad desconocida para el fabricante y sin parche disponible, que está siendo explotada activamente",
            "Una vulnerabilidad que solo existe durante un día",
            "Una vulnerabilidad con CVSS de 0.0"
        ],
        correct: 1,
        explanation: "Un Zero-Day es una vulnerabilidad desconocida por el fabricante (0 días para parchear) que puede estar siendo explotada activamente, representando el mayor riesgo."
    },
    {
        id: 345,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "intermedio",
        question: "¿Qué son STIX y TAXII en el contexto de threat intelligence?",
        options: [
            "Herramientas de escaneo de vulnerabilidades",
            "STIX es el formato estándar para representar IoCs y TAXII es el protocolo para compartirlos",
            "Tipos de malware clasificados por MITRE",
            "Protocolos de cifrado para comunicaciones seguras"
        ],
        correct: 1,
        explanation: "STIX (Structured Threat Information Expression) es el formato JSON para IoCs/TTPs y TAXII (Trusted Automated Exchange) es el protocolo de transporte para compartirlos."
    },
    {
        id: 346,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "intermedio",
        question: "¿Qué es FIM (File Integrity Monitoring)?",
        options: [
            "Un protocolo de transferencia de archivos",
            "Una tecnología que detecta cambios no autorizados en archivos críticos del sistema",
            "Un formato de imagen forense",
            "Un firewall para archivos compartidos"
        ],
        correct: 1,
        explanation: "FIM monitorea archivos críticos del sistema y configuraciones, alertando cuando se detectan modificaciones no autorizadas que podrían indicar compromiso."
    },
    {
        id: 347,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "avanzado",
        question: "¿Qué es un CASB (Cloud Access Security Broker)?",
        options: [
            "Un proveedor de servicios cloud",
            "Un intermediario de seguridad entre usuarios y servicios cloud que aplica políticas de seguridad",
            "Un tipo de certificado SSL para la nube",
            "Un backup automatizado en la nube"
        ],
        correct: 1,
        explanation: "Un CASB se sitúa entre los usuarios y los servicios cloud para aplicar políticas de seguridad, visibilidad, cumplimiento, protección contra amenazas y DLP."
    },
    {
        id: 348,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "intermedio",
        question: "¿Qué es un NGFW (Next-Generation Firewall)?",
        options: [
            "Un firewall que solo filtra por IP y puerto",
            "Un firewall avanzado que incluye inspección profunda de paquetes, IPS, filtrado de aplicaciones y threat intelligence",
            "Un firewall exclusivo para redes inalámbricas",
            "Un firewall de software para laptops"
        ],
        correct: 1,
        explanation: "Un NGFW combina firewall tradicional con capacidades avanzadas: inspección profunda de paquetes (DPI), IPS integrado, filtrado de aplicaciones (L7) y feeds de TI."
    },
    {
        id: 349,
        section: "Glosario General",
        sectionId: "glosario",
        difficulty: "avanzado",
        question: "¿Qué es un RCE (Remote Code Execution) y por qué es considerado crítico?",
        options: [
            "Un sistema de control remoto legítimo para administradores",
            "Una vulnerabilidad que permite a un atacante ejecutar código arbitrario en un sistema remoto sin autenticación",
            "Un protocolo de comunicación cifrada",
            "Un tipo de redundancia en centros de datos"
        ],
        correct: 1,
        explanation: "RCE permite ejecutar código arbitrario en un sistema remoto, frecuentemente sin autenticación. Es crítico porque da control total al atacante (ej: Log4Shell CVE-2021-44228)."
    }

];
