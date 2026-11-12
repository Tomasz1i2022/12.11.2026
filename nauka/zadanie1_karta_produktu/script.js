// Twoje rozwiazanie
const produkt = {
    nazwa: "Mleko 2%",
    cena: "3.5 zł",
    stan: "12 szt."
};
const pokaz = document.querySelector("#pokaz");

pokaz.addEventListener("click", function(){
    document.querySelector("#nazwa").textContent = produkt.nazwa;
    document.querySelector("#cena").textContent = produkt.cena;
    document.querySelector("#stan").textContent = produkt.stan;
});