import React from 'react';
import './Item.css'
const Item=({service,handleDelete,handleEdit })=>{
  return (
    <li>
      <div className="tableofcontent">
        <div className="servicename">{service.name}</div>
        <div className="servicedesc">{service.description}</div>
        <div className="serviceprice">₹ {service.price}</div>
        <div className="buttons">
          <button onClick={() => handleEdit(service)}>Edit</button>
          <button onClick={() => handleDelete(service.id)}>Delete</button>

        </div>
        
      </div>
      
    </li>
  );
};

export default Item;
