//eslint-env jquery
$(document).ready(function() {

let pointNumberValue = undefined;

let pointEstablished = false;

let liveBets = true;

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

const passBet = $('.pass').on('click', function () {
  $( ".selected" ).clone().appendTo(this);
  $(this).children().removeClass('highlight');
  $(this).children().removeClass('selected');
  let betValue = parseInt($(".selected").text(), 10);
  readyPlayerOne.pass += betValue;
  readyPlayerOne.balance -= betValue;
  console.log(readyPlayerOne.pass);
  console.log(readyPlayerOne.balance);
  });

const dontPassBet = $('.dont-pass').on('click', function () {
  console.log("selected");
  $( ".selected" ).clone().appendTo(this);
  $(this).children().removeClass('highlight');
  $(this).children().removeClass('selected');
  });

let diceTotal = undefined;

function rollDice () {
  if (liveBets === true) {
  let d1 = Math.floor(Math.random() * 6) + 1;
  let d2 = Math.floor(Math.random() * 6) + 1;
  diceTotal = d1 + d2;
  $(".die1").text(`${d1}`);
  $(".die2").text(`${d2}`);
  $("h3").text(`You rolled a ${diceTotal}.`)
  gamePlay ();
  }  else {
    alert('Please place a bet before you roll!');
  }
}

const clickDice = $('button').on('click', rollDice);


const playerName = $('#form input[name=username]').val();

let playerOneBalance = $('#form input[amount=balance]').val();

class Player {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance
    this.pass = 0;
    this.dontPass = 0;
  }
  winPass () {
    this.balance += this.pass *= 2;
  }
  losePass () {
    this.pass = 0;
  }
  winDontPass () {
    this.balance += this.dontPass *= 2;
  }
  loseDontPass () {
    this.dontPass = 0;
  }
}

// class Pass extends Player {
//   constructor(name, balance) {
//     super(name, balance);
//     this.pass = 20;
//   }
//   win () {
//     this.balance += this.pass;
//   }
//   lose () {
//     this.pass = 0;
//   }
// }

class dontPass extends Player {
  constructor(name, balance) {
    super(name, balance);
    this.dontPass = 0;
  }
  win () {
    this.balance += this.dontPass;
  }
  lose () {
    this.dontPass = 0;
  }
}

class passOdds extends Player {
  super(name, balance) {
    this.passOdds = 0;
  }
  win () {
    this.dontOdds *= 2;
  }
  lose () {
    this.dontOdds = 0;
  }
}

class Odds extends Player {
  super(name, balance) {
    this.passOdds = 0;
    this.dontPassOdds = 0;
  }
}

class Buy extends Player {
  super(name, balance) {
    this.fourBuy = 0;
    this.fiveBuy = 0;
    this.sixBuy = 0;
    this.eightBuy = 0;
    this.nineBuy = 0;
    this.tenBuy = 0;
  }
}

 class Lay extends Player {
  super(name, balance) {
    this.fourLay = 0;
    this.fiveLay = 0;
    this.sixLay = 0;
    this.eightLay = 0;
    this.nineLay = 0;
    this.tenLay = 0;
  }
}

const readyPlayerOne = new Player('Tim', 200);

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





});
