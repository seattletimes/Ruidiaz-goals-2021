// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");
const $ = require('jquery');
require('waypoints/lib/noframework.waypoints.min');

// function domReady(fn) {
//   // If we're early to the party
//   document.addEventListener("DOMContentLoaded", fn);
//   // If late; I mean on time.
//   if (document.readyState === "interactive" || document.readyState === "complete" ) {
//     fn();
//   }
// }

// var games = document.querySelectorAll(".text .game");
var version;

if ($(window).width() < 500) {
   version = 'mobile';
}
else {
   version = 'desktop';
}




function makeGameWaypoints() {
  $('.text .game').each((index, element) => {
    $(element).ready(function() {
      console.log("im running");

            new Waypoint({
                element: element,
                enabled: true,
                handler: function(direction) {
                  if(direction === "down") {
                    console.log("hi" + element);
                    var unique_id = $(element).data("game");
                    $(".overlay").find(`[data-dot=${unique_id}]`).css("background-color", "yellow");
                  }
                  else if (direction === "up") {
                    var unique_id = $(element).data("game");
                    $(".overlay").find(`[data-dot=${unique_id}]`).css("background-color", "white");
                  }
                },
                offset: '80%'
            });

            new Waypoint({
                element: element,
                enabled: true,
                handler: function(direction) {
                  if(direction === "down") {
                    var unique_id = $(element).data("game");
                    $(".overlay").find(`[data-dot=${unique_id}]`).css("background-color", "white");
                  }
                  else if (direction === "up") {
                    var unique_id = $(element).data("game");
                    $(".overlay").find(`[data-dot=${unique_id}]`).css("background-color", "yellow");
                  }
                },
                offset: '-20%'
            });


      });

  });
};


$( document ).ready(function() {
    makeGameWaypoints();
});

// console.log(games);
