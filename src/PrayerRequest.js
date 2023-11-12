import React, { useState } from 'react';
import axios from 'axios';
import logo from './images/logo.png';

const PrayerRequest = () => {
  // State for the form fields
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    prayerRequest: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using Promise.all to wait for both the post request and a 1-second timeout
      await Promise.all([
        axios.post(
          'https://sheet.best/api/sheets/a881b317-0875-4e4b-ab44-802cf3450a4c',
          formData
        ),
        new Promise((resolve) => setTimeout(resolve, 1000)), // Wait for 1 second
      ]);
      // Reset form data after successful submission
      setFormData({
        name: '',
        phone: '',
        prayerRequest: '',
      });
    } catch (error) {
      // Handle your error state here
      console.error('There was an error submitting the form:', error);
    }

    setLoading(false);
  };

  return (
    <div
      className='my-5'
      style={{ display: 'flex', justifyContent: 'center', minHeight: '50vh' }}
    >
      {loading ? (
        <div className='preloader'>
          <div className='preloader-logo'>
            <img src={logo} alt='' width='143' className='img-logo' />
          </div>
          <div className='preloader-body'>
            <div id='loadingProgressG'>
              <div className='loadingProgressG' id='loadingProgressG_1'></div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-3 col-sm-12 col-md-12'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3 col-sm-12 col-md-12'>
            <label htmlFor='phone' className='form-label'>
              Phone Number
            </label>
            <input
              type='tel'
              className='form-control'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3 col-sm-12 col-md-12'>
            <label htmlFor='prayerRequest' className='form-label'>
              Prayer Request
            </label>
            <textarea
              className='form-control'
              id='prayerRequest'
              name='prayerRequest'
              value={formData.prayerRequest}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='button-container-requests'>
            <div className='button-outer'>
              <a
                className='button button-lg button-primary button-winona'
                style={{ textDecoration: 'none' }}
                onClick={handleSubmit}
              >
                <div className='content-original'>Submit Request</div>
              </a>
            </div>
            <div className='button-outer'>
              <a
                className='button button-lg button-primary button-winona'
                style={{ textDecoration: 'none' }}
                href='https://api.whatsapp.com/send?phone=9100685437'
                target='_blank'
              >
                <div className='content-original'>Chat on Whatsapp</div>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default PrayerRequest;
