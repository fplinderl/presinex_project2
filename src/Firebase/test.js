const firebase = require('firebase');
require('firebase/firestore');
require('firebase/auth');
require('firebase/storage');
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
var storage = firebase.storage();
// console.log(
// 	new Date(Math.floor(Math.random() * (1640710800000 - 1612112400000)) + 1612112400000).toDateString()
// );
//---------1640710800000-----------1612112400000
// db
// 	.collection('user')
// 	.get()
// 	.then((querySnapshot) => {
// 		querySnapshot.forEach((doc) => {
// 			db
// 				.collection('user')
// 				.doc(doc.id)
// 				.delete()
// 				.then(() => {
// 					console.log('Document successfully deleted!');
// 				})
// 				.catch((error) => {
// 					console.error('Error removing document: ', error);
// 				});
// 		});
// 	});

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
// var storageRef = storage.ref();
// var desertRef = storageRef.child(
// 	'https://firebasestorage.googleapis.com/v0/b/project2-loc.appspot.com/o/Estelle_Mills.png?alt=media&token=7538d6f7-b1bf-4053-be82-795a0e40c1b6'
// );

// desertRef
// 	.delete()
// 	.then(() => {
// 		// File deleted successfully
// 	})
// 	.catch((error) => {
// 		// Uh-oh, an error occurred!
// 	});
var string =
	'https://firebasestorage.googleapis.com/v0/b/project2-loc.appspot.com/o/Elmer_Cobb.png?alt=media&token=25c630e4-b115-4b4e-9de1-3b1129e645dd';
console.log(string.slice(string.indexOf('/o/') + 3, string.indexOf('.png') + 4));
