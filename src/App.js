import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WORD_DEF } from './shared/word_def';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';
import Card9 from './components/Card9';
import Card10 from './components/Card10';
import Break from './components/Break';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word_def: WORD_DEF,
    };
  }

  componentDidMount() {
    console.log(window.$def1);
  }
  render() {
    return (
      <div className="App-intro">
        <Switch>
          <Route exact path="/"  component={Card1} />
          <Route path="/Card2" component={Card2} />
          <Route path="/Card3" component={Card3} />
          <Route path="/Card4" component={Card4} />
          <Route path="/Card5" component={Card5} />
          <Route path="/Card6" component={Card6} />
          <Route path="/Card7" component={Card7} />
          <Route path="/Card8" component={Card8} />
          <Route path="/Card9" component={Card9} />
          <Route path="/Card10" component={Card10} />
          <Route path="/Break" component={Break} />
          <Redirect to="/" />
        </Switch>
      </div>

    );
  }
}

export default App;
