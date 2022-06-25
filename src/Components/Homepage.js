import React, { useState, useEffect } from 'react'
import '../Styles/Homepage.css'
import { useGlobalState } from '../State'
import { Card, Button, Badge } from 'react-bootstrap'

const Homepage = () => {
    const [data, setData] = useGlobalState('data')
    useEffect(() => {
      fetch('https://api.github.com/orgs/boomtownroi')
      .then(res => res.json())
      .then(d => {
        setData(d);})
      .catch(error => console.log(error))
    },[])
    return (
        <div>
            <div className='home'>       
                <Card style={{ width: '500px'}}>
                    <Card.Img variant="top" src={data.avatar_url} />
                    <Card.Body>
                        <Card.Title>
                            {`${data.name} - ${data.id}`}
                            <span style={{float:'right'}}><Badge bg={data?.is_verified ? 'success' : 'danger'}>{data?.is_verified ? 'Verified' : 'Not Verified'}</Badge></span>
                        </Card.Title>
                        <Card.Text>
                            <p>
                                <span className={new Date(data.created_at)> new Date(data.updated_at) ? 'recent' : ''}> {`Created: ${data.created_at}`} </span> <br />
                                <span className={new Date(data.created_at)< new Date(data.updated_at) ? 'recent' : ''}> {`Updated: ${data.updated_at}`} </span>
                            </p>
                        </Card.Text>
                        <Button variant="primary" href={data.html_url}>Learn More</Button>
                    </Card.Body>
                </Card>
            </div>        
        </div>  
    )
}

export default Homepage