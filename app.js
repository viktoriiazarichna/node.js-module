// const { createUser, var22, myFunc}  = require('./dir/file');
// require('./dir/file');
//
// let userFunc = createUser ('Nadya', 'nadya.nik@gmail.com');
//
// console.log(userFunc);
//
// console.log(var22);
// console.log('"___________"');
//
// myFunc();
//
// (() => {
//    console.log('SELF FUNC')
// })();

const fs = require ('fs');

const filePath = __dirname + '/dir/dog2.txt';
const filePath1 = __dirname + '/dir/file.js';
const filePath2 = __dirname + '/dir/fileCopy.js';
const filePathToDelete = __dirname + '/dir/ada.php';
const filePathNew = __dirname + '/movies/hello.world';

console.log(filePath);


// fs.writeFile(filePath, 'Hello world dec-2021', err => {
//     if (err) {
//         console.log('____________');
//         console.log(err);
//         console.log('____________')
//     }
// })

// fs.appendFile(filePath, 'Hi man \n', err => {
//     if (err) {
//         console.log('____________');
//         console.log(err);
//         console.log('____________')
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

// fs.mkdir(`${__dirname}/movies/home`, {recursive: true},  (err) => {
//     console.log(err);
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

const path = require('path');

let s = path.join(__dirname, 'movies', 'xx', 'test', 'zz.mp4');

console.log(s);