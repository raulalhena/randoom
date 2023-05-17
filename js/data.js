//generador de id
function generarId() {
    let a = Date.now().toString(30);
    let b = Math.random().toString(30).substring(2);
    return a + b;
}
const id = generarId();

//adventures: viajes, adrenalina
export const adventures = [
    {
        id: generarId(),
        name: "Viajar a la Isla Sentinel",
        description: "Isla ubicada en las islas Andamán, dónde vive una de las tirbus más aisladas y peligrosas del mundo",
        category: "viajes",
        selected: false,
        completed: false
    },
    {
        id: generarId(),
        name: "Vuelo en globo aerostático",
        description: "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
        category: "viajes",
        selected: true,
        completed: true
    }, {
        id: generarId(),
        name: "Viajar a la Isla Sentinel",
        description: "Isla ubicada en las islas Andamán, dónde vive una de las tirbus más aisladas y peligrosas del mundo",
        category: "adrenalina",
        selected: false,
        completed: false
    },
    {
        id: generarId(),
        name: "Vuelo en globo aerostático",
        description: "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
        category: "viajes",
        selected: true,
        completed: true
    },
    {
        id: generarId(),
        name: "Viajar a la Isla Sentinel",
        description: "Isla ubicada en las islas Andamán, dónde vive una de las tirbus más aisladas y peligrosas del mundo",
        category: "viajes",
        selected: false,
        completed: false
    },
    {
        id: generarId(),
        name: "Yougurt",
        description: "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
        category: "comida",
        selected: true,
        completed: true
    }, {
        id: generarId(),
        name: "Viajar a la Isla Sentinel",
        description: "Isla ubicada en las islas Andamán, dónde vive una de las tirbus más aisladas y peligrosas del mundo",
        category: "adrenalina",
        selected: false,
        completed: false
    },
    {
        id: generarId(),
        name: "Vuelo en globo aerostático",
        description: "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
        category: "viajes",
        selected: true,
        completed: true
    },
    {
        id: generarId(),
        name: "Viajar a la Isla Sentinel",
        description: "Isla ubicada en las islas Andamán, dónde vive una de las tirbus más aisladas y peligrosas del mundo",
        category: "viajes",
        selected: false,
        completed: false
    },
    {
        id: generarId(),
        name: "Sopa de caracol",
        description: "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
        category: "comida",
        selected: true,
        completed: true
    }, {
        id: generarId(),
        name: "Viajar a la Isla Sentinel",
        description: "Isla ubicada en las islas Andamán, dónde vive una de las tirbus más aisladas y peligrosas del mundo",
        category: "adrenalina",
        selected: false,
        completed: false
    },
    {
        id: generarId(),
        name: "Vuelo en globo aerostático",
        description: "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
        category: "viajes",
        selected: true,
        completed: true
    },
    {
        id: generarId(),
        name: "Mochila",
        description: "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
        category: "viajes",
        selected: true,
        completed: true
    }, {
        id: generarId(),
        name: "Nadar",
        description: "Isla ubicada en las islas Andamán, dónde vive una de las tirbus más aisladas y peligrosas del mundo",
        category: "adrenalina",
        selected: false,
        completed: false
    },
    {
        id: generarId(),
        name: "Antartida",
        description: "Aventura en la región de Monsteny (a 30min de Barcelona), podréis descubrir desde los aires panoramas y paisajes impresionantes",
        category: "viajes",
        selected: true,
        completed: true
    },
]