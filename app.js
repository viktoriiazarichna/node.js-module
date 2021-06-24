const express = require('express');
const expressHbs = require('express-handlebars');
const path = require ('path');
// const fs = require('fs');

// const usersBase = path.join(__dirname, 'usersBase.json');

const users = [
    {name: 'Volodya', age: 21, password:'123'},
    {name: 'Svitlana', age: 17, password: '465'},
    {name: 'Sofia', age: 34, password: '234'},
    {name: 'Dmytro', age: 26, password: '321'},
    {name: 'Anton', age: 22, password: '987'}
]
// fs.readFile(usersBase, (err, data) => {
//     if(err) {
//         console.log(err);
//         return
//     }
//         return JSON.parse(data.toString());
//     console.log(JSON.parse(data.toString()));
// });



const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));

app.set('views', path.join(__dirname, 'static'));




app.get('/users', (req, res) => {
    res.render('users', {users} );
});

app.get('/login', (req, res) => {
    res.render('login', {isAdult: true});
});

app.get('/register', (req, res) => {
    res.render('register');
});



app.post('/login', (req, res) => {
    console.log(req.body);
    res.json('Logged In');
});

app.post('/register', (req, res) => {
    console.log(req.body);
    res.json('Registration Successful!');
});



app.listen(3000, () => {
    console.log('App listen 3000');
});