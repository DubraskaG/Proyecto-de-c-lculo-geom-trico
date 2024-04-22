// área y perímetro de un cuadrado

const valueResult = document.getElementById('result');
const perimSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function calculatePerimSquare(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El perímetro del cuadrado es: ${perimSquare(value)} cm.`
    valueResult.innerText = result;
}

function calculateAreaSquare(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El área del cuadrado es: ${areaSquare(value)} cm^2.`
    valueResult.innerText = result;
}

// Área y perímetro del triángulo

const perimTriangle = (side1, side2, base) => side1 + side2 + base;
const areaTriangle = (base, height) => (base * height) / 2;

function calculatePerimTriangle() {
    let side1 = document.getElementById('t-side1');
    let side2 = document.getElementById('t-side2');
    let base = document.getElementById('t-base');
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    base = Number(base.value);

    const result = `El perímetro del triángulo es: ${perimTriangle(side1, side2, base)} cm^2.`
    valueResult.innerText = result;
}

function calculateAreaTriangle(){
    let base = document.getElementById('inputbase');
    let height = document.getElementById('inputaltura');
    base = Number(base.value);
    height = Number(height.value);

    const result = `El área del triángulo es: ${areaTriangle(base, height)} cm^2.`
    valueResult.innerText = result;

}

// diámetro, perímetro y área del círculo

const diamCircle = (radio) => radio * 2;
const perimCircle = (radio) => diamCircle(radio) * Math.PI;
const areaCircle = (radio) => (radio * radio) * Math.PI;

function calculateDiamCircle(){
    let radio = document.getElementById('radio');
    radio = Number(radio.value);

    const result = `El diámetro del círculo es: ${diamCircle(radio)} cm.`
    valueResult.innerText = result;
}

function calculatePerimCircle() {
    let radio = document.getElementById('radio');
    radio = Number(radio.value);

    const result = `El perímetro del círculo es: ${perimCircle(radio)} cm.`
    valueResult.innerText = result;
}

function calculateAreaCircle() {
    let radio = document.getElementById('radio');
    radio = Number(radio.value);

    const result = `El área del círculo es: ${areaCircle(radio)} cm^2.`
    valueResult.innerText = result;
}
