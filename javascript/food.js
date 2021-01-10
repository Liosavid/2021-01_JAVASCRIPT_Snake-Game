import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

// Make sure it starts at 1 and not 0 as css grid starts at 1 (0 would be outside the grid)
let food = getRandomFoodPosition();

// How much the snake grows when it eats the food
const EXPANSION_RATE = 1;



export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition;

    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }

    return newFoodPosition;
}