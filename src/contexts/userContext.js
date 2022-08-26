import React, { useState, useEffect } from "react";
import * as storageManager from "../storageManager";

export const UserContext = React.createContext();
export const UserContextUpdate = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(storageManager.read("user"));
  }, []);
  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      storageManager.save("user", user);
    }
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={setUser}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
};
