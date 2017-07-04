'use strict';


var app = angular.module('weatherApp.controllers', [])


app.controller('weatherCtrl', ['$scope', 'Data',

		function($scope, Data) {
			$scope.count = -1;
			$scope.city = 'Davis';
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

