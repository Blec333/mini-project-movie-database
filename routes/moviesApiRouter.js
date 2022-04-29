const router = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');// read/write files
const uuid = require('../helpers/uuid');//generates a unique id



// GET Route for retrieving all the movies
router.get('/movies', (req, res) => {
  console.info(`${req.method} request received for movies`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});



// POST Route for a new UX/UI note
router.post('/movies', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});



// DELETE Route for removing selected note
router.delete("/movies/:id", (req, res) => {
  console.info(`${req.method} request received for movies`);
  const noteId = req.params.id;
  readFromFile('./db/db.json', 'utf8')
  .then((data) => {
      moviesArr = JSON.parse(data);
      var filteredArray = moviesArr.filter(function (note) {
        return note.id != noteId;
      });
      writeToFile("./db/db.json", filteredArray);
  res.send(JSON.stringify(filteredArray));
  })
  .catch((err) => {
      console.log('Error', err);
  });
});




module.exports = router;
