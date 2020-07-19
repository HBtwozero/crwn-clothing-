import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var config = {
    apiKey: "AIzaSyBNZRRx2bq56fDA6p1h5L3cMYhn2QEZ5V8",
    authDomain: "ecommerce-react-db-cf01a.firebaseapp.com",
    databaseURL: "https://ecommerce-react-db-cf01a.firebaseio.com",
    projectId: "ecommerce-react-db-cf01a",
    storageBucket: "ecommerce-react-db-cf01a.appspot.com",
    messagingSenderId: "262358752665",
    appId: "1:262358752665:web:e54579cfe61a9f18498708",
    measurementId: "G-0PDJ2HLKJ3"
  }

  firebase.initializeApp(config);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;


/*A queryReference object is an object that represents the “current”
place in the database that we are querying.
We get them by calling either:
firestore.doc(‘/users/:userId’);
firestore.collections(‘/users’); 
The queryReference object does not have the actual data of the
collection or document. It instead has properties that tell us details
about it, or the method to get the Snapshot object which gives us the
data we are looking for


DocumentReference vs CollectionReference
We use documentRef objects to perform our CRUD methods (create,
retrieve, update, delete). The documentRef methods are .set(), .get(),
.update() and .delete() respectively.
We can also add documents to collections using the collectionRef
object using the .add() method. // collectionRef.add({//value: prop})
We get the snapshotObject from the referenceObject using the .get()
method. ie. documentRef.get() or collectionRef.get()
documentRef returns a documentSnapshot object.
collectionRef returns a querySnapshot object


*/


    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  

    /*

    We get a documentSnapshot object from our documentReference
object.
The documentSnapshot object allows us to check if a document exists
at this query using the .exists property which returns a boolean.
We can also get the actual properties on the object by calling
the .data() method, which returns us a JSON object of the document. 

    We get a querySnapshot object from our collectionReference object.
We can check if there are any documents in the collection by calling
the .empty property which returns a boolean.
We can get all the documents in the collection by calling the .docs
property. It returns an array of our documents as documentSnapshot
objects. 

    */
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  }










export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//always trigger google product whenever we use that google authprovider
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



