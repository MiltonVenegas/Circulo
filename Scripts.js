const circle = document.getElementById('circle');
const widthSlider = document.getElementById('widthSlider');
const heightSlider = document.getElementById('heightSlider');
const colorPicker = document.getElementById('colorPicker');

function updateCircleSize() {
    const newWidth = widthSlider.value + 'px';
    const newHeight = heightSlider.value + 'px';
    circle.style.width = newWidth;
    circle.style.height = newHeight;
}

function changeCircleColor() {
    const selectedColor = colorPicker.value;
    circle.style.backgroundColor = selectedColor;
}

function toggleCircle() {
    if (circle.style.display === 'none') {
        circle.style.display = 'block';
    } else {
        circle.style.display = 'none';
    }
}

widthSlider.addEventListener('input', updateCircleSize);
heightSlider.addEventListener('input', updateCircleSize);

colorPicker.addEventListener('input', changeCircleColor);