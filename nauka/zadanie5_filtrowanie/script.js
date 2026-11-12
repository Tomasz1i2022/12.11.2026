// Twoje rozwiazanie
const produkty = [
    {
        nazwa: "Mleko",
        dostepny: true
    },
    {
        nazwa: "Chleb",
        dostepny: false
    },
    {
        nazwa: "Masło",
        dostepny: true
    }
];

function pokazListe(tablica){
    const lista = document.querySelector("#lista");
    lista.textContent = "";
    tablica.forEach(function(produkt) {
        const element = document.createElement("li");
        element.textContent = produkt.nazwa;
        lista.appendChild(element);
    });
}

pokazListe(produkty);

document.querySelector("#tylkoDostepne").addEventListener("click", function(){
    const dostepneProdukty = produkty.filter(function(produkt){
        return produkt.dostepny === true;
    });
    pokazListe(dostepneProdukty);
});

document.querySelector("#wszystkie").addEventListener("click", function(){
    pokazListe(produkty);
});