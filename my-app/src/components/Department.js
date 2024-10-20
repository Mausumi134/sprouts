import React from 'react';

const Department = ({ dep }) => {
  const { title, details, icon: Icon } = dep; // Destructure props and rename 'icon' to 'Icon' for better JSX usage

  return (
    <div className="bg-white hover:bg-gray-100 rounded-lg shadow-lg text-center p-4">
      <Icon className="w-20 h-20 mx-auto text-blue-700" /> {/* Use Icon directly */}
      <h3 className="text-xl font-medium">{title}</h3>
      <p>{details}</p>
    </div>
  );
};

export default Department;
