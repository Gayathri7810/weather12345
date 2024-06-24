// let key = "4c44e57263aa827dee36e05a814745ab";
// let api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData = async() =>{
        let key = "4c44e57263aa827dee36e05a814745ab";
        let place = document.querySelector("#location").value
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput = await data.json()
        let finalCondition=finalOutput.weather[0].main.toLowerCase()
        console.log(finalOutput)
        let tempValue = document.querySelector(".temp_value")
        let humidValue = document.querySelector(".humid_value")
        let finalTemp = Math.round(finalOutput.main.temp-273);
        let finalHumid = finalOutput.main.humidity;
        tempValue.innerHTML=`${finalTemp}<sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid}km/ph`

        let h3=document.querySelector("h3")
        h3.innerHTML=finalOutput.weather[0].main

        let weatherImage=document.getElementById("weatherImage")
        let background=document.getElementById("main_container")
        // console.log(weatherImage)
        console.log(background)
        switch(finalCondition){
            case  "clouds" :
            weatherImage.src ="./assets/clouds.jpg"; 
            background.style.backgroundImage="url(./assets/clouds.gif)";
            break;
            case "rain" :
                weatherImage.src="./assets/rain.jpg"
                background.style.backgroundImage ="url(./assets/rainbackground.gif)"
                break;
            case "haze" :
                weatherImage.src="./assets/haze.jpeg" ;
                background.style.backgroundImage="url(./assets/dustbackground.gif)"
                break;

            case "dust" :
                weatherImage.src="./assets/dust.jpg";
                background.style.backgroundImage = "url(./assets/dustbackground.gif)"
                break;
            case "snow":
                weatherImage.src= "./assets/snow.jpeg"
                background.style.backgroundImage = "url(./assets/snow.gif)"
                break;
            case "smoke" :
                weatherImage.src= "./assets/smoke.jpeg";
                background.style.backgroundImage= "url(./assets/smokebackground.gif)"
                break;
        

            
        }
       

        


    }
    fetchData();
})
