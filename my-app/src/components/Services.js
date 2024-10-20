import React from 'react';
import {
  ImAccessibility,
  ImContrast,
  ImFileText,
  ImGrin2,
  ImHeartBroken,
  ImProfile,
  ImStatsBars,
  ImUserTie,
} from 'react-icons/im';
import Service from './Service';

const Services = () => {
  const servicesData = [
    {
      icon: ImUserTie,
      title: 'Expert Doctor',
      details: 'Best doctors will give you the best services.',
    },
    {
      icon: ImAccessibility,
      title: 'Ambulance',
      details: 'All time 24/7 ambulances are ready to pick up patients.',
    },
    {
      icon: ImContrast,
      title: 'Medicine',
      details: 'We provide free medicine for the general public.',
    },
    {
      icon: ImFileText,
      title: 'Diagnosis',
      details: 'Fast diagnosis reports are generated.',
    },
    {
      icon: ImStatsBars,
      title: 'Pathology', // Corrected spelling from 'Phatology' to 'Pathology'
      details: 'The best pathology department you will find in the city.',
    },
    {
      icon: ImHeartBroken,
      title: 'Cardiology',
      details: 'Best cardiology department in the country.',
    },
    {
      icon: ImGrin2,
      title: 'Dental Care',
      details: 'Dentists with more than 5 years of experience.',
    },
    {
      icon: ImProfile,
      title: 'Neurology',
      details: 'Foreign neurologists will take care of you.',
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {servicesData.map((service, index) => (
          <Service key={index} data={service} /> // Use index as key if icon is not unique
        ))}
      </div>
    </div>
  );
};

export default Services;
