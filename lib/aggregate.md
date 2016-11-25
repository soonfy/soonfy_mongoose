# Aggregate类  

## addCursorFlag(flag, value)  
**方法**  
> 创建cursor flag  

**参数：**  
* flag **String**  
* value **Boolean**  

## Aggregate([options])  
**方法**  
> 创建聚合对象  

**参数：**  
* [options] **Object**  

**示例：**  
```
new Aggregate({ $project: { a: 1, b: 1 } }, { $skip: 5 });
```

## allowDiskUse(bool, [tags])  
**方法**  
> allowDiskUse选项  

**参数：**  
* bool **Boolean**  
* [tags] **Array**  

**示例：**  
```
Model.aggregate({ $match: { age: { $gte: 21 }}}).allowDiskUse(true).exec(callback)
```

## append([options])  
**方法**  
> 追加聚合条件  

**参数：**  
* [options] **Object**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
Model.aggregate({ $match: { age: { $gte: 21 }}})aggregate.append({ $project: { field: 1 }}, { $limit: 2 });
```

## cursor(options)  
**方法**  
> cursor选项  

**参数：**  
* options **Object**  

**示例：**  
```
var cursor = Model.aggregate(..).cursor({ batchSize: 1000 }).exec();
```

## exec([cb])  
**方法**  
> 执行  

**参数：**  
* [cb] **Function**  

**返回值：**  
* **Promise**  

**示例：**  
```
var promise = Model.aggregate(..).exec();
```

## explain(cb)  
**方法**  
> 执行  

**参数：**  
* cb **Function**  

**返回值：**  
* **Promise**  

**示例：**  
```
var promise = Model.aggregate(..).explain(cb);
```

## group(args)  
**方法**  
> $group操作符分组  

**参数：**  
* args **Object**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.group({ _id: "$department" });
```

## limit(val)  
**方法**  
> $limit操作符限定  

**参数：**  
* val **Number**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.limit(10);
```

## lookup(options)  
**方法**  
> $lookup操作符  

**参数：**  
* options **Object**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.lookup({ from: 'users', localField: 'userId', foreignField: '_id', as: 'users' });
```

## match(args)  
**方法**  
> $match操作符  

**参数：**  
* args **Object**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.match({ department: { $in: [ "sales", "engineering" } } });
```

## model(model)  
**方法**  
> 绑定model  

**参数：**  
* model **String**  

**返回值：**  
* **Aggregate**  

## near(args)  
**方法**  
> $geoNear操作符  

**参数：**  
* args **Object**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.near({
  near: [40.724, -73.997],
  distanceField: "dist.calculated", // required
  maxDistance: 0.008,
  query: { type: "public" },
  includeLocs: "dist.location",
  uniqueDocs: true,
  num: 5
});
```

## project(args)  
**方法**  
> $project操作符  

**参数：**  
* args **Object**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.project({a: 1, b: 1, _id: 0});
```

## read(pref, [tags])  
**方法**  
> readPreference选项  

**参数：**  
* pref **String**  
* [tags] **Array**  

**示例：**  
```
Model.aggregate(..).read('primaryPreferred').exec(callback)
```

## sample(size)  
**方法**  
> $sample操作符  

**参数：**  
* size **Number**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.sample(3);
```

## skip(size)  
**方法**  
> $skip操作符  

**参数：**  
* size **Number**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.skip(10);
```

## sort(args)  
**方法**  
> $sort操作符  

**参数：**  
* args **Object**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.sort({ field: 'asc', test: -1 });
```

## then([resolve], [reject])  
**方法**  
> 处理  

**参数：**  
* [resolve] **Function**  
* [reject] **Function**  

**返回值：**  
* **Promise**  

**示例：**  
```
Model.aggregate(..).then(successCallback, errorCallback);
```

## unwind(fields)  
**方法**  
> $unwind操作符  

**参数：**  
* fields **String**  

**返回值：**  
* **Aggregate**  

**示例：**  
```
aggregate.unwind("a", "b", "c");
```