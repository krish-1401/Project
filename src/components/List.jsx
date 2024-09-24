import React from 'react';
import Item from './Item';
import './List.css'
const List = ({services,handleDelete, handleEdit }) => {
  return (
    <div>
      <h2>Service List</h2>
      <br />
      <div className="container">
        <div className="name">Name of The Service</div>
        <div className="desc">Description</div>
        <div className="price">Price</div>
      </div>
      <ul>
        {services.map(service => (
          <Item key={service.id} service={service} handleDelete={handleDelete} handleEdit={handleEdit}/>))
        }
      </ul>
    </div>
  );
};

export default List;
