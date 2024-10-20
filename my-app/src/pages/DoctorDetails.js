import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'; // Updated import
import { useNavigate, useParams } from 'react-router-dom';
import ThePageHeader from '../components/ThePageHeader';

const DoctorDetails = () => {
  const { docId } = useParams();
  const [doc, setDoc] = useState({});

  // navigate
  const navigate = useNavigate();
  const gotoAppointment = () => {
    navigate('/appointment');
  };

  // fetch all doctors
  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => filterDoctor(data));
    // eslint-disable-next-line
  }, []);

  const filterDoctor = (data) => {
    const myDoc = data.find((d) => parseInt(docId) === d.id);
    setDoc(myDoc);
  };

  return (
    <div>
      {doc ? (
        <>
          {/* Header section */}
          <ThePageHeader header={doc.name} />
          {/* Doc details section */}
          <div className="container my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* grid left side */}
              <div className="bg-white p-5 rounded-lg shadow-lg">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full rounded-lg"
                />
              </div>
              {/* grid right side */}
              <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="text-2xl text-blue-600 text-center font-medium">
                  {doc.name} ({doc.dept})
                </h2>
                <p className="text-center">{doc.degree}</p>
                {/* bio */}
                <h3 className="text-2xl text-blue-600 mt-5 font-medium">Bio</h3>
                <p>{doc.bio}</p>
                {/* education */}
                <h3 className="text-2xl text-blue-600 mt-5 font-medium">
                  Education
                </h3>
                <p>{doc.education}</p>
                <button
                  onClick={gotoAppointment}
                  className="w-10/12 mx-auto mt-8 bg-blue-800 text-white font-medium py-3 px-9 rounded-lg shadow-lg"
                >
                  Get Appointment
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <ThreeDots color="#00BFFF" height={80} width={80} /> {/* Updated usage */}
        </div>
      )}
    </div>
  );
};

export default DoctorDetails;
