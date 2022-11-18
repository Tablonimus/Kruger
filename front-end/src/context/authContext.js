// import { React, createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   TwitterAuthProvider,
//   signInWithPopup,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import { auth } from "../firebase";

// export const authContext = createContext();

// export const useAuth = () => {
//   const loggedUser = useContext(authContext);
//   if (!loggedUser) throw new Error("there is not logged user provider");
//   return loggedUser;
// };

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // const user = { login: true };

//   const signUp = async (email, password) => {
//     await createUserWithEmailAndPassword(auth, email, password);
//   };

//   const login = async (email, password) => {
//     const userCredentials = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log(userCredentials);
//   };

//   const logout = async () => await signOut(auth);

//   const loginWithGoogle = async () => {
//     const googleProvider = new GoogleAuthProvider();
//     signInWithPopup(auth, googleProvider);
//   };
//   const loginWithFacebook = async () => {
//     const facebookProvider = new FacebookAuthProvider();
//     signInWithPopup(auth, facebookProvider);
//   };
//   const loginWithTwitter = async () => {
//     const twitterProvider = new TwitterAuthProvider();
//     signInWithPopup(auth, twitterProvider);
//   };

//   const resetPassword = async (email) =>
//     await sendPasswordResetEmail(auth, email);

//   useEffect(() => {
//     const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsuscribe();
//   }, []);

//   return (
//     <authContext.Provider
//       value={{
//         signUp,
//         login,
//         user,
//         logout,
//         loading,
//         loginWithGoogle,
//         resetPassword,
//         loginWithFacebook,
//         loginWithTwitter
//       }}
//     >
//       {children}
//     </authContext.Provider>
//   );
// }
