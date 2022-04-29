const express = require('express');
const mysql = require('mysql2');
const apiRouter = require('./routes/moviesApiRouter.js');

// Using express and defining server port
const app = express();
const PORT = process.env.PORT || 3000;


//MIDDLEWARE:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRouter);

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
  );

  
//-----------------------------------------------------------------------------------------------queries to change
  // Query database
// db.query('SELECT * FROM students', function (err, results) {
//   console.log("********* SELECT * FROM students results[0]");
//   console.log(results[0]);
//   console.log("*********");
// });

// db.query('SELECT first_name, last_name FROM students', function (err, results) {
//   console.log("********* SELECT first_name, last_name FROM students");
//   console.log(results);
//   console.log("*********");
// });


// // Query database
// db.query('SELECT * FROM students WHERE first_name = "Elliot"', function (err, results) {
//   console.log("********* SELECT * FROM students WHERE first_name = 'Elliot', results[0]");
//   console.log(results[0]);
//   console.log("*********");
// });

// db.query('SELECT * FROM students WHERE enrolled = true', function (err, results) {
//   console.log("********* SELECT * FROM students WHERE enrolled = true");
//   console.log(results);
//   console.log("*********");
// });

//-----------------------------------------------------------------------------------------------queries to change



// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

  