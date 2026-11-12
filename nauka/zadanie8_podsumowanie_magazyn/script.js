// Twoje rozwiazanie
const produkty = [
    {
        nazwa: "Mleko",
        cena: 3.5,
        ilosc: 2
    },
    {
        nazwa: "Chleb",
        cena: 4.2,
        ilosc: 3
    }
];

function pokazTabele(){
    const tabela = document.querySelector("#tableBody");
    tabela.textContent = "";
    let suma = 0;

    produkty.forEach(function(produkt, indeks){
        const wiersz = document.createElement("tr");
        const komorkaNazwa = document.createElement("td");
        komorkaNazwa.textContent = produkt.nazwa;
        const komorkaCena = document.createElement("td");
        komorkaCena.textContent = produkt.cena + " zł";
        const komorkaIlosc = document.createElement("td");
        komorkaIlosc.textContent = produkt.ilosc;
        const komorkaWartosc = document.createElement("td");
        komorkaWartosc.textContent = (produkt.cena * produkt.ilosc).toFixed(2) + " zł";
        const komorkaAkcja = document.createElement("td");
        const przyciskUsun = document.createElement("button");
        przyciskUsun.textContent = "Usuń";
        przyciskUsun.addEventListener("click", function() {
            produkty.splice(indeks, 1);
            pokazTabele();
        });
        komorkaAkcja.appendChild(przyciskUsun);

        wiersz.appendChild(komorkaNazwa);
        wiersz.appendChild(komorkaCena);
        wiersz.appendChild(komorkaIlosc);
        wiersz.appendChild(komorkaWartosc);
        wiersz.appendChild(komorkaAkcja)
        tabela.appendChild(wiersz);

        suma += produkt.cena * produkt.ilosc;
    });
    document.querySelector("#suma").textContent = suma.toFixed(2) + " zł";
};

document.querySelector("#formularz").addEventListener("submit", function(event) {
    event.preventDefault();
    const nazwa = document.querySelector("#nazwa").value.trim();
    const cena = Number(document.querySelector("#cena").value);
    const ilosc = Number(document.querySelector("#ilosc").value);
    const wynik = document.querySelector("#wynik");
    if(nazwa === ""){
        wynik.textContent = "Podaj nazwę";
        return;
    }
    produkty.push({
        nazwa: nazwa,
        cena: cena,
        ilosc: ilosc
    });
    wynik.textContent = "Dodano: " + nazwa;
    document.querySelector("#formularz").reset();

    pokazTabele();
});
document.querySelector("#sortCena").addEventListener("click", function(){
    produkty.sort(function(a,b){
        return b.cena - a.cena;
    });
    pokazTabele();
});

pokazTabele();