import { useState } from 'react';

function Appointments() {
  const [appointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      date: "2024-03-20",
      time: "10:00 AM",
      type: "General Consultation"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      date: "2024-03-25",
      time: "2:30 PM",
      type: "Specialist Consultation"
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Appointments</h1>
      <div className="bg-white rounded-lg shadow-md">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border-b last:border-b-0 p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{appointment.doctor}</h3>
                <p className="text-gray-600">{appointment.type}</p>
                <p className="text-gray-600">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <button
                className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;