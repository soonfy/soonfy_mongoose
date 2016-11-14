# Schema构造器  

1. 方法  
  * add(fields, [prefix])  
  * eachPath(callback)  
  * get(option)  
  * index(fields, [options], [options.expires=null])  
  * indexes()  
  * method(name, function)  
  * path(field, [schemaType])  
  * pathType(field)  
  * plugin(cb, [options])  
  * post(method, cb)  
  * pre(method, cb)  
  * queue(method, args)  
  * remove(fields)  
  * requiredPaths(bool)  
  * set(option, [value])  
  * static(method, [cb])  
  * virtual(property, [options])  
  * virtualpath(virtualname)  

2. 属性  
  * indexTypes  
  * reserved  
  * Types  
  * obj  

## Schema(fields, [options])  

**参数：**  
* fields **Object**  
* [options] **Object**  

**返回值：**  
* **Schema** this  

**options**  
```
autoIndex, bufferCommands, capped, collection, emitIndexErrors, id, _id, minimize, read,
safe, shardKey, strict, toJSON, toObject, typeKey, useNestedStrict, validateBeforeSave, versionKey
```

## add(fields, [prefix])  
**方法**  
> 添加schema的键值对  

**参数：**  
* fields **Object**  
* [prefix] **String**  

**示例：**  
```
const schema = new Schema();
schema.add({name: String});
```

## eachPath(callback)  
**方法**  
> 遍历schema的键值对  

**参数：**  
* eachPath **Function**  

**返回值：**  
* **Schema** this  

**示例：**  
```
const cb = function (path, schematype) {
  console.log(path);
  console.log(schematype);
}
schema.eachPath(cb);
```

## get(option)  
**方法**  
> 获得schema的配置  

**参数：**  
* option **String**  

**值域：**  
```
retainKeyOrder, typeKey, id, noVirtualId, _id, noId, validateBeforeSave, read,
shardKey, autoIndex, minimize, discriminatorKey, versionKey, capped, bufferCommands, strict
```

**返回值：**  
* **String | Boolean**  

**示例：**  
```
schema.get('autoIndex');
```

## index(fields, [options], [options.expires=null])  
**方法**  
> 建立schema字段的索引  

**参数：**  
* fields **Object**  
* [options] **Object**  
* [options.expires=null] **String**  

**值域：**  
```
w, wtimeout, j, unique, sparse, background, dropDups, min, max, v, expireAfterSeconds, name
```

**返回值：**  
* **Schema** this  

**示例：**  
```
schema.index({name: 1}, {unique: true, background: true});
```

## indexes()  
**方法**  
> 建立schema层次的索引  

## method(name, function)  
**方法**  
> 给schema的文档的实例添加一个方法  

**参数：**  
* name **String**  
* function **Function**  

**返回值：**  
* **Schema** this  

**示例：**  
```
schema.method('log', function(){
  console.log('method...');
})
schema.method({
  first: function(){},
  last: function(){}
})
const Model = mongoose.model('col', schema);
const model = new Model();
model.log();
```

## path(field, [schemaType])  
**方法**  
> 获得或者设置schema的schemaType  

**参数：**  
* field **String**  
* [schemaType] **SchemaType**  

**返回值：**  
* **Schema** this  

**示例：**  
```
schema.path('name');
schema.path('name', Number);
```

## pathType(field)  
**方法**  
> 获得schema字段的pathType  

**参数：**  
* name **String**  

**返回值：**  
* **Schema** this  

**值域：**  
```
real, virtual, nested...
```

**示例：**  
```
schema.pathType('name');
```

## plugin(cb, [options])  
**方法**  
> schema添加插件  

**参数：**  
* cb **Function**  
* [options] **Object**  

**返回值：**  
* **Schema** this  

**示例：**  
```
const lastModify = function (schema, options) {
  schema.add({lastMod: Date});
  schema.pre('save', function (next) {
    this.lastMod = new Date;
    next();
  })
  if(options && options.index){
    schema.path('lastMod').index(options.index);
  }
}
schema.plugin(lastModify);
```

## post(method, cb)  
**方法**  
> schema方法添加完成后回调  

**参数：**  
* method **String**  
* cb **Function**  

**返回值：**  
* **Schema** this  

**示例：**  
```
schema.post('save', function(doc){
  console.log('saved...');
});
```

## pre(method, cb)  
**方法**  
> schema方法添加执行前回调  

**参数：**  
* method **String**  
* cb **Function**  

**返回值：**  
* **Schema** this  

**示例：**  
```
schema.pre('save', function(doc){
  console.log('start save...');
});
```

## queue(method, args)  
**方法**  
> schema添加事件队列  

**参数：**  
* method **String**  
* args **Array**  

**返回值：**  
* **Schema** this  

**示例：**  
```
const log = function(){
  console.log('log...');
}
schema.queue('save', [log]);
```

## remove(fields)  
**方法**  
> schema移除字段  

