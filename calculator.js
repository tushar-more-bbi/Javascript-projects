var inputstring = '';
//Function to display input and output
function display(value) {
    inputstring = inputstring.concat(value);
    document.getElementById('demo').innerText = inputstring;
}

//Function to calculate result and display when clicked on equal to sign 
function result() {
    var equalto = document.getElementById('equalto');
    equalto.addEventListener('click', function () {
        var result = eval(document.getElementById('demo').innerText);
        document.getElementById('result').innerText = `= ${result}`;
    });
}

//Function to clear fields after click on clear button
document.getElementById('clear').addEventListener('click', function () {
    // alert("Clicked");
    document.getElementById('demo').innerText = "";
    document.getElementById('result').innerText = "";
    inputstring = '';

});

//function on click C button 
document.getElementById('C').addEventListener('click', function () {
    inputstring = inputstring.slice(0, -1);
    document.getElementById('demo').innerText = inputstring;
    document.getElementById('result').innerText = "";
})


