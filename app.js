const express = require('express');
const expressHbs = require('express-handlebars');
const path = require ('path');

const users = [
    {name: 'Vika', age: 18, password:'1234'},
    {name: 'Ihor', age: 24, password: '1234'},
    {name: 'Anya', age: 15, password: '1234'},
    {name: 'Olya', age: 28, password: '1234'}
]

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));

app.set('views', path.join(__dirname, 'static'));




app.get('/users', (req, res) => {
    res.render('users', {name: 'Dina', users} );
});

app.get('/login', (req, res) => {
    res.render('login', {isAdult: true});
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.json('OK');
    const result = users.find(({name}) => name === 'Vika');
    console.log(result);
})

// app.get('/', (req, res) => {
//     // console.log(req);
//     // res.write('hello world')
//     res.end('hello chat')
// })

// app.get('/ping', (req, res) => {
//     res.end('pong');
// });
//
//
// app.post('/', (req, res) => {
//     console.log(req.body);
//     console.log(req.query);
//     res.json('post');
// });
//
// app.get('/users', ((req, res) => {
//     res.json(users);
// }));
//
// app.get('/users/:userId', ((req, res) => {
//    const {userId} = req.params;
//     res.json(users[userId]);
// }))
//
// app.post('/honda', ((req, res) => {
//     res.json('Honda');
// }));

app.listen(3000, () => {
    console.log('App listen 3000');
})