var Yoda;
var Luke;
var obiWan;

var darthVadar;
var kyloRen;
var count;

var numberOfAttacks;

var goodCharacterSelected;
var badCharacterSelected;

var goodCharacterHealth;
var badCharacterHealth;

var charactersFought;

// Create an object for Yoda

Yoda = {
  Name: "Yoda",
  Health: 150,
  attackPower: 6
};

// Create an object for Luke

Luke = {
  Name: "Luke Skywalker",
  Health: 100,
  attackPower: 15
};

// Create an object for Obi Wan

obiWan = {
  Name: "Obi Wan-Kenobi",
  Health: 110,
  attackPower: 9
};

//Create an object for Darth Vadar

darthVadar = {
  Name: "Darth Vadar",
  Health: 130,
  attackPower: 11
};
//Create an object for Kylo Ren

kyloRen = {
  Name: "Kylo Ren",
  Health: 120,
  attackPower: 12
};
//Create an object for Count
count = {
  Name: "Count",
  Health: 85,
  attackPower: 10
};

//displaying the health of each character on game reset

function gameReset(){
  $("#yodaHealth").append(Yoda.Health);
  $("#lukeHealth").append(Luke.Health);
  $("#obiWanHealth").append(obiWan.Health);

  $("#vadarHealth").append(darthVadar.Health);
  $("#kyloHealth").append(kyloRen.Health);
  $("#countHealth").append(count.Health);
  numberOfAttacks = 0;
}

gameReset();

//Create an on click function for good Guys
$("#yodaCard").click(function(){

  //Move selection to the goodCharacter div and hide the selected character from the good characters divs

  $("#goodCharacter").append(yodaCard);
  goodCharacterSelected = Yoda;

//disable the other cards from being selected

  $("#lukeCard").prop("disabled",true);
  $("#obiWanCard").prop("disabled",true);
});

$("#lukeCard").click(function(){
  $("#goodCharacter").append(lukeCard);
  goodCharacterSelected = Luke;


  $("#yodaCard").prop("disabled",true);
  $("#obiWanCard").prop("disabled",true);
});

$("#obiWanCard").click(function(){
  $("#goodCharacter").append(obiWanCard);
  goodCharacterSelected = obiWan;


  $("#lukeCard").prop("disabled",true);
  $("#yodaCard").prop("disabled",true);
});

//Create an if statement that will prevent a user from clicking more then one good guy at a time

//Create an On click for the bad guys
$("#vadarCard").click(function(){

  //move selection to the badCharacter div

  $("#badCharacter").append(vadarCard);
  badCharacterSelected = darthVadar;

  //Precenting the other bad guy cards from being selected

  $("#kyloCard").prop("disabled",true);
  $("#countCard").prop("disabled",true);

  //Increment the number of characters fought

    charactersFought = 1;
});

$("#kyloCard").click(function(){
  $("#badCharacter").append(kyloCard);
  badCharacterSelected = kyloRen;


  $("#vadarCard").prop("disabled",true);
  $("#countCard").prop("disabled",true);

  //Increment the number of characters fought

    charactersFought = 1;
});

$("#countCard").click(function(){
  $("#badCharacter").append(countCard);
  badCharacterSelected = count;

  $("#vadarCard").prop("disabled", true);
  $("#kyloCard").prop("disabled",true);
  //Increment the number of characters fought

    charactersFought = 1;
});


$("#attackButton").click(function(){

  //Increase the number of attacks by a good guy in the current game

    numberOfAttacks++;
    var intNumberOfAttacks = parseInt(numberOfAttacks);

  //multiply this by their attackPower

    var selectedGoodCharacterAttack = parseInt(goodCharacterSelected.attackPower);
    var clickAttackPower = numberOfAttacks * selectedGoodCharacterAttack;

    intClickAttackPower = parseInt(clickAttackPower);

  //Deduct from the bad guy Health
    var selectedBadCharacterHealth = parseInt(badCharacterSelected.Health);

    badCharacterHealth  = selectedBadCharacterHealth - clickAttackPower;

  // if health is less then 0, then select next bad character
  if (true) {

  }
    //Next bad character moves from original div to the battling bad character div
  // if health is not below 0, counter attack
    //Deduct health from the good character
    //If good character health is below 0, then game over
console.log('Number of attacks ' + numberOfAttacks);
console.log('Power of Attack ' + clickAttackPower);
console.log(badCharacterHealth + " = " + selectedBadCharacterHealth + " - " + intClickAttackPower);
});
