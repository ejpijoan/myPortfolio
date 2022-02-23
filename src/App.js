import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../src/Navigation'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
// import Error from './components/Error'

library.add(fab, faEnvelope)

function App() {
  return (
    <>
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Projects} />
          {/* <Route component={Error}/> */}
        </Switch>
      </Router>
    </>
  )
}

export default App;
