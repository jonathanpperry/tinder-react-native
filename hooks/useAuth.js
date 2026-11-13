import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoadingInitial(false);
      },
      (authError) => {
        setError(authError);
        setLoadingInitial(false);
      }
    );
  }, []);

  const logout = async () => {
    setLoading(true);
    setError(null);

    try {
      await signOut(auth);
    } catch (authError) {
      setError(authError);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    Alert.alert(
      "Sign-in temporarily unavailable",
      "Google sign-in still needs to be migrated."
    );
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, signInWithGoogle, logout }}
    >
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}