/**
 * @file the demo of schemaType.md method, property
 * @author soonfy <https://github.com/soonfy>
 */

const mongoose = require('mongoose');
mongoose.set('debug', true);

/**
 * 
 * @method default
 * 
 * @method get
 * 
 * @method index
 * 
 * @method required
 * 
 * @method select
 * 
 * @method set
 * 
 * @method sparse
 * 
 * @method text
 * 
 * @method unique
 * 
 * @method validate
 * 
 */

(function () {
  const uri = 'mongodb://localhost/db1';
  mongoose.connect(uri);
  const Schema = mongoose.Schema;

  // default property, method
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
  const Model1 = mongoose.model('tb1', tb1s, 'tb1');
  const user = new Model1();
  console.log(user);

  // get property, method
  const date = function (val) {
    if (!val) {
      return val;
    }
    return [val.getFullYear(), (val.getMonth() + 1), val.getDate()].join('-');
  }
  const inspector = function (val, schematype) {
    if (schematype.options.required) {
      return schematype.path + ' is required...';
    } else {
      return schematype.path + ' is not required...';
    }
  }
  const tb2s = new Schema({
    time: {
      type: Date,
      default: new Date(),
      get: date
    },
    ctime: Date
  })
  tb2s.path('ctime').get(inspector);
  const Model2 = mongoose.model('tb2', tb2s, 'tb2');
  const time = new Model2();
  // time.save();
  Model2.findOne({}, function (error, data) {
    if (error) {
      console.log(error);
      return;
    }
    if (!data) {
      console.log('no data...');
    }
    console.log(data.time);
    console.log(data.ctime);
  });

  // index
  const tb3s = new Schema({
    name: {
      type: String,
      index: 'true'
    },
    age: Number,
    time: String
  })
  tb3s.path('age').index('hashed');
  tb3s.path('time').index({ unique: true, type: '2dsphere', sparse: true, expires: '1d' });
  const Model3 = mongoose.model('tb3', tb3s, 'tb3');

  // required
  const tb4s = new Schema({
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
  const is18 = function (val) {
    return val === 18;
  }
  // tb4s.path('age').required(true, '{PATH} is required...');
  tb4s.path('age').required(is18);
  const Model4 = mongoose.model('tb4', tb4s, 'tb4');
  const user4 = new Model4({ name: 'name', age: 15, time: new Date() });
  // user4.save(function (error) {
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  // });

  // select
  const tb5s = new Schema({
    name: {
      type: String,
      select: true
    }
  })
  const Model5 = mongoose.model('tb5', tb5s, 'tb5');
  const user5 = new Model5({ name: 'name' });
  // user5.save(function (error) {
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log('save success...');
  // });
  let promise = Model5.find({}).exec();
  promise.then(function (data) {
    console.log(data);
  })
  promise = Model5.find({}).select('-name').exec();
  promise.then(function (data) {
    console.log(data);
  })

  // set
  const toLower = function (val) {
    return val.toLowerCase();
  }
  const tb6s = new Schema({
    name: {
      type: String,
      set: toLower
    },
    email: {
      type: String,
      lowercase: true
    },
    age: {
      type: String,
      // set: inspector
    }
  })
  tb6s.path('age').set(inspector);
  const Model6 = mongoose.model('tb6', tb6s, 'tb6');
  const user6 = new Model6({ name: 'NaMe6', email: 'MNBV', age: 1 });
  console.log(user6);

  // sparse
  const tb7s = new Schema({
    name: {
      type: String,
      sparse: true
    },
    email: {
      type: String,
      index: {
        sparse: true
      }
    },
    age: {
      type: String
    }
  })
  tb7s.path('age').sparse(true);
  tb7s.path('age').index({sparse: true});
  const Model7 = mongoose.model('tb7', tb7s, 'tb7');

  // text
  const tb8s = new Schema({
    name: {
      type: String,
      text: true
    },
    email: {
      type: String,
      index: {
        text: true
      }
    },
    age: {
      type: String
    }
  })
  tb8s.path('age').text(true);
  tb8s.path('age').index({text: true});
  const Model8 = mongoose.model('tb8', tb8s, 'tb8');

  // unique
  const tb9s = new Schema({
    name: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      index: {
        unique: true
      }
    },
    age: {
      type: String
    }
  })
  tb9s.path('age').unique(true);
  tb9s.path('age').index({unique: true});
  const Model9 = mongoose.model('tb9', tb9s, 'tb9');

  // validate
  const validator = function(val){
    return val === 'validator'
  }
  const tb10s = new Schema({
    name: {
      type: String,
      // validate: validator
      validate: [validator, 'validation of {PATH} failed with value {VALUE}']
    }
  })
  const Model10 = mongoose.model('tb10', tb10s, 'tb10');
  const user10 = new Model10({name: 'name'})
  user10.save(function (error) {
    if (error) {
      console.log(error);
      return;
    }
  });

  mongoose.disconnect();
})()