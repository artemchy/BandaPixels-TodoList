import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar/NavBar";
import { Alert } from "./components/Alert";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container pt-4">
        <Alert />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
        </Switch>
      </div>
    </>
  );
}

export default App;
