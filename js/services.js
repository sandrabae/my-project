'use strict';

/* Services */

angular.module('weatherApp.services', [])



.service("weatherApp.services", function ($http, $q)
{
  var deferred = $q.defer();
  $http.get('resources/json/BaltimoreRavens.json').then(function (data)
  {
    deferred.resolve(data);
  });

  this.getPlayers = function ()
  {
    return deferred.promise;
  }
})


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
    var apiKey = "d544ef9e2e6f8bd6a4b1d6325950b77e";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + categories[cityCounting].city + ",us" + "&appid=" + apiKey;

    $http.get(openWeatherURL).success(function(data) {
      console.log("why are you here?");
      console.log(cityCounting);
      vm.description[1] = data.weather[0].description;
      vm.speed = (2.237 * data.wind.speed).toFixed(1) + " mph";
      vm.name[cityCounting] = data.name;
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

    } //closing clickCounter
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




// angular.module('openWeatherApp.services', ['ngResource'])

//   //
//   // Simple value service (kept from angular-seed dist)
//   //
//   .value('version', '0.1.6')


//   //
//   // Define a standard list of "example locations"
//   //
//   .value('exampleLocations',['Hamburg','San Francisco','Berlin','Athens','Tokyo','New York','Moscow','Clonakilty'])
//   //
//   // Storm "Xaver" special locations
//   //
//   .value('stormLocations',['Sylt','St. Peter-Ording','Husum','Bremerhaven','Hamburg','Kiel','Lübeck'])


//   //
//   // Register service for openweathermap.com
//   //
//   // - Inject $resource from angular-resource context
//   // - Generate custom resource object able to query open weather map api with custom parameters
//   // -
//   // - Tricky: Avoid needing a server/proxy by forcing a JSONP request: Angular handles callback
//   //   if JSON_CALLBACK is set as function name parameter in which response should be wrapped
//   //   (subject to be made configurable through service initialization so that server mode using
//   //    "normal" json api is supported as well)
//   //
//   .factory('weatherApp', function($resource) {

//     // API key is currently unused (work either with or without key)
//     var apiKey = 'd544ef9e2e6f8bd6a4b1d6325950b77e';
//     var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/weather';

//     return $resource(apiBaseUrl + ':?q=:location',
//       {
//         APPID: apiKey,
//         mode: 'json',
//         callback: 'JSON_CALLBACK',
//         units: 'metric',
//         lang: 'en'
//       },
//       {
//         queryWeather: {
//           method: 'JSONP',
//           params: {
//             path: 'weather'
//           },
//           isArray: false,
//           headers: {
//             'x-api-key': apiKey
//           }
//         }
//       }
//     ) 
//   });
