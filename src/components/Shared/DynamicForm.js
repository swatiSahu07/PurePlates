import React, { useState, useEffect } from 'react';
import './ReusableForm.css';

const DynamicForm = ({ formFields, initialValues, onSubmit, onCancel }) => {
  const [formValues, setFormValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormValues(initialValues || {});
  }, [initialValues]);
console.log('dynamicform',initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    formFields.forEach(({ name, isRequired }) => {
      if (isRequired && !formValues[name]) {
        newErrors[name] = `${name} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formValues);
    }
  };

  const handleCancel = () => {
    setFormValues(initialValues || {});
    setErrors({});
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ name, label, type, isEditable, isReadOnly }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          {type === 'longText' ? (
            <textarea
              id={name}
              name={name}
              value={formValues[name] || ''}
              onChange={handleChange}
              readOnly={isReadOnly}
              disabled={!isEditable}
            />
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              value={formValues[name] || ''}
              onChange={handleChange}
              readOnly={isReadOnly}
              disabled={!isEditable}
            />
          )}
          {errors[name] && <span style={{ color: 'red' }}>{errors[name]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default DynamicForm;
