const express = require('express');
const khml = require('khml');
const path = require('path');

const app = express();

// Serve static files (e.g., JS, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Set Khml as the templating engine
app.set('view engine', 'khml');

// Render the homepage with dynamic data
app.get('/', (req, res) => {
  const data = {
    title: "Khml WebApp",
    message: "Welcome to the dynamic Khml-powered web app!",
    users: [
      { name: 'John Doe', age: 28 },
      { name: 'Jane Smith', age: 34 },
    ]
  };
  res.render('home', data);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
