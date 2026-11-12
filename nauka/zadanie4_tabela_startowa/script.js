// Twoje rozwiazanie
const ksiazki = [
    {
        tytul: "Lalka",
        autor: "Bolesław Prus",
        rok: 1890
    },
    {
        tytul: "Pan Tadeusz",
        autor: "Adam Mickiewicz",
        rok: 1834
    },
    {
        tytul: "Quo vadis",
        autor: "Henryk Sienkiewicz",
        rok: 1896
    }
];

function pokazTabele(){
    const tabela = document.querySelector("#tableBody");
    tabela.textContent = "";
    ksiazki.forEach(function(ksiazka) {
        const wiersz = document.createElement("tr");
        const komorkaTytul = document.createElement("td");
        komorkaTytul.textContent = ksiazka.tytul;
        const komorkaAutor = document.createElement("td");
        komorkaAutor.textContent = ksiazka.autor;
        const komorkaRok = document.createElement("td");
        komorkaRok.textContent = ksiazka.rok;
        
        wiersz.appendChild(komorkaTytul);
        wiersz.appendChild(komorkaAutor);
        wiersz.appendChild(komorkaRok);
        tabela.appendChild(wiersz);
    });
}

pokazTabele();