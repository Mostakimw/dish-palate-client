import { UserCredential, getAuth, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from "react";
import { app } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

type TAuthInfo = {
  googleLogin: () => Promise<UserCredential>;
  loading: boolean;
};

const defaultAuthInfo: TAuthInfo = {
  googleLogin: () => Promise.reject(),
  loading: true,
};

export const AuthContext = createContext<TAuthInfo>(defaultAuthInfo);

const auth = getAuth(app);

const AuthProviders = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo: TAuthInfo = {
    loading,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
