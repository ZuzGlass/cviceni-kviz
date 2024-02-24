const otazka = document.querySelector(".question");
otazka.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.";

const odpovedUzivatel = prompt("Zadej správnou odpověď:");
const odpoved = document.querySelector(".answer__text");
odpoved.textContent = odpovedUzivatel;

const overeni = document.querySelector(".answer");

if (odpovedUzivatel === "Bell"){
overeni.classList.add("answer--correct")
}else {
overeni.classList.add("answer--wrong")
};
