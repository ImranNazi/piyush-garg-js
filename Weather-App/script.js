const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city");
const cityTime = document.getElementById("cityT");
const citytemp = document.getElementById("cityTemp");

async function getData(cityName) {
  //fetch returns promise
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=4751a3c0a9ff4304ade74346242604%20&q=${cityName}&aqi=yes`
  );
  //to parse json
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  city.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
  cityT.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
});
