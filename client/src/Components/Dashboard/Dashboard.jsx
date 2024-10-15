// src/components/Dashboard/Dashboard.jsx
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaHeart } from 'react-icons/fa';
import { getClients } from "../services/api.js";

const Dashboard = () => {
  const [flats, setFlats] = useState([]);
  const [filters, setFilters] = useState({
    area: '',
    minPrice: '',
    maxPrice: '',
    facilities: []
  });

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const response = await getClients();
        setFlats(response.data);
      } catch (error) {
        console.error('Error fetching flats:', error);
      }
    };
    fetchFlats();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters(prev => ({
        ...prev,
        facilities: checked
          ? [...prev.facilities, value]
          : prev.facilities.filter(f => f !== value)
      }));
    } else {
      setFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8 flex">
        {/* Left side - Filters */}
        <div className="w-1/3 pr-4">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block mb-2">Area</label>
            <select name="area" onChange={handleFilterChange} className="w-full p-2 border rounded">
              <option value="">All</option>
              <option value="phagwara">Phagwara</option>
              <option value="lawgate">Lawgate</option>
              <option value="green valley">Green Valley</option>
              <option value="ramamandi">Ramamandi</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price Range</label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                onChange={handleFilterChange}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                onChange={handleFilterChange}
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Facilities</label>
            {["Refrigerator", "Window AC", "Wall AC", "TV", "Inverter", "Generator", "Water Heater", "Washing Machine", "Others"].map(facility => (
              <div key={facility} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={facility}
                  name="facilities"
                  value={facility}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                <label htmlFor={facility}>{facility}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Right side - Flat cards */}
        <div className="w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flats.map(flat => (
            <div key={flat.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <img src={flat.image} alt={flat.name} className="w-full h-48 object-cover" />
              <div className="absolute top-2 right-2">
                <FaHeart className="text-red-500 cursor-pointer" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{flat.name}</h3>
                <p className="text-gray-600">{flat.location}</p>
                <p className="text-blue-600 font-bold mt-2">₹{flat.price}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add to Compare
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
