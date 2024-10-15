import { useEffect, useState } from 'react';
import { MdWifi, MdLocalParking, MdHotTub } from 'react-icons/md';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const fetchFlats = async () => {
      const response = await fetch('/mockDataFlatDetails.json'); // Adjust the path if necessary
      const data = await response.json();
      setFlats(data);
    };
    
    fetchFlats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Explore Flats Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Flats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flats.map((flat) => (
              <div key={flat.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={flat.image} alt={flat.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{flat.name}</h3>
                  <h4 className="text-gray-600">{flat.location}</h4>
                  <p className="text-blue-600 font-bold mt-2">₹{flat.price}</p>
                  <div className="flex mt-2 space-x-2">
                    {flat.facilities.includes("WiFi") && <MdWifi className="text-gray-500" />}
                    {flat.facilities.includes("Parking") && <MdLocalParking className="text-gray-500" />}
                    {flat.facilities.includes("Hot Tub") && <MdHotTub className="text-gray-500" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* View More Button */}
        <div className="text-center mb-12">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            View More
          </button>
        </div>

        {/* About Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Flat Near LPU is dedicated to helping students find their ideal stay with the best price and location. 
            We connect students with flat owners to ensure a smooth and comfortable living experience near LPU.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
