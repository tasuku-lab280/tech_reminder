import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Common from "../src/components/layouts/Common";
import { getCurrentUser } from "./lib/api/auth";
import { Home, SignUp, SignIn } from "./templates";

export const AuthContext = createContext();

const Router = () => {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
        <Common>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Common>
      </AuthContext.Provider>
    </BrowserRouter >
  );
};

export default Router;
