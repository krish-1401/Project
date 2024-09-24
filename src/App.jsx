import React, { useState } from 'react';
import List from './components/List'; 
import Form from './components/Form'; 
import './App.css';

function App() {
  const [services, setServices] = useState([]);
  const [edit, setedit] = useState(null);

  const addService = (service) => {
    setServices([...services, { ...service, id: services.length + 1 }]);
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const editService = (service) => {
    setedit(service);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map(service =>
        service.id === edit.id ? { ...updatedService, id: service.id } : service
      )
    );
    setedit(null);
  };
  const clearEdit = () => setedit(null);
  return (
    <div className="App">
      <h1>Healthcare Services Manager</h1>
      <Form addService={addService} serviceToEdit={edit} updateService={updateService} clearEdit={clearEdit}/>
      <List services={services} handleDelete={deleteService} handleEdit={editService}/>
    </div>
  );
}

export default App;
