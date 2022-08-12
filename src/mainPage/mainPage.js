import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar";
import ImageBanner from "./components/imageBanner";
import Content from "./components/Content";

import * as storageManager from "../storageManager";

export const UserContext = React.createContext();

const MainPage = () => {
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
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
      </UserContext.Provider>
      <ImageBanner />
      <Content />
    </div>
  );
};
export default MainPage;
