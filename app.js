const switchStudents = require('./switchStudents');
require('./switchStudents');
const groupByGender = require('./groupByGender');

switchStudents();


// const fs = require ('fs');


// fs.mkdir(`${__dirname}/dec-2020`, (err) => {
//     console.log(err);
// })

// fs.mkdir(`${__dirname}/dec-2020/20.00`, {recursive: true},  (err) => {
//     console.log(err);
// })

// fs.mkdir(`${__dirname}/dec-2020/18.00`, {recursive: true},  (err) => {
//     console.log(err);
// })

// const filePath = __dirname + '/dec-2020/18.00/Student1.json';

// fs.writeFile(filePath, 'Stud1', err => {
//     if (err) {
//         console.log(err);
//     }
// })


// fs.readFile(filePath, (err, data) => {
//         if (err) {
//         console.log('____________');
//         console.log(err);
//         console.log('____________');
//         return
//     }
//         console.log(data.toString())
// })



// fs.readdir(`${__dirname}/movies/home`, (err, files) => {
//         if (err) {
//         console.log('____________');
//         console.log(err);
//         console.log('____________')
//             return
//     }
//
//         files.forEach(file => {
//             fs.stat(`${__dirname}/movies/home/${file}`, (statErr, FileStats) => {
//                 if (statErr) {
//                     console.log('____________');
//                     console.log(statErr);
//                     console.log('____________')
//                     return
//                 }
//                 console.log('****');
//                 console.log(FileStats.isFile());
//                 console.log('****');
//             });
//         })
// })

// fs.rmdir(`${__dirname}/movies/home`, {recursive:true}, err => {
//     if (err) {
//         console.log('____________');
//         console.log(err);
//         console.log('____________')
//         }
// })

// fs.unlink(filePathToDelete, err => {
//         if (err) {
//         console.log('____________');
//         console.log(err);
//         console.log('____________')
//         }
// });

// fs.rename(filePath2, filePathNew, err => {
//             if (err) {
//         console.log('____________');
//         console.log(err);
//         console.log('____________')
//         }
// })

// const path = require('path');
//
// let s = path.join(__dirname, 'movies', 'xx', 'test', 'zz.mp4');
//
// console.log(s);