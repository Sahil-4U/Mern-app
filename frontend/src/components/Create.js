import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';


function Create() {
  // we have to create states for name email and age
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // here i am doing a post request to the server to save the data of the user
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userDetails = { name, email, age };
    const response = await fetch('http://localhost:5000', {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },

    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    else if (response.ok) {
      console.log(result);
      setSuccess('User Created Successfully');
      setError('');
      setName('');
      setAge('');
      setEmail('');
    }
  }






  return (
    <div className='container my-2'>
      {/* this is for error message */}
      {
        error &&
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {error}
          </p>
        </Alert>
      }
      {/* this is for success message */}
      {
        success &&
        <Alert variant="info" className='text-center shadow'>
          <Alert.Heading>{success}</Alert.Heading>
        </Alert>
      }
      
              <h1 className='text-center m-3 '> <Badge bg="dark" className='shadow'>Create a user</Badge></h1>


      {/* This is our business logic */}
      <Form className='container my-2' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter your age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Create;