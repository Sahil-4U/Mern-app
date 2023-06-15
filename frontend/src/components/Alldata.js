import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

function Alldata() {
  const [data,setData]=useState();
  const [error, setError] = useState(null);
  const [success,setSuccess]=useState(null);
  const navigate=useNavigate();
  async function getData(){
    const response=await fetch('http://localhost:5000');
    const result=await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }else if(response.ok){
      console.log(result);
      setData(result);
    }
  }
  const handleDelete= async(id)=>{
    const response=await fetch(`http://localhost:5000/${id}`,{
      method:'DELETE',
    });
    const result= await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }else if(response.ok){
     setSuccess("Deleted Successfully");

     setTimeout(() => {
      getData();
      setSuccess("");
    
     }, 1500);
    }
  }
  const handleEdit=(id)=>{
    navigate(`/${id}`);
  }
  useEffect(() => {
    getData();
  
  }, [])
 
  return (
    <div className='container my-2'>
       {
        error &&
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {error}
          </p>
        </Alert>
      }
      {
        success &&
        <Alert variant="success" className='text-center'>
          <p>
            {success}
          </p>
        </Alert>
      }
      <h1 className='text-center m-2 '>
        <Badge bg="dark" className='shadow-lg'>
          All Users
        </Badge>
      </h1>
      <div className='d-flex flex-wrap my-5 '>
        {
          data?.map((ele)=>(
            <Card style={{ width: '18rem' }} className='text-center m-2 shadow'key={ele._id}>
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ele.email}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{ele.age}</Card.Subtitle>
              
              <Button variant="outline-danger" className='me-2' onClick={()=>handleDelete(ele._id)}>Delete</Button>
              <Button variant="outline-info" onClick={()=>handleEdit(ele._id)}>Edit</Button>
            </Card.Body>
          </Card>
          ))
        }
       
      </div>
    </div>
  )
}

export default Alldata