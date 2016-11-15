/**
 * @file the demo of model.md method, property
 * @author soonfy <https://github.com/soonfy>
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/dbname')
const schema = new Schema({
  id: Number,
  name: String,
  age: Number,
  birth: Date,
  follower: Number
})

// const OModel = mongoose.model('ocol', schema, 'ocol')
const Model = mongoose.model('col', schema, 'col');

mongoose.set('debug', true);

/**
 * 
 * @method $where
 * 
 * @method increment
 * 
 * @method model
 * 
 * @method remove
 * 
 * @method save
 * 
 * @method aggregate
 * 
 * @method count
 * 
 * @method create
 * 
 * @method distinct
 * 
 * @method find
 * 
 * @method findById
 * 
 */

(function () {

  // const arr = [];
  // let time = 11;
  // while(time <= 15){
  //   const doc = {
  //     id: time,
  //     name: 'datas',
  //     age: Math.floor(Math.random() * 10 + 1),
  //     birth: new Date,
  //     follower: Math.floor(Math.random() * 10 + 10)
  //   }
  //   arr.push(doc);
  //   time++;
  // }

  // create
  // Model.create(arr, function (error, docs) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(docs);
  // })
  // or
  // Model.create(arr).then(function (docs) {});

  // remove all
  // Model.remove(function (error, doc) {
  //   if(error || !doc){
  //     console.log(error);
  //     return;
  //   }
  // })

  // $where
  // Model.$where('this.name.indexOf("s") !== -1').exec(function (error, docs) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(docs);
  // })

  // increment
  // Model.findOne({}, function(error, doc){
  //   if(error || !doc){
  //     console.log(error);
  //     return;
  //   }
  //   doc.increment();
  //   doc.save(function (error) {
  //     if(error){
  //       console.log(error);
  //     }
  //   });
  // })

  // model
  // OModel.model('col').findOne({}, function(error, doc){
  //   if(error || !doc){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(doc);
  // })

  // remove
  // Model.findOne({}, function (error, docu) {
  //   if(error || !docu){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(docu);
  //   docu.remove(function (error, doc) {
  //     if(error){
  //       console.log(error);
  //       return;
  //     }
  //     console.log(doc);
  //     Model.findOne({name: doc.name}, function (error, doc) {
  //       if(error || !doc){
  //         console.log(error);
  //         return;
  //       }
  //       console.log(doc);
  //     })
  //   })
  // })

  // save
  // Model.findOne({}, function(error, doc){
  //   if(error || !doc){
  //     console.log(error);
  //     return;
  //   }
  //   doc.increment();
  //   doc.save(function (error, doc, numAffected) {
  //     if(error){
  //       console.log(error);
  //     }
  //     console.log(doc);
  //     console.log(numAffected);
  //   });
  // })

  // aggregate
  // Model.aggregate(
  //   {$group: {_id: '$name', maxFollower: {$max: '$follower'}}},
  //   {$project: {_id: 1, maxFollower: 1}},
  //   function (error, docs) {
  //     if(error){
  //       console.log(error);
  //       return;
  //     }
  //     console.log(docs);
  //   });
  // or
  // Model.aggregate()
  // .group({_id: '$name', maxFollower: {$max: '$follower'}})
  // .project({_id: 1, maxFollower: 1})
  // .exec(function (error, docs) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(docs);
  // })

  // count
  // Model.count({name: 'oops'}, function (error, len) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(len);
  // })

  // distinct
  // Model.distinct('name', {age: 3}, function (error, docs) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(docs);
  // })
  // or
  // Model.distinct('name')
  //   .exec(function (error, docs) {})

  // find
  Model.find({name: 'oops', age: 3});
  Model.find({name: /oo/i, age: 3});
  Model.find({name: 'oops', age: 3}, 'name age');
  Model.find({name: 'oops', age: 3}, {name: 1, age: 1, birth: 0});
  Model.find({name: 'oops', age: 3}, '-_id -birth');
  Model.find({name: 'oops', age: 3}, {_id: 0, birth: 0});
  Model.find({name: 'oops', age: 3}, {name: 1, age: 1, _id: 0}, {skip: 1, limit: 1});
  Model.find({name: 'oops', age: 3}, {name: 1, age: 1, _id: 0}, function (error, docs) {
    if(error){
      console.log(error);
      return;
    }
    console.log(docs);
  });
  // Model.find({name: /oo/i, age: 3}).exec(function (error, docs) {});

  // findById
  Model.findById('582a7c72134d4a75510ac35c', {name: 1, age: 1, _id: 0}, function (error, doc) {
    if(error){
      console.log(error);
      return;
    }
    console.log(doc);
  });

  // findByIdAndRemove
  Model.findByIdAndRemove('582a7c72134d4a75510ac35c', function (error, doc) {
    if(error){
      console.log(error);
      return;
    }
    console.log(doc);
  });

  Model.findByIdAndUpdate('582a7c97af086e76020f1a66', {$set: {age: 8}}).exec(function (error, doc) {
    if(error){
      console.log(error);
      return;
    }
    console.log(doc);
  });
  // Model.findByIdAndUpdate(id, {$set: {name: 'oops'}}).exec(function (error, doc) {});

  
  mongoose.disconnect();
})()