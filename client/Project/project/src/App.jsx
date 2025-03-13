import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/book" element={<BookAppointment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;