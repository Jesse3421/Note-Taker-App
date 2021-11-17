const router = require('express').Router();
const noteStore = require('../db/notestore'); 

router.get('/notes', (req, res) => {
     noteStore.getNotes(req.body).then((notes) => { 
        res.json(notes);
     }).catch((err) => res.status(500).json(err));
});
 
router.post('/notes', (req, res) => {
      noteStore.saveNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
 });


 module.exports = router 