import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import RestCard from './RestCard'

function AllRest() {
  //api fetching

  const base_url='https://restaurant-backend-yei7.onrender.com/restaurants'
//to hold array of restaurant data
  const[alldata,setAllata]=useState([])

  const fetchData=async()=>{
    const result=await axios.get(base_url)
    console.log(result.data); //array(10)
    setAllata(result.data)
  }
  console.log(alldata);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Row>
        
        {alldata.map(item => (
          <Col sm={12} md={6} lg={4} xl={3}>
          <RestCard restaurant={item}/>
          </Col>
        ))}
        
      </Row>
    </div>
  )
}

export default AllRest