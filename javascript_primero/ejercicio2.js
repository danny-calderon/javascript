const readline = require('readline');

// Crear la interfaz para leer y escribir en la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntamos al usuario el radio que tendrá la circunferencia
rl.question("Ingrese el radio: ", (radio) => {
    // Aseguramos que el valor ingresado sea un número
    const radioNum = parseFloat(radio);

    if (isNaN(radioNum) || radioNum <= 0) {
        console.log("Por favor, ingrese un número válido para el radio.");
    } else {
        // Calculamos el área usando la fórmula correcta
        const area = Math.PI * Math.pow(radioNum, 2);

        // Mostramos el resultado
        console.log("El área del círculo es: " + area.toFixed(2));
    }

    // Cerramos la interfaz
    rl.close();
});
