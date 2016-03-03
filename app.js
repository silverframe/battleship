/*global $*/
var qn1;

var qn2;

var turn = "X";

var counter = 0;

var hits = 0;

var misses = 0;

var hits1 = 0;

var misses1 = 0;

var placedBoats = [];

var arrayShips = createShipsArray();

// var fourtyfiveSeconds = 5;

display = document.querySelector('#countdownTimer');

$(function() {
  'use strict';
  createGrid();
  newShips();
  newShips1();
  getNames();
  awesome();


})

function getNames() {

  var qn1 = prompt("Please enter your name", "Player 1");
  var qn2 = prompt("Please enter your name", "Player 2");

  if (qn1 !== null && qn2 !== null) {
    // console.log($('#player1'));
    $("#player1").text(qn1 + "'s Board");
    $("#player1Name").text(qn1);
    $("#player1Hits").text("Hits: "+ hits);
    $("#player1Misses").text("Misses: "+ misses);
    $("#player2").text(qn2 + "'s Board");
    $("#player2Name").text(qn2);
    $("#player2Hits").text("Hits: "+ hits1);
    $("#player2Misses").text("Misses: "+ misses1);
  };

}

function rotate() {
  $('#rotate-button').click(function() {
    $(this).toggleClass('hover-ship');
    for (var i = 0; i < add; i++) {
      var query = '.square[data-x="' + ((Number(dataX)) + (i + 1)) + '"]' + '[data-y="' + dataY + '"]';
      var $cell = $(query);
      $cell.toggleClass('hover-ship');
    }
  })
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
    console.log($cell);
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
    console.log($cell);
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


// function placeShip() {
//   $('.cell').on('click', function() {
//     var x = Number($(this).attr('data-x'));
//     var y = Number($(this).attr('data-y'));
//     arrayShips[x][y] = true;
//     console.log(arrayShips[x][y]);
//   })
// }

function startTimer(duration, display) {
  var timer = duration;
  var seconds;
  var intervalId = window.setInterval(function() {
    seconds = parseInt(timer % 60, 10);

    display.textContent = seconds;

    if (--timer < 0) {
      window.clearInterval(intervalId)
      timer = 5;
      alert("Time's up!");

      console.log(turn);
      awesome();

    }
  }, 1000)
};

function awesome() {
  if (counter === 2) {
    alert("Game over!" + qn1 +"has a score of " + hits + " and " +qn2+ " has a score of " + hits1);
    window.location.reload();
  }
  if (turn === "X") {
    alert("Player 1, are you ready?");
    startTimer(fourtyfiveSeconds, display);
    changeColor(".cell", "#hitScore", "#missScore", hits, misses);
    counter++;
    turn = "Y";

  } else if (turn === "Y") {
    alert("Player 2, are you ready?")
    startTimer(fourtyfiveSeconds, display);
    changeColor(".square", "#hitScore1", "#missScore1", hits1, misses1);
    counter++;
    turn = " ";
  }
}

//
// function myBoats(boats) {
//   var add = 0;
//   var allBoats = ["patrolboat", "submarine", "carrier", "destroyer", "battleship"]
//   if (boats == "carrier") {
//     add = 4;
//   } else if (boats == "battleship") {
//     add = 3;
//   } else if (boats == "destroyer") {
//     add = 2;
//   } else if (boats == "submarine") {
//     add = 2;
//   } else if (boats == "patrolboat") {
//     add = 1;
//   }
//
//   $("#" + boats).on('click', function() {
//
//     $(".square").hover(function(event) {
//       var dataX = event.delegateTarget.dataset.x;
//       var dataY = event.delegateTarget.dataset.y;
//       $(this).toggleClass('hover-ship');
//       for (var i = 0; i < add; i++) {
//         var query = '.square[data-x="' + dataX + '"]' + '[data-y="' + ((Number(dataY)) + (i + 1)) + '"]';
//         var $cell = $(query);
//         $cell.toggleClass('hover-ship');
//
//       };

      // $("#rotate-button").click(function() {
      // 	$(this).toggleClass('hover-ship');
      // 	for (var i = 0; i < add; i++) {
      // 		var query = '.square[data-x="' + ((Number(dataX)) + (i + 1)) + '"]' + '[data-y="' + dataY + '"]';
      // 		var $cell = $(query);
      // 		$cell.toggleClass('hover-ship'); }
      // 	});

//
//       $(this).on('click', function() {
//         $(this).addClass('place-ship');
//         var x = Number($(this).attr('data-x'));
//         var y = Number($(this).attr('data-y'));
//         arrayShips[x][y] = true;
//         for (var i = 0; i < add; i++) {
//           var query = '.square[data-x="' + dataX + '"]' + '[data-y="' + ((Number(dataY)) + (i + 1)) + '"]';
//           var $cell = $(query);
//           var x = Number($cell.attr('data-x'));
//           var y = Number($cell.attr('data-y'));
//           arrayShips[x][y] = true;
//           $cell.addClass('place-ship');
//           // console.log(arrayShips);
//         }
//
//       })
//     })
//
//     $(".cell").hover(function(event) {
//       // $(this)
//       var dataX = event.delegateTarget.dataset.x;
//       var dataY = event.delegateTarget.dataset.y;
//       $(this).toggleClass('hover-ship');
//       for (var i = 0; i < add; i++) {
//         var query = '.cell[data-x="' + dataX + '"]' + '[data-y="' + ((Number(dataY)) + (i + 1)) + '"]';
//         var $cell = $(query);
//         $cell.toggleClass('hover-ship');
//       }
//
//       $(this).on('click', function() {
//         $(this).addClass('place-ship');
//         var x = Number($(this).attr('data-x'));
//         var y = Number($(this).attr('data-y'));
//         arrayShips[x][y] = true;
//         for (var i = 0; i < add; i++) {
//           var query = '.cell[data-x="' + dataX + '"]' + '[data-y="' + ((Number(dataY)) + (i + 1)) + '"]';
//           var $cell = $(query);
//           var x = Number($cell.attr('data-x'));
//           var y = Number($cell.attr('data-y'));
//           arrayShips[x][y] = true;
//           $cell.addClass('place-ship');
//           // console.log(arrayShips);
//
//         }
//       })
//     })
//   })
// }
