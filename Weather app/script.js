const Button = document.getElementById("search-Button");
const input = document.getElementById("city-Input");
async function getData(cityName) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=4751a3c0a9ff4304ade74346242604&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}
Button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
});
