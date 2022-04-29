const path = require("path");
const router = require("express").Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));// this one not required
  });
  
  router.get('/movies', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/movies.html'));
  });
  
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router;