import React, { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
  };

  return (
    <div className={styles.bookingForm}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          required
        >
          <option value="">Select a Service</option>
          <option value="haircut">Haircut</option>
          <option value="coloring">Coloring</option>
          <option value="manicure">Manicure</option>
          <option value="pedicure">Pedicure</option>
        </select>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;