# Query构造器  

## $where(js)  
**方法**  
> js语句查询  

**参数：**  
* js **Function | String**  

**返回值：**  
* **Query**  

**示例：**  
```
query.$where('this.comments.length === 10 || this.name.length === 5')
```

## all([path], vals)  
**方法**  
> $all操作符  

**参数：**  
* [path] **String**  
* vals **Array**  

**示例：**  
```
query.all([1, 2, 3])
```

## and(vals)  
**方法**  
> $and操作符  

**参数：**  
* vals **Array**  

**返回值：**  
* **Query**  

**示例：**  
```
query.and([{name: name}, {age: age}])
```

## batchSize(val)  
**方法**  
> batchSize选项  

**参数：**  
* val **Number**  

**示例：**  
```
query.batchSize(1000)
```

## box(val, Upper)  
**方法**  
> $box操作符  

**参数：**  
* val **Object**  
* Upper **Array**  

**返回值：**  
* **Query**  

**示例：**  
```
var lowerLeft = [40.73083, -73.99756]
var upperRight= [40.741404,  -73.988135]
query.box({ ll : lowerLeft, ur : upperRight })
```

## cast(model, [obj])  
**方法**  
> 转换为schema查询  

**参数：**  
* model **Model**  
* [obj] **Object**  

**返回值：**  
* **Object**  

## catch([reject])  
**方法**  
> 捕获错误  

**参数：**  
* [reject] **Function**  

**返回值：**  
* **Promise**  

## circle([path], area)  
**方法**  
> $center/$centerSphere操作符  

**参数：**  
* [path] **String**  
* area **Object**  

**返回值：**  
* **Query**  

## comment(val)  
**方法**  
> comment选项  

**参数：**  
* val **String**  

**返回值：**  
* **Query**  

**示例：**  
```
query.comment('login query')
```

## count([condition], [cb])  
**方法**  
> 总数  

**参数：**  
* [condition] **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
model.where({ 'color': 'black' }).count();
```

## cursor([options], [cb])  
**方法**  
> 总数  

**参数：**  
* [options] **Object**  

**返回值：**  
* **QueryCursor**  

## distinct([field], [condition], [cb])  
**方法**  
> 区别  

**参数：**  
* [field] **String**  
* [condition] **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

## elemMatch(path, condition)  
**方法**  
> $elemMatch操作符  

**参数：**  
* path **String | Object | Function**  
* condition **Object | Function**  

**返回值：**  
* **Query**  

**示例：**  
```
query.elemMatch('comment', { author: 'autobot', votes: {$gte: 5}})
```

## equals(val)  
**方法**  
> 比较  

**参数：**  
* val **String | Number**  

**返回值：**  
* **Query**  

**示例：**  
```
User.where('age').equals(49);
```

## exec([operation], [cb])  
**方法**  
> 执行  

**参数：**  
* [operation] **String | Function**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
query.exec();
```

## exists([path], val)  
**方法**  
> $exists操作符  

**参数：**  
* [path] **String**  
* [val] **Number | Boolean | String**  

**返回值：**  
* **Query**  

**示例：**  
```
Thing.find().exists('name', false);
```

## find([condition], [cb])  
**方法**  
> 查询  

**参数：**  
* [condition] **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
query.find({ name: 'Los Pollos Hermanos' }).find(callback)
```

## findOne([condition], [projection], [cb])  
**方法**  
> 查询  

**参数：**  
* [condition] **Object**  
* [projection] **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
query.findOne({ name: 'Los Pollos Hermanos' });
```

## findOneAndRemove([condition], [options], [cb])  
**方法**  
> 查询  

