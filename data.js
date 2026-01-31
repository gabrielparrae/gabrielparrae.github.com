const quizData = [
  {
    id: "t1-teoria",
    title: "Tema 1: Distancias Astronómicas (Teoría)",
    icon: "📏",
    questions: [
      {
        id: 1,
        q: "¿Qué es la notación científica y para qué se utiliza en astronomía?",
        a: "La notación científica es una forma de escribir números muy grandes o muy pequeños utilizando potencias de 10. En astronomía se usa para manejar distancias colosales como años luz o tamaños microscópicos como longitudes de onda."
      },
      {
        id: 2,
        q: "¿Cuál es la definición de Unidad Astronómica (UA)?",
        a: "La Unidad Astronómica (UA) es la distancia promedio entre la Tierra y el Sol, aproximadamente 150 millones de kilómetros."
      },
      {
        id: 3,
        q: "¿Qué es un año luz y por qué NO es una unidad de tiempo?",
        a: "Un año luz es la distancia que recorre la luz en el vacío durante un año terrestre completo (aproximadamente 9.46 billones de km). NO es unidad de tiempo porque mide distancia, no duración."
      },
      {
        id: 4,
        q: "¿Qué significa la palabra 'parsec' y de qué proviene?",
        a: "'Parsec' proviene de 'PARalaje de un SEGUNDO de arCO'. Es la distancia a la que una estrella mostraría un paralaje de exactamente un segundo de arco."
      },
      {
        id: 5,
        q: "¿Cuál es la velocidad de la luz en el vacío?",
        a: "La velocidad de la luz en el vacío es aproximadamente 300,000 km/s (exactamente 299,792.458 km/s)."
      },
      {
        id: 6,
        q: "¿Qué es el paralaje estelar y cómo se utiliza para medir distancias?",
        a: "El paralaje estelar es el desplazamiento angular aparente de una estrella cuando se observa desde dos puntos diferentes de la órbita terrestre. Se usa para calcular distancias mediante trigonometría."
      },
      {
        id: 7,
        q: "¿Cuántos kilómetros equivalen a 1 parsec aproximadamente?",
        a: "1 parsec equivale aproximadamente a 31 billones de kilómetros (3.086 × 10¹³ km)."
      },
      {
        id: 8,
        q: "¿Qué es un segundo de arco en términos angulares?",
        a: "Un segundo de arco es 1/3600 de grado. Es la 60ava parte de un minuto de arco, que a su vez es la 60ava parte de un grado."
      },
      {
        id: 9,
        q: "¿Cuál es la estrella más cercana al Sol y a qué distancia se encuentra?",
        a: "Próxima Centauri es la estrella más cercana al Sol, ubicada a aproximadamente 4.2 años luz (1.3 parsecs)."
      },
      {
        id: 10,
        q: "¿Qué es la 'Escalera de Distancias Cósmicas'?",
        a: "Es una serie de métodos encadenados que los astrónomos usan para medir distancias cósmicas, desde el radar en el Sistema Solar hasta la Ley de Hubble para galaxias lejanas."
      }
    ]
  },
  {
    id: "t1-practica",
    title: "Tema 1: Distancias Astronómicas (Problemas)",
    icon: "🧮",
    questions: [
      {
        id: 1,
        q: "Convierte el número 0.0000456 a notación científica.",
        a: "Respuesta: 4.56 × 10⁻⁵. (Se mueve el punto 5 lugares a la derecha)."
      },
      {
        id: 2,
        q: "Expresa 7,800,000,000 en notación científica.",
        a: "Respuesta: 7.8 × 10⁹. (Se mueve el punto 9 lugares a la izquierda)."
      },
      {
        id: 3,
        q: "Calcula cuántos kilómetros recorre la luz en 30 segundos.",
        a: "Respuesta: 9,000,000 km. (d = 300,000 km/s × 30 s)."
      },
      {
        id: 4,
        q: "Si una estrella está a 5 años luz de distancia, ¿cuántos kilómetros son?",
        a: "Respuesta: 4.73 × 10¹³ km. (5 × 9.46 × 10¹² km)."
      },
      {
        id: 5,
        q: "La distancia de la Tierra a Marte es aproximadamente 0.7 UA. ¿Cuántos kilómetros son?",
        a: "Respuesta: 105,000,000 km. (0.7 × 150,000,000 km)."
      },
      {
        id: 6,
        q: "Próxima Centauri está a 4.2 años luz. Convierte esta distancia a parsecs.",
        a: "Respuesta: 1.29 parsecs. (4.2 ÷ 3.26)."
      },
      {
        id: 7,
        q: "Calcula cuántos metros hay en 2.5 gigámetros.",
        a: "Respuesta: 2.5 × 10⁹ metros. (1 Gm = 10⁹ m)."
      },
      {
        id: 8,
        q: "Una estrella tiene un paralaje de 0.5 segundos de arco. ¿A qué distancia en parsecs se encuentra?",
        a: "Respuesta: 2 parsecs. (d = 1 ÷ 0.5)."
      },
      {
        id: 9,
        q: "El diámetro de Júpiter es aproximadamente 140,000 km. Exprésalo en megámetros.",
        a: "Respuesta: 140 Mm. (140,000 ÷ 1,000)."
      },
      {
        id: 10,
        q: "Si la luz de una galaxia tarda 2.5 millones de años en llegar a nosotros, ¿a qué distancia en años luz está?",
        a: "Respuesta: 2.5 × 10⁶ años luz. (La distancia es numéricamente igual al tiempo luz)."
      }
    ]
  },
  {
    id: "t2-teoria",
    title: "Tema 2: Tiempo Astronómico (Teoría)",
    icon: "⏱️",
    questions: [
      {
        id: 1,
        q: "¿Cuál es la diferencia entre tiempo solar y tiempo sideral?",
        a: "El tiempo solar se basa en el movimiento aparente del Sol (día de 24 horas), mientras que el tiempo sideral se basa en el movimiento de estrellas distantes (día de 23h 56m)."
      },
      {
        id: 2,
        q: "¿Cuánto dura un día sideral en horas, minutos y segundos?",
        a: "Un día sideral dura 23 horas, 56 minutos y 4.091 segundos."
      },
      {
        id: 3,
        q: "¿Por qué un día solar es más largo que un día sideral?",
        a: "Porque durante la rotación de 360°, la Tierra también se mueve en su órbita, necesitando rotar unos 4 minutos adicionales para que el Sol vuelva a la misma posición."
      },
      {
        id: 4,
        q: "¿Cómo se define actualmente el segundo en el Sistema Internacional?",
        a: "El segundo se define como la duración de 9,192,631,770 períodos de la radiación correspondiente a la transición entre dos niveles hiperfinos del átomo de Cesio-133."
      },
      {
        id: 5,
        q: "¿Cuál es la duración exacta de un año tropical en días?",
        a: "Un año tropical dura aproximadamente 365.24219 días."
      },
      {
        id: 6,
        q: "¿Qué diferencia hay entre el calendario Juliano y el Gregoriano?",
        a: "El Juliano tenía años de 365.25 días exactos (bisiesto cada 4 años), mientras que el Gregoriano corrige esto omitiendo años bisiestos en siglos no divisibles por 400."
      },
      {
        id: 7,
        q: "¿Qué es la Ecuación del Tiempo?",
        a: "Es la diferencia entre el Tiempo Solar Aparente y el Tiempo Solar Medio, medida en minutos. Varía a lo largo del año debido a la órbita elíptica terrestre."
      },
      {
        id: 8,
        q: "¿Cuáles son los dos componentes principales de un reloj solar?",
        a: "El gnomon (pieza que proyecta sombra) y el cuadrante o placa horaria (superficie donde se proyecta la sombra)."
      },
      {
        id: 9,
        q: "¿Por qué el gnomon de un reloj solar debe estar alineado con el eje de rotación terrestre?",
        a: "Para que la sombra gire uniformemente a 15° por hora, coincidiendo con el movimiento aparente del Sol en el cielo."
      },
      {
        id: 10,
        q: "¿Qué es el Tiempo Solar Aparente y el Tiempo Solar Medio?",
        a: "El Tiempo Solar Aparente se basa en el Sol real (variable), mientras que el Tiempo Solar Medio usa un 'Sol ficticio' que se mueve a velocidad constante (24 horas exactas)."
      }
    ]
  },
  {
    id: "t2-practica",
    title: "Tema 2: Tiempo Astronómico (Problemas)",
    icon: "🧮",
    questions: [
      {
        id: 1,
        q: "Convierte 3.5 horas a minutos.",
        a: "Respuesta: 210 minutos. (3.5 × 60)."
      },
      {
        id: 2,
        q: "¿Cuántos segundos hay en 2 días solares?",
        a: "Respuesta: 172,800 segundos. (2 × 24 × 3600)."
      },
      {
        id: 3,
        q: "Si la diferencia entre día solar y sideral es de 4 minutos, ¿cuántos segundos de diferencia hay?",
        a: "Respuesta: 240 segundos. (4 × 60)."
      },
      {
        id: 4,
        q: "Convierte 45 minutos y 30 segundos a segundos totales.",
        a: "Respuesta: 2,730 segundos. (45 × 60 + 30)."
      },
      {
        id: 5,
        q: "Un año tiene 365.24219 días. ¿Cuántas horas tiene un año?",
        a: "Respuesta: 8,765.81 horas aproximadamente. (365.24219 × 24)."
      },
      {
        id: 6,
        q: "Si el calendario Juliano acumulaba un error de 11 minutos por año, ¿cuántos días de error se acumulaban en 100 años?",
        a: "Respuesta: 0.76 días (aprox 18 horas). (1,100 min ÷ 60 ÷ 24)."
      },
      {
        id: 7,
        q: "Convierte 2.5 días a horas.",
        a: "Respuesta: 60 horas. (2.5 × 24)."
      },
      {
        id: 8,
        q: "¿Cuántos minutos hay en una semana?",
        a: "Respuesta: 10,080 minutos. (7 × 24 × 60)."
      },
      {
        id: 9,
        q: "Si una estrella pasa por el meridiano a las 20:00 horas de tiempo sideral hoy, ¿a qué hora sideral pasará mañana?",
        a: "Respuesta: 19:56 horas de tiempo sideral. (Adelanta 4 minutos)."
      },
      {
        id: 10,
        q: "Calcula cuántos segundos hay en un siglo (100 años).",
        a: "Respuesta: 3.16 × 10⁹ segundos aproximadamente. (100 × 365.24219 × 24 × 3600)."
      }
    ]
  },
  {
    id: "t3-teoria",
    title: "Tema 3: Magnitudes Aparentes (Teoría)",
    icon: "✨",
    questions: [
      {
        id: 1,
        q: "¿Qué es la magnitud aparente de una estrella?",
        a: "La magnitud aparente es una medida del brillo de una estrella tal como se observa desde la Tierra. AMenor magnitud (más negativa) = más brillo."
      },
      {
        id: 2,
        q: "¿Quién creó la escala de magnitudes estelares y en qué época?",
        a: "Hiparco de Nicea creó la escala en el siglo II a.C. (Clasificó de 1 a 6)."
      },
      {
        id: 3,
        q: "¿Qué significa que una estrella tenga magnitud negativa?",
        a: "Significa que es extremadamente brillante. Son más brillantes que las de magnitud 0 o 1."
      },
      {
        id: 4,
        q: "¿Cuál es la estrella más brillante del cielo nocturno y cuál es su magnitud?",
        a: "Sirio, magnitud aparente -1.46."
      },
      {
        id: 5,
        q: "¿Qué diferencia hay entre magnitud aparente y magnitud absoluta?",
        a: "Aparente: Brillo visto desde la Tierra. Absoluta: Brillo intrínseco a 10 parsecs."
      },
      {
        id: 6,
        q: "¿Cuántas veces más brillante es una estrella de magnitud 1 que una de magnitud 6?",
        a: "100 veces. (Una diferencia de 5 magnitudes equivale a un factor de 100)."
      },
      {
        id: 7,
        q: "¿Qué es el límite de magnitud visual del ojo humano sin instrumentos?",
        a: "Aproximadamente +6 en condiciones ideales."
      },
      {
        id: 8,
        q: "¿Cómo afecta la contaminación lumínica a la magnitud límite observable?",
        a: "Reduce el contraste, permitiendo ver solo estrellas más brillantes. El límite baja a +3 o +4."
      },
      {
        id: 9,
        q: "¿Qué instrumento se utiliza para medir con precisión la magnitud de las estrellas?",
        a: "El fotómetro."
      },
      {
        id: 10,
        q: "¿Por qué Sirio aparece más brillante que Betelgeuse en el cielo, aunque Betelgeuse es intrínsecamente más luminosa?",
        a: "Porque Sirio está mucho más cerca (8.6 años luz) que Betelgeuse (640 años luz)."
      }
    ]
  },
  {
    id: "t3-practica",
    title: "Tema 3: Magnitudes Aparentes (Problemas)",
    icon: "🧮",
    questions: [
      {
        id: 1,
        q: "¿Cuántas veces más brillante es una estrella de magnitud 1 que una de magnitud 2?",
        a: "Respuesta: 2.512 veces. (2.512 elevado a la diferencia de 1)."
      },
      {
        id: 2,
        q: "Si una estrella tiene magnitud 3 y otra magnitud 8, ¿cuál es la diferencia de magnitudes?",
        a: "Respuesta: 5 magnitudes."
      },
      {
        id: 3,
        q: "Calcula cuántos veces más brillante es una estrella de magnitud 0 que una de magnitud 5.",
        a: "Respuesta: 100 veces. (Regla: Δm=5 → Brillo x100)."
      },
      {
        id: 4,
        q: "La estrella Sirio tiene magnitud -1.46 y Venus en su máximo brillo tiene magnitud -4.7. ¿Cuál es más brillante?",
        a: "Respuesta: Venus (-4.7 es menor que -1.46)."
      },
      {
        id: 5,
        q: "¿Cuántas veces más brillante es Venus (m = -4.7) que Sirio (m = -1.46)?",
        a: "Respuesta: ~19.5 veces. (Δm = 3.24 → 2.512^3.24)."
      },
      {
        id: 6,
        q: "Si el límite de magnitud del ojo humano es +6 y con binoculares se puede ver hasta +9, ¿cuántas magnitudes más débiles se pueden observar?",
        a: "Respuesta: 3 magnitudes."
      },
      {
        id: 7,
        q: "¿Cuántas veces más débil es una estrella de magnitud 6 que una de magnitud 1?",
        a: "Respuesta: 100 veces más débil."
      },
      {
        id: 8,
        q: "La Luna llena tiene magnitud aproximada de -12.7. ¿Cuántas magnitudes más brillante es que Sirio (m = -1.46)?",
        a: "Respuesta: 11.24 magnitudes."
      },
      {
        id: 9,
        q: "¿Cuántas veces más brillante es la Luna llena que Sirio?",
        a: "Respuesta: ~40,000 veces."
      },
      {
        id: 10,
        q: "Si una estrella de magnitud 4 se observa con un telescopio que permite ver hasta magnitud 12, ¿cuántas magnitudes más débiles se pueden detectar?",
        a: "Respuesta: 8 magnitudes."
      }
    ]
  },
  {
    id: "t4-completacion",
    title: "Tema 4: Completación y Repaso (Didáctico)",
    icon: "📝",
    type: "input",
    questions: [
      {
        id: 1,
        q: "La notación científica se utiliza para expresar números muy grandes o pequeños usando potencias de ______.",
        a: "Diez (10)",
        validAnswers: ["diez", "10"]
      },
      {
        id: 2,
        q: "La distancia promedio Tierra-Sol se denomina ______ y equivale a 150 millones de km.",
        a: "Unidad Astronómica (UA)",
        validAnswers: ["unidad astronómica", "unidad astronomica", "ua"]
      },
      {
        id: 3,
        q: "Un año luz NO es una medida de tiempo, sino una medida de ______.",
        a: "Distancia",
        validAnswers: ["distancia", "longitud"]
      },
      {
        id: 4,
        q: "Un pársec se define como la distancia a la que una estrella tiene un paralaje de ______ segundo de arco.",
        a: "Un (1)",
        validAnswers: ["un", "uno", "1"]
      },
      {
        id: 5,
        q: "El día ______ dura 23 horas y 56 minutos, basándose en las estrellas lejanas.",
        a: "Sideral",
        validAnswers: ["sideral"]
      },
      {
        id: 6,
        q: "El día solar es más largo que el sideral porque la Tierra se mueve en su ______ alrededor del Sol.",
        a: "Órbita (o traslación)",
        validAnswers: ["órbita", "orbita", "traslación", "traslacion"]
      },
      {
        id: 7,
        q: "En la escala de magnitudes, un número más negativo indica un brillo ______.",
        a: "Mayor (o más intenso)",
        validAnswers: ["mayor", "mas", "más", "intenso", "alto"]
      },
      {
        id: 8,
        q: "La diferencia de 5 magnitudes entre dos estrellas implica que una es ______ veces más brillante que la otra.",
        a: "100",
        validAnswers: ["100", "cien"]
      },
      {
        id: 9,
        q: "El instrumento utilizado para medir el brillo estelar se llama ______.",
        a: "Fotómetro",
        validAnswers: ["fotómetro", "fotometro"]
      },
      {
        id: 10,
        q: "El ______ es la parte del reloj solar que proyecta la sombra.",
        a: "Gnomon",
        validAnswers: ["gnomon"]
      }
    ]
  },
  {
    id: "t5-extra",
    title: "Tema 5: Práctica Adicional (Nivel 2)",
    icon: "🚀",
    questions: [
      {
        id: 1,
        q: "Convierte 0.0000092 a notación científica.",
        a: "9.2 × 10<sup>-6</sup>"
      },
      {
        id: 2,
        q: "Si la Tierra estuviera a 2 UA del Sol, ¿cuántos kilómetros serían?",
        a: "300,000,000 km (2 × 150 millones)"
      },
      {
        id: 3,
        q: "La luz tarda 1.3 segundos en llegar a la Luna. ¿A qué distancia está? (c = 300,000 km/s)",
        a: "390,000 km (300,000 × 1.3)"
      },
      {
        id: 4,
        q: "Convierte 2 años luz a kilómetros.",
        a: "1.89 × 10<sup>13</sup> km (Aprox 19 billones de km)"
      },
      {
        id: 5,
        q: "Si una estrella tiene paralaje de 0.1 segundos de arco, ¿a cuántos parsecs está?",
        a: "10 parsecs (d = 1 / 0.1)"
      },
      {
        id: 6,
        q: "Convierte 1.5 horas a minutos.",
        a: "90 minutos"
      },
      {
        id: 7,
        q: "¿Cuántas horas hay en 3 días?",
        a: "72 horas"
      },
      {
        id: 8,
        q: "Estrella A tiene magnitud 1, Estrella B tiene magnitud 11. ¿Cuál es la diferencia de magnitud?",
        a: "10 magnitudes"
      },
      {
        id: 9,
        q: "Si una estrella es magnitud 2 y otra magnitud 7, ¿cuántas veces es más brillante la primera?",
        a: "100 veces (Diferencia de 5 magnitudes)"
      },
      {
        id: 10,
        q: "¿Cuál es más brillante: magnitud -2 o magnitud 0?",
        a: "Magnitud -2"
      }
    ]
  },
  {
    id: "t6-examen",
    title: "Examen Final (Evaluación)",
    icon: "🏆",
    type: "mixed",
    questions: [
      {
        id: 1,
        type: "boolean",
        q: "Un año luz es una unidad de tiempo.",
        options: ["Verdadero", "Falso"],
        correct: 1, // Index of "Falso"
        a: "Falso. El año luz mide distancia (aprox 9.46 billones de km)."
      },
      {
        id: 2,
        type: "choice",
        q: "¿Cuál es la estrella más cercana al Sol?",
        options: ["Sirio", "Próxima Centauri", "Betelgeuse", "Polaris"],
        correct: 1,
        a: "Próxima Centauri es la más cercana (4.2 años luz)."
      },
      {
        id: 3,
        type: "input",
        q: "La ______ Astronómica es la distancia promedio de la Tierra al Sol.",
        a: "Unidad",
        validAnswers: ["unidad", "unidad astronomica", "ua"]
      },
      {
        id: 4,
        type: "choice",
        q: "Si una estrella tiene magnitud -1 y otra magnitud 4, ¿cuál es más brillante?",
        options: ["Magnitud 4", "Magnitud -1", "Son iguales"],
        correct: 1,
        a: "Magnitud -1. En la escala de magnitudes, cuanto más bajo (o negativo), más brillante."
      },
      {
        id: 5,
        type: "boolean",
        q: "El día sideral es más corto que el día solar.",
        options: ["Verdadero", "Falso"],
        correct: 0, 
        a: "Verdadero. El día sideral dura 23h 56m, unos 4 minutos menos que el solar."
      },
      {
        id: 6,
        type: "choice",
        q: "¿Qué instrumento se usa para medir el brillo de las estrellas?",
        options: ["Telescopio", "Espectroscopio", "Fotómetro", "Barómetro"],
        correct: 2,
        a: "El Fotómetro es el instrumento especializado para medir intensidades de luz."
      },
      {
        id: 7,
        type: "input",
        q: "El tiempo ______ se basa en el movimiento aparente del Sol alrededor de la Tierra.",
        a: "Solar",
        validAnswers: ["solar"]
      },
      {
        id: 8,
        type: "choice",
        q: "¿A cuántos kilómetros equivale aproximadamente 1 Unidad Astronómica?",
        options: ["1 millón km", "150 millones km", "300,000 km", "9.5 billones km"],
        correct: 1,
        a: "1 UA equivale a 150 millones de km."
      },
      {
        id: 9,
        type: "boolean",
        q: "Una estrella de magnitud 6 es visible a simple vista en condiciones ideales.",
        options: ["Verdadero", "Falso"],
        correct: 0,
        a: "Verdadero (Al límite). La magnitud 6 es el límite teórico de la visión humana sin instrumentos."
      },
      {
        id: 10,
        type: "input",
        q: "La notación ______ se usa para números muy grandes en potencias de 10.",
        a: "Científica",
        validAnswers: ["cientifica", "científica"]
      }
    ]
  }
];
