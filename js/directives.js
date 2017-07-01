'use strict';

/* Directives */

var app =angular.module('weatherApp.directives', [])


  //Directive that returns an element which adds buttons on click which show an alert on click
//Directive that returns an element which adds buttons on click which show an alert on click
app.directive('addbuttonsbutton', function(){
  return {
    restrict: "A",
    template: "<md-button addbuttons class='md-fab md-mini'>+</md-button>"

  }
});

//Directive for adding buttons on click that show an alert on click
app.directive('addbuttons', function($compile){
  return function(scope, element, attrs){
    element.bind("click", function(){
      scope.count++;
      angular.element(document.getElementById('space-for-buttons')).prepend($compile("<div class= panel ><h3 id=title>{{name | uppercase}}</h3><br><i ng-class=weatherClass id=icon></i><h3 id= temp >{{fTemp | uppercase}}</h3><p style= 'color: #FAFAFA;' >{{description | uppercase}}</p><p>{{location}}</p><br><div id= wrapper ><div id= first ><i id= smallIcons  class= 'wi wi-horizon-alt' ></i><p id= eventID >SUNRISE</p><p id= subID >{{formattedSunrise}}</p></div><div id= second ><i class=  'wi wi-strong-wind'  id= smallIcons ></i><p id= eventID >WIND</p><p id= subID >{{speed}}</p></div><div id= third ><i class=  'wi wi-humidity'  id= smallIcons ></i><p id= eventID >HUMIDITY</p><p id= subID >{{humidity}}</p></div></div> <!--End of Wrapper--></div> <!--End of Panel-->")(scope));
    });
  };
});

  //
  // Simple directive just setting version as elements value (kept from angular-seed dist)
  //
  


