import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../Styles/Card.css'

export const Cards = ({repo}) => {
  return (
   <Card style={{width:'300px'}}>
      <Card.Header>
        {repo.language}
        <span style={{float:'right'}}>{new Date(repo.created_at).toLocaleDateString()}</span>
      </Card.Header>
      <Card.Body>
        <Card.Title className='title'>
            {repo.full_name}
        </Card.Title>
        <Card.Subtitle className='text-muted subtitle'>{`Last Updated on ${new Date(repo.updated_at).toLocaleDateString()}`}</Card.Subtitle>
        <Card.Text className='text'>
          {repo?.description}
        </Card.Text>
        <Button variant="primary" href={repo.html_url}>Explore</Button>
      </Card.Body>
      <Card.Footer className='text-muted'>{`Pushed on: ${new Date(repo.pushed_at).toLocaleDateString()}`}</Card.Footer>
   </Card>
  )
}
