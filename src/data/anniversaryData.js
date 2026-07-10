/**
 * ARCHIVO DE DATOS CENTRALIZADO - ANIVERSARIO 1 AÑO Y MEDIO
 * 
 * En este archivo puedes editar de forma muy sencilla todos los textos,
 * las métricas divertidas, las rutas e información de tus 20 imágenes,
 * la carta de amor, y la ruta de tu video.
 * 
 * Diseñado con una estructura extremadamente lógica para facilitar la edición
 * debido a tu requerimiento especial (afantasía).
 */

export const anniversaryData = {
  // 1. FECHA DE INICIO DE LA RELACIÓN
  // Ajusta la hora exacta si lo deseas (Formato: YYYY-MM-DDTHH:mm:ss)
  relationshipStartDate: "2025-01-10T00:00:00",

  // 2. DASHBOARD DE ESTADÍSTICAS (Métricas divertidas y románticas)
  stats: [
    {
      id: "dias-juntos",
      label: "Días de puro amor",
      value: "548", // Se calcula automáticamente en tiempo real en la interfaz
      iconName: "Heart", // Nombre del icono de Lucide a renderizar
      description: "Construyendo un futuro de la mano.",
      color: "from-blue-100 to-sky-100 text-sky-700"
    },
    {
      id: "risas",
      label: "Risas acumuladas",
      value: "Infinitas",
      iconName: "Smile",
      description: "Por cada broma interna, cada sonrisa y tus locuras de changuito.",
      color: "from-yellow-50 to-amber-100 text-amber-700"
    },
    {
      id: "complicidad",
      label: "Nivel de complicidad",
      value: "100%",
      iconName: "Sparkles",
      description: "Entendernos con solo mirarnos a los ojos durante los ensayos.",
      color: "from-purple-50 to-indigo-100 text-indigo-700"
    },
    {
      id: "cafe-citas",
      label: "Citas y Funciones",
      value: "∞",
      iconName: "Coffee",
      description: "Funciones juntos, ensayos cansados y fines de semana reparadores.",
      color: "from-emerald-50 to-teal-100 text-teal-700"
    }
  ],

  // 3. GALERÍA DE RECUERDOS (Contiene exactamente 20 elementos)
  // Mapeadas en orden cronológico e integrando el contexto de ballet, su carro y Jenny
  galleryImages: [
    {
      id: 1,
      url: "/assets/foto1.jpg",
      title: "Compañeros de escena",
      caption: "Nuestros primeros pasos compartidos en las clases y ensayos del Ballet de Jalisco, donde la magia comenzó a surgir."
    },
    {
      id: 2,
      url: "/assets/foto2.jpg",
      title: "Miradas tras bambalinas",
      caption: "Compartir la misma pasión por la danza hace que cada función sea el doble de especial si estoy a tu lado."
    },
    {
      id: 3,
      url: "/assets/foto3.jpg",
      title: "Nuestros primeros días",
      caption: "Los inicios de nuestra historia de novios, aprendiendo a conocernos y a apoyarnos en cada pequeño detalle."
    },
    {
      id: 4,
      url: "/assets/foto4.jpg",
      title: "Citas inolvidables",
      caption: "Escapadas de fin de semana para recargar energías y simplemente disfrutar del tiempo juntos."
    },
    {
      id: 5,
      url: "/assets/foto5.jpg",
      title: "Tu risa contagiosa",
      caption: "Ese sonido que alegra mis días. Gracias por tu infinita paciencia y por ser mi paz en los momentos de estrés."
    },
    {
      id: 6,
      url: "/assets/foto6.jpg",
      title: "En las buenas y en las malas",
      caption: "Apoyándonos mutuamente en temas personales, familiares y laborales. Juntos somos un equipo invencible."
    },
    {
      id: 7,
      url: "/assets/foto7.jpg",
      title: "Caminos de la mano",
      caption: "Caminando juntos por la vida, un paso a la vez, con la seguridad de que sostenemos la mano correcta."
    },
    {
      id: 8,
      url: "/assets/foto8.jpg",
      title: "Complicidad pura",
      caption: "Una conexión única que va más allá de las palabras; con solo mirarnos sabemos exactamente qué piensa el otro."
    },
    {
      id: 9,
      url: "/assets/foto9.jpg",
      title: "Tardes de descanso",
      caption: "Esos pequeños oasis de tranquilidad entre largas jornadas de ensayos y funciones del ballet."
    },
    {
      id: 10,
      url: "/assets/foto10.jpg",
      title: "Mi changuito favorito",
      caption: "Porque tu familia tiene toda la razón: eres mi changuito consentido, y estos besitos lo demuestran todo. 🐒❤️"
    },
    {
      id: 11,
      url: "/assets/foto11.jpg",
      title: "Un año casi cumplido",
      caption: "Llegando al cierre del año con el corazón lleno de agradecimiento por tenerte en mi vida."
    },
    {
      id: 12,
      url: "/assets/foto12.jpg",
      title: "Abrazos de invierno",
      caption: "El mejor refugio contra el frío es perderme en tus brazos y sentir los latidos de tu corazón."
    },
    {
      id: 13,
      url: "/assets/foto13.jpg",
      title: "Celebrando la Navidad",
      caption: "Nuestras primeras fiestas decembrinas juntos, compartiendo el amor y la calidez del hogar."
    },
    {
      id: 14,
      url: "/assets/foto14.jpg",
      title: "Nuevos propósitos",
      caption: "Soñando despiertos sobre el futuro y las metas que queremos conquistar juntos en el nuevo año."
    },
    {
      id: 15,
      url: "/assets/foto15.jpg",
      title: "Amor incondicional",
      caption: "Gracias por enseñarme lo que significa el verdadero apoyo, la comprensión y el amor maduro."
    },
    {
      id: 16,
      url: "/assets/foto16.jpg",
      title: "Nuestra meta cumplida: El carro",
      caption: "¡Nuestro primer carro! Un gran logro que compramos con el esfuerzo y trabajo conjunto de los dos. ¡Sí se pudo! 🚗💨"
    },
    {
      id: 17,
      url: "/assets/foto17.jpg",
      title: "Inspiración en la barra",
      caption: "Verte ensayar con tanta dedicación y entrega me inspira a ser un mejor bailarín y una mejor persona cada día."
    },
    {
      id: 18,
      url: "/assets/foto18.jpg",
      title: "Enfoque y disciplina",
      caption: "Concentrados en el estudio del Ballet de Jalisco, puliendo detalles y compartiendo el arte que tanto amamos."
    },
    {
      id: 19,
      url: "/assets/foto19.jpg",
      title: "Compañeros de vida y danza",
      caption: "Sentados en el piso de linóleo, cansados pero inmensamente felices de compartir este camino profesional y personal."
    },
    {
      id: 20,
      url: "/assets/foto20.jpg",
      title: "Nuestras locuras cotidianas",
      caption: "Haciendo caras divertidas en los descansos. Eres mi changuito, mi compañera y mi amor eterno."
    }
  ],

  loveLetter: {
    title: "Para el amor de mi vida",
    greeting: "Mi amor, mi Jenny,",
    paragraphs: [
      "Hoy cumplimos un año y medio juntos. Dieciocho meses desde que decidimos emprender este camino de la mano, y honestamente, ha sido la aventura más hermosa de mi vida. A veces me detengo a pensar en cómo un simple día de enero cambió mi destino por completo, al tomar la mejor decisión de mi vida y hacerte la pregunta.",
      "Sé que a veces me cuesta visualizar las cosas en mi mente por mi afantasía, pero no necesito ver imágenes mentales para sentir con absoluta claridad el calor de tu abrazo, la paz que me transmite tu voz y la inmensa alegría de verte sonreír. Mi amor por ti se siente en cada latido, en cada clase que compartimos, cada función, cada viaje, cada fin de semana, y en la certeza de saber que he encontrado a mi compañera de vida.",
      "Gracias por ser mi refugio seguro, por tu paciencia infinita cuando paso por momentos difíciles, y por permitirme ser tu calma también. Desde las funciones y ensayos, hasta lograr comprar tu carro que con tanto esfuerzo y dedicación que pusiste, cada paso demuestra que somos el equipo perfecto.",
      "Este sitio web es una pequeña muestra de lo que hemos construido juntos en estos 546 días. Un pequeño espacio para albergar nuestras memorias, nuestras risas y este amor incondicional que no para de crecer. Te amo hoy, mañana y para siempre."
    ],
    closing: "Con todo mi amor, por siempre tuyo,",
    signature: "Fernando Martínez"
  },

  // 5. RUTA DEL VIDEO LOCAL
  // Mapeado a la ruta del video que agregaste
  videoUrl: "/assets/nuestro-video.mp4"
};
