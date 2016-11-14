/**
 * @file the demo of schema.md method, property
 * @author soonfy <https://github.com/soonfy>
 */

const mongoose = require('mongoose');
mongoose.set('debug', true);

/**
 * 
 * @method add
 * 
 * @method eachPath
 * 
 * @method get
 * 
 * @method index
 * 
 * @method indexes
 * 
 * @method method
 * 
 * @method path
 * 
 * @method pathType
 * 
 * @method plugin
 * 
 * @method post
 * 
 * @method pre
 * 
 * @method remove
 * 
 * @method requiredPaths
 * 
 * @method set
 * 
 * @method static
 * 
 * @method virtual
 * 
 * @method virtualpath
 * 
 * @property indexTypes
 * 
 * @property reserved
 *
 * @property Types
 * 
 * @property obj
 * 
 */

(function () {
  const uri = 'mongodb://localhost/db1'
  mongoose.connect(uri);
  const Schema = mongoose.Schema;

  // add
  const schema = new Schema({original: Boolean});
  schema.add({name: {
    type: String,
    required: true
  },
  age: Number});
  // console.log(schema);

  // eachPath
  const cb = function (path, schematype) {
    console.log(path);
    console.log(schematype);
  }
  // schema.eachPath(cb);
  
  // get
  // console.log(schema.get('versionKey'));

  // index
  // console.log(schema.index({name: 1}, {unique: true, name: 'name'}));

  // indexes
  // schema.indexes();

  // method
  schema.method('log', function(){
    console.log('method...');
  })
  const Model = mongoose.model('col', schema);
  const model = new Model();
  model.log();

  // path
  console.log(schema.path('name'));
  schema.path('name', Number);
  console.log(schema.path('name'));
  
  // pathType
  console.log(schema.pathType('name'));

  // plugin
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

  // post
  schema.post('save', function(doc){
    console.log('saved...');
  });

  // pre
  schema.pre('save', function(doc){
    console.log('start save...');
  });

  // remove
  // console.log(schema);
  // schema.remove('age');
  // console.log(schema);

  // requiredPaths
  console.log(schema.requiredPaths(false));
  console.log(schema.requiredPaths(true));
  
  // set
  schema.set('autoIndex', false);
  console.log(schema.set('autoIndex'));

  // static
  schema.static('findByName', function(name, cb){
    return this.find({name: name}, cb);
  });

  // virtual
  const virtual = schema.virtual('fullname');
  virtual.get(function(){
    return this.name.first + ' ' + this.name.last;
  })
  virtual.set(function(name){
    const names = name.split(' ');
    this.name.first = names[0];
    this.name.last = names[1];
  })

  // virtualpath
  console.log(schema.virtualpath('fullname'));

  // indexTypes
  console.log(Schema.indexTypes);

  // reserved
  console.log(Schema.reserved);

  // Types
  console.log(Schema.Types);

  // obj
  console.log(schema.obj);

  mongoose.disconnect()
})()