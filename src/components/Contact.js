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
      <Container fluid className='contact-container bg-dark'>
        <Row className="justify-content-start align-items-start">
          <Col xs={12} lg={6}>
          <Card className="p-5 mt-5 contact-card rounded-4">
            <h1 className="text-center text-white fs-1 fw-600 contact-h1">Contact <span className='text-black fs-1 ps-5 fw-600 contact-span'>us</span></h1>
            <form onSubmit={handleSubmit} className='mt-5'>
              <div className="mb-3">
                <input className="form-control" type="text" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} />
                {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
              </div>
              <div className="mb-3">
                <input className="form-control" type="text" name="lastName" value={formData.lastName} placeholder="Last Name" onChange={handleChange} />
                {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
              </div>
              <div className="mb-3">
                <input className="form-control" type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </div>
              <div className="mb-3">
                <input className="form-control" type="tel" name="phone" value={formData.phone} placeholder="Phone" onChange={handleChange} />
                {errors.phone && <span className="text-danger">{errors.phone}</span>}
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="message" value={formData.message} placeholder="Message" onChange={handleChange}></textarea>
                {errors.message && <span className="text-danger">{errors.message}</span>}
              </div>
              <button className="btn btn-primary" type="submit">Send Message</button>
            </form>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card className="contact-image-card rounded-4 mt-4"></Card>
        </Col>
    </Row>
  </Container>
    
  )
}

export default Contact
