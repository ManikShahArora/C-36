var  database;
var form,player,game;
var gameState,playerCount;

function setup(){
  
  //console.log(database);
  createCanvas(500,500);
  database = firebase.database();
  game=new Game();
  game.getState();
game.start();
  
}

function draw(){
  //background("white");
}
