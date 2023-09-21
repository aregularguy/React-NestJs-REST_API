import React, { useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // Import axios
import './FormPage.css';
import { useParams } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const FormPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [userName,setUsername]= useState('')
  const location = useLocation();
// console.log("userName is",location.state.username);
const fetchUserData = async (username) => {
  try {
    console.log("printin username before calling",username);
    const response = await axios.get(`http://localhost:4000/users/${username}`);
    const userData = response.data;

    // Set the form data with the user data if it exists
    if (userData) {
      console.log("user data response is ",userData);
      setPhoneNumber(userData.phoneNumber);
      setEmail(userData.email);
      setName(userData.name);
      setDateOfBirth(userData.dateOfBirth);
      setUsername(userData.userName);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
useEffect(() => {
  // Fetch user data when the component mounts
  console.log("useeffect called before   ",userName);
  if (userName) {
    fetchUserData(userName);
  }
}, [userName]);
useEffect(() => {
  // Set the username from the location state when the component mounts
  if (location.state && location.state.username) {
    setUsername(location.state.username);
    console.log("username is f " ,userName);

  }
}, [location.state]);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // Create a data object to send in the POST request
    const formData = {
      phoneNumber,
      email,
      name,
      dateOfBirth,
      userName
    };

    try {
      // Send a POST request to your NestJS backend
      const response = await axios.post('http://localhost:4000/users', formData);
      if (response.status === 201) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  const handleCancel = () => {
   
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
