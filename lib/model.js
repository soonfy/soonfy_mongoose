/**
 * @file the demo of model.md method, property
 * @author soonfy <https://github.com/soonfy>
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/dbname')
const schema = new Schema({
  name: String,
  age: Number,
  birth: Date
})

const Model = mongoose.model('col', schema, 'col')

mongoose.set('debug', true);

/**
 * 
 */

(function () {

  const arr = [{
    name: 'oops',
    age: 10,
    birth: new Date
  },
  {
    name: 'datas',
    age: 8,
    birth: new Date
  }]
  // Model.create(arr, function (error, docs) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(docs);
  // })

  // $where
  Model.$where('this.name.indexOf("s") !== -1').exec(function (error, docs) {
    if(error){
      console.log(error);
      return;
    }
    console.log(docs);
  })

  mongoose.disconnect();
})()