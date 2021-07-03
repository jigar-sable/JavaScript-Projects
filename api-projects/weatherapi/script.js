function showData(){
    let city = document.getElementById('city-input').value;
    let output = document.querySelector('.output-wrapper');

    const key = "a0e78d3b449db7059df0a38abd3952f8";
    if(city){
    fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
    )
    .then((res) => res.json())
    .then((data) => {
      if(data.main){
        output.style.visibility="visible";

        output.innerHTML = `
        <div class="temp">
          <span id="temp">${data.main.temp} °C</span>
          <p class="desc">${data.weather[0].description}</p>
        </div>
        <div class="details-container">
          <div class="details">
          <span id="temp_min">Min : ${data.main.temp_min} °C</span>
          <span id="temp_max">Max : ${data.main.temp_max} °C</span>
          </div>
          <div class="details">
          <span id="humidity">Humidity : ${data.main.humidity} %</span>
          <span id="wind">Wind : ${data.wind.speed} km/hr</span>
          </div>
        </div>`;
      }else{
        output.style.visibility="hidden";
        alert("City Data Not Found!");
      }
  });
} else {
  alert("Please Enter City!")
}
}