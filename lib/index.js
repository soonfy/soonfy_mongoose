/**
 * @file the demo of index.md method, property
 * @author soonfy <https://github.com/soonfy>
 */

const mongoose = require('mongoose');

/**
 * 
 * @method connect
 * 
 * @method createConnection
 * 
 * @method disconnect
 * 
 * @method set
 * 
 * @method get
 * 
 * @method modelNames
 * 
 * @property connection
 * 
 * @property mongo
 * 
 * @property mquery
 * 
 * @property SchemaTypes
 * 
 * @property Types
 * 
 * @property version
 * 
 */
(function () {
  // @property mongo
  // console.log(mongoose.mongo);

  // @property mquery
  // console.log(mongoose.mquery);

  // @property SchemaTypes
  // console.log(mongoose.SchemaTypes);

  // @property Types
  // console.log(mongoose.Types);

  // @property version
  // console.log(mongoose.version);

  // @method set
  mongoose.set('author', 'soonfy');

  // @method get
  const author = mongoose.get('author');
  console.log('author', author);

  // console.log(mongoose.modelNames());

  let options, connect,
  uri = 'mongodb://localhost/db1';

  // options
  // options = {
  //   db: {
  //     native_parser: true
  //   },
  //   replset: {
  //     strategy: 'ping',
  //     rs_name: 'testSet'
  //   },
  //   server: {
  //     auto_reconnect: true
  //   },
  //   user: 'username',
  //   pass: 'mypassword',
  //   replicaSet: 'replicaSet_id',
  //   mongos: true
  // }

  // @method connect
  // options不能是undefined
  options = options || null;
  connect = mongoose.connect(uri, options, function (error) {
    if(error){
      console.log(error);
      return;
    }
    console.log('connect mongo success...');
  });

  // @method createConnection
  // 不能捕获error，try-catch也没用
  mongoose.createConnection(uri);

  // mongoose method
  // console.log('mongoose method...');
  // for(let method in connect){
  //   console.log(method);
  // }

  // connections attribute
  // console.log('connections attribute...');
  // for(let nav in connect.connections[0]){
  //   console.log(nav);
  // }

  // @property connection
  // mongoose.connect(uri);
  // mongoose.connection.on('error', function (error) {
  //   console.log(error);
  // })

  // @method disconnect
  mongoose.disconnect(function () {
    console.log('disconnect mongo success...');
  });
})()
