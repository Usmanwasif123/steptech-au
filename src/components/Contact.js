import React, { useState } from 'react';
import '../assets/wrapper/Contact.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure phone is required
    if (name === 'phone' && !value.trim()) {
      setErrors({
        ...errors,
        phone: 'Phone is required'
      });
      return;
    }

    // If the phone field is being changed, ensure it only contains numeric characters
    if (name === 'phone') {
      if (!/^\+?[0-9]*$/.test(value)) {
        setErrors({
          ...errors,
          phone: 'Phone must contain only numeric characters'
        });
        return; // Ignore non-numeric input
      }

      // Limit the phone number to 11 digits
      if (value.length > 12) {
        setErrors({
          ...errors,
          phone: 'Phone number must be 11 digits long'
        });
        return; // Ignore input if longer than 11 digits
      }
    }

    // Clear phone error if the input is valid
    if (errors.phone) {
      setErrors({
        ...errors,
        phone: ''
      });
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    // Check if any field is empty
    for (const field in formData) {
      if (!formData[field].trim()) {
        toast.error(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
        return;
      }
    }

    // If everything is valid, you can submit the form data here
    console.log('Form submitted:', formData);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

     return (
      <Container fluid style={{height: '100vh', width: '98.7vw', background: '#333', backgroundImage: "url('https://i.ibb.co/JHdZGZR/anout-banner.jpg')", scrollBehavior: 'smooth'}}>
        <Row>
          <Col>
          <div style={{paddingTop: '5rem'}}>
            <Card style={{background: 'linear-gradient(256.4deg, #6347AA 7.85%, #233F81 107.97%)', height: '30rem', width: '40rem', marginLeft: '2rem', zIndex: '2', position: 'absolute', borderRadius: '5rem'}}>
              <h1 style={{fontSize: '3rem', marginLeft: '2rem', marginTop: '1rem', color: '#fff', textTransform: 'capitalize'}}>Contact <span style={{color: '#333'}}>us</span></h1>
              <form onSubmit={handleSubmit}>
        <div style={{fontSize: '1.2rem', marginTop: '2rem', width: '20rem'}}> 
          <input className="custom-input" style={{fontSize:'1.2rem', background: 'transparent', border: '2px solid #D8BFD8', borderRadius: '1rem', marginLeft: '2rem', textTransform: 'capitalize', padding: '0.4rem'}} type="text" name="firstName" value={formData.firstName} placeholder='first name' onChange={handleChange} />
          {toast.error.firstName && <span style={{ color: 'red' }}>{toast.error.firstName}</span>}
        </div>
        <div style={{fontSize: '1.5rem', marginTop: '-2.2rem', marginLeft: '18rem'}}>
          <input className="custom-input" style={{fontSize:'1.2rem', background: 'transparent',border: '2px solid #D8BFD8', borderRadius: '1rem',  marginLeft: '2rem', textTransform: 'capitalize', padding: '0.4rem'}} type="text" name="lastName" value={formData.lastName} placeholder='last name' onChange={handleChange} />
          {toast.error.lastName && <span style={{ color: 'red' }}>{toast.error.lastName}</span>}
        </div>
        <div style={{fontSize: '1.2rem', marginTop: '1rem', width: '20rem'}}>
          <input className="custom-input" style={{fontSize:'1.2rem', background: 'transparent',  border: '2px solid #D8BFD8', borderRadius: '1rem',  marginLeft: '2rem', textTransform: 'capitalize', padding: '0.4rem'}} type="email" name="email" value={formData.email} placeholder='email' onChange={handleChange} />
          {toast.error.email && <span style={{ color: 'red' }}>{toast.error.email}</span>}
        </div>
        <div style={{fontSize: '1.5rem', marginTop: '-2.2rem', marginLeft: '18rem'}}>
          <input className="custom-input" style={{fontSize:'1.2rem', background: 'transparent', border: '2px solid #D8BFD8', borderRadius: '1rem',  marginLeft: '2rem', textTransform: 'capitalize', padding: '0.4rem', color: '#555'}} type="tel" name="phone" value={formData.phone} placeholder='phone' onChange={handleChange} />
          {toast.error.phone && <span style={{ color: 'red' }}>{toast.error.phone}</span>}
        </div>
        <div style={{fontSize: '1.2rem', marginTop: '1rem', width: '40rem'}}>
          <textarea className="custom-input" style={{fontSize:'1.2rem', background: 'transparent', border: '2px solid #D8BFD8', borderRadius: '1rem', marginLeft: '2rem', width: '35rem',height: '10rem', textTransform: 'capitalize', padding: '0.4rem'}} name="message" value={formData.message} placeholder='message' onChange={handleChange}></textarea>
          {toast.error.message && <span style={{ color: 'red' }}>{toast.error.message}</span>}
        </div>
        <button style={{fontSize: '1.2rem', marginLeft: '2rem',  border: '2px solid #D8BFD8', background: '#D8BFD8', borderRadius: '1rem', textTransform: 'capitalize', padding: '0.4rem'}} type="submit">send message</button>
      </form>
            </Card>
          </div>
          </Col>
          <Col>
          <Card style={{background: '#ffffff', height: '33rem', width: '40rem', marginLeft: '40rem', marginTop: '-2rem', borderRadius: '5rem'}}>
          </Card>
          </Col>
        </Row>
      </Container>
    
  )
}

export default Contact
