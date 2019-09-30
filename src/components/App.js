import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { staff: people.staff };
  }

  updateContent = (id) => {
    const person = this.state.staff.findIndex((user) => user.id === id);
    this.setState({
      staff: person,
    });
  };

  render() {
    const { staff } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Hall of Fame</h1>
        </header>
        <Cohort cohortType={staff} />
      </div>
    );
  }
}

export default App;
