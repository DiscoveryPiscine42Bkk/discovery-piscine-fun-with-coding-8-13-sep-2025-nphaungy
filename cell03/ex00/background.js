function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    console.log('New background color:', randomColor);
}
document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', changeBackgroundColor);
});