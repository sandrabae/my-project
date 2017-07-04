'use strict';


var app = angular.module('weatherApp.controllers', [])


app.controller('weatherCtrl', ['$scope', 'Data',

		function($scope, Data) {
			$scope.count = -1;

			$scope.city = 'Berkeley';
			var cityCounting = 0;
			var counter = 0;

        	var cities = [
          'Sydney, AU',
          'Melbourne, AU',
          'Tokyo',
          'Osaka',
          'Seoul',
          'Hong Kong',
          'London',
          'Amsterdam',
          'Berlin',
          'Paris',
          'Barcelona',
          'New York',
          'Dubai',
          'Antarctica'
        ];

			$scope.clickCounter = function(){
			    cityCounting = counter++;
			    $scope.city = cities[cityCounting];
			    console.log($scope.city);
			    console.log(cityCounting);
			   Data.getApps($scope.city).then(function(data) {

					$scope.data = data;

					$scope['name' + cityCounting] = data.name;
					  
					$scope['temp'+cityCounting] = data.main.temp;

					$scope['fTemp' + cityCounting] = ($scope['temp' + cityCounting] * (9 / 5) - 459.67).toFixed(1) + " °F";

					$scope.data = data;


					$scope['description' + cityCounting] = data.weather[0].description;
					$scope['speed' + cityCounting] = (2.237 * data.wind.speed).toFixed(1) + " mph";
			
					$scope['humidity' + cityCounting] = data.main.humidity + " %";
			
					$scope['weatherID' + cityCounting] = data.weather[0].id;

					//Getting the weather icon
					if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
						$scope['weatherClass' + cityCounting] = "wi wi-thunderstorm";
					}

					if (data.weather[0].id >= 300 && data.weather[0].id < 400) {
						$scope['weatherClass' + cityCounting] = "wi wi-sprinkle";
					}

					if (data.weather[0].id >= 500 && data.weather[0].id < 600) {
						if (data.weather[0].id == 500 || data.weather[0].id >= 520) {
							$scope['weatherClass' + cityCounting] = "wi wi-rain";
						}
						$scope['weatherClass' + cityCounting] = "wi wi-showers";
					}

					if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
						$scope['weatherClass' + cityCounting] = "wi wi-snow";
					}

					if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
						$scope['weatherClass' + cityCounting] = "wi wi-fog";
					}

					if (data.weather[0].id == 800) {
						$scope['weatherClass' + cityCounting]= "wi wi-day-sunny";
					}

					if (data.weather[0].id == 801) {
						$scope['weatherClass' + cityCounting] = "wi wi-day-sunny-overcast";
					}

					if (data.weather[0].id == 802) {
						$scope['weatherClass' + cityCounting] = "wi wi-day-cloudy";
					}

					if (data.weather[0].id == 803 || data.weather[0].id == 804) {
						$scope['weatherClass' + cityCounting]= "wi wi-cloudy";
					}

					if (data.weather[0].id == 900) {
						$scope['weatherClass' + cityCounting] = "wi wi-tornado";
					}

					if (data.weather[0].id == 901 || data.weather[0].id == 960 || data.weather[0].id == 961) {
						$scope['weatherClass' + cityCounting] = "wi wi-thunderstorm";
					}

					if (data.weather[0].id == 902 || data.weather[0].id == 962) {
						$scope['weatherClass' + cityCounting] = "wi wi-hurricane";
					}

					if (data.weather[0].id == 903) {
						$scope['weatherClass' + cityCounting] = "wi wi-snowflake-cold";
					}

					if (data.weather[0].id == 904) {
						$scope['weatherClass' + cityCounting] = "wi wi-hot";
					}

					if (data.weather[0].id == 905) {
						$scope['weatherClass' + cityCounting]= "wi wi-strong-wind";
					}

					if (data.weather[0].id == 906) {
						$scope['weatherClass' + cityCounting] = "wi wi-hail";
					}

					if (data.weather[0].id == 951) {
						$scope['weatherClass' + cityCounting] = "wi wi-day-sunny";
					}

					if (data.weather[0].id >= 952 && data.weather[0].id <= 956) {
						$scope['weatherClass' + cityCounting] = "wi wi-windy";
					}

					if (data.weather[0].id >= 957 && data.weather[0].id <= 959) {
						$scope['weatherClass' + cityCounting] = "wi wi-strong-wind";
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

					$scope['formattedDate' + cityCounting] = date + ' ' + month + ' ' + year;
					$scope['formattedTime' + cityCounting]= hours + ':' + minutes.substr(-2);


					//Formatted time for sunrise
					var sunrise = new Date(data.sys.sunrise * 1000);
					var sunriseHours = sunrise.getHours();
					var sunriseMinutes = "0" + sunrise.getMinutes();

					$scope['formattedSunrise' + cityCounting] = sunriseHours + ':' + sunriseMinutes.substr(-2) + ' AM';

				});

					  
			  //  		var vm = $scope;

					
					// console.log($scope.data);


					// vm.name3 = data.name;
					// vm.temp3 = data.main.temp;
					// vm.fTemp3 = (vm.temp3 * (9 / 5) - 459.67).toFixed(1) + " °F";

					console.log(cityCounting);

		
			}






			$scope.getForecastByLocation = function() {
				console.log($scope.city);
				console.log('this is your input ' + $scope.city);
				Data.getApps($scope.city).then(function(data) {
					$scope.data = data;

					var vm = $scope;

					vm.description = data.weather[0].description;
					vm.speed = (2.237 * data.wind.speed).toFixed(1) + " mph";
					vm.name = data.name;
					vm.humidity = data.main.humidity + " %";
					vm.temp = data.main.temp;
					vm.fTemp = (vm.temp * (9 / 5) - 459.67).toFixed(1) + " °F";


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
					var sunrise = new Date(data.sys.sunrise * 1000);
					var sunriseHours = sunrise.getHours();
					var sunriseMinutes = "0" + sunrise.getMinutes();

					vm.formattedSunrise = sunriseHours + ':' + sunriseMinutes.substr(-2) + ' AM';
				}); //initiate Data.getApps by passing in a new city
			}
			Data.getApps($scope.city).then(function(data) {
					$scope.data = data;

					var vm = $scope;

					vm.description = data.weather[0].description;
					vm.speed = (2.237 * data.wind.speed).toFixed(1) + " mph";
					vm.name = data.name;
					vm.humidity = data.main.humidity + " %";
					vm.temp = data.main.temp;
					vm.fTemp = (vm.temp * (9 / 5) - 459.67).toFixed(1) + " °F";


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
					var sunrise = new Date(data.sys.sunrise * 1000);
					var sunriseHours = sunrise.getHours();
					var sunriseMinutes = "0" + sunrise.getMinutes();

					vm.formattedSunrise = sunriseHours + ':' + sunriseMinutes.substr(-2) + ' AM';
				}, function(res) {
					if (res.status === 500) {
						// server error, alert user somehow
					} else {
						// probably deal with these errors differently
					}
				}

			); // end of function

		}
	]) //end of controller

