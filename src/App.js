import './App.css';
import Profile from './containers/Profile';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMail } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faMail)

function App() {
  return (
    <Profile/>
  )
}

export default App;
