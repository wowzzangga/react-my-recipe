import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBAxcb8t5cs9lv1SM2qWmaYQwtk_uaaKnc",
    authDomain: "my-recipe-app-e35c4.firebaseapp.com",
    databaseURL: "https://my-recipe-app-e35c4.firebaseio.com",
});

const base = Rebase.createClass(app.database());

export default base;