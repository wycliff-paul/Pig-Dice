//business logic
var player = function(turn) {
  this.scoreTotal = 0;
  this.currentScore = 0;
  this.turn = turn;
}
player.prototype.taketurn = function() {
  if(this.turn === true) {
    this.turn = false;
  }
  else {
    this.turn = true;
  }
}
player.prototype.button = function() {
  var pay = math.floor(math.random()*6)+1;
  this.currentScore = pay;
}
player.prototype.addResults = function(rollResult) {
  this.scoreTotal += rollResults;
}
var player1 = new Player(true);
var Player2 = new Player(false);
var totalRoll;

//User Interface logic

$(document).ready(function(){
  var player1Button;
  var player2Button;
  totalRoll = parseInt($("rollResults").text());
  $("#signup-form").submit(function(event) {
    event.preventDefault();{
    player1Button = $("#player1").value();
    player2Button = $("#player2").value();
  }
  if ( player1Button === "" || player2Button = "") {
    prompt("Please enter the name for each player");
  }
$(".jumbotron").slideUp(200);
  $("#player1Button").text(player1button);
  $("#player2Button").text(player1Button);
  $("#player-msg").text(player1Button + ", GO!");
  $("")
}
