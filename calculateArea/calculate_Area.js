let length;
let width;
let Grocery_1, Grocery_2, Grocery_3;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function CalculateTotalAmount() {
    Grocery_1 = parseFloat(document.getElementById('Grocery1').value);
    Grocery_2 = parseFloat(document.getElementById('Grocery2').value);
    Grocery_3 = parseFloat(document.getElementById('Grocery3').value);

    let total = Grocery_1 + Grocery_2 + Grocery_3;
    document.getElementById('result_second').innerText = `The total amount is : ${total}`;

}

