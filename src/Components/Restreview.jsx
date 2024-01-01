import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

function Restreview({rv}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log(rv);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Reviews
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {
              rv?.map(item=>(
                <ListGroup>
      <ListGroup.Item>name : {item.name}</ListGroup.Item>
      <ListGroup.Item>date : {item.date}</ListGroup.Item>
      <ListGroup.Item>Rating : {item.rating}</ListGroup.Item>
      <ListGroup.Item>comments : {item.comments}</ListGroup.Item>
    </ListGroup>
              ))
              }
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Restreview