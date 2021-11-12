import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');
  

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // upsert user to the database
        saveUser(user.email, user.displayName, 'PUT');
        // saveGoogleUser(user.email, user.displayName);
        setAuthError('');
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const registerUser = (email, password, name,  history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = {email, displayName: name};
        setUser(newUser);
        // save user to the database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          })
          .catch((error) => {
            
          });
        // history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //    observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken => {
          setToken(idToken);
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // to set admin from user
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  }, [user.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // save or upsert user data to database(mongodb)
  const saveUser = (email, displayName, method) => {
    const user = {email, displayName};
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then()
  }

  // // upsert user data to database(mongodb)
  // const saveGoogleUser = (email, displayName) => {
  //   const user = {email, displayName};
  //   fetch('https://sleepy-cliffs-99517.herokuapp.com/users', {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body:JSON.stringify(user)
  //   })
  //   .then()
  // }

  return {
    user,
    admin,
    token,
    isLoading,
    authError,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOut,
  };
};

export default useFirebase;
