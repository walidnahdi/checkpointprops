import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';





function Player({joueur,key}) {
  return (
    <Card style={{ width: '22rem',marginLeft: '500px',marginTop:'30px' ,border: '3px solid green'}}>
      <Card.Img variant="top" src={joueur.ImageUrl} />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold', textAlign: 'center'}}>{joueur.name}</Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{fontWeight: 'bold',backgroundColor:'violet'}}>Age : {joueur.age}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: 'bold',backgroundColor:'blue'}}>Nationality: {joueur.nationality}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: 'bold',backgroundColor:'orange'}}>Team: {joueur.team} </ListGroup.Item>
        <ListGroup.Item style={{fontWeight: 'bold',backgroundColor:'red'}}>jerseyNumber: {joueur.jerseyNumber} </ListGroup.Item>
      </ListGroup>
      
      <Card.Body>
      </Card.Body>
    </Card>

    )
}

export default Player