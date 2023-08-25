
const convertButton = document.querySelector(".convert-button"); //botão para converter

const currencySelect = document.querySelector(".currency-select");


const convertFrom = document.querySelector(".convert-from");

function click() {
  const inputCurrencyValue = document.querySelector(".input-currency").value; // pega o valor em Real

  const currencyToConvert = document.querySelector(".currency-to-convert"); //valor em real

  const currencyValue = document.querySelector(".currency-value"); //valor convertido
  const realToday = 1; // valor do real
  const dolarToday = 5; // valor do Dolor do dia
  const euroToday = 5.41; // valor do euro do dia
  const libraToday = 6.35; // valor da libra do dia
  const bitcoinToday = 130116.46; // valor do bitcoin do dia 

  currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue); //aparecer o value que foi dado para converter

  console.log(currencySelect)
  
  console.log(currencySelect)
  console.log(currencySelect.value)

  if (currencySelect.value == "libra") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday)}

   
  if (currencySelect.value == "dolar") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday); //apparece o value  convertido na tag P
  }
  if (currencySelect.value == "euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday); //apparece o value  convertido na tag
  }

  if (currencySelect.value == "bitcoin") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  if(currencyDe.value == "dolar"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
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
  if (currencySelect.value == "libra") {
    nameMoeada.innerHTML = "Libra";
    currencyImg.src = "./assents/libra 1.png";
  }

  if (currencySelect.value == "bitcoin") {
    nameMoeada.innerHTML = "bitcoin";
    currencyImg.src = "./assents/bitcoin 1.png";
  }
 
  click()
}

currencySelect.addEventListener("change", changeCurency);
convertButton.addEventListener("click", click);
