import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  onAuthStateChanged, signInWithEmailAndPassword, signOut,
  createUserWithEmailAndPassword, signInWithPopup, updateProfile
} from "firebase/auth";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children})=>{
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (u)=>{ setUser(u); setLoading(false); });
    return ()=>unsub();
  },[]);

  const login = (email, password)=>signInWithEmailAndPassword(auth, email, password);
  const googleLogin = ()=>signInWithPopup(auth, googleProvider);
  const register = (name, photo, email, password)=>
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user})=> updateProfile(user, { displayName:name, photoURL:photo }));
  const logout = ()=>signOut(auth);

  const value = { user, loading, login, googleLogin, register, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
