import React from 'react'
import { Card, Button, Row, Col, Badge } from 'react-bootstrap'

const MemberCard = ({members}) => {
  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
        {members.map(m => {
            return(
                <Card style={{ width: '300px', margin:'15px' }}>
                    <Card.Img src={m.avatar_url} />
            
                    <Card.Body>
                        <Badge bg='light' text='dark'>{m.type}</Badge>
                        {m.site_admin && <Badge bg='success'>Site Admin</Badge>}
                        <Card.Title>{`${m.login} - ${m.id}`} </Card.Title>
                        <Button variant="primary" href = {m.html_url}>Learn More</Button>
                    </Card.Body>
                </Card>
            )
        })}
    </div>
  )
}

export default MemberCard