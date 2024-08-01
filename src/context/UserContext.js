import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const CreateUserContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState("Mahbubul Alam");

  // handle user signup
  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const value = { user, setUser, handleSignUp };

  return (
    <CreateUserContext.Provider value={value}>
      {children}
    </CreateUserContext.Provider>
  );
};

export default UserContext;
