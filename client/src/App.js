import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EmployeePage from './pages/EmployeePage';
import StudyGroupPage from './pages/StudyGroupPage';
import WorkLabelPage from './pages/WorkLabelPage';

const Home = () => {
  return <h2>Home</h2>;
}

const Subject = () => {
  return <h2>Predmet</h2>;
}

const Employee = () => {
  return <EmployeePage />;
}

const StudyGroup = () => {
  return <StudyGroupPage />;
}

const WorkLabel = () => {
  return <WorkLabelPage />;
}

const App = () => {
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(response => response.json())
      .then(data => setState(data));
    //  .then(res => res.text())
    //.then(res => setState({ apiResponse: res }));
  }

  const getDataFromApi = async () => {
    try {
      const request = await fetch('http://localhost:9000/testAPI')
      const response = request.json()
      // do something with the data
      console.log(response);
    } catch (e) {
      console.log(e);
      // show a message telling what went wrong
    } finally {
      // un-set the loader 
    }
  }

  getDataFromApi();


  const [state, setState] = useState({ apiResponse: '' });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Domov</Link>
            </li>
            <li>
              <Link to="/subject">Predmet</Link>
            </li>
            <li>
              <Link to="/employee">Zamestnanec</Link>
            </li>
            <li>
              <Link to="/studyGroup">Študijná skupina</Link>
            </li>
            <li>
              <Link to="/workLabel">Pracovný štítok</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/subject">
            <Subject />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/studyGroup">
            <StudyGroup />
          </Route>
          <Route path="/workLabel">
            <WorkLabel />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;