import DynamicForm from './DynamicForm';

const EditForm = ({ existingData }) => {
    const formFields = [
        { name: 'name', label: 'Name', type: 'text', isRequired:true,isEditable:true, isReadOnly:false },
        { name: 'deliveryTime', label: 'Delivery Time', type: 'number', isRequired:true,isEditable:true, isReadOnly:false },
        { name: 'avgRating', label: 'Rating', type: 'number', isRequired:true,isEditable:true, isReadOnly:false },
        { name: 'notes', label: 'Notes', type: 'longText', isRequired:true,isEditable:true, isReadOnly:false },
        { name: 'email', label: 'Email', type: 'text', isRequired:true,isEditable:false, isReadOnly:false },
        // { name: 'Created', label: 'Created Date', type: 'date' }
      ];
    const existingData =[{
        avgRating: "32",deliveryTime: "333",email: "swa", name: "eee",notes: "ewreter"
      }]
    const handleEdit = (data) => {
      console.log('Data updated:', data);
      // Call API to update data
    };
  
    const handleCancel = () => {
      console.log('Edit canceled');
      // Handle cancel action (e.g., close modal)
    };
  
    return (
     <div>
        <p>Edit</p>
        <DynamicForm
        formFields={formFields}
        initialValues={existingData}
        onSubmit={handleEdit}
        onCancel={handleCancel}
      />
     </div>
    );
  };
  export default EditForm;
  