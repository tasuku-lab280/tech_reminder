import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
