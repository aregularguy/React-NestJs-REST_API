// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Card,Button} from 'react-bootstrap'
import './HomePage.css';
// const navigate = useNavigate();
// navigate('/home');
const HomePage = () => {
  const [username, setUsername] = useState(''); // State for the username input
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log("handling change" ,username);
  };

  const handleSubmit = () => {
    // Redirect the user to the Form Page with the username as a query parameter
    // console.log("username",username);
    // navigate(`/form?username=${username}`)
    navigate('/form',{state:{username:username}})
  };

  return (
    <div className="homepage">
      <div className="gradient-background">
      <h2  className="heading" >Hanabi Technology</h2>
        <div className="card">
              <input
                type="text"
                placeholder="Username" onChange={handleUsernameChange} 
                // Implement your username input logic here
              />
     <Button variant="primary" onClick={handleSubmit}>Submit</Button>        
        </div>
      </div>
    </div>
  );
};

export default HomePage;
