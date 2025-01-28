// Importar el módulo readline para leer datos desde la terminal
const readline = require('readline');

// Crear la interfaz para leer y escribir en la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por la base
rl.question("Ingrese la base del triángulo: ", (base) => {
    // Preguntar por la altura
    rl.question("Ingrese la altura del triángulo: ", (altura) => {
        // Calcular el área
        const area = (parseFloat(base) * parseFloat(altura)) / 2;

        // Mostrar el resultado
        console.log("El área del triángulo es: " + area.toFixed(2));

        // Cerrar la interfaz
        rl.close();
    });
});
