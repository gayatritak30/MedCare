import React from 'react';

const MyAppointments = () => {
  const appointments = [
    { date: '2025-08-01', doctor: 'Dr. Smith' },
    { date: '2025-08-05', doctor: 'Dr. Priya' }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">My Appointments</h2>
      <ul className="space-y-2">
        {appointments.map((a, i) => (
          <li key={i} className="bg-white text-black p-4 rounded shadow">
            <p><strong>Date:</strong> {a.date}</p>
            <p><strong>Doctor:</strong> {a.doctor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAppointments;
