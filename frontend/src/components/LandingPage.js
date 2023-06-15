import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate=useNavigate();
  return (
    <div className="container mt-5 ">
     <Row>
     
     <h1 className='fst-italic display-1 text-center my-5 fw-bold'><Badge bg="light" text="dark">Welcome to My Mern Application   </Badge></h1>
  
     </Row>
        <Row className='d-flex align-items-center'>
          <Col md={6} className='text-center'>
            <p className='fw-bold '>Enjoy the beauty of React.js and Bootstrap 5.</p>
            <Button variant="outline-warning" className='fw-bold lg' onClick={()=>navigate('/allposts')} size="lg">Get Started</Button>
          </Col>
          <Col md={6}>
            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="Landing Page" 
            style={{height:"12rem",width:"25rem"}}
            className='rounded'
            />
          </Col>
        </Row>
     
    </div>
  )
}

export default LandingPage