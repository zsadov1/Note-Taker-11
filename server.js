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

