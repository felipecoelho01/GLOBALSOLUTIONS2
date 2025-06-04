import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import GameDashboard from './pages/GameDashboard/GameDashboard';
import DisasterSimulation from './pages/DisasterSimulation/DisasterSimulation';
import EmergencyContacts from './pages/EmergencyContacts/EmergencyContacts';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<GameDashboard />} />
          <Route path="/simulation" element={<DisasterSimulation />} />
          <Route path="/emergency" element={<EmergencyContacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
