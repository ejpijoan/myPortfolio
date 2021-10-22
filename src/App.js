import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './components/Intro'
import Profile from './containers/Profile'

library.add(fab, faEnvelope)

function App() {
  return (
    <Router>
      <>
      <Route exact path='/' component={Intro} />
      <Route exact path='/profile' component={Profile} />
      </>
    </Router>
  )
}

export default App;
