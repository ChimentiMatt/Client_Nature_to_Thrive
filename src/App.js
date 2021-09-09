import Landing from './components/landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from './components/about';
import OutdoorPage from './components/outdoor';
import PsychPage from './components/psych';
import FaqPage from './components/faq';
import ContactPage from './components/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/outdoor-ecotherapy">
            <OutdoorPage />
          </Route>

          <Route exact path="/psychotherapy">
            <PsychPage />
          </Route>

          <Route exact path="/faq">
            <FaqPage />
          </Route>

          <Route exact path="/contact">
            <ContactPage />
          </Route>




        </Switch>
      </Router>
    </div>
  );
}

export default App;
