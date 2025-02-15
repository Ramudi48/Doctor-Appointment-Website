import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import BookingForm from './components/Booking/BookingForm';
import CustomerLogin from './components/Customers/CustomerLogin';
import CustomerRegister from './components/Customers/CustomerRegister';
import AdminDashboard from './components/Admin/AdminDashboard';
import styles from './App.module.css';


function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/register" element={<CustomerRegister />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;