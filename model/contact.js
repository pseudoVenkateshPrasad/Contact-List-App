//  Require the Library of Mongoose
const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name:{
        type:"string",
        required: true
    },

    phone:{
        type:"string",
        required: true
    }
})



// name of the collection

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;