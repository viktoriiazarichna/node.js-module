const fs = require('fs')
const path = require('path')



let dirBoys = path.join(__dirname, 'dec-2020', 'boys');
let dirGirls = path.join(__dirname, 'dec-2020', 'girls');

console.log(dirBoys);
console.log(dirGirls);

fs.mkdir(`${__dirname}/dec-2020/boys`, (err) => {
    console.log(err);
});

fs.mkdir(`${__dirname}/dec-2020/girls`, (err) => {
    console.log(err);
});


function groupByGender() {



}

module.exports = groupByGender;