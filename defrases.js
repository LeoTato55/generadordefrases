const quotes = [
    {
        frase:
        "Hazme el amor mami. La guerra puede esperar. ",
        autor: "- LeoTato"
    },
    {
        frase:
           "Cada dia sabemos más y entendemos menos. ",
        autor: "- Albert Einstein"   
    },
    {
        frase:
           "La medida del amor es amar sin medida. ",
        autor: "- San Aguntin"   
    },
    {
        frase:
           "No hay nada que un hombre no sea capaz de hacer cuando una mujer le mira. ",
        autor: "- Casanova"   
    },
    {
        frase:
           "El dinero no puede comprar la vida. ",
        autor: "- Bob Marley"   
    }

];

const btn = document.getElementById("generate-btn");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("frase").textContent = quotes[random].frase;
    document.querySelector(".autor").textContent = quotes[random].autor;
});