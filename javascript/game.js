$(document).ready(function() {
    // Have numbers to randomly generate 19 - 120
    var numbers = [];
    var counter = 0;
    // counter for game
    for (var i = 19; i < 121; i++) {
        numbers.push(i);
    }
    var counter;
    var wins = 0;
    var loses = 0;
    var crystalNumber1;
    var crystalNumber2;
    var crystalNumber3;
    var crystalNumber4;
    var randomNumber;
    restartGame();

    $('#c_btn1').click(function() {
        // console.log("crystal1", crystalNumber1);
        counter += crystalNumber1;
        $('#scoreTracker').text(('Your score: ' + counter + '!'));
        gameStatus();

    });

    $('#c_btn2').click(function() {
        // console.log("crystal2", crystalNumber2)
        counter += crystalNumber2;
        $('#scoreTracker').text(('Your score: ' + counter + '!'));
        gameStatus();

    });

    $('#c_btn3').click(function() {
        // console.log("crystal3", crystalNumber3);
        counter = counter + crystalNumber3;
        $('#scoreTracker').text(('Your score: ' + counter + '!'));
        gameStatus();

    });

    $('#c_btn4').click(function() {
        // console.log("crystal4", crystalNumber4);
        counter = counter + crystalNumber4;
        $('#scoreTracker').text(('Your score: ' + counter + '!'));
        gameStatus();

    });

    function gameStatus() {
        // console.log(counter, "gameStatus");
        if (counter === randomNumber) {
            // console.log("win");
            wins++;
            $('#wins').text('Wins: ' + wins)
            restartGame();
        } else if (counter > randomNumber) {
            // console.log("lose");
            loses++;
            $('#loses').text('Losses: ' + loses)
            restartGame();
        }
    };
    function restartGame() {
        counter = 0;
        randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        // console.log(randomNumber);
        // Display numbers in randomNumber div
        $("#randomNumber").html(randomNumber);
        // Have numbers 1-12 randomly generated onto crystal-btn
        var c_btn1 = [1, 2, 3];
        crystalNumber1 = c_btn1[Math.floor(Math.random() * c_btn1.length)];
        // applies value to crystalbutton1
        $('#c_btn1').data(("crystal-value-1"), crystalNumber1);
        // console.log(crystalNumber1);

        var c_btn2 = [4, 5, 6];
        crystalNumber2 = c_btn2[Math.floor(Math.random() * c_btn2.length)];
        // applies value to crystalbutton2
        $('#c_btn2').data(("crystal-value-2"), crystalNumber2);
        // console.log(crystalNumber2);

        var c_btn3 = [7, 8, 9];
        crystalNumber3 = c_btn3[Math.floor(Math.random() * c_btn3.length)];
        // applies value to crystalbutton3
        $('#c_btn3').data(("crystal-value-3"), crystalNumber3);
        // console.log(crystalNumber3);

        var c_btn4 = [10, 11, 12];
        crystalNumber4 = c_btn4[Math.floor(Math.random() * c_btn3.length)];
        // applies value to crystalbutton4
        $('#c_btn4').data(("crystal-value-4"), crystalNumber4);
        // console.log(crystalNumber4);

    };
});