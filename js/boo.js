var classApp= angular.module('weatherApp', []);

classApp.controller('weatherCtrl', function($scope, $http){
  var vm = $scope;
  vm. channelInfo = {
    heading:"Open Weather API",
    subheading1: "Free Code Camp: Front End Projects",
    subheading2: {
      name: "Check out my YouTube Channel",
      link: "http://www.YouTube.com/CodingTutorials360"
    },

    scope: {
      cityName: '@',
      offsetHours: '@',
      offsetMinutes: '@'
  }
  };



  $http.get("http://ip-api.com/json").success(function(data){
  vm.lat= data.lat;
  vm.lon=data.lon;
 var apiKey=  "d544ef9e2e6f8bd6a4b1d6325950b77e";
 var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+ vm.lat + "&lon="+vm.lon+ "&appid=" +apiKey;
    
$http.get(openWeatherURL).success(function(data){
vm.description= data.weather[0].description;
vm.speed= (2.237*data.wind.speed).toFixed(1) + " mph";
vm.name= data.name;
vm.humidity = data.main.humidity + " %";
vm.temp= data.main.temp;
vm.fTemp= (vm.temp*(9/5)-459.67).toFixed(1) + " °F";
vm.cTemp= (vm.temp-273).toFixed(1) + " °C";
  vm.icon= "https://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";



  // Calculate current hour using offset from UTC.

var a = new Date(data.dt * 1000);
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var year = a.getFullYear();
var month = months[a.getMonth()];
var date = a.getDate();

// Hours part from the timestamp
var hours = a.getHours();
// Minutes part from the timestamp
var minutes = "0" + a.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + a.getSeconds();

vm.formattedDate = date + ' ' + month + ' ' + year;
vm.formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

vm.sunrise = new Date(data.sys.sunrise*1000+(scope.offsetHours*3600000)+(scope.offsetMinutes*60000));
vm.sunset = new Date(data.sys.sunset*1000+(scope.offsetHours*3600000)+(scope.offsetMinutes*60000));
vm.currentHour = datetime.getUTCHours();
vm.sunriseHour = sunrise.getUTCHours();
vm.sunsetHour = sunset.getUTCHours();
vm.weatherClass= "wi wi-owm-731";
    
// Hour between sunset and sunrise being night time
var night = false;
vm.weatherClass2 =  $("#icon").attr("class", " wi wi-showers");
getIcon();
        //function that gets icon based on description

          // if(data.weather[0].id >= 200 && data.weather[0].id < 300){
          //   $("#icon").attr("class", " wi wi-thunderstorm");
          // }
          
          // if(data.weather[0].id >= 300 && data.weather[0].id < 400){
          //   $("#icon").attr("class", " wi wi-sprinkle");
          // }
          
          // if(data.weather[0].id >= 500 && data.weather[0].id < 600){
          //   if(data.weather[0].id == 500 || data.weather[0].id >= 520){
          //     $("#icon").attr("class", "wi wi-rain")
          //   }
          //   $("#icon").attr("class", " wi wi-showers");
          // }
          
          // if(data.weather[0].id >= 600 && data.weather[0].id < 700){
          //   $("#icon").attr("class", " wi wi-snow");
          // }
          
          // if(data.weather[0].id >= 700 && data.weather[0].id < 800){
          //   $("#icon").attr("class", " wi wi-fog");
          // }
          
          // if(data.weather[0].id == 800){
          //   $("#icon").attr("class", " wi wi-day-sunny");
          // }
          
          // if(data.weather[0].id == 801){
          //   $("#icon").attr("class", " wi wi-day-sunny-overcast");
          // }
          
          // if(data.weather[0].id == 802){
          //   $("#icon").attr("class", " wi wi-day-cloudy");
          // }
          
          // if(data.weather[0].id == 803 || data.weather[0].id == 804){
          //   $("#icon").attr("class", " wi wi-cloudy");
          // }
          
          // if(data.weather[0].id == 900){
          //   $("#icon").attr("class", " wi wi-tornado");
          // }
          
          // if(data.weather[0].id == 901 || data.weather[0].id == 960 || data.weather[0].id == 961){
          //   $("#icon").attr("class", " wi wi-thunderstorm");
          // }
          
          // if(data.weather[0].id == 902 || data.weather[0].id == 962){
          //   $("#icon").attr("class", " wi wi-hurricane");
          // }
          
          // if(data.weather[0].id == 903){
          //   $("#icon").attr("class", " wi wi-snowflake-cold");
          // }
          
          // if(data.weather[0].id == 904){
          //   $("#icon").attr("class", " wi wi-hot");
          // }
          
          // if(data.weather[0].id == 905){
          //   $("#icon").attr("class", " wi wi-strong-wind");
          // }
          
          // if(data.weather[0].id == 906){
          //   $("#icon").attr("class", " wi wi-hail");
          // }
          
          // if(data.weather[0].id == 951){
          //   $("#icon").attr("class", "wi wi-day-sunny");
          // }
          
          // if(data.weather[0].id >= 952 && data.weather[0].id <= 956){
          //   $("#icon").attr("class", "wi wi-windy");
          // }
          
          // if(data.weather[0].id >= 957 && data.weather[0].id <= 959){
          //   $("#icon").attr("class", "wi wi-strong-wind");
          // }
          
        

// switch(data.weather[0].description){
//   case "clear sky":
//     vm.weatherClass = "wi wi-owm-700";
//     break;

// return vm.weatherClass;
// }
// // Change weather icon class according to weather code.
// if (night) {
//     switch (data.weather[0].description) {
//         case 200:
//         case 201:
//         case 202:
//         case 210:
//         case 211:
//         case 212:
//         case 221:
//             scope.weatherClass = "wi-night-alt-thunderstorm";
//             break;
//         case 230:
//         case 231:
//         case 232:
//         case 901:
//             scope.weatherClass = "wi-night-alt-storm-showers";
//             break;
//         case 300:
//         case 301:
//         case 302:
//         case 310:
//         case 311:
//         case 312:
//         case 313:
//         case 314:
//         case 321:
//         case 621:
//         case 622:
//             scope.weatherClass = "wi-night-alt-showers";
//             break;
//         case 500:
//         case 501:
//         case 502:
//         case 503:
//         case 504:
//         case 511:
//         case 520:
//         case 521:
//         case 522:
//         case 531:
//             scope.weatherClass = "wi-night-alt-rain";
//             break;
//         case 600:
//         case 601:
//         case 602:
//         case 611:
//         case 612:
//             scope.weatherClass = "wi-night-alt-snow";
//             break;
//         case 615:
//         case 616:
//         case 620:
//         case 611:
//         case 612:
//             scope.weatherClass = "wi-night-alt-rain-mix";
//             break;
//         case 701:
//         case 721:
//         case 741:
//             scope.weatherClass = "wi-night-fog";
//             break;
//         case 800:
//         case 951:
//             scope.weatherClass = "wi-night-clear";
//             break;
//         case 801:
//         case 802:
//         case 803:
//         case 804:
//             scope.weatherClass = "wi-night-alt-cloudy";
//             break;
//         case 906:
//             scope.weatherClass = "wi-night-alt-hail";
//             break;
//         case 906:
//             scope.weatherClass = "wi-night-alt-cloudy-windy";
//             break;
//     }   
// }
// else {
//     switch (data.weather[0].description) {
//         case 200:
//         case 201:
//         case 202:
//         case 210:
//         case 211:
//         case 212:
//         case 221:
//             scope.weatherClass = "wi-day-thunderstorm";
//             break;
//         case 230:
//         case 231:
//         case 232:
//         case 901:
//             scope.weatherClass = "wi-day-storm-showers";
//             break;
//         case 300:
//         case 301:
//         case 302:
//         case 310:
//         case 311:
//         case 312:
//         case 313:
//         case 314:
//         case 321:
//         case 621:
//         case 622:
//             scope.weatherClass = "wi-day-showers";
//             break;
//         case 500:
//         case 501:
//         case 502:
//         case 503:
//         case 504:
//         case 511:
//         case 520:
//         case 521:
//         case 522:
//         case 531:
//             scope.weatherClass = "wi-day-rain";
//             break;
//         case 600:
//         case 601:
//         case 602:
//         case 611:
//         case 612:
//             scope.weatherClass = "wi-day-snow";
//             break;
//         case 615:
//         case 616:
//         case 620:
//         case 611:
//         case 612:
//             scope.weatherClass = "wi-day-rain-mix";
//             break;
//         case 701:
//         case 721:
//         case 741:
//             scope.weatherClass = "wi-day-fog";
//             break;
//         case 800: 
//         case 951:
//             scope.weatherClass = "wi-day-sunny";
//             break;
//         case 801:
//         case 802:
//         case 803:
//         case 804:
//             scope.weatherClass = "wi-day-cloudy";
//             break;
//         case 906:
//             scope.weatherClass = "wi-day-hail";
//             break;
//         case 906:
//             scope.weatherClass = "wi-day-cloudy-windy";
//             break;
//     }  

// }
// switch (data.weather[0].description) {
//     case 731:
//     case 751:
//     case 761:
//     case 762:
//         scope.weatherClass = "wi-dust";
//         break;
//     case 711:
//         scope.weatherClass = "wi-smoke";
//         break;
//     case 771:
//     case 957:
//     case 958:
//     case 959:
//     case 960:
//         scope.weatherClass = "wi-strong-wind";
//         break;
//     case 781:
//     case 900:
//         scope.weatherClass = "wi-tornado";
//         break;
//     case 902:
//     case 961:
//     case 962:
//         scope.weatherClass = "wi-hurricane";
//         break;
//     case 903:
//         scope.weatherClass = "wi-snowflake-cold";
//         break;
//     case 904:
//         scope.weatherClass = "wi-hot";
//         break;
//     case 905:
//     case 951:
//     case 952:
//     case 953:
//     case 954:
//     case 955:
//     case 956:
//         scope.weatherClass = "wi-windy";
//         break;
// }

  
});
    
  });
});

