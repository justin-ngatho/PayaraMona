// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

var clockElement = document.getElementById( "clock" );

//time
function updateClock ( clock ) {
    clock.innerHTML = new Date().toLocaleTimeString();
}


setInterval(function () {
    updateClock( clockElement );
}, 1000);


(function () {

  var clockElement = document.getElementById( "clock" );

  function updateClock ( clock ) {
    clock.innerHTML = new Date().toLocaleTimeString();
  }

  setInterval(function () {
      updateClock( clockElement );
  }, 1000);

}());

// -- Night mode --

	// var today = new Date().getHours();
	// if (today >= 8 && today <= 18) {
	// 	document.body.style.background = "#hsl(210, 36%, 96%)";
	// } else {
	// 	document.body.style.background = "#000000";
	// 	document.body.style.color = "#fff";
	// }

