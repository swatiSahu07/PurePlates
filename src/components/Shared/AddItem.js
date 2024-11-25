import DynamicForm from "./DynamicForm";
import { RES_FORM } from "../../utils/tableFields";
const AddItem = () => {
  const edata = [
    {
      avgRating: "3",
      deliveryTime: "33",
      email: "swatisahu@acc.com",
      name: "swati",
      notes: "ewreter",
    },
  ];


  const handleCreate = (data) => {
    console.log("Data created:", data);
    // Call API to create data
  };

  const handleCancel = () => {
    console.log("Form canceled");
    // Handle cancel action (e.g., close modal)
  };

  return (
    <div>
      <p>edit items</p>
      <DynamicForm
        formFields={RES_FORM}
        initialValues={edata[0]}
        onSubmit={handleCreate}
        onCancel={handleCancel}
      />
    </div>
  );
  //   return (
  //     <div>
  //     <p>add items</p>
  //     <DynamicForm
  //       formFields={formFields}
  //       onSubmit={handleCreate}
  //       onCancel={handleCancel}
  //     /></div>
  //   );
};

export default AddItem;
