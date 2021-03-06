// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.'); //returning console.log here is equivalent to an 'else{}' statement following this if statement -- prevents the success condole.log from running
	}
	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');

	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });
	


	// db.collection('Users').deleteMany({name: 'Maciej Bak'}).then((result) => {
	// 	console.log(result);
	// });
	
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5c6106cb92455710ef05183d')
	}).then((result) => {
		console.log(result);
	});

	//client.close();
});