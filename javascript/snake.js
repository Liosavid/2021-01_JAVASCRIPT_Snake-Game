// Code for the Snake

import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 2; // Snake moves two times per second.
const snakeBody = [

    { x: 11, y: 11 }, // Draw the snake in the middle of the screen to start

]; 

export function update(){
    const inputDirection = getInputDirection();

    // update tail od the snake
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i]  }
    }

    // update head of the snake
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);

    })

}

