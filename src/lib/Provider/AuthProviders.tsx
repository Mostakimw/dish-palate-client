import {
  User,
  UserCredential,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import {
  useCreateUserMutation,
  useLoginUserMutation,
} from "../../redux/api/allApi";

export type TUser = {
  displayName: string;
  photoUrl: string;
  email: string;
  coin: number;
};

type TAuthInfo = {
  user: User | TUser | null;
  googleLogin: () => Promise<UserCredential>;
  loading: boolean;
  logoutUser: () => Promise<void>;
};

const defaultAuthInfo: TAuthInfo = {
  user: null,
  googleLogin: () => Promise.reject(),
  loading: true,
  logoutUser: () => Promise.resolve(),
};

export const AuthContext = createContext<TAuthInfo>(defaultAuthInfo);

// export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();
  const [createUser] = useCreateUserMutation(undefined);
  const [loginUser] = useLoginUserMutation(undefined);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ! observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        fetch(`http://localhost:5000/api/v1/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: currentUser?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
      } else {
        localStorage.removeItem("token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [createUser, loginUser]);

  // ! logout
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo: TAuthInfo = {
    user,
    loading,
    googleLogin,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
