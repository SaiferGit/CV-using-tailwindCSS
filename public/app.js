getCurrWeather();

function hideAndShow(curricon, currContentID) {
  let content = document.getElementById(currContentID);
  console.log(content);
  
  
  if(content.classList.contains("hidden")){
    content.classList.replace("hidden", "block");
    curricon.classList.replace("fa-chevron-down", "fa-chevron-up");
  } 
  else {
    content.classList.replace("block", "hidden");
    curricon.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}

let wcontainer = document.getElementById("weather-container");
let Wicon = document.getElementById("weather-icon");

const toggleModal = () => {
  wcontainer.classList.toggle('hidden');
  wcontainer.classList.toggle('flex');
};

Wicon.addEventListener('click', function() {
  showCurrWeather();
  toggleModal();
    // flex class is toggled on
  // hidden class is toggled off
  setTimeout(() => {
    toggleModal();
  }, 5000);
});


function showCurrWeather(){
  getCurrWeather();
}

function getCurrWeather() {
  const apiKey = '438fdbdf994a4f92b939017dd395c6da';
  const cityName = $('.cityName')[0].innerHTML;
  const webUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric' + '&appid=' + apiKey;
  
  /*
  $.ajax({
    method: 'GET',
    url: webUrl,
    dataType: 'jsonp',
    success: function(data){
      showRetrivedData(data);
    },
  });
  */

  axios.get(webUrl)
  .then(function (response) {
    // handle success
    console.log(response);
    showRetrivedData(response);
  })
  .catch(function (error) {
    // handle error
    alert("Adress Weather Error: " + error);
  })
}

/*
  ajax gets the value by data.name, whereas axois uses response.data.name
*/

function showRetrivedData(response) {
      const cityName = response.data.name;
      const description = response.data.weather[0].description;
      const temp = response.data.main.temp;
      const feels_like = response.data.main.feels_like;
      const humidity = response.data.main.humidity;
      const pressure = response.data.main.pressure;
      const windSpeed = response.data.wind.speed;
      const imgSrc = 'https://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png';
      
      

      $('#weatherImage').attr('src', imgSrc)
      $('.cityName').html(cityName);
      $('#desVal').html(description);
      $('#tempVal').html(temp + '&deg;C');
      $('#feelsLikeVal').html(feels_like);
      $('#humidityVal').html(humidity + '%');
      $('#pressureVal').html(pressure + ' hPa');
      $('#windSpeedVal').html(windSpeed + ' m/s');
  
}