**参数：**  
* fields **String | Array**  

**返回值：**  
* **Schema** this  

**示例：**  
```
schema.remove('name');
schema.remove(['name', 'age']);
```

## requiredPaths(bool)  
**方法**  
> 获得schema必需字段  

**参数：**  
* bool **Boolean**  

**返回值：**  
* **Array**  

**示例：**  
```
schema.requiredPaths(false);
schema.requiredPaths(true);
```

## set(option, [value])  
**方法**  
> 设置或者获得schema的配置  

**参数：**  
* option **String**  
* [value] **Any**  

**值域：**  
```
retainKeyOrder, typeKey, id, noVirtualId, _id, noId, validateBeforeSave, read,
shardKey, autoIndex, minimize, discriminatorKey, versionKey, capped, bufferCommands, strict
```

**示例：**  
```
schema.set('autoIndex', false);
console.log(schema.set('autoIndex'));
```

## static(method, [cb])  
**方法**  
> schema静态方法  

**参数：**  
* method **String**  
* [cb] **Function**  

**返回值：**  
* **Schema** this  

**示例：**  
```
schema.static('findByName', function(name, cb){
  return this.find({name: name}, cb);
});
schema.static({
  findByAddr: function(){},
  findByAge: function(){}
})
const model = mongoose.model('User', schema);
User.findByName('name', function(error, users){
  // 
})
```

## virtual(property, [options])  
**方法**  
> schema虚拟字段  

**参数：**  
* property **String**  
* [options] **Object**  

**返回值：**  
* **VirtualType**  

**示例：**  
```
const virtual = schema.virtual('fullname');
virtual.get(function(){
  return this.name.first + ' ' + this.name.last;
})
virtual.set(function(name){
  const names = name.split(' ');
  this.name.first = names[0];
  this.name.last = names[1];
})
```

## virtualpath(virtualname)  
**方法**  
> 获得schema的VirtualType  

**参数：**  
* virtualname **String**  

**返回值：**  
* **VirtualType**  

**示例：**  
```
schema.virtualpath('fullname');
```

## indexTypes  
**属性**  
> 获得Schema类的索引类型  

**返回值：**  
* **Array**  

**值域：**  
```
[ '2d', '2dsphere', 'hashed', 'text' ]
```

**示例：**  
```
const Schema = mongoose.Schema;
Schema.indexTypes;
```

## reserved  
**属性**  
> 获得Schema类的保留字  

**返回值：**  
* **Object**  

**值域：**  
```
{ _posts: 1,
  _pres: 1,
  validate: 1,
  toObject: 1,
  set: 1,
  schema: 1,
  save: 1,
  modelName: 1,
  get: 1,
  isNew: 1,
  isModified: 1,
  init: 1,
  errors: 1,
  db: 1,
  collection: 1,
  removeListener: 1,
  listeners: 1,
  once: 1,
  on: 1,
  emit: 1 }
```

**示例：**  
```
const Schema = mongoose.Schema;
Schema.reserved;
```

## Types  
**属性**  
> 获得Schema类的类型  

**返回值：**  
* **Object**  

**值域：**  
```
{ String: { [Function: SchemaString] schemaName: 'String' },
  Number: { [Function: SchemaNumber] schemaName: 'Number' },
  Boolean: 
   { [Function: SchemaBoolean]
     schemaName: 'Boolean',
     '$conditionalHandlers': 
      { '$type': [Function],
        '$nin': [Function: handleArray],
        '$ne': [Function: handleSingle],
        '$in': [Function: handleArray],
        '$eq': [Function: handleSingle],
        '$all': [Function: handleArray] } },
  DocumentArray: { [Function: DocumentArray] schemaName: 'DocumentArray' },
  Embedded: [Function: Embedded],
  Array: { [Function: SchemaArray] schemaName: 'Array' },
  Buffer: { [Function: SchemaBuffer] schemaName: 'Buffer' },
  Date: { [Function: SchemaDate] schemaName: 'Date' },
  ObjectId: { [Function: ObjectId] schemaName: 'ObjectId' },
  Mixed: { [Function: Mixed] schemaName: 'Mixed' },
  Oid: { [Function: ObjectId] schemaName: 'ObjectId' },
  Object: { [Function: Mixed] schemaName: 'Mixed' },
  Bool: 
   { [Function: SchemaBoolean]
     schemaName: 'Boolean',
     '$conditionalHandlers': 
      { '$type': [Function],
        '$nin': [Function: handleArray],
        '$ne': [Function: handleSingle],
        '$in': [Function: handleArray],
        '$eq': [Function: handleSingle],
        '$all': [Function: handleArray] } } }
```

**示例：**  
```
const Schema = mongoose.Schema;
Schema.Types;
```

## obj  
**属性**  
> 获得schema实例的最初的对象  

**返回值：**  
* **Object | undefined**  

**示例：**  
```
const Schema = mongoose.Schema;
const schema = new Schema;
schema.obj;
```