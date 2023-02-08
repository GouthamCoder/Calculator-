// get the input and output elements
var input = document.getElementById("input");
var output = document.getElementById("output");

// add event listener to all buttons with class "operator"
var operators = document.querySelectorAll(".operator");
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(event) {
        input.value += event.target.innerHTML;
    });
}

// add event listener to the "=" button
var equalButton = document.getElementById("equal");
equalButton.addEventListener("click", function() {
    output.value = eval(input.value);
});

// add event listener to the "C" button
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    input.value = "";
    output.value = "";
});
