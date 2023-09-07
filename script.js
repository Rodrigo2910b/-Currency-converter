function click() {
  const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value); // Parse the input as a float

  const currencyToConvert = document.querySelector(".currency-to-convert");
  const currencyValue = document.querySelector(".currency-value");
  
  currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  const currencySelect = document.querySelector(".currency-select");
  const selectedCurrency = currencySelect.value;

  let exchangeRate = 1; // Default exchange rate is 1
  let targetCurrency = "BRL"; // Default target currency is Brazilian Real
  let currencyImgSrc = ""; // Default image source

  switch (selectedCurrency) {
    case "libra":
      exchangeRate = 6.35;
      targetCurrency = "GBP";
      currencyImgSrc = "./assents/libra 1.png"; // Set the image source for GBP
      break;
    case "dolar":
      exchangeRate = 5;
      targetCurrency = "USD";
      currencyImgSrc = "./assents/estados-unidos (1) 1.png"; // Set the image source for USD
      break;
    case "euro":
      exchangeRate = 5.41;
      targetCurrency = "EUR";
      currencyImgSrc = "./assents/euro.png"; // Set the image source for EUR
      break;
    case "bitcoin":
      exchangeRate = 130116.46;
      targetCurrency = "BTC";
      currencyImgSrc = "./assents/bitcoin 1.png"; // Set the image source for BTC
      break;
    // Add more cases for other currencies as needed
    default:
      exchangeRate = 1; // Default to 1 if currency not recognized
  }

  const convertedValue = inputCurrencyValue / exchangeRate;

  currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: targetCurrency,
  }).format(convertedValue);

  // Atualize a imagem com base na moeda selecionada
  const currencyImg = document.querySelector(".img-moedas");
  currencyImg.src = currencyImgSrc; // Set the image source based on the selected currency
}

function changeCurrency() {
  const nameMoeada = document.querySelector(".name-moeada");
  const currencySelect = document.querySelector(".currency-select");
  const selectedCurrency = currencySelect.value;

  switch (selectedCurrency) {
    case "dolar":
      nameMoeada.innerHTML = "Dolar americano";
      break;
    case "euro":
      nameMoeada.innerHTML = "Euro";
      break;
    case "libra":
      nameMoeada.innerHTML = "Libra";
      break;
    case "bitcoin":
      nameMoeada.innerHTML = "Bitcoin";
      break;
    default:
      nameMoeada.innerHTML = "Moeda Desconhecida";
  }

  // Chame a função 'click()' após a atualização da moeda
  click();
}

const currencySelect = document.querySelector(".currency-select");
currencySelect.addEventListener("change", changeCurrency);

const convertButton = document.querySelector(".convert-button");
convertButton.addEventListener("click", click);

// Execute a função changeCurrency() inicialmente para configurar o texto e a imagem corretamente
changeCurrency();
