//eslint-env jquery
$(document).ready(function() {

//The player object constructor to house name, balance, bets, and winning/losing calculations
class Player {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.pass = 0;
    this.dontPass = 0;
  }
  winPass () {
    this.balance += this.pass *= 2;
    $('.balance-display').text(this.balance);
    $('.bet-display').text(0);
    this.pass = 0;
  }
  losePass () {
    this.pass = 0;
    $('.bet-display').text(0);
  }
  winDontPass () {
    this.balance += this.dontPass *= 2;
    $('.balance-display').text(this.balance);
    $('.bet-display').text(0);
    this.dontPass = 0;
  }
  loseDontPass () {
    this.dontPass = 0;
    $('.bet-display').text(0);
  }
}

let name = undefined;
let balance = undefined;
let readyPlayerOne = undefined;

//set eventListener to submit player details and exit landing page
const submitPlayerDetails = $('.submit').on('click', function(e) {
    e.preventDefault();
    name = $('.name').val();
    console.log(name);
    balance =$('input[name=balance]:checked').val();
    console.log(balance);
    if (name !== undefined && balance !== undefined) {
    readyPlayerOne = new Player(name, balance);
    $('.name-display').text(name);
    $('.balance-display').text(balance);
    $('.modal').css('display', 'none')
  } else {
    alert('Please type a name and pick a starting amount!')
  }
});


// const playerName = $('.name input[name=username]').val();
// console.log(playername);

// let playerOneBalance = $('.balance input[name="balance"]:checked').val();
// console.log(playerOneBalance)


//const readyPlayerOne = new Player(playerName, playerOneBalance);

//These three variables track where in the game a player is at each roll.

//pointNumberValue tracks what number the point(Craps term) is set, either (4,5,6,8,9,or 10)
let pointNumberValue = undefined;

//pointEstablished tracks whether a point has been set or nah
let pointEstablished = false;

//liveBets tracks whether a bet has been placed on the table. A bet must exist before a roll is allowed.
let liveBets = true;

//These three variables add a highlight feature when scrolling over the three possible chip denominations, and the ability to select one.
const chipsHighlight = $('.chip').on('mouseover', function () {
  $(this).addClass('highlight')
  });

const chipsUnHighlight = $('.chip').on('mouseleave', function () {
  $(this).removeClass('highlight')
  });

let chipValue =  $('.chip').on('click', function() {
   $(this).addClass('selected')
   $(this).siblings().removeClass('selected')
   return $(this).text();
});


//These next four constants highlight the areas where you can place a bet.
const passHighlight = $('.pass').on('mouseover', function () {
  $(this).addClass('highlight')
  });

const passUnHighlight = $('.pass').on('mouseleave', function () {
  $(this).removeClass('highlight')
  });

const dontpassHighlight = $('.dont-pass').on('mouseover', function () {
  $(this).addClass('highlight')
  });

const dontpassUnHighlight = $('.dont-pass').on('mouseleave', function () {
  $(this).removeClass('highlight')
  });

//Displays chips on 'Pass' bets and passes the bet value to readyPlayerOne object.
const passBet = $('.pass').on('click', function () {
  let betValue = parseInt($(".selected").text(), 10);
    if (betValue<=readyPlayerOne.balance) {
      $( ".selected" ).clone().appendTo(this);
      $(this).children().removeClass('highlight');
      $(this).children().removeClass('selected');
      let currentBet = readyPlayerOne.pass += betValue;
      let currentBalance = readyPlayerOne.balance -= betValue;
      $('.balance-display').text(currentBalance);
      $('.bet-display').text(currentBet);
      console.log(readyPlayerOne.pass);
      console.log(readyPlayerOne.balance);
    } else {
      alert('You do not have enough in your balance. Please place a lower bet');
    }
  });

//Displays chips on 'Dont Pass' options and passes the bet value to readyPlayerOne object.
const dontPassBet = $('.dont-pass').on('click', function () {
  let betValue = parseInt($(".selected").text(), 10);
    if (betValue<=readyPlayerOne.balance) {
      $( ".selected" ).clone().appendTo(this);
      $(this).children().removeClass('highlight');
      $(this).children().removeClass('selected');
      let currentBet = readyPlayerOne.dontPass += betValue;
      let currentBalance = readyPlayerOne.balance -= betValue;
      $('.balance-display').text(currentBalance);
      $('.bet-display').text(currentBet);
      console.log(readyPlayerOne.dontPass);
      console.log(readyPlayerOne.balance);
    } else {
      alert('You do not have enough in your balance. Please place a lower bet');
    }
  });

//Adds eventListener and function to allow a player to rolla the dice
const clickDice = $('.diceBtn').on('click', rollDice);

//Setting global varible to keep track of dice value
let diceTotal = undefined;

//Function to generate random numbers to simulate dice roll
function rollDice () {
  if (liveBets === true) {
  let d1 = Math.floor(Math.random() * 6) + 1;
  let d2 = Math.floor(Math.random() * 6) + 1;
  diceTotal = d1 + d2;
  $(".die1").text(`${d1}`);
  $(".die2").text(`${d2}`);
  $("h3").text(`You rolled a ${diceTotal}.`)
  //runs gamePlay function after every roll
  gamePlay ();
  }  else {
    alert('Please place a bet before you roll!');
  }
}

//Function to control game flow and logic, invoked after every dice roll.
const gamePlay = function() {
  if (pointEstablished === false) {
    console.log('working-nopoint');
      if (diceTotal === 7 || diceTotal === 11) {
        readyPlayerOne.winPass();
        readyPlayerOne.loseDontPass();
        console.log(readyPlayerOne.balance)
        $('.craps-table').children().empty();
      } else if (diceTotal === 2 || diceTotal === 3 || diceTotal === 12)  {
        readyPlayerOne.losePass();
        readyPlayerOne.winDontPass();
        console.log(readyPlayerOne.balance)
        $('.craps-table').children().empty();
      } else {
          alert(`The Point is ${diceTotal}!`);
          pointNumberValue = diceTotal;
          pointEstablished = true;
          console.log(readyPlayerOne.balance)
      }
  } else if (pointEstablished === true) {
      console.log('working-point');
        if (diceTotal === 7)  {
          readyPlayerOne.losePass();
          readyPlayerOne.winDontPass();
          pointEstablished = false;
          console.log(readyPlayerOne.balance)
          $('.craps-table').children().empty();
        } else if (diceTotal === pointNumberValue) {
          readyPlayerOne.winPass();
          readyPlayerOne.loseDontPass();
          pointEstablished = false;
          console.log(readyPlayerOne.balance)
          $('.craps-table').children().empty();
        }
  }
}

// class passOdds extends Player {
//   super(name, balance) {
//     this.passOdds = 0;
//   }
//   win () {
//     this.dontOdds *= 2;
//   }
//   lose () {
//     this.dontOdds = 0;
//   }
// }

// class Odds extends Player {
//   super(name, balance) {
//     this.passOdds = 0;
//     this.dontPassOdds = 0;
//   }
// }

// class Buy extends Player {
//   super(name, balance) {
//     this.fourBuy = 0;
//     this.fiveBuy = 0;
//     this.sixBuy = 0;
//     this.eightBuy = 0;
//     this.nineBuy = 0;
//     this.tenBuy = 0;
//   }
// }

//  class Lay extends Player {
//   super(name, balance) {
//     this.fourLay = 0;
//     this.fiveLay = 0;
//     this.sixLay = 0;
//     this.eightLay = 0;
//     this.nineLay = 0;
//     this.tenLay = 0;
//   }
// }



});
