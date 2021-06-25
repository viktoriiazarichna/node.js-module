const express = require('express');
const expressHbs = require('express-handlebars');
const path = require ('path');
const fs = require('fs');




const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));

app.set('views', path.join(__dirname, 'static'));


const usersBase = path.join(__dirname, 'usersBase.json');


function parseUsers() {

    return JSON.parse(fs.readFileSync(usersBase).toString());
}

app.get('/users', (req, res) => {
   const usersList = parseUsers();
    res.render('users', {usersList});
});



app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});



app.post('/register', (req, res) => {

    const newUsers = parseUsers();
    const {name, email, password} = req.body;
    res.json('Registration Successful!');


    newUsers.push({name, email, password});

    fs.writeFile(usersBase, JSON.stringify(newUsers), err => {
        if (err) {
            console.log(err);
        }
    })
});

app.post('/login', (req, res) => {
    res.json('Logged In');
});




app.listen(3000, () => {
    console.log('App listen 3000');
});