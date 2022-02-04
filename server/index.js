require("dotenv").config();

console.log(process.env);
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// IMPORT YOUR SCHEMAS HERE
require("./models/Profiles"); //This is just an example. Don't forget to delete this

const app = express(); 

// This is where your API is making its initial connection to the database
// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
//   useNewUrlParser: true,
// });

app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
require("./routes/profilesRoutes")(app); 

const PORT = process.env.PORT;

app.get('/shop', (_, res) => { 
  res.header("Content-Type","application/json");
  res.sendFile(profilesFilePath, { root: __dirname });
console.log('todos hereeeee:', profiles)
res.status(200).json(profiles) // send/end/Json!   
});

app.get('/blog', (_, res) => { 
  res.header("Content-Type","application/json");
  res.send({'json heerre': 'yay!'});
console.log('todos hereeeee:', profiles)
res.status(200).json(profiles) // send/end/Json!   
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
