// const apikey="8f0fff35941cc0ccc137048fbed59b19";
// const weatherData=document.getElementById("weather-data");
// const cityInputEl=document.getElementById("city-input");
// const formE1=document.querySelector("form");
// formE1.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     const cityValue=cityInputEl.value;
//     getWeatherData(cityValue);
// });
// async function getWeatherData(cityValue)
// {
//     try{
//         const response= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
//         if(!response.ok)
//         {
//             throw new Error('Network respose was not ok');
//         }
//         const data=await response.json();
//         const temperature=Math.round(data.main.temp);
//         const description=data.weather[0].description;
//         const icon=data.weather[0].icon;
//         const details=[
//         `Feels like:${Math.round(data.main.feels_like)}`,
//         `Humidity;${data.main.humidity}`,
//         `Wind speed;${data.wind.speed}`,
//         ];
//         weatherDataEl.querySelector(".icon").innerHTML=` <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
//         weatherDataEl.querySelector(".temperature").textContent=`${temperature}°C`;
//         weatherDataEl.querySelector(".description").textContent=`${description}°C`;
//         weatherDataEl.querySelector(".details").innerHTML=details.map((details)=>`<div>${details}</div>`).join("");

//     }
//     catch(error)
//     {
//         weatherDataEl.querySelector(".icon").innerHtml=` <img src="" alt="Weather Icon">`
//         weatherDataEl.querySelector(".temperature").textContent="";
//         weatherDataEl.querySelector(".description").textContent="";
//         weatherDataEl.querySelector(".details").innerHTML=details.map((details)=>"").join("");
//     }
// }
const apikey = "8f0fff35941cc0ccc137048fbed59b19";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formE1 = document.querySelector("form");

formE1.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  await getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}`,
      `Wind speed: ${data.wind.speed}`,
    ];
    weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = `<img src="" alt="Weather Icon">`;
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent = "";
    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}
