import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PackingChecklist from './packingchecklist';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/packingchecklist" component={PackingChecklist} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
