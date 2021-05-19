

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


function showCurrWeather() {
  // const APIKEY = 
}