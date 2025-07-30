import React from 'react';

const Doctors = () => {
  const doctorList = [
    {
      name: 'Dr. Neha Singh',
      specialty: 'Cardiologist',
      experience: '12 years',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Dr. Aarav Mehta',
      specialty: 'Neurologist',
      experience: '9 years',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Dr. Isha Kapoor',
      specialty: 'Orthopedic Surgeon',
      experience: '15 years',
      image: 'https://via.placeholder.com/100'
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Our Expert Doctors</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {doctorList.map((doc, i) => (
          <div key={i} className="bg-white text-black p-4 rounded shadow">
            <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-center">{doc.name}</h3>
            <p className="text-center">{doc.specialty}</p>
            <p className="text-center text-sm text-gray-600">{doc.experience} experience</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
