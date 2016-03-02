/*global $*/
$(function () {
    'use strict';
		getNames();
		createGrid();
    myBoats("carrier");
	  myBoats("battleship");
    myBoats("destroyer");
	  myBoats("submarine");
	  myBoats("patrolboat");

	function myBoats(boats) {
		var add = 0;
		if (boats == "carrier") {
			add = 4;
		} else if (boats == "battleship") {
			add = 3;
		} else if (boats == "destroyer") {
			add = 2;
		} else if (boats == "submarine") {
			add = 2;
		} else if (boats == "patrolboat") {
			add = 1;
		}
		$("#" + boats).on('click', function() {

			$(".square").hover(function (event) {
			  var dataX = event.delegateTarget.dataset.x;
				var dataY = event.delegateTarget.dataset.y;
				$(this).toggleClass('hover-ship');
				for (var i = 0; i < add; i++) {
					var query = '.square[data-x="' + dataX + '"]' + '[data-y="' + ((Number(dataY)) + (i + 1)) + '"]';
					var $cell = $(query);
					$cell.toggleClass('hover-ship');

				};
				$(this).on('click', function() {
					$(this).addClass('place-ship');
					for (var i = 0; i < add; i++) {
						var query = '.square[data-x="' + dataX + '"]' + '[data-y="' + ((Number(dataY)) + (i + 1)) + '"]';
						var $cell = $(query);
						$cell.addClass('place-ship');
					}
				})
})

			$(".cell").hover(function(event) {
				// console.log(event.delegateTarget.dataset.x);
				// console.log(event.delegateTarget.dataset.y);
				var dataX = event.delegateTarget.dataset.x;
				var dataY = event.delegateTarget.dataset.y;
				$(this).toggleClass('hover-ship');
				for (var i = 0; i < add; i++) {
					var query = '.cell[data-x="' + dataX + '"]' + '[data-y="' + ((Number(dataY)) + (i + 1)) + '"]';
					// var next = '.cell[data-x="' + dataX + '"]' + '[data-y="' + (Number(dataY) + add) + '"]';
					var $cell = $(query);
					$cell.toggleClass('hover-ship');
				}

				$(this).on('click', function() {
					$(this).addClass('place-ship');
					for (var i = 0; i < add; i++) {
						var query = '.cell[data-x="' + dataX + '"]' + '[data-y="' + ((Number(dataY)) + (i + 1)) + '"]';
						var $cell = $(query);
						$cell.addClass('place-ship');
					}
				})
			})
		})
}})





		var arrayShips = createShipsArray();

		$('.square').on('click', function() {
			var x = $(this).attr("data-x");
			var y = $(this).attr("data-y");
			arrayShips[x][y] = true;
			// console.log(arrayShips);

		});

		// var arrayShips = [[]];
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


		function getNames() {

			var qn1 = prompt("Please enter your name", "Player 1");
			var qn2 = prompt("Please enter your name", "Player 2");

			if (qn1 !== null && qn2 !== null) {
				console.log($('#player1'));
				$("#player1").text(qn1 + "'s Board");
				$("#enemyHitsHeader").text(qn1 + "'s Hits");
				$("#enemyMissesHeader").text(qn1 + "'s Misses");
				$("#player2").text(qn2 + "'s Board");
				$("#hitsHeader").text(qn2 + "'s Hits");
				$("#missedHitsHeader").text(qn2 + "'s Misses");
				// console.log("welcome " + qn1);

			}

			// changeColor ();
		}


		function changeColor() {
			$(".square").click(function() {
				$(this).text("X");
				$(this).addClass('fire');
			});
		}

		$('.squares').on('click', function() {
			var x = $(this).data - x;
			var y = $(this).data - y;
			arrayShips[x][y] = true;
			// console.log(x);
			// console.log(y);
		})
		// console.log(outerArray)
		//
		// for (var i = 0; i < 10 ; i++) {
		//   var innerArray = []
		//   for (var j = 0; j < 10; j++) {
		//     innerArray.push(0)
		//   }
		//   outerArray.push(innerArray)
		// }

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

	// function startTimer(duration, display) {
	//     var timer = duration, seconds;
	//     setInterval(function () {
	//         seconds = parseInt(timer % 60, 10);
	//         seconds = seconds < 10 ? "0" + seconds : seconds;
	//
	//         display.textContent = seconds;
	//
	//         if (--timer < 0) {
	//             timer = duration;
	//         }
	//     }, 1000)
	// } ;
	//
	// window.onload = function () {
	//     var tenSeconds = 10,
	//         display = document.querySelector('#countdownTimer');
	//     startTimer(tenSeconds, display);
	// } ;
