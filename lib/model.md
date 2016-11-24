# Model构造器  

## $where(args)  
**方法**  
> 新建查询条件  

**参数：**  
* args **String | Function**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.$where('this.name.indexOf("s") !== -1');
query.$where(function () {
  return this.comments.length === 10 || this.name.length === 5;
})
```

## increment()  
**方法**  
> 文档版本__v加1  

**示例：**  
```
Model.findOne({}, function(error, doc){
  if(error || !doc){
    console.log(error);
    return;
  }
  doc.increment();
  doc.save(function (error) {
    if(error){
      console.log(error);
    }
  });
})
```

## model(modelname)  
**方法**  
> 切换另外一个model  

**参数：**  
* modelname **String**  

**返回值：**  
* **Model**  

**示例：**  
```
const Model = mongoose.model('col1', new Schema);
Model.model('col').findOne({}, function(error, doc){
  if(error || !doc){
    console.log(error);
    return;
  }
  console.log(doc);
})
```

## Model(doc)  
**构造器**  
> 创建Model实例  

**参数：**  
* doc **Object**  

## remove([cb])  
**方法**  
> 移除文档  

**参数：**  
* [cb] **Function**  

**返回值：**  
* **Promise**  

**示例：**  
```
Model.findOne({}, function (error, docu) {
  if(error || !docu){
    console.log(error);
    return;
  }
  console.log(docu);
  docu.remove(function (error, doc) {
    if(error){
      console.log(error);
      return;
    }
    console.log(doc);
    Model.findOne({name: doc.name}, function (error, doc) {
      if(error || !doc){
        console.log(error);
        return;
      }
      console.log(doc);
    })
  })
})
doc.remove().then(function(doc){})
```

## save([options], [options.safe], [options.validateBeforeSave], [cb])  
**方法**  
> 保存文档  

**参数：**  
* [options] **Object**  
* [options.safe] **Object**  
* [options.validateBeforeSave] **Boolean**  
* [cb] **Function**  


**返回值：**  
* **Promise**  

**示例：**  
```
Model.findOne({}, function(error, doc){
  if(error || !doc){
    console.log(error);
    return;
  }
  doc.increment();
  doc.save(function (error) {
    if(error){
      console.log(error);
    }
  });
})
doc.save().then(function (error, doc, numAffected) {})
```

## aggregate([args], [cb])  
**方法**  
> 聚合  

**参数：**  
* [args] **Object | Array**  
* [cb] **Function**  


**返回值：**  
* **Promise | Aggregate**  

**示例：**  
```
Model.aggregate(
  {$group: {_id: '$name', maxFollower: {$max: '$follower'}}},
  {$project: {_id: 1, maxFollower: 1}},
  function (error, docs) {
    if(error){
      console.log(error);
      return;
    }
    console.log(docs);
  });
Model.aggregate()
  .group({_id: '$name', maxFollower: {$max: '$follower'}})
  .project({_id: 1, maxFollower: 1})
  .exec(function (error, docs) {
    if(error){
      console.log(error);
      return;
    }
    console.log(docs);
  })
```

## count(condition, [cb])  
**方法**  
> 聚合  

**参数：**  
* condition **Object**  
* [cb] **Function**  


**返回值：**  
* **Query**  

**示例：**  
```
Model.count({name: 'oops'}, function (error, len) {
  if(error){
    console.log(error);
    return;
  }
  console.log(len);
})
```

## create(docs, [cb])  
**方法**  
> 保存多个文档  

**参数：**  
* docs **Object | Array**  
* [cb] **Function**  


**返回值：**  
* **Promise**  

**示例：**  
```
Model.create(arr, function (error, docs) {
  if(error){
    console.log(error);
    return;
  }
  console.log(docs);
})
```

## discriminator(name, schema)  
**方法**  
> 鉴别器？  

**参数：**  
* name **String**  
* schema **Schema**  

## distinct(field, [conditions], [cb])  
**方法**  
> 创建distinct查询  

**参数：**  
* field **String**  
* [conditions] **Object**  
* [cb] **Function**  


**返回值：**  
* **Query**  

**示例：**  
```
Model.distinct('name', {age: 3}, function (error, docs) {
  if(error){
    console.log(error);
    return;
  }
  console.log(docs);
})

Model.distinct('name')
  .exec(function (error, docs) {})
```

## ensureIndexes([options], [cb])  
**方法**  
> 添加mongo的ensureIndexes指令  

**参数：**  
* [options] **Object**  
* [cb] **Function**  

**返回值：**  
* **Promise**  

**示例：**  
```
Model.ensureIndexes(function (error) {
  if(error){
    console.log(error);
  }
})
```

## find(conditions, [fields], [options], [cb])  
**方法**  
> 查找  

**参数：**  
* conditions **Object**  
* [fields] **Object**  
* [options] **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.find({name: 'oops', age: 3}, {name: 1, age: 1, _id: 0}, {skip: 1, limit: 1}).exec(function (error, docs) {});
```

## findById(id, [fields], [options], [cb])  
**方法**  
> 查找id  

**参数：**  
* id **Object | String | Number**  
* [fields] **Object**  
* [options] **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.findById(id, {name: 1, age: 1, _id: 0}).exec(function (error, doc) {});
```

## findByIdAndRemove(id, [options], [cb])  
**方法**  
> 删除id  

**参数：**  
* id **Object | String | Number**  
* [options] **Object**  
* [cb] **Function**  

**值域：**  
* sort **Object**  
* select **Object**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.findByIdAndRemove(id).exec(function (error) {});
```

