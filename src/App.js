import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueList from './components/issueList'
import IssueDetail from './components/issueDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={IssueList} />
        <Route path="/issues/:issue_number" component={IssueDetail} />
      </Router>
    </div>
  );
}

export default App;
