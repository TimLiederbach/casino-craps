eslint-env jquery
$(document).ready(function() {

let pointNumberValue = null;

let pointEstablished = false;

let chipDenomination = setDenom;

let diceValue = null;

const playerName = $('#form input[name=username]').val();

let playerOneBalance = $('#form input[amount=balance]').val();

class Player {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance
    this.pass = 0;
    this.dontPass = 0;
    this.passOdds = 0;
    this.dontPassOdds = 0;
    this.fourBuy = 0;
    this.fourLay = 0;
    this.fiveBuy = 0;
    this.fiveLay = 0;
    this.sixBuy = 0;
    this.sixLay = 0;
    this.eightBuy = 0;
    this.eightLay = 0;
    this.nineBuy = 0;
    this.nineLay = 0;
    this.tenBuy = 0;
    this.tenLay = 0;
  }
  // drive() {
  //   this.fuel--;
  //   return 'Vroom!';
  // }
  // refuel() {
  //   this.fuel = 100;
  // }
}

const setDenom = function (e) {
  return $(parseInt(this.text()));
}

$('#addHome').on('click', function() {
    console.log(this);
});

const chipsHighlight = $('.chips').on('mouseover', function () {
  $(this).css('border', '2px orange')
  });

const chipsEvent = $('.chips').on('click', changeDenom);

const readyPlayerOne = (Player(playerName, playerOneBalance));

$(".guidance").modal("show").on("shown", function () {
    window.setTimeout(function () {
        $(".guidance").modal("hide");
    }, 3000);

const gamePlay = function() {
  if (diceValue = 7||11) {
    readyPlayerOne.pass *= 2;
  }


});
}









});
