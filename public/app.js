

$(document).ready( function() {
  
  getCurrWeather();

  function hideAndShow(curricon, currContentID) {
    let content = document.getElementById(currContentID);
    console.log(content);
    if(content.classList.contains("hidden")){ 
        content.classList.replace("hidden", "block");
          curricon.classList.replace("fa-chevron-down", "fa-chevron-up");
          
        } else {
        content.classList.replace("block", "hidden");
        curricon.classList.replace("fa-chevron-up", "fa-chevron-down");
        
    }
  }

  let Wcontainer = document.getElementById("weather-container");
  console.log(Wcontainer);
  let Wicon = document.getElementById("weather-icon");
  console.log(Wicon);
  console.log(Wcontainer.classList);

  const toggleModal = () => {
    Wcontainer.classList.toggle('hidden');
    Wcontainer.classList.toggle('flex');
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
    console.log(cityName);
    $.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric' + '&appid=' + apiKey,
      dataType: 'jsonp',
      success: function(data){
        showRetrivedData(data);
      },
    });
  }

  function showRetrivedData(data) {
        const cityName = data.name;
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const feels_like = data.main.feels_like;
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;
        const windSpeed = data.wind.speed;
        const imgSrc = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
        
        

        $('#weatherImage').attr('src', imgSrc)
        // $('#weatherImage').html('<img src= 'https://openweathermap.org/img/wn/04d.png'');
        $('.cityName').html(cityName);
        $('#desVal').html(description);
        $('#tempVal').html(temp + '&deg;C');
        $('#feelsLikeVal').html(feels_like);
        $('#humidityVal').html(humidity + '%');
        $('#pressureVal').html(pressure + ' hPa');
        $('#windSpeedVal').html(windSpeed + ' m/s');
    
  }
});