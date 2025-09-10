let balloon = document.getElementById('balloon');
let currentSize = 200;
let currentColorIndex = 0;
const colors = ['red', 'green', 'blue'];

function updateBalloon() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[currentColorIndex];
}

balloon.addEventListener('click', function() {
    currentSize += 10;
    currentColorIndex = (currentColorIndex + 1) % 3;
    
    if (currentSize > 420) {
        balloon.style.transform = 'scale(0)';
        setTimeout(() => {
            currentSize = 200;
            currentColorIndex = 0;
            balloon.style.transform = 'scale(1)';
            updateBalloon();
        }, 200);
    } else {
        updateBalloon();
    }
});

balloon.addEventListener('mouseleave', function() {
    if (currentSize > 200) {
        currentSize -= 5;
        currentColorIndex = (currentColorIndex - 1 + 3) % 3;
        updateBalloon();
    }
});