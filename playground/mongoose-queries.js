const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c628718c95e2428a6fcaf3211';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID is not valid.');
// }

// // Todo.find({
// // 	_id: id
// // }).then((todos) => {
// // 	console.log('Todos: ', todos);
// // });

// // Todo.findOne({
// // 	_id: id
// // }).then((todo) => {
// // 	console.log('Todo: ', todo);
// // });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('ID not found.');
// 	}
// 	console.log('Todo by id: ', todo);
// }).catch((err) => console.log(err));


var id = '5c62081be3f1521ce53ba64b';

User.findById(id).then((user) => {
	if (!user) {
		return console.log('Unable to find user.');
	}
	console.log(JSON.stringify(user, undefined, 4));
}, (err) => {
	console.log(err);
});