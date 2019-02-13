var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
// 	localhost: 'mongodb://localhost:27017/TodoApp',
// 	mlab: 'mongodb://maciejbak:DeJong21!@ds133865.mlab.com:33865/todoapp'
// };

// mongoose.connect(process.env.PORT ? db.mlab : db.localhost, {useNewUrlParser: true});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose};