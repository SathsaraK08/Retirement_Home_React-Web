import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold">{service.name}</h3>
      <p className="mt-2">{service.description}</p>
      {service.image && <img src={service.image} alt={service.name} className="mt-4 rounded" />}
    </div>
  );
};

export default ServiceCard;
