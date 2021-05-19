

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


function showCurrWeather() {
  
}