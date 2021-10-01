// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");
require('waypoints/lib/noframework.waypoints.min');

// function domReady(fn) {
//   // If we're early to the party
//   document.addEventListener("DOMContentLoaded", fn);
//   // If late; I mean on time.
//   if (document.readyState === "interactive" || document.readyState === "complete" ) {
//     fn();
//   }
// }

var games = document.querySelectorAll(".text .game");

document.addEventListener("DOMContentLoaded", function() {
  
function makeGameWaypoints() {
  games.forEach(el => {

            new Waypoint({
                element: el,
                enabled: false,
                handler: function(direction) {
                  if(direction === "down") {

                  }
                  else if (direction === "up") {

                  }
                },
                offset: '80%'
            });

            new Waypoint({
                element: el,
                enabled: false,
                handler: function(direction) {
                  if(direction === "down") {
                  }
                  else if (direction === "up") {
                  }
                },
                offset: '-20%'
            });


  });
};


// console.log(games);

makeGameWaypoints();

});
