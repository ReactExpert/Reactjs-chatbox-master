import Rebase from 're-base';
import firebase from 'firebase';

const config =  {
	apiKey: "AIzaSyABXxfrJsYyChA_SSfScGg-ah8AjPnH1tQ",
	authDomain: "chatbox-61e3f.firebaseapp.com",
	databaseURL: "https://chatbox-61e3f.firebaseio.com",
}

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export {base};