
const fs = require ('fs');


// fs.mkdir(`${__dirname}/dec-2020`, (err) => {
//     console.log(err);
// })

// fs.mkdir(`${__dirname}/dec-2020/20.00`, {recursive: true},  (err) => {
//     console.log(err);
// })

// fs.mkdir(`${__dirname}/dec-2020/18.00`, {recursive: true},  (err) => {
//     console.log(err);
// })

// const filePath = __dirname + '/dec-2020/20.00/Slava.json';

// fs.writeFile(filePath, 'Slava', err => {
//     if (err) {
//         console.log(err);
//     }
// })


const path = require('path')

let dirBoys = path.join(__dirname, 'dec-2020', 'boys');
let dirGirls = path.join(__dirname, 'dec-2020', 'girls');


// console.log(dirBoys);
// console.log(dirGirls);

// fs.mkdir(`${__dirname}/dec-2020/boys`, (err) => {
//     console.log(err);
// });
//
// fs.mkdir(`${__dirname}/dec-2020/girls`, (err) => {
//     console.log(err);
// });


//---Task1----
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


//---Task2----
// fs.readdir(`${__dirname}/dec-2020/18.00`, (err, files) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     files.forEach(file => {
//         fs.readFile(`${__dirname}/dec-2020/18.00/${file}`, (err1, data) => {
//             if (err1) {
//                 console.log(err1);
//                 return
//             }
//
//            const newFile = JSON.parse(data.toString())
//             if(newFile.gender === 'male') {
//                 fs.rename(`${__dirname}/dec-2020/18.00/${file}`, `${__dirname}/dec-2020/boys/${file}`, err1 => {
//                     if (err1) {
//                         console.log(err1);
//                     }
//                 })
//             } else {
//                 fs.rename(`${__dirname}/dec-2020/18.00/${file}`, `${__dirname}/dec-2020/girls/${file}`, err1 => {
//                     if (err1) {
//                         console.log(err1);
//                     }
//                 })
//             }
//
//         })
//
//
//     })
// })


fs.readdir(`${__dirname}/dec-2020/20.00`, (err, files) => {
    if (err) {
        console.log(err);
        return
    }
    files.forEach(file => {
        fs.readFile(`${__dirname}/dec-2020/20.00/${file}`, (err1, data) => {
            if (err1) {
                console.log(err1);
                return
            }

            const newFile = JSON.parse(data.toString())
            if(newFile.gender === 'male') {
                fs.rename(`${__dirname}/dec-2020/20.00/${file}`, `${__dirname}/dec-2020/boys/${file}`, err1 => {
                    if (err1) {
                        console.log(err1);
                    }
                })
            } else {
                fs.rename(`${__dirname}/dec-2020/20.00/${file}`, `${__dirname}/dec-2020/girls/${file}`, err1 => {
                    if (err1) {
                        console.log(err1);
                    }
                })
            }
        })
    })
})








