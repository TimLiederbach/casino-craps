//eslint-env jquery
$(document).ready(function() {

let pointNumberValue = null;

let pointEstablished = false;

const chipsHighlight = $('.chip').on('mouseover', function () {
  $(this).addClass('highlight')
  });

const chipsUnHighlight = $('.chip').on('mouseleave', function () {
  $(this).removeClass('highlight')
  });

let chipValue =  $('.chip').on('click', function() {
   $(this).addClass('selected')
   $(this).siblings().removeClass('selected')
   console.log($(this).text());
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
  console.log("selected");
  $( ".selected" ).clone().appendTo(this);
  $(this).children().removeClass('highlight');
  $(this).children().removeClass('selected');
  });



let diceValue = null;

const playerName = $('#form input[name=username]').val();

let playerOneBalance = $('#form input[amount=balance]').val();

class Player {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance
  }
}

class Pass extends Player {
  constructor(name, balance) {
    super(name, balance);
    this.pass = 0;
  }
  win () {
    this.balance += this.pass;
  }
  lose () {
    this.pass = 0;
  }
}

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

const readyPlayerOne = new Player(playerName, playerOneBalance);

const gamePlay = function() {
  if (diceValue = 7||11) {
    ;
  }
}


console.log(pointEstablished)
console.log(chipValue)


});
