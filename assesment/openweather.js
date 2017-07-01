/*This is my script for the open weather API*/

var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getWeather, false); 


function getWeather() {
    
var userCity = document.getElementById("theCity").value;

//console.log(userCity);
    
var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + userCity + "&units=metric&APPID=&cnt=7";
    
var myRequest = new XMLHttpRequest();
    
myRequest.open("GET", theAPICall, true);   
//console.log(myRequest);
    
myRequest.send();
    
myRequest.onload  = function() {
    
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData  = JSON.parse(myRequest.responseText);
        //console.log(myData);
        
        var D0 = new Date (myData.list[0].dt *1000);
        //console.log(D0);
        var D1 = new Date (myData.list[1].dt *1000);
        //console.log(D1);
        var D2 = new Date (myData.list[2].dt *1000);
        //console.log(D2);
        var D3 = new Date (myData.list[3].dt *1000);
        //console.log(D3);
        var D4 = new Date (myData.list[4].dt *1000);
        //console.log(D4);
        var D5 = new Date (myData.list[5].dt *1000);
        //console.log(D5);
        var D6 = new Date (myData.list[6].dt *1000);
        //console.log(D6);
        
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
        var weatherImage = "http://openweathermap.org/img/w/"+myData.list[0].weather[0].icon+".png";
        
        document.getElementById("imageToday").src = weatherImage;
        
        document.getElementById("highToday").innerHTML = myData.list[0].temp.max + "<br><br>"
        
        document.getElementById("lowToday").innerHTML = myData.list[0].temp.min + "<br><br>";
        
        document.getElementById("dayDescription").innerHTML = myData.list[0].weather[0].description + "<br><br>";
        
        //Day 1
        document.getElementById('r1c1').innerHTML= days[D1.getDay()];
        
        var weatherImage = "http://openweathermap.org/img/w/"+myData.list[1].weather[0].icon+".png";
        document.getElementById('r1c2').src = weatherImage;
        
        document.getElementById('r1c3').innerHTML= myData.list[1].temp.max+ "&deg;C - ";
        
        document.getElementById('r1c4').innerHTML= myData.list[1].temp.min+ "&deg;C";
        
        //Day 2
        document.getElementById('r2c1').innerHTML= days[D2.getDay()];
        
        var weatherImage = "http://openweathermap.org/img/w/"+myData.list[2].weather[0].icon+".png";
        document.getElementById('r2c2').src = weatherImage;
        
        document.getElementById('r2c3').innerHTML= myData.list[2].temp.max+ "&deg;C - ";
        
        document.getElementById('r2c4').innerHTML= myData.list[2].temp.min+ "&deg;C";
        
        
        //Day 3
        document.getElementById('r3c1').innerHTML= days[D3.getDay()];
        
        var weatherImage = "http://openweathermap.org/img/w/"+myData.list[3].weather[0].icon+".png";
        document.getElementById('r3c2').src = weatherImage;
        
        document.getElementById('r3c3').innerHTML= myData.list[3].temp.max+ "&deg;C - ";
        
        document.getElementById('r3c4').innerHTML= myData.list[3].temp.min+ "&deg;C";
        
    }
  }

}