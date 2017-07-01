'use strict';

/* Controllers */

angular.module('weatherApp.controllers', [])


.controller('weatherCtrl', function($scope, $http) {
  var vm = $scope;



  $http.get("http://ip-api.com/json").success(function(data) {

    var categories = [
          {"id": 1, "city": "Boston"},
          {"id": 2, "city": "New York"},
          {"id": 3, "city": "Seattle"},
          {"id": 4, "city": "Los Angeles"},
          {"id": 5, "city": "Miami"},
          {"id": 6, "city": "Fresno"},
          {"id": 7, "city": "Tracy"},
          {"id": 8, "city": "Portland"},
          {"id": 9, "city": "Norfolk"},
          {"id": 10, "city": "San Francisco"},
      ];


    var city = data.city;
      var cityCounting = 0;

    var counter = 0;

  $scope.clickCounter =function () {
      cityCounting = counter++;
      console.log(cityCounting);
      return cityCounting;
    }
    console.log(cityCounting);
    if(cityCounting == 0){
      var apiKey = "d544ef9e2e6f8bd6a4b1d6325950b77e";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us" + "&appid=" + apiKey;
    console.log("no im from city original here");
    }
    else{
      var apiKey = "d544ef9e2e6f8bd6a4b1d6325950b77e";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityCounting + ",us" + "&appid=" + apiKey;
        console.log("no im from city counting");
    }

    

    $http.get(openWeatherURL).success(function(data) {
  
      vm.description = data.weather[0].description;
      vm.speed = (2.237 * data.wind.speed).toFixed(1) + " mph";
      vm.name = data.name;
      console.log("get by forecast");
      vm.humidity = data.main.humidity + " %";
      vm.temp = data.main.temp;
      vm.fTemp = (vm.temp * (9 / 5) - 459.67).toFixed(1) + " °F";
      vm.cTemp = (vm.temp - 273).toFixed(1) + " °C";
      vm.icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

      //Getting the weather icon
      if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
        $scope.weatherClass = "wi wi-thunderstorm";
      }

      if (data.weather[0].id >= 300 && data.weather[0].id < 400) {
        $scope.weatherClass = "wi wi-sprinkle";
      }

      if (data.weather[0].id >= 500 && data.weather[0].id < 600) {
        if (data.weather[0].id == 500 || data.weather[0].id >= 520) {
          $scope.weatherClass = "wi wi-rain";
        }
        $scope.weatherClass = "wi wi-showers";
      }

      if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
        $scope.weatherClass = "wi wi-snow";
      }

      if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
        $scope.weatherClass = "wi wi-fog";
      }

      if (data.weather[0].id == 800) {
        $scope.weatherClass = "wi wi-day-sunny";
      }

      if (data.weather[0].id == 801) {
        $scope.weatherClass = "wi wi-day-sunny-overcast";
      }

      if (data.weather[0].id == 802) {
        $scope.weatherClass = "wi wi-day-cloudy";
      }

      if (data.weather[0].id == 803 || data.weather[0].id == 804) {
        $scope.weatherClass = "wi wi-cloudy";
      }

      if (data.weather[0].id == 900) {
        $scope.weatherClass = "wi wi-tornado";
      }

      if (data.weather[0].id == 901 || data.weather[0].id == 960 || data.weather[0].id == 961) {
        $scope.weatherClass = "wi wi-thunderstorm";
      }

      if (data.weather[0].id == 902 || data.weather[0].id == 962) {
        $scope.weatherClass = "wi wi-hurricane";
      }

      if (data.weather[0].id == 903) {
        $scope.weatherClass = "wi wi-snowflake-cold";
      }

      if (data.weather[0].id == 904) {
        $scope.weatherClass = "wi wi-hot";
      }

      if (data.weather[0].id == 905) {
        $scope.weatherClass = "wi wi-strong-wind";
      }

      if (data.weather[0].id == 906) {
        $scope.weatherClass = "wi wi-hail";
      }

      if (data.weather[0].id == 951) {
        $scope.weatherClass = "wi wi-day-sunny";
      }

      if (data.weather[0].id >= 952 && data.weather[0].id <= 956) {
        $scope.weatherClass = "wi wi-windy";
      }

      if (data.weather[0].id >= 957 && data.weather[0].id <= 959) {
        $scope.weatherClass = "wi wi-strong-wind";
      }


      // Calculate current hour using offset from UTC.

      var a = new Date(data.dt * 1000);
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
      vm.formattedTime = hours + ':' + minutes.substr(-2);


      //Formatted time for sunrise
      var sunrise = new Date(data.sys.sunrise*1000);
      var sunriseHours = sunrise.getHours();
      var sunriseMinutes = "0" + sunrise.getMinutes();
    
      vm.formattedSunrise = sunriseHours + ':' + sunriseMinutes.substr(-2) + ' AM';
      

    }); //closing OpenWeatherMap


    $scope.getForecastByLocation = function(myName) {
    
    vm.city = myName;
    console.log("this");

    var apiKey = "d544ef9e2e6f8bd6a4b1d6325950b77e";
   
    var updatedURL = "http://api.openweathermap.org/data/2.5/weather?q=" + vm.city + ",us" + "&appid=" + apiKey;


      $http.get(updatedURL).success(function(data) {

      vm.description = data.weather[0].description;
      console.log("get by forecast");
      vm.speed = (2.237 * data.wind.speed).toFixed(1) + " mph";
      vm.name = data.name;
      vm.humidity = data.main.humidity + " %";
      vm.temp = data.main.temp;
      vm.fTemp = (vm.temp * (9 / 5) - 459.67).toFixed(1) + " °F";
      vm.cTemp = (vm.temp - 273).toFixed(1) + " °C";
      vm.icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";


            //Getting the weather icon
      if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
        $scope.weatherClass = "wi wi-thunderstorm";
      }

      if (data.weather[0].id >= 300 && data.weather[0].id < 400) {
        $scope.weatherClass = "wi wi-sprinkle";
      }

      if (data.weather[0].id >= 500 && data.weather[0].id < 600) {
        if (data.weather[0].id == 500 || data.weather[0].id >= 520) {
          $scope.weatherClass = "wi wi-rain";
        }
        $scope.weatherClass = "wi wi-showers";
      }

      if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
        $scope.weatherClass = "wi wi-snow";
      }

      if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
        $scope.weatherClass = "wi wi-fog";
      }

      if (data.weather[0].id == 800) {
        $scope.weatherClass = "wi wi-day-sunny";
      }

      if (data.weather[0].id == 801) {
        $scope.weatherClass = "wi wi-day-sunny-overcast";
      }

      if (data.weather[0].id == 802) {
        $scope.weatherClass = "wi wi-day-cloudy";
      }

      if (data.weather[0].id == 803 || data.weather[0].id == 804) {
        $scope.weatherClass = "wi wi-cloudy";
      }

      if (data.weather[0].id == 900) {
        $scope.weatherClass = "wi wi-tornado";
      }

      if (data.weather[0].id == 901 || data.weather[0].id == 960 || data.weather[0].id == 961) {
        $scope.weatherClass = "wi wi-thunderstorm";
      }

      if (data.weather[0].id == 902 || data.weather[0].id == 962) {
        $scope.weatherClass = "wi wi-hurricane";
      }

      if (data.weather[0].id == 903) {
        $scope.weatherClass = "wi wi-snowflake-cold";
      }

      if (data.weather[0].id == 904) {
        $scope.weatherClass = "wi wi-hot";
      }

      if (data.weather[0].id == 905) {
        $scope.weatherClass = "wi wi-strong-wind";
      }

      if (data.weather[0].id == 906) {
        $scope.weatherClass = "wi wi-hail";
      }

      if (data.weather[0].id == 951) {
        $scope.weatherClass = "wi wi-day-sunny";
      }

      if (data.weather[0].id >= 952 && data.weather[0].id <= 956) {
        $scope.weatherClass = "wi wi-windy";
      }

      if (data.weather[0].id >= 957 && data.weather[0].id <= 959) {
        $scope.weatherClass = "wi wi-strong-wind";
      }


      // Calculate current hour using offset from UTC.

      var a = new Date(data.dt * 1000);
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
      vm.formattedTime = hours + ':' + minutes.substr(-2);

      vm.sunrise = new Date(data.sys.sunrise*1000);
      console.log("hey did you reach me?");
      var sunriseHours = sunrise.getHours();
      // Minutes part from the timestamp
      var sunriseMinutes = "0" + sunrise.getMinutes();
      // Seconds part from the timestamp
      var sunriseSeconds = "0" + sunrise.getSeconds();


      vm.formattedSunrise = sunriseHours + ':' + sunriseMinutes.substr(-2) + ':' + sunriseSeconds.substr(-2);
      

      });//end of GET request of updatedURL


    };//getForecastByLocation


  }); //closing IP-API

}); //closing Controller