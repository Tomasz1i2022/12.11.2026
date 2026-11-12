// Twoje rozwiazanie
const produkty = [
    {nazwa: "Mleko"},
    {nazwa: "Chleb"},
    {nazwa: "Masło"}
];

function pokazListe(){
    const lista = document.querySelector("#lista");
    lista.textContent = "";
    produkty.forEach(function(produkt){
        const element = document.createElement("li");
        element.textContent = produkt.nazwa;
        lista.appendChild(element);
    });
}

pokazListe();