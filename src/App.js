import './App.css';
import Nav from './NavBar/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Appointment from './Appointment/Appointment';
import Welcome from './Consent/Welcome';
import Consent from './Consent/Consent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/consent" element={<Consent />} />
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
