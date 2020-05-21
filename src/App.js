import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Posts } from "./pages";
import Menu from "./components/Menu";

const liff = window.liff;

const App = () => {

  
  React.useEffect(() => {
    initializeLiff();
  }, []);

  const initializeLiff = () => {
    liff
      .init({
        liffId: process.env.REACT_APP_LIFF_ID,
      })
      .then(() => {
        initializeApp();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const initializeApp = () => {
    displayIsInClientInfo();
  };


  const displayIsInClientInfo = () => {
    if (liff.isInClient()) {
      window.alert("You are opening the app in the in-app browser of LINE.");
    } else {
      window.alert("You are opening the app in an external browser.");
    }
  };

  return (
    <Fragment>
      <Menu />
      <Route exact path='/home' component={Home} />
      <Switch>
        <Route path='/about/:name' component={About} />
        <Route path='/about' component={About} />
      </Switch>
      <Route path='/posts' component={Posts} />
    </Fragment>
  );
};

export default App;
