import React from 'react';
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import JobDetail from "./pages/jobDetail";
import Error from "./pages/error";

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Jobs" component={Jobs} />
        <Route exact path="/Jobs/:detail" component={JobDetail} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
