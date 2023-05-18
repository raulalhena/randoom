//generador de id
function generarId() {
    let a = Date.now().toString(30);
    let b = Math.random().toString(30).substring(2);
    return a + b;

  }
  
  //adventures:
  const adventures = [
    //legado
    {
      id: generarId(),
      name: "Planta un árbol",
      description: "La primer forma de contribuir a mejorar el mundo es cuidando el medio ambiente",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Escribe un libro",
      description: "Animate a escribir una historia de amor, aventura ¡Tú puedes!",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Arregla una casa",
      description:
        "Busca a alguien que necesite de tu ayuda y repara su casa; vas a sentirte mucho mejor",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "ONG",
      description: "Ayuda a Modulo Sanitario, intenta que tu aporte no sea solo económico ",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Cápsula del tiempo fisica",
      description: "Selecciona tus mejores momentos (fotos, cartas, etc) en un recipiente de acero y entierralo ",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Cápsula del tiempo digital",
      description:
        "Selecciona tus mejores recuerdos y guardalos en la nube. Alguien los podrá disfrutar más adelante",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Diario",
      description:
        "Escribe día a día un diario, puede ser de tus aventuras, de un viaje o del amor de tu vida",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Single",
      description:
        "Todos cantamos lindo en la ducha, animate y graba un single para que todos disfrutemos tu voz",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Pinta un cuadro",
      description:
        "Deja grabado en un lienzo tu obra de arte, con pinceles y acuarelas todos somos capaces de lograr cosas lindas",
      category: "legado",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Escalada libre",
      description:
        "Escala por la pared vertical en El Capitan, Sierra Nevada de Estados Unidos",
      category: "legado",
      selected: true,
      completed: true,
    },
    //adenalina
    {
      id: generarId(),
      name: "Buceo en cuevas",
      description: "Buceo en Cueva de las Gambas, Puerto del Carmen.",
      category: "adenalina",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Parkour",
      description:
        "Animate a realizar parkour en el más atractivo parque en Amsterdam: Sloterpark",
      category: "adenalina",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Bungee jumping",
      description:
        "Salta con liana desde la presa de Llosa del Cavall (lugar más alto de España)",
      category: "adenalina",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Skydiving",
      description: "Salta con un paracaídas en Fox Glacier, Nueva Zelanda",
      category: "adenalina",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Buceo en jaula",
      description:
        "Experiencia única de buceo en jaula con tiburones en Ciudad del Cabo, Sudáfrica",
      category: "adenalina",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Recorre North Yungas Road",
      description:
        "La carretera más peligrosa está en Bolivia, y es un buen momento para que viajes por ella",
      category: "adenalina",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Rafting",
      description:"Viaja por los Ríos Alsek y Tatshenshini en Canadá en botes de rafting",
      category: "adenalina",
      selected: true,
    }, 
    {
    id: generarId(),
    name: "Salto base",
    description: "Mont Blanc es el lugar ideal para que te animes a hacer el mejor salto base que pueda existir",
    category: "adenalina",
    selected: true,
    completed: true,
  },
  {
    id: generarId(),
    name: "Festival del queso Rodante",
    description:
      "Animate a perseguir quesos rodantes por la colina de Brockworth, Inglaterra",
    category: "adenalina",
    selected: true,
    completed: true,
  },
  {
    id: generarId(),
    name: "Escalada libre",
    description:
      "Escala por la pared vertical en El Capitan, Sierra Nevada de Estados Unidos",
    category: "adenalina",
      selected: true,
      completed: true,
    },
    //cultura
    {
      id: generarId(),
      name: "Conoce el MET",
      description: "Visita el gran Museo Metropolitano de Arte en Nueva York",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Disfruta de una ópera",
      description:
        "El Teatro de La Scala es el mejor teatro de opera que existe, viaja a Milan y disfruta de un gran show",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Conoce un sitio histórico",
      description: "Viaja a la Isla de Pascua para conocer este antiguo lugar",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Juegos Olímpicos",
      description: "Disfruta de los juegos olímpicos en Paris (2024)",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Buceo en jaula",
      description:
        "Experiencia única de buceo en jaula con tiburones en Ciudad del Cabo, Sudáfrica",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Aprende un nuevo idioma",
      description:
        "Rotokas es el idioma que se habla en Papúa Nueva Guinea; aprende y dialoga con los habitantes de la zona",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Jazz",
      description:
        "Asiste a un concierto de Jazz en el Birdland Jazz Club New York",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Poesía en bares",
      description:
        "Participar en una sesión de micro abierto de poesía en Madrid en Sala Búho Real",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Leer un cuento a niños",
      description:
        "Camel el camaleón es la historia más bonita que puedes contarle a los niños ",
      category: "cultura",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Silencio por 10 días",
      description:
        "Animate a vivir el Retiro Hridaya cerca del Mar Mazunte, México",
      category: "cultura",
      selected: true,
      completed: true,
    },
    //viajes
    {
      id: generarId(),
      name: "Viajar a la Isla Sentinel",
      description:
        "Isla ubicada en las islas Andamán, dónde vive una de las tirbus más aisladas y peligrosas del mundo",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Vuelo en globo aerostático",
      description:
        "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Visitar una ciudad abandonado",
      description: "Aventura en la famosa ciudad abandonada de Chernobyl",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Hacer un safari en África",
      description:
        "Safari en Tanzania dentro de los bellos parques nacionales. Podrás conocer toda la flora y fauna típica de esta area",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Viajar en crucero",
      description:
        "Viaje durante 8 días conociendo las mejores playas de España, Francia e Italia ",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Conocer la Aurora Boreal",
      description:
        "Viaje al norte de Suecia y Laponia, en la ciudad de Abisko se pueden disfutar una de las maravillas naturales más hermosas",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Visitar todos los continentes",
      description:
        "Conocer un pais de cada continente: Kenia, Singapur, España, Argentina, Fiyi ",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "7 maravillas del mundo",
      description:
        "Viaje al Machu Picchu; Cristo Redentor; Chichén Itzá; Coliseo Romano; Gran Muralla China; Petra y Taj Mahal",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Recorrer Tailandia ",
      description:
        "Viaje durante 15 días experimentando la aventura como mochilero ",
      category: "viajes",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Recorrer la costa mediterránea",
      description:
        "Visitar y disfrutar las mejores playas paradisiacas de la costa mediterránea con un velero",
      category: "viajes",
      selected: true,
      completed: true,
    },
    //comida
    {
      id: generarId(),
      name: "Sopa de melón",
      description:
        "Sopa fría hecha con melón fresco, yogur, menta y un toque de limón. Es refrescante y sorprendentemente deliciosa.",
      category: "comida",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Sopa de maíz y jengibre",
      description:
        "Granos de maíz frescos con jengibre rallado, caldo de verduras y leche de coco para hacer una sopa reconfortante con un toque de sabor picante.",
      category: "comida",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Plato exótico: Bibimbap",
      description:
        "Arroz con vegetales, carne salteada, la cual es condimentada con una pasta de pimiento rojo y aceite de ajonjolí.",
      category: "comida",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Chili más picante",
      description:
        "Chili Carolina Reaper es lo más picante del mundo y es el momento de que pruebes un poco",
      category: "comida",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "La mejor tortilla",
      description:
        "Tortilla de huevos ecologicos de las gallinas de Georgina, ¡las más ricas del mundo!",
      category: "comida",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Huevo frito",
      description:
        "Huevos fritos los has hecho en algún momento, pero ¡huevos fritos de oca son los más ricos!",
      category: "comida",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Surströmming",
      description: "conserva de arenque fermentados tradicional de Suecia",
      category: "comida",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Medusas rebozadas",
      description: "Viaja a China y prueba las más ricas meduasas rebozadas",
      category: "comida",
      selected: true,
      completed: true,
    },
    {
      id: generarId(),
      name: "Tallarines de calabacín",
      description:
        "Descubre los más ricos tallarines de Italia y la receta secreta del mejor chef",
      category: "comida",
      selected: true,
      completed: true,
    },
]