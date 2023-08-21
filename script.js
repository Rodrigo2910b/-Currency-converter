const convertButton = document.querySelector(".convert-button"); //botão para converter

const currencySelect = document.querySelector(".currency-select");

function click() {
  const inputCurrencyValue = document.querySelector(".input-currency").value; // pega o valor em Real

  const currencyToConvert = document.querySelector(".currency-to-convert"); //valor em real

  const currencyValue = document.querySelector(".currency-value"); //valor convertido

  const dolarToday = 5; // valor do Dolor do dia
  const euroToday = 5.41; // valor do euro do dia

  currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue); //aparecer o value que foi dado para converter

  if (currencySelect.value == "dolar") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday); //apparece o value  convertido na tag P
    nameMoeada.innerHTML = "Dolar americano";
  }
  if (currencySelect.value == "euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday); //apparece o value  convertido na tag P
    nameMoeada.innerHTML = "Euro";
  }
}
function changeCurency() {
  const nameMoeada = document.querySelector(".name-moeada");
  const currencyImg = document.querySelector(".img-moedas");

  if (currencySelect.value == "dolar") {
    nameMoeada.innerHTML = "Dolar americano";
    currencyImg.src = "./assents/estados-unidos (1) 1.png";
  }
  if (currencySelect.value == "euro") {
    nameMoeada.innerHTML = "Euro";
    currencyImg.src = "./assents/euro.png";
  }
}

currencySelect.addEventListener("change", changeCurency);
convertButton.addEventListener("click", click);