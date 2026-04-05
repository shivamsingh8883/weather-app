document.querySelector("#searchbtn").addEventListener('click', function () {
    let city = document.querySelector("#city_input").value
    console.log(city);   
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfd1636b5cfcd29be9e2b5a72e67eef4&units=metric`,
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          console.log(data);
          if (data.cod == "404") {
              let error_msg = document.querySelector("#error_msg")
              error_msg.textContent = "City not found. Please try again.";
              return
          }
          else {
              let error_msg = document.querySelector("#error_msg");
              error_msg.textContent = "";
              
              let city_name = document.querySelector("#city_name")
              city_name.textContent = "City : " + city
              
              let temp = document.querySelector("#temperature")
              temp.textContent = "Temperature : " + data.main.temp + " Degree Celcius"
              
              let condition = document.querySelector("#weather_condition")
              condition.textContent = "Description : " + data.weather[0].description
              
              let humidity = document.querySelector("#humidity")
              humidity.textContent = "Humidity : " + data.main.humidity + "%";

            }
      });
})