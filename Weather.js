const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector("button");
const image = document.getElementById("image");
const apiKey="a52745797d8b1d3afae73c5a7cd79372"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric"
const valid = document.getElementById("valid");
const mycity = document.getElementById("mycity");
const mycity1 = document.getElementById("mycity1");


async function getWeather(city){

    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`)

    if(!response.ok)
        
        mycity.style.display="none";
        mycity1.textContent="Enter A Valid City"


        

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".tempeture").innerHTML= Math.round(data.main.temp)+"°C"
    document.querySelector(".wind").innerHTML=data.wind.speed +"Km/h";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
    if(data.weather[0].main == 'Clouds')
        image.src="clouds.png"
    else if(data.weather[0].main == 'Clear')
        image.src="sunny.png"
    else if(data.weather[0].main == 'Rain')
        image.src="pluie-abondante.png"
    else if(data.weather[0].main == 'Drrizle')
        image.src="cloudy (1).png"
    else if(data.weather[0].main == 'Mist')
        image.src="fog.png"

    mycity1.style.display="none";
    mycity.style.display="block";

}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});
