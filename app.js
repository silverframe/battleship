var CONST = {};
CONST.AVAILABLE_SHIPS = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolboat'];

var carrier = 5;
var battleship =4;
var destroyer = 3;
var submarine = 3;
var patrolboat = 2;



$(function()
{

	$("#patrolboat").on('click', function (){

			$(".square").hover(function(event) {
				console.log(event.delegateTarget.dataset.x)
				console.log(event.delegateTarget.dataset.y)
				var dataX = event.delegateTarget.dataset.x;
				var dataY = event.delegateTarget.dataset.y;
				var query = '.square[data-x="' + dataX + '"]' + '[data-y="' + (Number(dataY) + 1) + '"]'
				var next = '.square[data-x="' + dataX + '"]' + '[data-y="' + (Number(dataY) + 1) + '"]'
				var $cell = $(query)
				$cell.toggleClass('place-ship')
					// $("this").css('backgroundColor', '#B22222');
					// $("this" + [i]).css('backgroundColor', '#B22222');
			})

	})

	console.log($('.square'));
	createGrid();
	getNames();

var arrayShips = createShipsArray();

	$('.square').on('click',function()
	{
		var x = $(this).attr("data-x");
		var y = $(this).attr("data-y");
		arrayShips[x][y] = true;
		console.log(arrayShips);

	})
});
// var arrayShips = [[]];
function createShipsArray(){
	var outerArray = [];

for (var i = 0; i < 10 ; i++) {
  var innerArray = []
  for (var j = 0; j < 10; j++) {
    innerArray.push(false);
  }
  outerArray.push(innerArray)
}
return outerArray;
}


// console.log(outerArray)

function getNames() {

var qn1 = prompt("Please enter your name", "Player 1");
var qn2 = prompt("Please enter your name", "Player 2");

if (qn1!== null && qn2!== null) {
	console.log($('#player1'));
    $("#player1").text(qn1 + "'s Board");
		$("#enemyHitsHeader").text(qn1 +"'s Hits");
		$("#enemyMissesHeader").text(qn1 +"'s Misses");
		$("#player2").text(qn2 + "'s Board");
		$("#hitsHeader").text(qn2 +"'s Hits");
		$("#missedHitsHeader").text(qn2 +"'s Misses");
    console.log("welcome " +qn1);

}

changeColor ();
};


function changeColor()
{
	$(".square").click(function()
	{
	  $(this).addClass('X').text("X");
	  $(this).css('backgroundColor', '#B22222');
	});
}

// var
// var arrayShips = [[0,1,2,3,4,5,6,7,8,9],
// 									[true,true,true,3,4,5,6,7,8,9]];
// arrayShips[1][0] = true;
$('.squares').on('click',function()
{
	var x = $(this).data-x;
	var y = $(this).data-y;
	arrayShips[x][y] = true;
	console.log(x);
	console.log(y);
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
	var numberGrid = $('.square');
console.log(numberGrid);
	var count = 0;
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < 10; j++) {
				// console.log(numberGrid[grid1]);

				numberGrid[count].setAttribute('data-x', i);
				numberGrid[count].setAttribute('data-y', j);
				// $(".square").setAttribute('class', 'grid-cell grid-cell-' + i + '-' + j);

				count++;

			}
		}

	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			// console.log(numberGrid[grid1]);

			numberGrid[count].setAttribute('data-x', i);
			numberGrid[count].setAttribute('data-y', j);
			// $(".square").setAttribute('class', 'grid-cell grid-cell-' + i + '-' + j);

			count++;

			}
		}
};

var CONST = {};
CONST.AVAILABLE_SHIPS = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolboat'];

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var tenSeconds = 10,
        display = document.querySelector('#countdownTimer');
    startTimer(tenSeconds, display);
};
