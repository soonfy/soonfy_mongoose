# 索引  

## Aggregate()  
  > Aggregate()构造器  

## CastError(type, value, path, [reason])  
  > CastError()构造器  

  **参数：**  
  * type <String>  
  * value <Any>  
  * path <String>  
  * [reason] <Error>  

## Collection()  
  > Collection()构造器  

## connect(uri(s), [options], [callback])  
  > 打开mongoose默认连接  

  **参数：**  
  * uri(s) <String>  
  * [options] <Object>  
  * callback <Function>  
  
  **返回值：**  
  * 伪(pseudo)promise封装(wrapper)的this  

  **参见：**  
  * [createConnection()]()  

  **示例：**  
  ```
  const mongoose = require('mongoose');
  let uri = 'mongodb://host/db';
  let connect = mongoose.connect(uri);
  //mongoose
  console.log(connect);
  //mongoose method
  for(let method in connect){
    console.log(method);
  }
  //default options
  {
    db: { forceServerObjectId: false, w: 1 },
    auth: {},
    server: { socketOptions: {}, auto_reconnect: true },
    replset: { socketOptions: {} },
    mongos: undefined
  }
  //example options
  let options = {
    replset: {
      strategy: 'ping',
      rs_name: 'testSet'
    },
    server: {
      auto_reconnect: true
    },
    user: 'username',
    pass: 'mypassword'
  }
  //uris
  let uris = 'mongodb://host/db, host/db';
  ```

  **备注：**  
  > connect()只能调用一次，就算disconnect()也不行，多次连接使用createConnection()  
  > uris使用不同的host，相同的host需要replicaSet._id  
  
## Connection()  
  > Connection()构造器  

## createConnection([uri], [options], [options.config], [option.config.autoIndex])  
  > 新建CreateConnection实例  

  **参数：**  
  * [uri] <String>  
  * [options] <Object>  
  * [options.config] <Object>  
  * [option.config.autoIndex] <Boolean>  
  
  **返回值：**  
  * Connection 对象  

  **示例：**  
  ```
  //uri
  mongoose.createConnection('mongodb://user:pass@localhost:port/database');
  //host+db+port
  mongoose.createConnection('localhost', 'database', port);
  //options auth
  let options = {
    server: {
      auto_reconnect: false
    },
    user: 'username',
    pass: 'mypassword'
  }
  mongoose.createConnection('localhost', 'database', port, options);
  ```

## disconnect([callback])  
  > 关闭所有连接  

  **参数：**  
  * [callback] <Function>  

  **返回值：**  
  * 伪(pseudo)promise封装(wrapper)的this  

## Document()  
  > Document()构造器  

## DocumentProvider()  
  > DocumentProvider()构造器  

## Error()  
  > Error()构造器  

## get(key)  
  > 返回mongoose options  

  **参数：**  
  * key <String>  

## model(name, [schema], [collection], [skipInit])  
