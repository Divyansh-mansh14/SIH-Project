// function checkInputs(input1, input2, input3, input4, input5) {

//     // Retrieve input values from HTML form
//     var input1 = document.getElementById('input1').value;
//     var input2 = document.getElementById('input2').value;
//     var input3 = document.getElementById('input3').value;
//     var input4 = document.getElementById('input4').value;
//     var input5 = document.getElementById('input5').value;
//     var input6 = document.getElementById('input6').value;


//     // Check if any input is false
//     // if (input1 === "Optimal: Less than" && input2 && input3 && input4 && input5 && input6) {
//     if (input2 > 35) {
//         return "No";
//     } else {
//         return "Yes";
//     }
// }

// // Example usage:
// // Replace input1, input2, input3, input4, and input5 with your actual input values
// function onFormSubmit() {
//     var result = checkInputs();
//     console.log(result);
// }



function checkAge() {
    // Get the selected value from the age dropdown
    var age = document.getElementById('input2').value;

    // Convert the age range string to a numeric value (extracting the first number)
    var ageValue = parseInt(age.match(/\d+/)[0]);

    // Log "Yes" if the age is above 36, otherwise log "No"
    var output = (ageValue > 36) ? "Yes" : "No";
    console.log("Output for selected age range:", output);
}

var result = checkAge();
console.log(result);


