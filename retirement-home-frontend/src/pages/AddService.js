import React, { useState } from 'react';
import axios from 'axios';

const AddService = () => {
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const { data } = await axios.post('http://localhost:5000/api/services/upload', formData);
      setImage(data.imagePath);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newService = { name: serviceName, description, image };
      await axios.post('http://localhost:5000/api/services', newService);
      // Refresh service list or provide feedback
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceName">Service Name</label>
        <input
          type="text"
          name="serviceName"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Upload Image</label>
        <input
          type="file"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {image && <img src={image} alt="Service" className="mt-4" />}
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Add Service</button>
    </form>
  );
};

export default AddService;
