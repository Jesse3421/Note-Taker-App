const router = require('express').Router();
const { builtinModules } = require('module');
const noteStore = require('../miniature-eureka-main/Develop/db/notestore.js') 


 
 
router.get('/notes', (req, res) => {
     noteStore.retrieveNotes().then((notes) => {
         return res.json(notes);
     }).catch((err) => res.status(500).json(err));
 })
;
 
 //router.post()


 module.exports = router 