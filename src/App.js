import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';

library.add(fab, faEnvelope)

function App() {
  return (
    <Router>
      <div>
      <Route exact path='/' component={Intro} />
      <Route exact path='/profile' component={Profile} />
      </div>
    </Router>
  )
}

export default App;