**参数：**  
* [condition] **Object**  
* [options] **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
query.findOneAndRemove({ name: 'Los Pollos Hermanos' });
```

## findOneAndUpdate([condition], [doc], [options], [cb])  
**方法**  
> 查询  

**参数：**  
* [condition] **Object**  
* [doc] **Object**  
* [options] **Object**  
* [cb] **Function**  

**值域：**  
* [new] **Boolean**  
* [upsert] **Boolean**  
* [fields] **String | Object**  
* [sort] **Object**  
* [maxTimeMS] **Number**  
* [runValidators] **Boolean**  
* [passRawResult] **Boolean**  
* [context] **String**  

**返回值：**  
* **Query**  

**示例：**  
```
query.findOneAndUpdate({ name: 'Los Pollos Hermanos' }, {name: name});
```

## geometry(obj)  
**方法**  
> $geometry操作符  

**参数：**  
* obj **Object**  

**返回值：**  
* **Query**  

## getQuery()  
**方法**  
> 返回查询条件  

**示例：**  
```
var query = new Query();
query.find({ a: 1 }).where('b').gt(2);
query.getQuery();
```

## getUpdate()  
**方法**  
> 返回更新条件  

**示例：**  
```
var query = new Query();
query.update({}, { $set: { a: 5 } });
query.getUpdate();
```

## gt([path], val)  
**方法**  
> $gt操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

**示例：**  
```
Thing.find().gt('age', 21)
```

## gte([path], val)  
**方法**  
> $gte操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

**示例：**  
```
Thing.find().gte('age', 21)
```

## hint(val)  
**方法**  
> $hint操作符  

**参数：**  
* val **Object**  

**返回值：**  
* **Query**  

**示例：**  
```
query.hint({ indexA: 1, indexB: -1})
```

## in([path], val)  
**方法**  
> $in操作符  

**参数：**  
* [path] **String**  
* val **Array**  

**返回值：**  
* **Query**  

**示例：**  
```
query.in([1, 2, 3])
```

## intersect([args])  
**方法**  
> intersect for geometry()  

**参数：**  
* [args] **Object**  

**返回值：**  
* **Query**  

## lean(bool)  
**方法**  
> mongoose document => object  

**参数：**  
* bool **Boolean**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.find().lean().exec(function (err, docs) {
  docs[0] instanceof mongoose.Document // false
});
```

## limit(val)  
**方法**  
> 限制个数  

**参数：**  
* val **Number**  

**返回值：**  
* **Query**  

**示例：**  
```
query.limit(20)
```

## lt([path], val)  
**方法**  
> $lt操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

**示例：**  
```
Thing.find().lt('age', 21)
```

## lte([path], val)  
**方法**  
> $lte操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

**示例：**  
```
Thing.find().lte('age', 21)
```

## maxDistance([path], val)  
**方法**  
> $maxDistance操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

## maxScan(val)  
**方法**  
> $maxScan操作符  

**参数：**  
* val **Number**  

**返回值：**  
* **Query**  

**示例：**  
```
query.maxScan(100)
```

## merge(condition)  
**方法**  
> 合并查询  

**参数：**  
* condition **Object**  

**返回值：**  
* **Query**  

## mod([path], val)  
**方法**  
> $mod操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

## ne([path], val)  
**方法**  
> $ne操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

## near([path], val)  
**方法**  
> $near操作符  

**参数：**  
* [path] **String**  
* val **Object**  

**返回值：**  
* **Query**  

## nin([path], val)  
**方法**  
> $nin操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

## nor(array)  
**方法**  
> $nor操作符  

**参数：**  
* array **Array**  

**返回值：**  
* **Query**  

**示例：**  
```
query.nor([{ color: 'green' }, { status: 'ok' }])
```

## or(array)  
**方法**  
> $or操作符  

**参数：**  
* array **Array**  

**返回值：**  
* **Query**  

**示例：**  
```
query.or([{ color: 'green' }, { status: 'ok' }])
```

## polygon([path], [condition])  
**方法**  
> $polygon操作符  

**参数：**  
* [path] **String**  
* [condition] **Array | Object**  

**返回值：**  
* **Query**  

## populate(path, [select], [model], [match], [options])  
**方法**  
> 迁移数据  

**参数：**  
* path **String | Object**  
* [select] **String | Object**  
* [model] **Model**  
* [match] **Object**  
* [options] **Object**  

**示例：**  
```
Kitten.find().populate({
    path: 'owner'
  , select: 'name'
  , match: { color: 'black' }
  , options: { sort: { name: -1 }}
}).exec(function (err, kittens) {
  console.log(kittens[0].owner.name) // Zoopa
})
```

## read(pref, [tags])  

## regex([path], val)  
**方法**  
> $regex操作符  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

## remove([condition], [cb])  
**方法**  
> 移除  

**参数：**  
* [path] **String**  
* val **Number**  

**返回值：**  
* **Query**  

**示例：**  
```
query.remove({ artist: 'Anne Murray' }, callback)
```

## select(args)  
**方法**  
> 筛选  

**参数：**  
* args **Object | String**  

**返回值：**  
* **Query**  

**示例：**  
```
query.select('-c -d');
```

## selected()  
**方法**  
> 是否选择  

**返回值：**  
* **Boolean**  

## selectedExclusively()  
**方法**  
> 是否排除  

**返回值：**  
* **Boolean**  

## selectedInclusively()  
**方法**  
> 是否筛选  

**返回值：**  
* **Boolean**  

## setOptions(options)  
**方法**  
> 设置选项  

**值域：**  
* tailable  
* sort  
* limit  
* skip  
* maxscan  
* batchSize  
* comment  
* snapshot  
* hint  
* readPreference  
* lean  
* safe  

**返回值：**  
* **Boolean**  