/*global $*/
var qn1 = null;

var qn2 = null;

var turn = "X";

var counter = 0;

var hits = 0;

var misses = 0;

var hits1 = 0;

var misses1 = 0;

var accurate = hits/(hits+misses);

var accurate1 = hits1/(hits1+misses1);

var sayings = ["Loose Cannon", "Plain Sailing", "Know the Ropes", "Tide Over", "High and Dry", "Get Underway",
"Anchors Aweigh", "All at Sea", "Panic Stations", "Push the Boat Out"];

var arrayShips = createShipsArray();

var fourtyfiveSeconds = 20;


display = document.querySelector('#countdownTimer');

$(function() {
  'use strict';
  createGrid();
  newShips();
  newShips1();
  $("#playSign").click(getNames);
  var i = Math.floor((Math.random() * 10));
  $('#message').text(sayings[i]);


})

function getNames() {
// document.getElementById('playSign')
  qn1 = prompt("Please enter your name", "Player 1");
  qn2 = prompt("Please enter your name", "Player 2");

  if (qn1 !== null && qn2 !== null) {
    // console.log($('#player1'));
    $("#player1").text(qn1 + "'s Sea");
    $("#player1Name").text(qn1);
    $("#player1Hits").text("Hits: "+ hits);
    $("#player1Misses").text("Misses: "+ misses);
    $("#player2").text(qn2 + "'s Sea");
    $("#player2Name").text(qn2);
    $("#player2Hits").text("Hits: "+ hits1);
    $("#player2Misses").text("Misses: "+ misses1);
    awesome(qn1);
  };

}

function createGrid() {
  var numberGrid1 = $('.cell');
  var numberGrid2 = $('.square');
  var count = 0;
  var count1 = 0;

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      numberGrid1[count].setAttribute('data-x', i);
      numberGrid1[count].setAttribute('data-y', j);
      count++;

    }
  }

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      numberGrid2[count1].setAttribute('data-x', i);
      numberGrid2[count1].setAttribute('data-y', j);
      count1++;

    }
  }
}

function createShipsArray() {
  var outerArray = [];
  for (var i = 0; i < 10; i++) {
    var innerArray = []
    for (var j = 0; j < 10; j++) {
      innerArray.push(false);
    }
    outerArray.push(innerArray)
  }
  return outerArray;
}

function newShips() {
  for (var i = 0; i < 21; i++) {
    var newNumber = Math.floor((Math.random() * 10));
    var newNumber1 = Math.floor((Math.random() * 10));
    var query = '.square[data-x="' + newNumber + '"]' + '[data-y="' + newNumber1 + '"]';
    var $cell = $(query);
    var x = Number($cell.attr('data-x'));
    var y = Number($cell.attr('data-y'));
    arrayShips[x][y] = true;
    // console.log($cell);
  }
}

function newShips1() {
  for (var i = 0; i < 21; i++) {
    var newNumber = Math.floor((Math.random() * 10));
    var newNumber1 = Math.floor((Math.random() * 10));
    var query = '.cell[data-x="' + newNumber + '"]' + '[data-y="' + newNumber1 + '"]';
    var $cell = $(query);
    var x = Number($cell.attr('data-x'));
    var y = Number($cell.attr('data-y'));
    arrayShips[x][y] = true;
    // console.log($cell);
  }
}

function changeColor(className, idHits, idMiss, hitCounter, missCounter) {
  $(className).click(function() {
    var x = Number($(this).attr('data-x'));
    var y = Number($(this).attr('data-y'));
    if ($(this).text() === '') {
      if (arrayShips[x][y] == true) {
        $(this).addClass('fire');
        $(this).text('X');
        hitCounter++;
        if (className == '.cell') {
          hits++;
        } else {
          hits1++;
        }
        $(idHits).text("Hits: "+hitCounter);

      } else if (arrayShips[x][y] == false) {
        $(this).addClass('missed');
        $(this).text('X');
        missCounter++;
        $(idMiss).text("Misses: "+missCounter);
      }
    }
  });
}

function startTimer(duration, display) {
  var timer = duration;
  var seconds;
  var intervalId = window.setInterval(function() {
    seconds = parseInt(timer % 60, 10);

    display.textContent = seconds;

    if (--timer < 0) {
      window.clearInterval(intervalId)
      timer = 20;
      alert("Time's up!");

      console.log(turn);
      console.log(accurate);
      awesome();

    }
  }, 1000)
};

function awesome(qn1) {
  if (counter === 2) {
    alert("Game over! Player 1 has a score of " + hits + " and Player 2 has a score of " + hits1);
    if (hits > hits1) {
    alert("Player 1 Wins!")
  } else if (hits < hits1) {
    alert("Player 2 Wins!")
  } else if (hits == hits1) {
    alert ("It's a draw, please try again!")
  }
console.log(qn1);
    window.location.reload();
  }
  if (turn === "X") {
    alert("Player 1, you have 20s to sink as many ships as you can.");
    var i = Math.floor((Math.random() * 10));
    $('#message').text(sayings[i]);
    startTimer(fourtyfiveSeconds, display);
    changeColor(".cell", "#hitScore", "#missScore", hits, misses);
    counter++;
    turn = "Y";

  } else if (turn === "Y") {
    alert("Player 2, it's your turn now!")
    var i = Math.floor((Math.random() * 10));
    $('#message').text(sayings[i])
    startTimer(fourtyfiveSeconds, display);
    changeColor(".square", "#hitScore1", "#missScore1", hits1, misses1);
    counter++;
    turn = " ";
  }
}
