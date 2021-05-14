import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
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
export { db, auth, storage };
