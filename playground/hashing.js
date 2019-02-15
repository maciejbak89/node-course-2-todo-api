const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// *** HASHING: ***

// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, 'my-secret');
// console.log(token);

// var decoded = jwt.verify(token, 'my-secret');
// console.log('decoded: ', decoded);



// var message = 'I am the administrator of this project.';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'some_secret_SALT').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'some_secret_SALT').toString();

// if (resultHash === token.hash) {
// 	console.log('Data was not changed.');
// } else {
// 	console.log('Data was changed. Do NOT trust!');
// }


// *** BCRYPT: ***

var password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		//console.log('Password: ', password);
// 		//console.log('SHA256: ', SHA256(password).toString());
// 		//console.log('Salt: ', salt);
// 		console.log('Hash: ', hash);
// 	});
// });

var hashedPassword = '$2a$10$3u755ug4JJsxZWlVHsGceOj1p/EyaWgSMnsQjZdDKSq5sBZ5DiFNq';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});




















