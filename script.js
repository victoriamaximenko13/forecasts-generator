/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

let firstForecast = "Тебе подарят квартиру в Москве!";
let secondForecast = "Тебя ждет повышение на работе!";
let thirdForecast = "В следующем году ты выйдешь замуж!";
let fourthForecast = "Ты наконец-то сможешь осуществить свою мечту!";
let fifthForecast = "На тебя накакает голубь!";

const forecastButton = document.querySelector(".forecast-btn");
const currentForecast = document.querySelector(".current-forecast");
let forecastText = currentForecast.querySelector("h1");
let forecastRate = currentForecast.querySelector("p");
const forecasts = document.querySelector(".forecasts");




function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min) 
}

forecastButton.addEventListener("click", function() {
    if(forecastText.textContent != "") {
        const template = document.querySelector("#forecast-item");
        const forecastItem = template.content.cloneNode(true);
        const oldForecast = forecastItem.querySelector("h3");
        oldForecast.textContent = forecastText.textContent;
        const oldRate = forecastItem.querySelector("p");
        oldRate.textContent = forecastRate.textContent;
        forecasts.prepend(forecastItem);
    }

    let randomForecast = getRandomNumber(1, 6);

    switch(randomForecast) {
        case 1:
            forecastText.textContent = firstForecast
            break;
        case 2:
            forecastText.textContent = secondForecast
            break;
        case 3:
            forecastText.textContent = thirdForecast
            break;
        case 4:
            forecastText.textContent = fourthForecast
            break;
        default:
            forecastText.textContent = fifthForecast
            break;
    }

    forecastRate.textContent = `${getRandomNumber(0, 100)}%`;
})








