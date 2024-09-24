import React, { useState, useEffect } from 'react';

const Form = ({ addService, serviceToEdit, updateService, clearEdit }) => {
  const [name, setName] =useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (serviceToEdit) {
      setName(serviceToEdit.name);
      setDescription(serviceToEdit.description);
      setPrice(serviceToEdit.price);
    } else {
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [serviceToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      const service = { name, description, price: parseFloat(price) };
      serviceToEdit ? updateService(service) : addService(service);
      clearForm();
      clearEdit();
    }
  };

  const clearForm = () => {
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{serviceToEdit ? 'Edit Service' : 'Add New Service'}</h2>
      <input type="text" placeholder="Service Name"value={name} onChange={(e) => setName(e.target.value)} required/>
      <input type="" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">{serviceToEdit ? 'Update Service' : 'Add Service'}</button>
      {serviceToEdit && <button onClick={clearEdit}>Cancel Edit</button>}
    </form>
  );
};

export default Form;
