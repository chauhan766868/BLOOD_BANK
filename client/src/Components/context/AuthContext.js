import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [user, setUser] = useState(null); // Changed to null for clarity

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get(`${process.env.REACT_APP_API_URL}/auth/loggedIn`, { withCredentials: true });
      setLoggedIn(loggedInRes.data.auth);
      setUser(loggedInRes.data.user);
    } catch (error) {
      console.error("Error fetching logged in status:", error.response ? error.response.data : error.message);
      setLoggedIn(false); // Set loggedIn to false if there is an error
    }
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, user, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
