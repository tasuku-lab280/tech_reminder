import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Common from "../src/components/layouts/Common";
import { Home, SignUp, SignIn } from "./templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Common>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Common>
    </BrowserRouter>
  );
};

export default Router;
