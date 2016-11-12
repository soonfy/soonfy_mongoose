# Connection构造器  

1. 方法  
  * open(uri, [db], [port], [options], [callback])  
  * dropDatabase(callback)  
  * openSet(uris, [db], [options], [callback])  
  * close([callback])  
  * collection(name, [options])  
  * model(name, [schema], [collection])  
  * modelNames()  

2. 属性  
  * config  
  * db  
  * collections()  
  * readyState  

## Connection()  

**构造器**  
> 实际应用中，相当于db  

**事件**  
* connecting  
* connected  
* open  
* disconnecting  
* disconnected  
* close  
* reconnected  
* error  
* fullsetup  
* all    

**事件状态变化**  
> connecting -> connected -> open -> disconnecting -> disconnected -> close  

**事件监听**  
```
const mongoose = require('mongoose');
const db = mongoose.createConnection();
db.on('connecting', function () {
  console.log('listening connecting mongo...');
})
```

## open(uri, [db], [port], [options], [callback])  
**方法**  
> 连接单个mongodb  

**参数：**  
* uri <String>, uri/host  
* [db] <String>, db name  
* [port] <Number>, db port  
* [options] <Object>, options  
* [callback] <Function>  

**选项options**  
> config, db, server, replset, user, pass, auth  

## dropDatabase(callback)  
**方法**  
> 删除数据库  

**参数：**  
* callback <Function>  

**返回值：**  
* \<Promise\>  

## openSet(uris, [db], [options], [callback])  
  **方法**  
  > 打开mongo复本集  

  **参数：**  
  * uris <String>, uri/host  
  * [db] <String>, db name  
  * [options] <Object>, options  
  * [callback] <Function>  

## close([callback])  
  **方法**  
  > 关闭连接  

  **参数：**  
  * [callback] <Function>  
  
  **返回值：**  
  * <Connection> this  

## collection(name, [options])  
  **方法**  
  > 新建或者恢复一个连接  

  **参数：**  
  * name <String>  
  * [options] <Object>  

  **返回值：**  
  * <Collection>  

## model(name, [schema], [collection])  
  **方法**  
  > 定义或者恢复一个连接  

  **参数：**  
  * name <String>  
  * [schema] <Schema>  
  * [collection] <String>  

  **返回值：**  
  * <Model>  
  
## modelNames()  
  **方法**  
  > 获得model名称  

  **返回值：**  
  * <Array>  

## config  
  **属性**  
  > 获得连接的global options  

## db  
  **属性**  
  > 获得连接的db  

## collections  
  **属性**  
  > 获得连接的collections  
  
## readyState  
  **属性**  
  > 获得连接状态  

  **值域：**  
  * 0, disconnected  
  * 1, connected  
  * 2, connecting  
  * 3, disconnecting  
