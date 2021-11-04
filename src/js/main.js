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
   const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
   const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
   let pictureWidth = vh * 0.657;
   let spillOver = (pictureWidth - vw) / 2;

   // $('.field-mobile .overlay .dot').each((index, element) => {
   //   $(element).css("transform",`translate(${spillOver}px)`);
   // });
   $( ".twitter" ).click(function() {
      $(this).closest( ".game" ).find('.tweet .twitter-tweet  iframe').toggleClass("show");
      $(this).closest( ".game" ).find('.tweet .loading').toggleClass("show");
      $(this).find('span').toggleClass("show");
    });





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
                  var unique_id = $(element).data("game");
                  console.log("hi" + unique_id);
                  if(direction === "down") {
                    $(".overlay").find(`[data-dot=${unique_id}]`).addClass( "show" );
                    // $(".overlay").find(`[data-dot=${unique_id}]`).css("opacity", "1");
                  }
                  else if (direction === "up") {
                    $(".overlay").find(`[data-dot=${unique_id}]`).removeClass( "show" );
                    // $(".overlay").find(`[data-dot=${unique_id}]`).css("background-color", "transparent");
                    // $(".overlay").find(`[data-dot=${unique_id}]`).css("opacity", "0.5");
                  }
                },
                offset: '80%'
            });

            new Waypoint({
                element: element,
                enabled: true,
                handler: function(direction) {
                  var unique_id2 = $(element).data("game");
                  console.log("hi" + unique_id2);
                  if(direction === "down") {
                    $(".overlay").find(`[data-dot=${unique_id2}]`).removeClass( "show" );
                  }
                  else if (direction === "up") {
                    $(".overlay").find(`[data-dot=${unique_id2}]`).addClass( "show" );
                  }
                },
                offset: '-30%'
            });


      });

  });
};


$( document ).ready(function() {
    makeGameWaypoints();
});

// console.log(games);
