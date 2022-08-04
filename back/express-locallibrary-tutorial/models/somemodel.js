var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
})

module.exports = mongoose.model('SomeModel', SomeModelSchema);

// var Schema = mongoose.Schema;


// var authorSchema = Schema({
//   name: String,
//   stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// })

// var storySchema = Schema({
//   author: { type: Schema.Types.ObjectId, ref: 'Author'},
//   title: String
// })

// var Story = mongoose.model('Story', storySchema);
// var Author = mongoose.model('Author', authorSchema);

// var Bob = new Author({ name: 'Bob Smith' });

// Bob.save(function (err) {
//   if (err) {
//     return;
//   }

//   var story = new Story({
//     title: 'Bob goes sledding',
//     author: Bob._id
//   })

//   story.save(function(err) {
//     if (err) {
//       return;
//     }
//   })
// })

// Story
// .findOne({ title: 'Bob goes sledding' })
// .populate('author')
// .exec(function (err, story) {
//   if (err) {
//     return;
//   }
//   console.log('The author is %s', story.author.name);
// })
// var SomeModelSchema = new Schema({
//   name: String,
//   binary: Buffer,
//   living: Boolean,
//   updated: { type: Date, default: Date.now() },
//   age: { type: Number, min: 18, max: 65, required: true },
//   mixed: Schema.Types.Mixed,
//   _someId: Schema.Types.ObjectId,
//   array: [],
//   ofString: [String], // You can also have an array of each of the other types too.
//   nested: { stuff: { type: String, lowercase: true, trim: true } }
// })

// var SomeModel = mongoose.model('SomeModel', SomeModelSchema);
// var awesome_instance = new SomeModel({
//   name: 'awesome',
//   age: 24
// })

// var Awesome = mongoose.model('SomeModel', SomeModelSchema);
// var query = Awesome.find({ 'name' : 'awesome' }, 'name age', function (err, result) {
//   if (err) {
//     return;
//   }

//   console.log('success find =>', result);
// })

// query.select('name age');

// awesome_instance.save(function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('sucess');
// })
