import React, { useEffect, useState } from 'react';
// Import the correct loader component from the latest version
import { ThreeDots } from 'react-loader-spinner';
import Doctor from './Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all doctors
  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch(() => setLoading(false)); // Handle errors
  }, []);

  return (
    <div className="container my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Check if it's still loading */}
        {loading ? (
          <div className="flex justify-center items-center">
            <ThreeDots color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          // If doctors are loaded, map over the list and display each
          doctors.length ? (
            doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p className="text-center text-red-500">No doctors available</p>
          )
        )}
      </div>
    </div>
  );
};

export default Doctors;
