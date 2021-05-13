const firebase = require('firebase');
require('firebase/firestore');
require('firebase/auth');
var firebaseConfig = {
	apiKey: 'AIzaSyDp2jc0xfhTnfkL_PgAB_3PsxDtlVJJy5Q',
	authDomain: 'project2-loc.firebaseapp.com',
	projectId: 'project2-loc',
	storageBucket: 'project2-loc.appspot.com',
	messagingSenderId: '472033509863',
	appId: '1:472033509863:web:8f0261be37ac0c94aa7d42',
	measurementId: 'G-3FXQXQ8MSB',
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth = firebase.auth();
// console.log(
// 	new Date(Math.floor(Math.random() * (1640710800000 - 1612112400000)) + 1612112400000).toDateString()
// );
//---------1640710800000-----------1612112400000
db
	.collection('user')
	.doc('Z0EfBBGd6apoQfDkabPs')
	.update({
		favorite: true,
	})
	.then(() => {
		console.log('Document successfully updated!');
	})
	.catch((error) => {
		// The document probably doesn't exist.
		console.error('Error updating document: ', error);
	});

// db
// 	.collection('user')
// 	.add({
// 		avatar: 'Estelle_Mills',
// 		name: 'Dilys Helga',
// 		calendar: firebase.firestore.Timestamp.fromDate(new Date('December 29, 2021')),
// 		favorite: false,
// 		position: 'Software Engineer',
// 	})
// 	.then((docRef) => {
// 		console.log('Document written with ID: ', docRef);
// 	})
// 	.catch((error) => {
// 		console.error('Error adding document: ', error);
// 	});
// var name = [
// 	'Acacia',
// 	'Angela',
// 	'Bernice',
// 	'Anthea',
// 	'Dilys',
// 	'Eirlys',
// 	'Fidelma',
// 	'Guinevere',
// 	'Helga',
// 	'Jezebel',
// 	'Keva',
// 	'Mirabel',
// 	'Phoebe',
// 	'Veronica',
// 	'Xenia',
// ];
// var avatar = [
// 	'Elmer_Cobb',
// 	'Estelle_Mills',
// 	'Mittie_Medina',
// 	'Vera_Ramirez',
// 	'Vernon_Simpson',
// 	'Wayne_Bush',
// ];
// var position = [
// 	'Software Engineer',
// 	'Computer Programmer',
// 	'Database Administrator',
// 	'Web Developers',
// 	'Software Testers',
// 	'IT Support',
// 	'Java Developer',
// ];
// var favorite = [true, false];
// for (var i = 0; i < 49; i++) {
// 	db
// 		.collection('user')
// 		.add({
// 			avatar: avatar[Math.floor(Math.random() * avatar.length)],
// 			name:
// 				name[Math.floor(Math.random() * name.length)] + ' ' + name[Math.floor(Math.random() * name.length)],
// 			calendar: firebase.firestore.Timestamp.fromDate(
// 				new Date(Math.floor(Math.random() * (1640710800000 - 1612112400000)) + 1612112400000)
// 			),
// 			favorite: favorite[Math.floor(Math.random() * favorite.length)],
// 			position: position[Math.floor(Math.random() * position.length)],
// 		})
// 		.then((docRef) => {
// 			console.log('Document written with ID: ', docRef.id);
// 		})
// 		.catch((error) => {
// 			console.error('Error adding document: ', error);
// 		});
// }
