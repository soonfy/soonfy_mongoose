# SchemaType构造器  

1. 方法  
  * default(value)  
  * get(method)  
  * index(options)  
  * required(required, [mesage])  
  * select(value)  
  * set(method)  
  * sparse(bool)  
  * text(bool)  
  * unique(bool)  
  * validate(validator, [message], [type])  
  

## SchemaType(path, [options], [instance])  
**构造器**  

**参数：**  
* path **String**  
* [options] **Object**  
* [instance] **String**  

## default(value)  
**方法**  
> 设置schemaType的默认值  

**参数：**  
* value **Any**  

**返回值：**  
* **defaultValue**  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const tb1s = new Schema({
  name: {
    type: String,
    default: 'name'
  },
  age: Number
})
tb1s.path('age').default(function () {
  return 0;
})
```

## get(method)  
**方法**  
> 设置schemaType的取值方法  

**参数：**  
* method **Function**  

**返回值：**  
* **SchemaType** this  

**示例：**  
```
const date = function(val){
  if(!val){
    return val;
  }
  return [val.getFullYear(), (val.getMonth() + 1), val.getDate()].join('-');
}
const uri = 'mongodb://localhost/db1';
const tb1s = new Schema({
  time: {
    type: Date,
    get: date
  },
  ctime: Date
})
tb1s.path('ctime').get(date);
tb1s.findOne({}, function(error, data){
  if(error || !data){
    return;
  }
  console.log(data.time);
})
// 高级用法
const inspector = function(val, schemaType){
  if(schemaType.options.required){
    return schematype.path + 'is required...';
  }else{
    return schematype.path + 'is not required...';
  }
}
const tb2s = new Schema({
  time: {
    type: Date,
    required: true,
    get: inspector
  },
  ctime: Date
})
tb2s.findOne({}, function(error, data){
  if(error || !data){
    return;
  }
  console.log(data.time);
})
```

## index(options)  
**方法**  
> 设置schemaType的索引  

**参数：**  
* options **Boolean | String | Object**  

**返回值：**  
* **SchemaType** this  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const tb1s = new Schema({
  name: {
    type: String,
    index: 'true'
  },
  age: Number,
  time: Date
})
tb1s.path('name').index('hashed');
tb1s.path('time').index({unique: true, type: '2dsphere', sparse: true, expires: '1d'});
```

## required(required, [mesage])  
**方法**  
> 设置schemaType的必须验证  

**参数：**  
* required **Boolean**  
* [message] **String**  

**返回值：**  
* **SchemaType** this  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const tb1s = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  time: {
    type: Date,
    required: '{PATH} is required...'
  }
})
tb1s.path('age').required(true, '{PATH} is required...');
```

## select(value)  
**方法**  
> 设置schemaType的select()方法, 默认是false  

**参数：**  
* value **Boolean**  

**返回值：**  
* **SchemaType** this  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const tb1s = new Schema({
  name: {
    type: String,
    select: true
  }
})
const Model1 = mongoose.model('tb1', tb1s, 'tb1');
Model1.find({}).select('-name').exec();
```

## set(method)  
**方法**  
> 添加schemaType的设置器  

**参数：**  
* method **Function**  

**返回值：**  
* **SchemaType** this  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const toLower = function (val) {
  return val.toLowerCase();
}
const tb1s = new Schema({
  name: {
    type: String,
    set: toLower
  },
  email: {
    type: String,
    lowercase: true
  }
})
tb1s.path('name').set(toLower);
```

## sparse(bool)  
**方法**  
> 设置schemaType的稀疏矩阵索引  

**参数：**  
* bool **Boolean**  

**返回值：**  
* **SchemaType** this  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const tb1s = new Schema({
  name: {
    type: String,
    sparse: true
  },
  email: {
    type: String,
    index: {
      sparse: true
    }
  }
})
tb1s.path('name').sparse(true);
```

## text(bool)  
**方法**  
> 设置schemaType的全文索引  

**参数：**  
* bool **Boolean**  

**返回值：**  
* **SchemaType** this  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const tb1s = new Schema({
  name: {
    type: String,
    text: true
  },
  email: {
    type: String,
    index: {
      text: true
    }
  }
})
tb1s.path('name').text(true);
```

## unique(bool)  
**方法**  
> 设置schemaType的唯一索引  

**参数：**  
* bool **Boolean**  

**返回值：**  
* **SchemaType** this  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const tb1s = new Schema({
  name: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    index: {
      unique: true
    }
  }
})
tb1s.path('name').unique(true);
```

## validate(validator, [message], [type])  
**方法**  
> 设置schemaType的校验器  

**参数：**  
* validator **RegExp | Function | Object**  
* [message] **String**  
* [type] **String**  


**返回值：**  
* **SchemaType** this  

**示例：**  
```
const uri = 'mongodb://localhost/db1';
const validator = function(val){
  return val === 'validator'
}
const single = [validator, 'single validator...'];
const multi = [{
  validator: validator,
  msg: 'first validator,  {PATH} does not equal {value}.'
},
{
  validator: validator,
  msg: 'last validator'
}]
const tb1s = new Schema({
  name: {
    type: String,
    validate: validator
  },
  email: {
    type: String,
    validate: single
  },
  age: {
    type: String,
    validate: multi
  }
})
```
