const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./model/contact');

const app = express();

app.set('view engine','ejs')
app.set('views', path.join((__dirname, 'views')));

app.use(express.urlencoded());

app.use(express.static('src'));


var contactList = [
    // {
    //     name:"Vicky",
    //     phone:"98865467885"
    // },
    // {
    //     name:"Venky",
    //     phone:"4754353843"
    // }
]


app.get('/', (req,res) => {
    return res.render('home', {
        title:"Home | Contact List",
        contact_list : contactList
    });
})


app.post('/add-contact', function(req,res){

    // contactList.push(req.body);

    Contact.create({
        name: req.body.name, 
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log("error in creating contact");
            return;
        }

        console.log('*********', newContact);
        return res.redirect('back'); 
    });

    return res.redirect('back');
})


app.get('/delete', (req,res) =>{
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if(contactIndex != -1){
        contactList.splice(contactIndex,1);

    }

    return res.redirect('back');
})


app.listen(port, function(err){
    if(err){
        console.log(`error occurred ${err}`)
    }

    console.log(`Congrats.! Server running on port ${port}... !`)
});