// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.'); //returning console.log here is equivalent to an 'else{}' statement following this if statement -- prevents the success condole.log from running
	}
	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo ', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 4));
	// });
	
	db.collection('Users').insertOne({
		name: 'Maciek',
		age: 29,
		location: 'Chicago, IL'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert user ', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 4));
	});
	

	client.close();
});