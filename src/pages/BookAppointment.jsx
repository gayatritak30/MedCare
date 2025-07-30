import React from 'react';

const BookAppointment = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-black rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
      <form>
        <label className="block mb-2">
          Name:
          <input type="text" className="w-full p-2 border rounded" required />
        </label>
        <label className="block mb-2">
          Date:
          <input type="date" className="w-full p-2 border rounded" required />
        </label>
        <label className="block mb-4">
          Doctor:
          <select className="w-full p-2 border rounded" required>
            <option>Dr. Smith</option>
            <option>Dr. Priya</option>
            <option>Dr. Khan</option>
          </select>
        </label>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Book</button>
      </form>
    </div>
  );
};

export default BookAppointment;
