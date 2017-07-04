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
            // $http returns ['weatherClass' + cityCounting] promise, so we don'['weatherClass' + cityCounting] need to create one with $q

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
        