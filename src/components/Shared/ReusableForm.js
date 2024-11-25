import React from 'react';
import './ReusableForm.css';

const ReusableForm = ({ formFields, onSubmit }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    onSubmit(formValues);
  };

  return (
    <form className="dynamic-form" onSubmit={handleSubmit}>
      <div className="form-row">
        {formFields.map((field, index) => {
          if (field.type === 'longText') {
            return (
              <div key={index} className="form-row full-width">
                <label>{field.label}</label>
                <textarea name={field.name} rows="1" className="full-width-input" />
              </div>
            );
          }

          return (
            <div key={index} className="form-row half-width">
              <label>{field.label}</label>
              <input
                type={field.type === 'number' ? 'number' : 'text'}
                name={field.name}
              />
            </div>
          );
        })}
      </div>
      <button type="submit" className="submit-btn">Submit</button>
      <button  className="cancel-btn">Cancel</button>
    </form>
  );
};

export default ReusableForm;
