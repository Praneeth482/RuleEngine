// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const app = express();
const port = 3000; // Set the port number

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the public directory

// Rule engine function
const ruleEngine = (data) => {
    if (data.age > 18) {
        return { message: 'Access Granted!' };
    } else {
        return { message: 'Access Denied. You must be over 18.' };
    }
};

// Endpoint to check access
app.post('/check-access', (req, res) => {
    const result = ruleEngine(req.body);
    res.json(result); // Send the result back as JSON
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // Log the server URL
});
