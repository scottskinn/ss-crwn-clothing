import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVnHK1LiZsywabWThGYICBa00EBCRrdmg",
    authDomain: "ss-crwn-clothing.firebaseapp.com",
    projectId: "ss-crwn-clothing",
    storageBucket: "ss-crwn-clothing.appspot.com",
    messagingSenderId: "595004175847",
    appId: "1:595004175847:web:c192fa52e96aae2627b942"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ 
    prompt: 'select_account' 
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, { 
                displayName, 
                email, 
                createdAt });
        } catch(error) {
            console.error(error);
        }
    }
    return userDocRef;
    // if user data exists


};