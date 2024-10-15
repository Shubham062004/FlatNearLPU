import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { getFlats } from "../services/api.js"; // Fetch data from backend

const ComparePage = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const response = await getFlats(); // Fetch flats from backend
        setFlats(response.data);
      } catch (error) {
        console.error('Error fetching flats:', error);
      }
    };
    fetchFlats();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Compare Flats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {flats.map(flat => (
          <div key={flat.id} className="bg-white rounded-lg shadow p-4 relative">
            <button className="absolute top-2 right-2 text-red-500">
              <FaTimes />
            </button>
            <h2 className="text-xl font-semibold mb-2">{flat.name}</h2>
            <p className="mb-2">Price: ₹{flat.price}</p>
            <p className="mb-2">Area: {flat.area}</p>
            <h3 className="font-semibold mb-1">Facilities:</h3>
            <ul className="list-disc list-inside">
              {flat.facilities.map(facility => (
                <li key={facility}>{facility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePage;
