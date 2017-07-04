'use strict';

/* Services */

var app =angular.module('weatherApp.services', [])


 app.factory('Data', function($http, $q) {

    var data = [],
       lastRequestFailed = true,
       promise;
   return {
      getApps: function(city) {
         if(!promise || lastRequestFailed) {
            // $http returns a promise, so we don't need to create one with $q

            promise = $http.get('http://api.openweathermap.org/data/2.5/weather?',{
              params: {
                q: city,
                appid: 'd544ef9e2e6f8bd6a4b1d6325950b77e'
              }
            })
            .then(function(res) {
                lastRequestFailed = false;
                data = res.data;
                promise = false; // reset the promise value.
                return data;
            }, function(res) {
                return $q.reject(res);
            });
         }
         return promise;
      }
   }
});

 app.factory('Geolocation', function($http, $q) {

    var data = [],
       lastRequestFailed = true,
       promise;
   return {
      getLocation: function(lat, lon) {
         if(!promise || lastRequestFailed) {
            // $http returns a promise, so we don't need to create one with $q
            console.log("before error");
            console.log
            promise = $http.get('http://api.openweathermap.org/data/2.5/weather',{
              params: {
                lat: lat,
                lon: lon,
                appid: 'd544ef9e2e6f8bd6a4b1d6325950b77e'
              }
            })
            .then(function(res) {
                lastRequestFailed = false;
                data = res.data;
                promise = false; // reset the promise value.
                return data;
            }, function(res) {
                return $q.reject(res);
            });
         }
         return promise;
      }
   }
});
        