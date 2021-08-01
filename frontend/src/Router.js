import React, { useState, createContext } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Common from "../src/components/layouts/Common";
import { Home, SignUp, SignIn } from "./templates";

export const AuthContext = createContext();

const Router = () => {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

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
