import React, { useState, useEffect } from 'react'
import '../Styles/Homepage.css'
import { useGlobalState } from '../State'
import { Card, Button, Badge, ListGroup } from 'react-bootstrap'
import ApiError from './ApiError'
import NotFound from './NotFound'

const Homepage = () => {
    const [data, setData] = useGlobalState('data')
    const [error, setError] = useState(null)
    const [statusCode, setStatusCode] = useState()

    useEffect(() => {
        fetch('https://api.github.com/orgs/boomtownroi')
        .then(res => {
            if (!res.ok) {
                setStatusCode(res.status)
                setError(res.statusText)
                throw (res)
            }
            return res.json()})
        .then(res => {
            setData(res)
        })
        .catch(error => {
          console.log(`Response errored with status: ${error.status}`)
        })
    },[])
    if (statusCode == 404) return <NotFound />
    return (
        <div>
            {!error &&
                <div className='home'>     
                    <Card style={{ width: '500px'}} >
                        <a href={data.html_url} >
                            <Card.Img variant="top" src={data.avatar_url}  />
                        </a>
                    </Card>
                    
                    <ListGroup variant="flush" className='details'>
                        <ListGroup.Item>{`ID: ${data.id}`}</ListGroup.Item>
                        <ListGroup.Item>{`Name: ${data.name}`}</ListGroup.Item>
                        <ListGroup.Item>{`Type: ${data.type}`}</ListGroup.Item>
                        <ListGroup.Item>{`Blog: ${data.blog}`}</ListGroup.Item>
                        <ListGroup.Item>
                            <span className={new Date(data.created_at)> new Date(data.updated_at) ? 'recent' : ''}> {`Created: ${data.created_at}`} </span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className={new Date(data.created_at)< new Date(data.updated_at) ? 'recent' : ''}> {`Updated: ${data.updated_at}`} </span>
                        </ListGroup.Item>
                        <ListGroup.Item>{`Public Repos: ${data.public_repos}`}</ListGroup.Item>
                        <ListGroup.Item>Verification: <Badge bg={data?.is_verified ? 'success' : 'danger'}>{data?.is_verified ? 'Verified' : 'Not Verified'}</Badge></ListGroup.Item>
                    </ListGroup>
                </div>   
                }
               {error && <ApiError />}       
        </div>  
    )
}

export default Homepage