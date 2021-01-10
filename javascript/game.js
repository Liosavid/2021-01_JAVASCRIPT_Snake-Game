import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid} from './grid.js';


let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime){

    if(gameOver){
        return alert('You lose');
    }

    window.requestAnimationFrame(main);

    // Devided by 1000 because it is milliseconds and we need to convert in seconds.
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; 
    // if seconds since last render is less than 0.5second -> we don't need to move our snake
    if( secondsSinceLastRender < 1 / SNAKE_SPEED ) return

//  console.log(currentTime);
//  console.log(secondsSinceLastRender);
    console.log("Render");
    lastRenderTime = currentTime;

    // Update loop
    update();
    draw();
}

// Main function is going to loop over and over again:
window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);  
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}