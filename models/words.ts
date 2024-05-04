export const words: string[] = [
    "manzana", "perro", "gato", "árbol", "libro", "cielo", "rojo", "amarillo", "verde",
    "naranja", "zapato", "camisa", "ventana", "puerta", "casa", "silla", "mesa", "coche",
    "calle", "niño", "niña", "mujer", "hombre", "sol", "luna", "estrella", "río", "montaña",
    "bosque", "lago", "mariposa", "océano", "volcán", "desierto", "cascada", "selva", "arcoiris",
    "espejo", "reloj", "brújula", "mapa", "tesoro", "pirámide", "dragón", "bruja", "hechizo",
    "fantasma", "princesa", "caballero", "castillo", "corona", "joya", "máscara", "festival",
    "música", "danza", "teatro", "pintura", "escultura", "novela", "poema", "guitarra", "piano",
    "trompeta", "violin", "cámara", "foto", "película", "ciencia", "águila", "león", "tigre",
    "elefante", "cebra", "canguro", "ballena", "delfín", "tortuga", "iguana", "pingüino",
    "jirafa", "hipopótamo", "rinoceronte", "bufanda", "guante", "sombrero", "botas", "paraguas",
    "nieve", "lluvia", "tormenta", "relámpago", "arco", "flecha", "espada", "escudo", "lanza",
    "chocolate", "vainilla", "canela", "pimienta", "azúcar", "sal", "miel", "pan", "queso", "vino",
    "seda", "terciopelo", "pañuelo", "collar", "anillo", "pendiente", "pulsera", "reina", "rey",
    "moneda", "billete", "mercado", "supermercado", "restaurante", "café", "bar", "hotel", "playa",
    "isla", "continente", "planeta", "galaxia", "universo", "astronauta", "cohete", "estación", "tren",
    "avión", "helicoptero", "submarino", "buceo", "surf", "kayak", "vela", "escalada", "senderismo",
    "ciclismo", "patinaje", "esquí", "golf", "tenis", "baloncesto", "fútbol", "voleibol", "natación",
    "atletismo", "yoga", "karate", "judo", "boxeo", "lucha", "magia", "circo", "ópera", "sinfonía",
    "blues", "jazz", "rock", "pop", "electrónica", "hip-hop", "rumba", "salsa", "tango", "flamenco",
    "carnaval", "pascua", "navidad", "halloween", "diwali", "ramadán", "hannukah", "kwanzaa",
    "cumpleaños", "aniversario", "graduación", "boda", "funeral", "bautizo", "cerveza", "whisky",
    "tequila", "mezcal", "ron", "ginebra", "champán", "sake", "kombucha", "agua", "jugo", "leche",
    "zumo", "té", "café", "champiñón", "trufa", "pistacho", "almendra", "nuez", "avellana", "cacahuate"
];

export const generateUniqueRandomWords = (): string[] => {
    const randomWords = new Set<string>();
    while (randomWords.size < 10) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWords.add(words[randomIndex]);
    }
    return Array.from(randomWords);
};