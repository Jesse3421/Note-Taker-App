const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid')
 
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
 
class NoteStore {
    write(note) {
        return writeFile('db/db.json', JSON.stringify(note))
    }
    
    read(){
        return readFile('db/db.json', 'utf8')
    };
    
   getNotes() {
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
   
    saveNote(note) {
       const { title, text } = note;
       if (!title || !text) {
           throw new Error('Information is needed in both fields');
       }
       const newNote = { title, text, id: uuidv4() };
    
       return this.read()
            .then((notes) => [...JSON.parse(notes), newNote])
            .then((updatedArr) => this.write(updatedArr))
            .then(() => newNote)
        
    };
    
}
module.exports = new NoteStore();

