$(document).ready(function() {
// Have numbers to randomly generate 19 - 120
var numbers = [];
// counter for game

// for loop creates numbers 19-120 and pushes to numbers array
for (var i = 19; i < 121; i++) {
	numbers.push(i);
}
var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
// console.log(randomNumber);
// Display numbers in randomNumber div
$("#randomNumber").append(randomNumber);

function game (event) {
	var counter = 0;
// Have numbers 1-12 randomly generated onto crystal-btn
var c_btn1 = [1, 2, 3,];
var crystalNumber1 = c_btn1[Math.floor(Math.random() * c_btn1.length)];
console.log(crystalNumber1);
var c_btn2 = [4, 5, 6,];
var crystalNumber2 = c_btn2[Math.floor(Math.random() * c_btn2.length)];
console.log(crystalNumber2);
var c_btn3 = [7, 8, 9,];
var crystalNumber3 = c_btn3[Math.floor(Math.random() * c_btn3.length)];
console.log(crystalNumber3);
var c_btn4 = [10, 11, 12,];
var crystalNumber4 = c_btn4[Math.floor(Math.random() * c_btn3.length)];
console.log(crystalNumber4);

// applies value to crystalbutton1
$('#c_btn1').data(("crystal-value-1"), crystalNumber1);
// The buttons need to activate on click
crystalNumber1 = parseInt(crystalNumber1);
$('#c_btn1').on("click", function() {
    console.log($(this).data("crystal-value-1"));
    counter += crystalNumber1;
    // console.log(counter);
});
counter += crystalNumber1;
// applies value to crystalbutton2
$('#c_btn2').data(("crystal-value-2"), crystalNumber2);
// The buttons need to activate on click
crystalNumber2 = parseInt(crystalNumber2);
$('#c_btn2').on("click", function() {
    console.log($(this).data("crystal-value-2"));
    counter += crystalNumber2;
    // console.log(counter);	
});


// applies value to crystalbutton3
$('#c_btn3').data(("crystal-value-3"), crystalNumber3);
// The buttons need to activate on click
crystalNumber3 = parseInt(crystalNumber3);
$('#c_btn3').on("click", function() {
    console.log($(this).data("crystal-value-3"));
    counter += crystalNumber3;
    // console.log(counter);
});

// // applies value to crystalbutton4
$('#c_btn4').data(("crystal-value-4"), crystalNumber4);
// The buttons need to activate on click
crystalNumber4 = parseInt(crystalNumber4);
$('#c_btn4').on("click", function() {
    console.log($(this).data("crystal-value-4"));
    counter += crystalNumber4;
    // console.log(counter);
});
};
game();

// example from class:
// 	// applies value to crystalbutton
// $('#c_btn2').data("crystal-value", crystalNumber2);
// // The buttons need to activate on click
// $('button').on("click", function(){
// 	console.log($(this).data("crystal-value"));
// });

// Display crystal value to scoreTracker


// values must add up to randomNumber


// If scoreTracker = randomNumber user wins


// else user loses


// tally wins and losses in gameStatus div


  });