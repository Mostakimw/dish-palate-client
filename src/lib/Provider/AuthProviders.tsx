import {
  User,
  UserCredential,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

type TAuthInfo = {
  user: User | null;
  googleLogin: () => Promise<UserCredential>;
  loading: boolean;
};

const defaultAuthInfo: TAuthInfo = {
  user: null,
  googleLogin: () => Promise.reject(),
  loading: true,
};

export const AuthContext = createContext<TAuthInfo>(defaultAuthInfo);

// export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ! observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo: TAuthInfo = {
    user,
    loading,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
