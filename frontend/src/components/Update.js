import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const {id}=useParams();
  const navigate=useNavigate();
  const getData=async()=>{
    const response=await fetch(`http://localhost:5000/${id}`);
    const result=await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }else if(response.ok){
      console.log(result);
      setName(result.name);
      setAge(result.age);
      setEmail(result.email);
    }

  }
 
useEffect(() => {
  getData();
}, [])


const handleSubmit = async (event) => {
  event.preventDefault();
  const updateUserDetails = { name, email, age };
  const response = await fetch(`http://localhost:5000/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updateUserDetails),
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
   navigate('/allposts');
  }
}
  return (
    <div className='container my-3'>
      <h1 className='text-center'><Badge bg="info" className='shadow'>Edit User Details</Badge></h1>
      {/* here i put a alert for error catching */}
      {
        error &&
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {error}
          </p>
        </Alert>
      }
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

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Update