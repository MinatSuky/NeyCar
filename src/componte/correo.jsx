import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Correos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!formData.name || !formData.email || !formData.idea) {
      setMessage('Por favor, completa todos los campos.');
      setMessageType('error');
      return;
    }

    emailjs.send(
      'neycar_correo', //  ID de servicio 
      'template_neycar', //  ID de plantilla 
      formData,
      'tptMfujBf0nPjHX5K' //  ID de usuario
    )
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('¡GRANDIOSO! Diste el primer paso :)');
        setMessageType('success');
      }, (err) => {
        console.error('FAILED...', err);
        setMessage('Hubo un error al enviar el correo');
        setMessageType('error');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center gap-8 mt-3'>
        <input
          className='py-4 px-4 logo color'
          type="text"
          name="name"
          placeholder='Nombre...'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='py-4 px-4 logo color'
          type="email"
          name="email"
          placeholder='Correo...'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <input
        className='py-4 px-4 mt-8 w-[100%] pb-[19%] logo color'
        type="text"
        name="idea"
        placeholder='Tu Idea...'
        value={formData.idea}
        onChange={handleChange}
      />
      <button className="cssbuttons-io-button mt-5 logo" type="submit">
        ENVIAR
        <div className="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
          </svg>
        </div>
      </button>
      {message && (
        <p className={`mt-4 text-lg ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </form>
  );
}

export default Correos;
