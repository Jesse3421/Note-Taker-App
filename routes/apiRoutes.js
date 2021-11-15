const router = require('express').Router();
const { builtinModules } = require('module');
const noteStore = require('../db/notestore.js'); 



 
 
router.get('/notes', (req, res) => {
     noteStore.retrieveNotes().then((notes) => {
         return res.json(notes);
     }).catch((err) => res.status(500).json(err));
 })
;
 
router.post('/notes', (req, res) => {
      noteStore.createNotes(req.body).then((notes) => {
          return res.json(notes);
      }).catch((err) => req.status(500).json(err));
 });


 module.exports = router 