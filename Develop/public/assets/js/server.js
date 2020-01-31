// 1) Add Dependences, make sure they are downloaded via NPM install
const fs = require("fs");
const express = require ("express");
const path = require ("path");

const PORT = 3000;

// 2) Create your Express app. (Lifted from Stars Wars5 activity.)

const app = express();

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 3) Create a varible for our database to get data

const database = require("./Develop/public/db/db.json")

// 4) Establish routes 

//  4a) Get `*`

app.use(express.static("Develop/public"));

// 4b) Get `/notes`

app.get("notes", function(req, res) {
  return  res.sendFile(path.join(__dirname, "notes.html"));
});

// 4c) Get `/api/notes --> read.db.json-->return all saved notes 

app.get("/api/notes", function(req, res) {
  return res.json(database);
});

// 4d) Post `/api/notes-> save new note->save on request body-->add to db.json-->return new note to client

app.post("/api/notes", function(req,res) {
  const newNote = req.body;
  let topID = 0;
  for(const note of database);{
  let nowID = note.id;
  if (topID > nowID) {
    topID = nowID;
  }
}
newNote.id = topID +1
let tempDatabase = database; 
tempDatabase.push(newNote);

// 5) Rewrite to db.json 
fs.writeFile("./Develop/db/db.json", JSON.stringify(tempDatabase), err => {
  if(err) {
    console.log(err);
  } else {
    console.log("Note added to db.json")
    console.log("database");
    res.json(newNote);
  }
});
});