const Promise = require("bluebird");
const fs = require("fs");
Promise.promisifyAll(fs);
fs.readFileAsync('data.txt', 'utf-8')
  .then(data => {
    return new Promise((resolve, reject) => {
      const re = /\+91\d{10}(?![0-9])/g;
      resolve(data.match(re));
    });
  })
  .then(arr => fs.writeFileAsync('phoneNum.txt', arr.toString()))
  .then(() => fs.readFileAsync('phoneNum.txt', 'utf-8'))
  .then(data => {
    console.log("Created a file phoneNum.txt Plz check it using command: cat phoneNum.txt");
  })
  .catch(err => {
    console.log(err);
  });