import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialization from "../pages/Login/Firebase/firebase.init";

firebaseInitialization();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result?.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return {
    signInUsingGoogle
  }
};

export default useFirebase;