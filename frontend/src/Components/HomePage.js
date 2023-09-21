// HomePage.js
import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap'
import './FormPage.css';
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
        <div className="card">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Enter Your Username</Card.Title>
            <Card.Text>
              <input
                type="text"
                placeholder="Username" onChange={handleUsernameChange} 
                // Implement your username input logic here
              />
            </Card.Text>
           {/* Add a link to the Form Page */}
           {/* <Link to={`/form?username=${username}`}> */}
  <Button variant="primary" onClick={handleSubmit}>Submit</Button>
{/* // </Link> */}

            
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
