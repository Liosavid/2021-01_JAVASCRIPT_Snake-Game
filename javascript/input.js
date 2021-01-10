let inputDirection = { x:0, y: 0 }
let lastInputDirection = { x: 0, y:0 }



window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            //If we have previously clicked down, we cannot changed the direction to up straight away
            if(lastInputDirection.y !== 0) break;
            
            inputDirection = { x: 0, y: -1 };
            break;

        case 'ArrowDown':
            //If we have previously clicked up, we cannot changed the direction to down straight away
            if(lastInputDirection.y !== 0) break;

            inputDirection = { x: 0, y: 1 };
            break;

        case 'ArrowLeft':
            //If we have previously clicked right, we cannot changed the direction to left straight away
            if(lastInputDirection.x !== 0) break;

            inputDirection = { x: -1, y: 0 };
            break;

        case 'ArrowRight':
            //If we have previously clicked left, we cannot changed the direction to right straight away
            if(lastInputDirection.x !== 0) break;

            inputDirection = { x: 1, y: 0 };
            break;
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;

}