import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/HomePage';
import EmployeePage from './pages/Employee/EmployeePage';
import EmployeeListLoader from './pages/Employee/EmployeeListLoader';
import StudyGroupPage from './pages/StudyGroup/StudyGroupPage';
import WorkLabelPage from './pages/WorkLabelPage';
import SubjectPage from './pages/Subject/SubjectPage';
import SubjectListLoader from './pages/Subject/SubjectListLoader';

const Home = () => {
  return <HomePage />;
}

const Subject = () => {
  return <SubjectPage />;
}

const SubjectList = () => {
  return <SubjectListLoader />;
}

const Employee = () => {
  return <EmployeePage />;
}

const EmployeeList = () => {
  return <EmployeeListLoader />;
}

const StudyGroup = () => {
  return <StudyGroupPage />;
}

const WorkLabel = () => {
  return <WorkLabelPage />;
}

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Domov</Link>
            </li>
            <li>
              <Link to="/subject">Pridaj predmet</Link>
            </li>
            <li>
              <Link to="/subjectList">Predmety</Link>
            </li>
            <li>
              <Link to="/employee">Pridaj zamestnanca</Link>
            </li>
            <li>
              <Link to="/employeeList">Zoznam zamestnanecov</Link>
            </li>
            <li>
              <Link to="/studyGroup">Študijná skupina</Link>
            </li>
            <li>
              <Link to="/workLabel">Pracovný štítok</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/subject">
            <Subject />
          </Route>
          <Route path="/subjectList">
            <SubjectList />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/employeeList">
            <EmployeeList />
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