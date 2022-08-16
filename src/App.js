import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./mainPage/mainPage";
import Profile from "./userProfile/UserProfile";
import NavBar from "./mainPage/components/NavBar";
import * as storageManager from "./storageManager";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(storageManager.read("user"));
  }, []);
  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      storageManager.save("user", user);
    }
  }, [user]);
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/profile" element={<UserProfile />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
