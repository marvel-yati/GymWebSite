
import './App.css';
import Header from './components/Header'
import Discover from './components/Discover';
import './style.css'
import {Route,Routes} from 'react-router-dom'

import Process from './components/Process';
import Team from './components/Team';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Discover/>
      {/* <Routes>
        <Route path='/'
          element = {<Discover />}
        />
      
        <Route path='/process'
          element = {<Process />}
        />
        <Route path='/team'
          element = {<Team />}
        />
        <Route path='/pricing'
          element = {<Pricing />}
        />
      </Routes> */}
    </div>
  );
}

export default App;
