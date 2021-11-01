import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../pages/Login/Firebase/firebase.init";

firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Google Sign In
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  // getting current user by observing Auth object
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // Google Sign Out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setError("");
        setUser({});
      })
      .catch((error) => {
        setError(error);
      })
      .finally( () => {
        setIsLoading(false);
      })
  };

  return {
    user,
    error,
    isLoading,
    signInUsingGoogle,
    setUser,
    setError,
    logOut,
    setIsLoading
  };
};

export default useFirebase;
