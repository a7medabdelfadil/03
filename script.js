let width = document.getElementById('width');
let blur = document.getElementById('blur');
let color = document.getElementById('color');
console.log(width.value)
console.log(blur.value)
console.log(color.value)

width.addEventListener('input', function () {
    width.value = this.value;
    const root = document.documentElement;
    root.style.setProperty('--width', `${width.value}%`);
})

blur.addEventListener('input', function () {
    blur.value = this.value;
    const root = document.documentElement;
    root.style.setProperty('--blur', `${blur.value}px`);
})

color.addEventListener('input', function () {
    color.value = this.value;
    const root = document.documentElement;
    root.style.setProperty('--main-color', `${color.value}`);
})