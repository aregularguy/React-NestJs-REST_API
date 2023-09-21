import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // Import axios
import './FormPage.css';

function FormPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object to send in the POST request
    const formData = {
      phoneNumber,
      email,
      name,
      dateOfBirth,
    };

    try {
      // Send a POST request to your NestJS backend
      const response = await axios.post('http://localhost:4000/users', formData);

      // Check if the request was successful
      if (response.status === 201) {
        console.log('Form submitted successfully');
        // You can optionally navigate to the Result Page here
        // For example, using React Router: history.push('/result');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  const handleCancel = () => {
    // Implement logic to discard changes and navigate back to the homepage
    // You can use react-router-dom's history for navigation
  };

  return (
    <div className="form-page">
      <div className="center-card">
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title>Form</Card.Title>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </Form.Group>


              
              <div className="button-container">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FormPage;
