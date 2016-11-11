/**
 * @file the demo of index.md
 * @author soonfy <https://github.com/soonfy>
 */

const mongoose = require('mongoose');

/**
 * connect mongo.
 * @method connect
 * @param url
 * @param options
 * @param function
 */
(function () {
  let options, connect,
  url = 'mongodb://localhost',
  urls = 'mongodb://host,host?authSource=database&replicaSet=<_id>';

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

  //connect url
  connect = mongoose.connect(url, options);

  //connect urls
  // connect = mongoose.connect(urls, options);

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