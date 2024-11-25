import React, { useState } from 'react';
import './RestaurantTable.css'; // Assuming you have some CSS for styling
import Modal from './Shared/Modal';

const dummyData = Array.from({ length: 12 }, (_, index) => ({
  id: 200 + index,
  avgRating: (Math.random() * 5).toFixed(1), // Random rating between 0-5
  deliveryTime: Math.floor(Math.random() * 60) + 10, // Random delivery time between 10-70 minutes
  email: `user${index}@example.com`,
  name: `Restaurant ${index + 1}`,
  notes: `Notes for Restaurant ${index + 1}`,
}));

const RestaurantTable = () => {
  const [data, setData] = useState(dummyData);
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [modalData, setModalData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (row) => {
    setModalData(row);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setModalIsOpen(false);
  };

  const handleDelete = (id) => {
    console.log('delete', id)
    setData(data.filter((item) => item.id !== id));
    closeModal();
};

const handleEdit = (updatedRow) => { 
    console.log('updatedRow', updatedRow)
    setData(data.map((item) => (item.id === updatedRow.id ? updatedRow : item)));
    closeModal();
  };

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const paginatedData = sortedData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);
  
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Name</th>
            <th onClick={() => requestSort('avgRating')}>Avg Rating</th>
            <th onClick={() => requestSort('deliveryTime')}>Delivery Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.avgRating}</td>
              <td>{row.deliveryTime} min</td>
              <td>
                <button className= "btn" onClick={() => openModal(row)}>Edit</button>
                <button className= "btn" onClick={() => handleDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, index) => (
          <button className= "btn" key={index} onClick={() => handlePageChange(index)}>
            {index + 1}
          </button>
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>{modalData ? 'Edit Restaurant' : 'Delete Restaurant'}</h2>
        {modalData && (
          <div>
            <p>Name: {modalData.name}</p>
            <p>Avg Rating: {modalData.avgRating}</p>
            <p>Delivery Time: {modalData.deliveryTime}</p>
            {/* Add form inputs for editing here */}
            <button className= "btn" onClick={() => handleEdit({ ...modalData, name: 'Updated Name' })}>Save</button>
          </div>
        )}
        <button className= "btn" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default RestaurantTable;
