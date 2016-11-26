# mongoose_sf  

## [mongo](https://docs.mongodb.com/manual/reference/)  

## [node-mongodb-native](http://mongodb.github.io/node-mongodb-native/2.0/api/)  

## [mongoose](http://mongoosejs.com/docs/api.html)  

## custom options  
  1. mongo connect uri format  
  ```
  mongodb://user:pass@host:port/database
  ```

  2. connect options  
  ```
  config, db, server, replset, user, pass, auth, mongos
  ```

  3. error message templating  
  ```
  {PATH}, {VALUE}, {TYPE}, {MIN}, {MAX}
  ```

  4. update options  
  ```
  safe, upsert, multi, runValidators, setDefaultsOnInsert, strict, overwrite, context
  ```

## custom method  
  1. connect mongo uri  
  ```
  mongoose.connect('mongodb://localhost:dbname');
  ```

  2. create schema  
  ```
  const Schema = mongoose.Schema;
  const validator = [cb, '{PATH} not {VALUE}'];
  const match = [/\w+/g, '{PATH} is not word. ({VALUE})'];
  const maxlength = [16, '{PATH} length exceeds {MAXLENGTH}. ({VALUE})'];
  const minlength = [6, '{PATH} length less {MINLENGTH}. ({VALUE})'];
  const max = [16, '{PATH} exceeds {MAX}. ({VALUE})'];
  const min = [6, '{PATH} less {MIN}. ({VALUE})'];
  const maxDate = [Date('2020-10-22'), '{PATH} exceeds {MAX}. ({VALUE})'];
  const minDate = [Date('2010-10-22'), '{PATH} less {MIN}. ({VALUE})'];
  const SchemaName = new Schema({
    all: {
      type: String,
      default: 'soonfy',
      required: true,
      index: true,
      get: cb(){},
      set: cb(){},
      unique: true,
      sparse: true,
      text: true,
      validate: validator,
    }
    name: {
      type: String,
      enum: ['soonfy', 'sf'],
      trim: true,
      lowercase: true,
      // uppercase: true
      match: match,
      maxlength: maxlength,
      minlength: minlength
    },
    age: {
      type: Number,
      max: max,
      min: min
    },
    crawledAt: {
      type: Date,
      expires: '1d',
      max: maxDate,
      min: minDate
    }
  })
  ```

  3. create model  
  ```
  mongoose.model(ModelName, SchemaName, CollectionName);
  ```

  4. create collection  
  ```
  ModelName.create({name: 'soonfy'}, {name: 'sf'});
  ModelName.create([{name: 'soonfy'}, {name: 'sf'}]);
  ```

  5. insert many docs  
  ```
  ModelName.insertMany([{name: 'soonfy'}, {name: 'sf'}]);
  ```

  6. find docs  
  ```
  ModelName.find({name: 'soonfy'}, {name: 1, age: 1, _id: 0}, {skip: 10, limit: 10});
  ModelName.findOne({name: 'soonfy'}, {name: 1, age: 1, _id: 0});
  ModelName.findById(_id, {name: 1, age: 1, _id: 0});
  ```

  7. update docs  
  ```
  ModelName.update({name: 'soonfy'}, {age: 18}, {safe: true, upsert: true, multi: true});
  ```

  8. remove docs  
  ```
  ModelName.remove({name: 'soonfy'});
  ```

  9. count docs  
  ```
  ModelName.count({name: 'soonfy'});
  ```

  10. distinct docs  
  ```
  ModelName.distinct('name', {age: 18});
  ```

  11. increment doc version  
  ```
  ModelName.find({age: 18}, function(err, doc){doc.increment(); });
  ```

  12. find and modify docs  
  ```
  ModelName.findOneAndUpdate({name: 'soonfy'}, {age: 18}, {new: true, upsert: true, fields: {name: 1, age: 1}, maxTimeMS: 1000 * 60, sort: {age: 1}});
  ModelName.findOneAndRemove({name: 'soonfy'}, {select: {name: 1, age: 1}, maxTimeMS: 1000 * 60, sort: {age: 1}});
  ModelName.findByIdAndUpdate(_id, {age: 18}, {new: true, upsert: true, select: {name: 1, age: 1}, sort: {age: 1}});
  ModelName.findByIdAndRemove(_id, {select: {name: 1, age: 1}, sort: {age: 1}});
  ```

  13. save docs  
  ```
  doc.save();
  ```

  14. aggregate collection  
  ```
  ModelName.aggregate({$group: {_id: null, maxBalance: {$max: '$balance'}}}, {$project: {_id: 0, maxBlance: 1}});
  ```

  15. map-reduce collection  
  ```
  ModelName.mapReduce({map: function(){emit this.name}, reduce: function(key, values){return values.length}, query: {name: 'soonfy'}, sort: {age: 1}, limit: 10,  out: {inline: 1, replace: ResultCollectionName}});
  ```

  16. advanced query  
  ```
  ModelName.find().all('pages', [1, 2]);
  ModelName.find().and([{name: 'soonfy'}, {age: 2}]);
  ModelName.find().comment('doc comment');
  ModelName.find().count({age: 1});
  ModelName.find().distinct('name', {age: 1});
  ModelName.find().elemMatch('age', {$lte: 2});
  ModelName.where('age').equals(1);
  ModelName.find().exists('name', true);
  ModelName.find().gt('age', 2);
  ModelName.find().gte('age', 2);
  ModelName.find().lt('age', 2);
  ModelName.find().lte('age', 2);
  ModelName.find().in('age': [1, 2]);
  ModelName.find().lean();      //mongoose.Document => object
  ModelName.find().limit(10);
  ModelName.find().maxScan(10);
  ModelName.find().mod('age', [2, 1]);        //取模
  ModelName.find().ne('age': 2);
  ModelName.find().nin('age', [1, 2]);
  ModelName.find().nor([{name: 'soonfy'}, {age: 2}]);
  ModelName.find().or([{name: 'soonfy'}, {age: 2}]);
  ModelName.find().regex('name', /so/);
  ModelName.find().select({name: 1, _id: 0});
  ModelName.find().size('pages', 2);          //数组长度
  ModelName.find().skip(10);
  ModelName.find().slice('pages', [1, 3]);      //截取数组
  ModelName.find().sort({name: 'asc', age: 1});
  ```