// var app = angular.module('weatherApp.controllers', [])
// 	app.controller('weatherCtrl', ['$scope','Data',
// 		function($scope, Data) {
// $scope.getForecastByLocation = function(myName) {
//    	$scope.city = myName;
//    	Data.getApps($scope.city);
// },	
// 		Data.getApps(city)
// 		.then(function(data)){
// 		//doing a bunch of things like converting units, etc
// 		},
// 		function(res){
// 			if(res.status === 500) {
//             // server error, alert user somehow
//         } else { 
//             // probably deal with these errors differently
//         }
//    		}); // end of function
// }]) // end of controller 

//   Controller for "open weather map" api data search
//   .controller('OpenWeatherCtrl',
//     ['$scope','openWeatherMap','exampleLocations','stormLocations','ISO3166',
//       function($scope,openWeatherMap,exampleLocations,stormLocations,ISO3166) {

//     $scope.message = '';
//     $scope.hasState = '';

//     // Expose example locations to $scope
//     $scope.currentLocation = currentLocation;
//     $scope.stormLocations = stormLocations;
//     $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

//     // On initialization load data for first example entry
//     $scope.forecast = openWeatherMap.queryForecastDaily({
//       location: exampleLocations[ 0 ]
//     });

//     // Get forecast data for location as given in $scope.location
//     $scope.getForecastByLocation = function() {

//       if ($scope.location == '' || $scope.location == undefined) {
//         $scope.hasState = 'has-warning';
//         $scope.message = 'Please provide a location';
//         return;
//       }

//       $scope.hasState = 'has-success';

//       $scope.forecast = openWeatherMap.queryForecastDaily({
//         location: $scope.location
//       });
//     };

//     // Set $scope.location and execute search on API
//     $scope.setLocation = function(loc) {
//       $scope.location = loc;
//       $scope.getForecastByLocation();
//     };

//     // Get icon image url
//     $scope.getIconImageUrl = function(iconName) {
//       return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
//     };

//   }])








// // // $http.get("http://ip-api.com/json").success(function(data) {

// //     var categories = [
// //           {"id": 1, "city": "Boston"},
// //           {"id": 2, "city": "New York"},
// //           {"id": 3, "city": "Seattle"},
// //           {"id": 4, "city": "Los Angeles"},
// //           {"id": 5, "city": "Miami"},
// //           {"id": 6, "city": "Fresno"},
// //           {"id": 7, "city": "Tracy"},
// //           {"id": 8, "city": "Portland"},
// //           {"id": 9, "city": "Norfolk"},
// //           {"id": 10, "city": "San Francisco"},
// //       ];


// //     var city = data.city;
// //       var cityCounting = 0;

// //     var counter = 0;

// //   $scope.clickCounter =function () {
// //     cityCounting = counter++;
// //     console.log(cityCounting);
// //     var apiKey = "d544ef9e2e6f8bd6a4b1d6325950b77e";
// //     var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + categories[cityCounting].city + ",us" + "&appid=" + apiKey;

// //     $http.get(openWeatherURL).success(function(data) {
      

// //     }); //closing OpenWeatherMap

// //     } //closing clickCounter
// //     console.log(cityCounting);
// //     if(cityCounting == 0){
// //       var apiKey = "d544ef9e2e6f8bd6a4b1d6325950b77e";
// //     var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us" + "&appid=" + apiKey;
// //     console.log("no im from city original here");
// //     }
// //     else{

// //       var apiKey = "d544ef9e2e6f8bd6a4b1d6325950b77e";
// //     var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityCounting + ",us" + "&appid=" + apiKey;
// //         console.log("no im from city counting");
// //     }







// //     };//getForecastByLocation


// //   }); //closing IP-API
// // }); //closing Controller