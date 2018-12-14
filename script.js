function rolldice(){
  var dice1 = document.getElementById('dice1');
  var dice2 = document.getElementById('dice2');
  var status =document.getElementById('status');
  var d1 = Math.floor(Math.random()*4)+1;
  var d2 = Math.floor(Math.random()*4)+1;
  var dicetotal = d1 + d2;
  dice1.innerHTML = d1;
  dice2.innerHTML = d2;
  status.innerHTML = "you rolled" + dicetotal + ".";
  if(dice1 == dice2){
    status.innerHTML += " DOUBLES! you get a free turn!!";
  }
}
