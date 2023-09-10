const temperaturefield = document.querySelector(".weather1");
const cityfield = document.querySelector(".weather2 p");
const datefield = document.querySelector(".weather2 span");
const emojifield = document.querySelector(".weather3 img");
const weatherfield = document.querySelector(".weather3 span");
const searchfield = document.getElementById("searchfield");
const form = document.querySelector("form");

form.addEventListener("submit",search);
const a = navigator.geolocation.getCurrentPosition((data)=>{
console.log(data)
})
let targetcity = "delhi";

const fetchData =async(targetcity)=>{
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=0aa73f5ad51b48e1b76104331230307&q=${targetcity}`;

    const response = await fetch(url);
    const data = await response.json();

    temperaturefield.innerText = (data.current.temp_c)+"°c";
    cityfield.innerText = (data.location.name);
    datefield.innerText = (data.location.localtime);
    emojifield.src = (data.current.condition.icon);
    weatherfield.innerText = (data.current.condition.text);
        
    } catch (error) {
        alert("location not found");
    }
    

}

function search(e){
    e.preventDefault();
    targetcity = searchfield.value;
    fetchData(targetcity);
   
}
if(targetcity=="delhi"){
    fetchData(targetcity);
};