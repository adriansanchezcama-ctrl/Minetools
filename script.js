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
<se
function netherAOverworld() {
    const x = Number(document.getElementById("x").value);
    const z = Number(document.getElementById("z").value);

    const resultadoX = x * 8;
    const resultadoZ = z * 8;

    document.getElementById("coordenadas").textContent =
        `Overworld: X ${resultadoX}, Z ${resultadoZ}`;
}

function overworldANether() {
    const x = Number(document.getElementById("x").value);
    const z = Number(document.getElementById("z").value);

    const resultadoX = Math.round(x / 8);
    const resultadoZ = Math.round(z / 8);

    document.getElementById("coordenadas").textContent =
        `Nether: X ${resultadoX}, Z ${resultadoZ}`;
}
