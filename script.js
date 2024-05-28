document.addEventListener("DOMContentLoaded", function() {
    const startingValueInput = document.getElementById("startingValue");
    const endingValueInput = document.getElementById("endingValue");
    const fizzValueInput = document.getElementById("fizzValue");
    const buzzValueInput = document.getElementById("buzzValue");
    const generateButton = document.getElementById("generateButton");
    const clearButton = document.getElementById("clearButton");
    const mainContainer = document.querySelector(".main-container");

    generateButton.addEventListener("click", function() {
        const startingValue = parseInt(startingValueInput.value);
        let endingValue = parseInt(endingValueInput.value);
        const fizzValue = parseInt(fizzValueInput.value);
        const buzzValue = parseInt(buzzValueInput.value);

        if (isNaN(startingValue) || isNaN(endingValue) || isNaN(fizzValue) || isNaN(buzzValue)) {
            alert("Please enter valid numbers.");
            return;
        }

        if (startingValue < 1 || endingValue < 1 || fizzValue < 1 || buzzValue < 1) {
            alert("Values cannot be less than 1.");
            return;
        }

        if (startingValue > endingValue) {
            alert("Starting value cannot be greater than ending value.");
            return;
        }

        if (endingValue > 100) {
            alert("Ending value cannot be greater than 100.");
            endingValue = 100; // Set ending value to 100
        }

        mainContainer.innerHTML = "";

        for (let i = startingValue; i <= endingValue; i++) {
            const div = document.createElement("div");
            div.classList.add("div-box");

            if (i % fizzValue === 0 && i % buzzValue === 0) {
                div.classList.add("fizzbuzz");
                div.textContent = "FizzBuzz";
            } else if (i % fizzValue === 0) {
                div.classList.add("fizz");
                div.textContent = "Fizz";
            } else if (i % buzzValue === 0) {
                div.classList.add("buzz");
                div.textContent = "Buzz";
            } else {
                div.classList.add("normal");
                div.textContent = i;
            }

            mainContainer.appendChild(div);
        }
    });

    clearButton.addEventListener("click", function() {
        // Clear input values
        startingValueInput.value = "1"; // Set default starting value
        endingValueInput.value = "100"; // Set default ending value
        fizzValueInput.value = "3"; // Set default fizz value
        buzzValueInput.value = "5"; // Set default buzz value
        // Clear generated divs
        mainContainer.innerHTML = "";
    });
});
