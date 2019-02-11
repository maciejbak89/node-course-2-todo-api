// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.'); //returning console.log here is equivalent to an 'else{}' statement following this if statement -- prevents the success condole.log from running
	}
	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5c6101356948013abc6d2667')
	// }).toArray().then((docs) => {
	// 	console.log('Todos: ');
	// 	console.log(JSON.stringify(docs, undefined, 4));
	// }, (err) => {
	// 	console.log('Unable to fetch todos ', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos ', err);
	// });
	
	db.collection('Users').find({name: 'Maciej Bak'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 4));
	}, (err) => {
		console.log('Unable to fetch users ', err);
	});

	//client.close();
});