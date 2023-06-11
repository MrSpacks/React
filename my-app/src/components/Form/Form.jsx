import './form.css'
import React, { useState } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the necessary actions with the sent data here
    console.log('Отправленное значение:', inputValue);
    setInputValue(''); // Clearing the input field after submitting
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add your email here"
      />
      <button className='button' type="submit">SEND</button>
    </form>
  );
};

export default MyForm;
