// Twoje rozwiazanie
const produkty = [
    {
        nazwa: "Mleko",
        cena: 3.5
    },
    {
        nazwa: "Chleb",
        cena: 4.2
    },
    {
        nazwa: "Masło",
        cena: 7.5
    }
];

function pokazTabele(){
    const tabela = document.querySelector("#tableBody");
    tabela.textContent = "";
    produkty.forEach(function(produkt, indeks) {
        const wiersz = document.createElement("tr");
        const komorkaNazwa = document.createElement("td");
        komorkaNazwa.textContent = produkt.nazwa;
        const komorkaCena = document.createElement("td");
        komorkaCena.textContent = produkt.cena + " zł";
        const komorkaPrzycisk = document.createElement("td");
        const przycisk = document.createElement("button");
        przycisk.textContent = "Usuń";
        
        przycisk.addEventListener("click", function() {
            produkty.splice(indeks, 1);
            pokazTabele();
        });
        komorkaPrzycisk.appendChild(przycisk);

        wiersz.appendChild(komorkaNazwa);
        wiersz.appendChild(komorkaCena);
        wiersz.appendChild(komorkaPrzycisk);
        tabela.appendChild(wiersz);
    });
}

pokazTabele();