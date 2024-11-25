import React from 'react';
import ReusableForm from './ReusableForm';

const CreateRestaurant = () => {
  const formFields = [
    { name: 'name', label: 'Name', type: 'text', isRequired:true,isEditable:true, isReadOnly:false },
    { name: 'deliveryTime', label: 'Delivery Time', type: 'number', isRequired:true,isEditable:true, isReadOnly:false },
    { name: 'avgRating', label: 'Rating', type: 'number', isRequired:true,isEditable:true, isReadOnly:false },
    { name: 'notes', label: 'Notes', type: 'longText', isRequired:true,isEditable:true, isReadOnly:false },
    { name: 'email', label: 'Email', type: 'text', isRequired:true,isEditable:false, isReadOnly:false },
    // { name: 'Created', label: 'Created Date', type: 'date' }
  ];

  const handleSubmit = (formData) => {
    console.log('CreateRestaurant Form Data:', formData);
    // handle form submission logic
  };

  return (
    <div>
      <h3>Create Restaurant</h3>
      <ReusableForm formFields={formFields} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateRestaurant;
