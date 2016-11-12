
const mongoose = require('mongoose');
const uri = 'mongodb://localhost/db1';
mongoose.connect(uri);

const First = require('./model.js');
// console.log(First);
First.remove({}).exec();
let name = (function () {
  const count = 4;
  const str = 'qwertyuiopasdfghjklzxcvbnm';
  const num = '1234567890';
  let time = 1,
    names = [];
  while(time <= count){
    const pos = Math.floor(Math.random() * 25);
    names.push(str.slice(pos, pos + 1));
    time++;
  }
  time = 1;
  while(time <= count){
    const pos = Math.floor(Math.random() * 9);
    names.push(num.slice(pos, pos + 1));
    time++;
  }
  return names.join('');
})();
const age = Math.floor(Math.random() * 9);
const first = new First({name, age});
first.save();

// let firsts = First.find({}).exec();
// firsts.then(function (first) {
//   console.log(first);
// }).catch(function (error) {
//   console.log(error);  
// })

console.log('disconnect mongo');
mongoose.disconnect();