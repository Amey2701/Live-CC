function convert(event) {
    event.preventDefault(); // Prevent form submission and page reload

    let amt = document.getElementById("amt"); // Get the input element for amount
    let msg = document.getElementById("msg"); // Get the element to display the message

    if (amt.value === "") { // Check if the amount input is empty
        alert("You did not enter an amount."); // Show an alert if no amount is entered
        msg.innerHTML = ""; // Clear any previous message
        amt.focus(); // Focus on the amount input
        return; // Exit the function
    }

    let a = parseFloat(amt.value); // Parse the entered amount to a float
    let url = "https://api.exchangerate-api.com/v4/latest/USD"; // URL to fetch exchange rate data

    fetch(url) // Fetch data from the URL
        .then(res => res.json()) // Parse the response as JSON
        .then(data => {
            let dollar = data.rates.INR; // Get the INR exchange rate
            let rupees = dollar * a; // Calculate the equivalent amount in INR
            let ans = `$${a} is approximately \u20B9${rupees.toFixed(2)}`; // Format the amount in a sentence
            msg.innerHTML = ans; // Display the converted amount in a sentence
        })
        .catch(err => alert("There was an issue: " + err)); // Handle any errors during the fetch
}

function clearForm() {
    let amt = document.getElementById("amt"); // Get the input element for amount
    let msg = document.getElementById("msg"); // Get the element to display the message

    amt.value = ""; // Clear the value of the amount input
    msg.innerHTML = ""; // Clear any displayed message
    amt.focus(); // Focus on the amount input
}
