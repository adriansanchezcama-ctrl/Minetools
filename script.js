function convertir() {

    const bloques = Number(document.getElementById("bloques").value);

    if (bloques < 0 || isNaN(bloques)) {
        document.getElementById("resultado").textContent =
            "Introduce un número válido.";
        return;
    }

    const stacks = Math.floor(bloques / 64);
    const sobrantes = bloques % 64;

    document.getElementById("resultado").textContent =
        `${bloques} bloques = ${stacks} stacks + ${sobrantes} bloques`;
}