import React from 'react';

const Services = () => {
  const services = [
    { name: '24/7 Emergency', desc: 'Quick and responsive care during emergencies.' },
    { name: 'Cardiology', desc: 'Heart-related diagnostics and treatments.' },
    { name: 'ICU & Surgery', desc: 'Advanced surgical and intensive care support.' },
    { name: 'Pathology & Diagnostics', desc: 'Accurate lab tests and reports.' },
    { name: 'Pharmacy', desc: 'On-campus pharmacy with 24-hour service.' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Hospital Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 text-black p-4 rounded shadow">
            <h4 className="text-xl font-semibold">{service.name}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
