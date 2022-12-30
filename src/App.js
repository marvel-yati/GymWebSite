
import './App.css';
import Header from './components/Header'
import Discover from './components/Discover';
import './style.css'
import About from './components/About'
import Feature from './components/Feature';
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'


import Process from './components/Process';
// import Team from './components/Team';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Discover/>
      <Feature />
      <h2>Unlimited Home Workouts with Calorie Tracking</h2>
      <Process shtitle = 'Naveen Sharma' title = 'Hatha Yoga for Beginners' imageUrl = {require('./images/black.png')} body = 'YOGA ⭕ BEGINNER ⭕ 35 Min'/>
      <Process shtitle = 'Simran Nazare' title = 'Dance Fitness Express' imageUrl = {require('./images/sport.jpg')} body = 'DANCE ⭕ BEGINNER ⭕ 30 Min'/>
      <Process shtitle = 'Swati Joshi' title = 'Dance Fitness Extreme' imageUrl = {require('./images/man.jpg')} body = 'DANCE ⭕ BEGINNER ⭕ 50 Min'/>
      <h2>FITNESS PRICING TABLES</h2>
      <Pricing shtitle = 'STUDENT' title = '$12/month'  imageUrl = {require('./images/tag.png')} body = '✅ Training ✅ Beginner'/>
      <Pricing shtitle = 'REGULAR' title = '$15/month'  imageUrl = {require('./images/price-tag.jpg')} body = '✅ Training ✅ Beginner ✅ Personal'/>
      <Pricing shtitle = 'PRO' title = '$19/month'  imageUrl = {require('./images/tag1.png')} body = '✅ Training ✅ Beginner ✅ Personal ✅ Foundation'/>
      <Footer />

      {/* <Process title = 'Card Title' imageUrl = {require('./images/black.png')} body = ''/> */}
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
