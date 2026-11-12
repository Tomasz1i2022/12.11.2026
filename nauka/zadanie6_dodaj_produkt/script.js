// Twoje rozwiazanie
const produkty = [
    {
        nazwa: "Mleko",
        cena: 3.5
    },
    {
        nazwa: "Chleb",
        cena: 4.2
    }
];

function pokazTabele(){
    const tabela = document.querySelector("#tableBody");
    tabela.textContent = "";
    produkty.forEach(function(produkt) {
        const wiersz = document.createElement("tr");
        const komorkaNazwa = document.createElement("td");
        komorkaNazwa.textContent = produkt.nazwa;
        const komorkaCena = document.createElement("td");
        komorkaCena.textContent = produkt.cena;
        wiersz.appendChild(komorkaNazwa);
        wiersz.appendChild(komorkaCena);
        tabela.appendChild(wiersz);
    });
}

pokazTabele();

document.querySelector("#formularz").addEventListener("submit", function(event){
    event.preventDefault();
    const nazwa = document.querySelector("#nazwa").value.trim();
    const cena = Number(document.querySelector("#cena").value);
    const wynik = document.querySelector("#wynik");
    if (nazwa === ""){
        wynik.textContent = "Podaj nazwę";
        return;
    }
    produkty.push({
        nazwa: nazwa,
        cena: cena
    });
    wynik.textContent = "Dodano: " + nazwa;
    document.querySelector("#formularz").reset();
    pokazTabele();
});