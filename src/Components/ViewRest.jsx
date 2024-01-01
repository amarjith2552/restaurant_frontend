import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function ViewRest() {
  const[details,setdetails]=useState({})
  //useparams - used to get path parameter from the url
  // const paraid=useParams()
  // console.log(paraid.id); // object -> id=3

  //destructure
  const {id} = useParams()
  console.log(id);

  //API call to get details of the particular restaurant using the path parameter
  const base_url='https://restaurant-backend-yei7.onrender.com/restaurants'

  const fetchRest=async()=>{
    const result=await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setdetails(result.data)
  }
    useEffect(()=>{
      fetchRest()
    },[])
  return (
    <div>
      <Row>
        <Col>
        <img src={details.photograph} alt="" style={{width:'450px',height:'500px',margin:'40px',borderRadius:'15px'}} />
        </Col>
        <Col>
        <div style={{margin:'40px',padding:'10px'}}>
          <h1 style={{textAlign:'center'}}>{details.name}</h1>
        <ListGroup as="ol">
      <ListGroup.Item as="li">Restaurant : {details.address}</ListGroup.Item>
      <ListGroup.Item as="li">Neighborhood {details.neighborhood}</ListGroup.Item>

      <ListGroup.Item as="li">Cuisine Type : {details.cuisine_type}</ListGroup.Item>
      <ListGroup.Item as="li"> <Restop op={details.operating_hours}/> </ListGroup.Item>
      <ListGroup.Item as="li"> <Restreview rv={details.reviews}/> </ListGroup.Item>

    </ListGroup>

        </div>
        </Col>

      </Row>
      </div>
  )
}

export default ViewRest