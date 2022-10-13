import {initializeApp, cert} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
import  ServiceAccount  from './serviceAccount.js';

initializeApp({
    credential: cert(ServiceAccount)
});

const db = getFirestore();

const newSong={
    tittle: "moscole mule",
    artist: "bad bunny",
    genre: "reggaeton",
    released: "2022",
}

db.collection('song').add(newSong)
.then(doc =>console.log('Song created: ', doc.id))
.catch(console.error)