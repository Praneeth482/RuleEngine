document.getElementById('ruleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const age = document.getElementById('ageInput').value; // Get the age from input

    // Fetch call to the server at port 3000
    fetch('http://localhost:3000/check-access', {  // Change this line
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ age: parseInt(age) }), // Send age as a JSON object
    })
    .then(response => {
        if (!response.ok) {
            // Handle non-200 responses
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        document.getElementById('result').textContent = data.message; // Show the result
    })
    .catch(error => console.error('Error:', error)); // Log any errors to the console
});
