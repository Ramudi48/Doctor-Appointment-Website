/*import React from 'react';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <div className={styles.adminDashboard}>
      <h2>Admin Dashboard</h2>
      <p>Manage appointments, staff, and services here.</p>
    </div>
  );
};
export default AdminDashboard;*/




import React, { useState, useEffect } from "react";
/*import axios from "axios";*/

import "./AdminDashboard.module.css";

const Admin = () => {
  const [appointments, setAppointments] = useState([]);

  /*useEffect(() => {
    axios.get("http://localhost:5000/appointments")
      .then(response => setAppointments(response.data))
      .catch(error => console.log(error));
  }, []);  */

  return (
    <div className="admin-container">
      <h1>Admin Interface</h1>
      <div className="stats">
        <div className="card">Bookings Today: {appointments.length}</div>
        <div className="card">Total Bookings: 108</div>
        <div className="card">Work Hours: 40h</div>
        <div className="card">Payments: $3456</div>
      </div>
    </div>
  );
};

export default Admin;
