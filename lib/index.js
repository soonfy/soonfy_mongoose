/**
 * @file the demo of index.md
 * @author soonfy <https://github.com/soonfy>
 */

const mongoose = require('mongoose');
// console.log(mongoose.get('debug'));

/**
 * connect mongo.
 * @method connect
 * @param uri
 * @param options
 * @param function
 */
(function () {
  let options, connect,
  uri = 'mongodb://localhost/db1';

  //options
  // options = {
    // db: {
    //   native_parser: true
    // },
    // replset: {
    //   strategy: 'ping',
    //   rs_name: 'testSet'
    // },
    // server: {
    //   auto_reconnect: true
    // },
    // user: 'username',
    // pass: 'mypassword',
    // replicaSet: 'replicaSet_id',
    // mongos: true
  // }

  //connect uri
  connect = mongoose.connect(uri, options);

  //connect uris
  // connect = mongoose.connect(uris, options);

  //Mongoose method
  console.log('mongoose method...');
  for(let method in connect){
    console.log(method);
  }

  //connections attribute
  console.log('connections attribute...');
  for(let nav in connect.connections[0]){
    console.log(nav);
  }

  //disconnect
  mongoose.disconnect();
})()
