import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../State'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Members = () => {
    const memberUrl = useGlobalState('data')[0].members_url
    const membersUrl = memberUrl.replace(/{(.*?)}/,'')
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch(membersUrl)
        .then(res => res.json())
        .then(res => setMembers(res))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h1>Members</h1>
            <div style={{display:'flex'}}>
            {members.map(m => {
                return(
                    <Card style={{ width: '18rem', marginRight:'50px' }}>
                        <Row>
                            <Col sm={10} md={15} lg={15} >
                                <Card.Img src={m.avatar_url} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title>{m.login} <span className='text-muted' style={{float:'right'}}>{m.type}</span></Card.Title>
                                    <Card.Subtitle>
                                    {m.id}
                                    </Card.Subtitle>
                                    <Button variant="primary" href = {m.html_url}>Learn More</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            })}
            </div>
            
        </div>
    )
}

export default Members