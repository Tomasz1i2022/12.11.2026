// Twoje rozwiazanie
const ksiazka = {
    tytul: "Lalka",
    autor: "Bolesław Prus",

    karta: function(){
        return this.tytul + " — " + this.autor;
    }
};
const przycisk = document.querySelector("#opisBtn");
const wynik = document.querySelector("#wynik");

przycisk.addEventListener("click", function(){
    wynik.textContent = ksiazka.karta();
});