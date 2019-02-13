const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findByIdAndRemove({_id: '5c63ebfbb754273b9c911aeb'}).then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove('5c63ebfbb754273b9c911aeb').then((todo) => {
	console.log(todo);
});