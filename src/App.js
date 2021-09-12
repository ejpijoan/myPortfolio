import './App.css';
import Profile from './containers/Profile';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(fab, faEnvelope)

function App() {
  return (
    <Profile/>
  )
}

export default App;
