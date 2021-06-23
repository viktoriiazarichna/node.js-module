// const fs = require('fs')
//
// function switchStudents() {
//     fs.readdir(`${__dirname}/dec-2020/18.00`, (err, files) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         files.forEach(file => {
//             fs.rename(`${__dirname}/dec-2020/18.00/${file}`,  `${__dirname}/dec-2020/20.00/${file}`, err => {
//                 if (err) {
//                     console.log(err);
//
//                 }
//             })
//         })
//     })
//
//     fs.readdir(`${__dirname}/dec-2020/20.00`, (err, files) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         files.forEach(file => {
//             fs.rename(`${__dirname}/dec-2020/20.00/${file}`, `${__dirname}/dec-2020/18.00/${file}`, err => {
//                 if (err) {
//                     console.log(err);
//
//                 }
//             })
//         })
//     })
// }
//
// module.exports = switchStudents;