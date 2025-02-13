import React from 'react';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <div className={styles.adminDashboard}>
      <h2>Admin Dashboard</h2>
      <p>Manage appointments, staff, and services here.</p>
    </div>
  );
};

export default AdminDashboard;