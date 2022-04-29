# Note Taker

Repository Name: express.js-note-taker

## Table of Contents (Optional)

* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Final Product](#final-product)
* [Video](#video)
* [License](#license)
* [Acknowledgements](#acknowledgements)

## Description 

This app allows the user to visit a website where they may save a list of notes as they so choose.

* Router example:
```md
// GET Route for retrieving all the notes
router.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
router.post('/notes', (req, res) => {
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
router.delete("/notes/:id", (req, res) => {
  console.info(`${req.method} request received for notes`);
  const noteId = req.params.id;
  readFromFile('./db/db.json', 'utf8')
  .then((data) => {
      notesArr = JSON.parse(data);
      var filteredArray = notesArr.filter(function (note) {
        return note.id != noteId;
      });
      writeToFile("./db/db.json", filteredArray);
  res.send(JSON.stringify(filteredArray));
  })
  .catch((err) => {
      console.log('Error', err);
  });
});
```

## Technologies

Technologies used on this project include:
* Front & backend Javascript (Express) to manage APIs
* Node.JS
* NPM FS
* Router modulation
* CSS
* HTML

## Installation

* No installation required to use.

## Usage 

To begin using this site after install requirements:

1. Simply visit the deployed site at https://blec-note-taker.herokuapp.com/
2. Type a new title and note into the respective text boxes and use the save icon that appears to save to the list.
3. To view note information select the note text in the list. This repopulates that note into the text box location.
4. To clear the text boxes for a new note, click the plus icon.
5. To clear a note, click the trash icon.

## Final Product

<img title="image" alt="Style Showcase Page Screenshot" src="./docs/video.gif">



Github Repository
https://github.com/Blec333/express.js-note-taker


## Video

[![Video](./docs/video.gif)](https://drive.google.com/open?id=132CE-2eaBPRXA30TLL6pJuGvsHlfjDBO&authuser=bleclair3%40gmail.com&usp=drive_fs "Video")

https://drive.google.com/open?id=132CE-2eaBPRXA30TLL6pJuGvsHlfjDBO&authuser=bleclair3%40gmail.com&usp=drive_fs

## License

MIT License

Copyright (c) 2022 Brennan LeClair

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Acknowledgements

©Brennan LeClair
