import React, { useState } from "react";
import Modal from "./Shared/Modal"; // Modal component
import ReusableForm from "./Shared/ReusableForm"; // Form component
import CreateRestaurant from "./Shared/CreateRestaurant";
import AddItem from "./Shared/AddItem";
import RestaurantTable from "./RestaurantTable";


const CRUD = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (formData) => {
    console.log("Form Data Submitted:", formData);
    // Close modal after submission
    setModalOpen(false);
  };
 
//   const formFields = [
//     { name: 'Name', label: 'Name', type: 'text' },
//     { name: 'Delivery Time', label: 'deliveryTime', type: 'number' },
//     { name: 'Rating', label: 'avgRating', type: 'number' },
//     { name: 'Notes', label: 'Notes', type: 'text' },
//     // { name: 'Created', label: 'Created Date', type: 'date' }
//   ];

  return (
    <div>
      <div className="top-restaurant">
      <h1>CRUD Operations</h1>
        <div>
          <button
              className="btn-light"
              onClick={() => {
                setModalOpen(true)
              }}
            >
             
              Add Restaurants
            </button>
          <button
              className="btn-light"
              onClick={() => {
                setModalOpen(true)
              }}
            >
             
              Add 
            </button>
         

          {/* Reusable Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          >
           
            <AddItem/>
            {/* <CreateRestaurant/> */}
            {/* <ReusableForm formFields={formFields} onSubmit={handleSubmit} /> */}
          </Modal>
          <br></br>
          <RestaurantTable/>
        </div>
      </div>
    </div>
  );
};

export default CRUD;
