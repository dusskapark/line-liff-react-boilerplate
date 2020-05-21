import React, {Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Posts } from "./pages";
import Menu from "./components/Menu"


const App = () => {

  return (
    <Fragment>
      <Menu/>
      <Route exact path='/home' component={Home} />
      <Switch>
        <Route path='/about/:name' component={About} />
        <Route path='/about' component={About} />
      </Switch>
      <Route path="/posts" component={Posts}/>
    </Fragment>
    
  );
};

export default App;
