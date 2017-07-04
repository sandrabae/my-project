'use strict';

/* Directives */

var app =angular.module('weatherApp.directives', [])

//Directive for adding an attribute to the button
app.directive('addbuttonsbutton', function(){
  return {
    restrict: "A",
    template: "<md-button addbuttons ng-click='clickCounter()' class='md-fab md-mini'>+</md-button>"

  }
});

//Directive for adding buttons on click that show an alert on click
app.directive('addbuttons', function($compile){
    return function(scope, element, attrs){
    element.bind("click", function(){
      scope.count++;
      var counter = scope.count;
      console.log('this is scope count' + scope.count);
      angular.element(document.getElementById('space-for-buttons')).prepend($compile(
        "<div class= panel>"+
          "<h3 id=title>{{name" + scope.count + "| uppercase}}</h3><br>" +
          "<i ng-class=weatherClass" + scope.count + " id=icon></i>" +
          "<h3 id= temp >{{fTemp" + scope.count + " | uppercase}}</h3>" +
          "<p style= 'color: #FAFAFA;' >{{description" + scope.count + "| uppercase}}</p>"+
          "<p>{{location}}</p><br>"+
        "<div id= wrapper ><div id= first ><i id= smallIcons  class= 'wi wi-horizon-alt' ></i>" +
          "<p id= eventID >SUNRISE</p><p id= subID >{{formattedSunrise" + scope.count + "}}</p></div>"+
        "<div id= second ><i class=  'wi wi-strong-wind'  id= smallIcons ></i>"+
          "<p id= eventID >WIND</p><p id= subID >{{speed" + scope.count + "}}</p></div>"+
        "<div id= third ><i class=  'wi wi-humidity'  id= smallIcons ></i>"+
          "<p id= eventID >HUMIDITY</p><p id= subID >{{humidity" + scope.count + "}}</p></div></div></div>")(scope));
    });
  };
});

  