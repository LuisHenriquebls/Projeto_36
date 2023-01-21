var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400); // Tipo de tela e o tamanho da tela
  database = firebase.database(); //Atribuindo o banco de dados do Firebase dentro da variavel 'database'
  quiz = new Quiz(); // Criando uma nova função chamado 'Quiz()'
  quiz.start(); // Começar o quiz! 
}


function draw(){
  background("yellow");

}
