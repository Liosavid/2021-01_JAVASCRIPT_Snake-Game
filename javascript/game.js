let lastRenderTime = 0;
const SNAKE_SPEED = 2; // Snake moves two times per second.

function main(currentTime){
    window.requestAnimationFrame(main);

    // Devided by 1000 because it is milliseconds and we need to convert in seconds.
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; 
    // if seconds since last render is less than 0.5second -> we don't need to move our snake
    if( secondsSinceLastRender < 1 / SNAKE_SPEED ) return

//  console.log(currentTime);
//  console.log(secondsSinceLastRender);
    console.log("Render");
    lastRenderTime = currentTime;

}

// Main function is going to loop over and over again:
window.requestAnimationFrame(main);