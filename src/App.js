import React, { useEffect, useState } from "react";
import MainPage from "./mainPage/mainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import * as storageManager from "./storageManager";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(storageManager.read("user"));
  }, []);
  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      storageManager.save("user", user);
      console.log(user);
    }
  }, [user]);
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
