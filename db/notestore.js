const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class NoteStore {
    read(){
        return readFile('db/db.json', 'utf-8')
    };

    retrieveNotes() {
        return this.read().then((notes) => {
            let notesArr;
            try{
                notesArr = [].concat(JSON.parse(notes))
            } catch(err){
                notesArr = []
            }
            return notesArr
        })
    };

    deleteNotes(){

    };

    createNotes() {
        
    }

}
module.exports = NoteStore