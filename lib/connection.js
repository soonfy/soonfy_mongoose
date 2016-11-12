/**
 * @file the demo of connection.md method, property
 * @author soonfy <https://github.com/soonfy>
 */

const mongoose = require('mongoose');

/**
 * 
 * @method open
 * 
 * @method dropDatabase
 * 
 * @method close
 * 
 * @method collection
 * 
 * @method model
 * 
 * @method modelNames
 * 
 * @property config
 * 
 * @property db
 * 
 * @property collections
 * 
 * @property readyState
 * 
 */

(function () {
  const uri = 'mongodb://localhost/db1';
  const host = 'localhost',
    dbname = 'db1',
    dbport = '27017',
    options = null;

  const Schema = mongoose.Schema,
    tbs = new Schema({
      name: String,
      age: Number
    })

  const db = mongoose.createConnection();

  db.on('connecting', function () {
    console.log('listening connecting mongo...');
  })
  db.on('connected', function () {
    console.log('listening connected mongo...');
  })
  db.on('open', function () {
    console.log('listening open mongo...');
  })
  db.on('disconnecting', function () {
    console.log('listening disconnecting mongo...');
  })
  db.on('disconnected', function () {
    console.log('listening disconnected mongo...');
  })
  db.on('close', function () {
    console.log('listening close mongo...');
  })
  db.on('reconnected', function () {
    console.log('listening reconnected mongo...');
  })
  db.on('error', function () {
    console.log('listening error mongo...');
  })
  db.on('fullsetup', function () {
    console.log('listening fullsetup mongo...');
  })
  db.on('all', function () {
    console.log('listening all mongo...');
  })


  // open uri
  // db.open(uri, function (error) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log('mongo open success...');
  // })

  // open options
  db.open(host, dbname, dbport, options, function (error) {
    if(error){
      console.log(error);
      return;
    }
    console.log('mongo open success...');
  })

  // dropDatabase
  // db.dropDatabase(function (error) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log('drop database success...');
  // })

  // collection
  console.log(db.collection('tb1'));

  // model
  console.log(db.model('tb1', tbs, 'tb1'));
  db.model('tb2', tbs, 'tb2');
  
  // modelNames
  console.log(db.modelNames());

  // config
  console.log(db.config);

  // db
  console.log(db.db);

  // collections
  console.log(db.collections);

  // readyState
  console.log(db.readyState);

  // close
  db.close(function (error) {
    if(error){
      console.log(error);
      return;
    }
    console.log('mongo close success...');
  });
})()