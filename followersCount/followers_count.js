let count = 0; // Initialize count to 0
// ham gia tang
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // display the count
    checkCountValue(); // check count value and display messages
}
// ham hien thi
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}
// ham kiem tra 
function checkCountValue() {
    if (count === 10) {
        // kich hoat thong bao
        alert("Your Instagram post gained 10 followers! Congratulations")
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!")
    }
}