## findByIdAndUpdate(id, [update], [options], [cb])  
**方法**  
> 更新id  

**参数：**  
* id **Object | String | Number**  
* [update] **Object**  
* [options] **Object**  
* [cb] **Function**  

**值域：**  
* new **Boolean**  
* upsert **Boolean**  
* runValidators **Boolean**  
* setDefaultsOnInsert **Boolean**  
* sort **Object**  
* select **Object**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.findByIdAndUpdate(id, {$set: {name: 'oops'}}).exec(function (error) {});
```

## findOne([conditions], [fields], [options], [cb])  
**方法**  
> 查询  

**参数：**  
* [conditions] **Object**  
* [projection] **Object**  
* [options] **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.findOne({name: 'oops', age: 3}, {name: 1, age: 1, _id: 0}, {skip: 1, limit: 1}).exec(function (error, docs) {});
```

## findOneAndRemove(conditions, [options], [cb])  
**方法**  
> 删除  

**参数：**  
* conditions **Object**  
* [options] **Object**  
* [cb] **Function**  

**值域：**  
* sort **Object**  
* maxTimeMS **Number**  
* select **Object**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.findOneAndRemove({_id: _id}).exec(function (error) {});
```

## findOneAndUpdate([conditions], [update], [options], [cb])  
**方法**  
> 更新  

**参数：**  
* [conditions] **Object**  
* [update] **Object**  
* [options] **Object**  
* [cb] **Function**  

**值域：**  
* new **Boolean**  
* upsert **Boolean**  
* fields **Object | Boolean**  
* runValidators **Boolean**  
* setDefaultsOnInsert **Boolean**  
* sort **Object**  
* select **Object**  
* passRawResult **Boolean**  

**返回值：**  
* **Query**  

**示例：**  
```
Model.findOneAndUpdate({_id: _id}, {name: name}).exec(function (error) {});
```

## geoNear(GeoJSON, options, [cb])  
**方法**  

## geoSearch(condition, options, [cb])  
**方法**  

## hydrate(obj)  
**方法**  

## insertMany(docs, [cb])  
**方法**  
> 插入多条数据  

**参数：**  
* docs **Array | Object**  
* [cb] **Function**  

**返回值：**  
* **Promise**  

**示例：**  
```
Model.insertMany([{name: name1}, {name2: name2}], function (error, docs) {});
```

## mapReduce(mr, [cb])  
**方法**  
> map-reduce  

**参数：**  
* mr **Object**  
* [cb] **Function**  

**值域：**  
* query **Object**  
* sort **Object**  
* limit **Number**  
* keeptemp **Boolean**  
* finalize **Function**  
* scope **Object**  
* jsMode **Boolean**  
* verbose **Boolean**  
* readPreference **String**  
* out **Object**  

**out值域：**  
* inline **1**  
* replace **collectionName**  
* reduce **collectionName**  
* merge **collectionName**  

**返回值：**  
* **Promise**  

**示例：**  
```
let mr = {
  map: function(){emit(this.name, 1)},
  reduce: function(k, vals){return vals.length},
  limit: 100,
  out: {replace: 'resultCollectionName'}
}
Model.mapReduce(mr, function (error, result) {});
```

## populate(docs, options, [cb])  
**方法**  
> 填充数据  

**参数：**  
* docs **Object**  
* options **Object**  
* [cb] **Function**  

**值域：**  
* path **String**  
* select **String**  
* match **Object**  
* model **String**  
* options **Object**  


**返回值：**  
* **Promise**  

**示例：**  
```
User.findById(id, function (err, user) {
  var opts = [
    { path: 'company', match: { x: 1 }, select: 'name' },
    { path: 'notes', options: { limit: 10 }, model: 'override' }
  ]
  User.populate(user, opts, function (err, user) {
    console.log(user);
  })
})
```

## remove(conditions, [cb])  
**方法**  
> 移除  

**参数：**  
* conditions **Object**  
* [cb] **Function**  

**返回值：**  
* **Query**  

**示例：**  
```
User.remove({_id: _id}).exec();
```

## update(conditions, doc, [options], [cb])  
**方法**  
> 更新  

**参数：**  
* conditions **Object**  
* docs **Object**  
* [options] **Object**  
* [cb] **Function**  

**值域：**  
* safe **Boolean**  
* upsert **Boolean**  
* multi **Boolean**  
* runValidators **Boolean**  
* setDefaultsOnInsert **Boolean**  
* strict **Boolean**  
* overwrite **Boolean**  

**返回值：**  
* **Query**  

**示例：**  
```
MyModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true }, function (err, raw) {
  if (err) return handleError(err);
  console.log('The raw response from Mongo was ', raw);
});
```

## where(path, [val])  
**方法**  
> 创建查询  

**参数：**  
* path **String**  
* [val] **Object**  

**返回值：**  
* **Query**  

**示例：**  
```
MyModel.where('name', /sf/i);
```

## base  
**属性**  

## baseModelName  
**属性**  

## collection  
**属性**  

## db  
**属性**  

## discriminators  
**属性**  

## modelName  
**属性**  

## schema  
**属性**  