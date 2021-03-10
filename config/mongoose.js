
//  Require the Library of Mongoose
const mongoose = require('mongoose');


// COnnect to the DataBase
mongoose.connect('mongodb://localhost/contactsDB');


// Acquire the connection (to check if it is successful)
const db = mongoose.connection;


// error message (if any)
db.on('error', console.error.bind(console, 'connection error:'));


//  Successful Connection Prompt on Console.log
db.once('open', function() {
    console.log(`Hii Venkatesh..!, we're connected!`);
  });