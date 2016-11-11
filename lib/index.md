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
  > 定义model  

  **参数：**  
  * name <String>  
  * [schema] <Schema>  
  * [collection] <String>  
  * [skipInit] <Boolean>  
  
  **示例：**  
  ```
  //model
  mongoose.model('user', new Schema({ name: String }));
  //createConnection+model
  let conn = mongoose.createConnection(uri);
  let user = conn.model('user');
  ```

  **备注：**  
  * 不指定collection，name转换为复数当作集合名  
  * 可以使用schema.set('user')指定集合名  
  
## Model()  
  > Model()构造器  

## modelNames()  
  > 返回所有model名称  

  **返回值：**  
  * <Array>  

  **备注：**  
  * 不能返回connection.model()定义的model  

## Mongoose()  
  > Mongoose()构造器  

## plugin(method, [options])  
  > 给所有schema添加plugin  

  **参数：**  
  * method <Function>  
  * [options] <Object>  

  **返回值：**  
  * <Mongoose> this  

## Promise()  
  > Promise()构造器  

## PromiseProvider()  
  > mongoose promise存储层？？？  

## Query()  
  > Query()构造器  

## Schema()  
  > Schema()构造器  

## SchemaType()  
  > SchemaType()构造器  

## set(key, value)  
  > 设置mongoose options  

  **参数：**  
  * key <String>  
  * value <String | Boolean | Function>  

  **示例：**  
  ```
  mongoose.set('debug', true);
  mongoose.set('debug', function(collectionName, methodName, arg1, arg2...) {});
  ```

## VirtualType()  
  > VirtualType()构造器  

## connection  
  > mongoose default connection  

  **返回值：**  
  * <Connection>  

  **示例：**  
  ```
  const mongoose = require('mongoose');
  mongoose.connect(uri);
  mongoose.connection.on('error', callback);
  ```

## mongo  
  > mongoose使用的node-mongodb-native driver  

## mquery  
  > mongoose使用的mquery builder  

## SchemaTypes  
  > mongoose schema types  

## Types  
  > mongoose types  

## version  
  > mongoose版本  

  