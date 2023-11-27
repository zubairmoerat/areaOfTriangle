//function
let base = document.querySelector('[data-input1]').value;
let height = document.querySelector('[data-input2]').value;

let output = document.querySelector('[data-result]')
function areaOfTriangle() {
    let input1 = document.querySelector('[data-input1]').value;
    let input2 = document.querySelector('[data-input2]').value;

    let result = (input1 * input2) / 2
    document.querySelector('[data-result]').textContent = `${result.toFixed(2)} meters squared`;
}
let calculate = document.querySelector('[data-btn]');
calculate.addEventListener('click', areaOfTriangle);