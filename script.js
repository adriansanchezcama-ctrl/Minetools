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
<section class="card">
    <h2>🌎 Conversor Nether ↔ Overworld</h2>

    <input type="number" id="x" placeholder="Coordenada X">
    <input type="number" id="z" placeholder="Coordenada Z">

    <button onclick="netherAOverworld()">Nether → Overworld</button>
    <button onclick="overworldANether()">Overworld → Nether</button>

    <p id="coordenadas"></p>
</section>
