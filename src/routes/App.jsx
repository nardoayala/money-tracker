import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'Components/Layout';
import Home from 'Containers/Home';
import About from 'Containers/About';
import 'Styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
