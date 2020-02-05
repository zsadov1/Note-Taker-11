//Dependences
const express = require("express");
const path = require("path");
const fs = require("fs");

// creating an "express" server
const app = express();
const PORT = process.env.PORT || 3000;

// Express app - parsing data
app.use(express.urlencoded({extended:treu}));
app.use(express.json());

// Data

const noteData = require("Develop\db\db.json/");

// Routes

// GET `*` 

app.use(express.static(Develop/public));

// GET /notes ---> notes.html

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "Develop\public\notes.html"));
});

// GET api/notes ---> read:db.json-->saved notes as JSON

app.get("/api/notes" , function(req, res) {
  return res.json(noteData);
});

// POST /api/notes -->receive new note --->add it to debugger.json

app.post("/api/notes", function(req,res) {
  const newNote = req.body;
  let maxID = 0;
  for(const note of noteData) {
    let currentID = note.id;
    id(currentID > maxID) {
      maxID = currentID;
    }
  }
  newNote.id = maxID + 1;
  let tempNoteData = noteData;
  tempNoteData.push(newNote);
  fs.writeFile("Develop\db\db.json", JSON.stringify(tempNoteData), err => {
    if(err){
      console.log(err);
    } else {
      console.log("Added new note");
      console.log(noteData)
      res.json(newNote);
    }
  });
});

// Delete a note

app.delete("/api/notes/:id", function(req, res) {
  // Receive a query parameter containing the id of a note to delete
  const chosenID = req.params.id;
  // Read all notes from the 'db.json' file and remove the note with the given 'id' property
  let tempDB = database;
  for (let i = 0; i < tempDB.length; i++) {
    if (chosenID === tempDB[i].id.toString()) {
      tempDB.splice(i, 1);
    }
  }
  // Rewrite the notes to the 'db.json' file
  fs.writeFile("./Develop/db/db.json", JSON.stringify(tempDB), err => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(`Deleted id # ${chosenID} from the database.`);
      console.log(database);
      res.sendStatus(200);
    }
  });
});



// Start the server on the port
app.listen(PORT, function() {
  console.log("SERVER IS LISTENING: " + PORT);
});