// import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const FlatDetailsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Add Flat Details</h2>
            <p className="text-gray-600">Fill in the details of your flat</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="flatName" className="block text-gray-700 font-medium">Flat Name</label>
              <input 
                id="flatName"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("flatName", { required: true })}
              />
              {errors.flatName && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="block text-gray-700 font-medium">Location</label>
              <input 
                id="location"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("location", { required: true })}
              />
              {errors.location && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Area</label>
              <div className="space-y-1">
                {['Law Gate', 'Phagwara', 'Green Valley', 'Ramamandi'].map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      value={area.toLowerCase().replace(' ', '')} 
                      id={area} 
                      {...register("area")}
                      className="form-radio"
                    />
                    <label htmlFor={area} className="text-gray-700">{area}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="block text-gray-700 font-medium">Price</label>
              <input 
                type="number" 
                id="price"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("price", { required: true, min: 1000 })}
              />
              {errors.price && <span className="text-red-500">Price must be at least 1000</span>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Facilities</label>
              <div className="space-y-1">
                {['Refrigerator', 'AC', 'TV', 'Generator', 'Water Heater', 'Washing Machine', 'Others'].map((facility) => (
                  <div key={facility} className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id={facility} 
                      {...register("facilities")}
                      className="form-checkbox"
                    />
                    <label htmlFor={facility} className="text-gray-700">{facility}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="block text-gray-700 font-medium">Image</label>
              <input 
                type="file" 
                id="image"
                {...register("image")}
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FlatDetailsForm;
