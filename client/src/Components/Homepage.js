import React from 'react'
import '../Styles/Homepage.css'
import { Card, Badge, ListGroup } from 'react-bootstrap'
import ApiError from './ApiError'
import NotFound from './NotFound'
import {useApiData} from './ApiHandler/useApiData'
import { baseUrl } from '../constants'

const Homepage = () => {
    const [data, error, statusCode] = useApiData(baseUrl)
    if (statusCode === 404) return <NotFound />
    return (
        <div>
            {!error &&
                <div className='home'>     
                    <Card style={{ width: '50%'}} >
                        <a href={data?.html_url} >
                            <Card.Img variant="top" src={data?.avatar_url}  />
                        </a>
                    </Card>
                    
                    <ListGroup variant="flush" className='details'>
                        <ListGroup.Item>{`ID: ${data?.id}`}</ListGroup.Item>
                        <ListGroup.Item>{`Name: ${data?.name}`}</ListGroup.Item>
                        <ListGroup.Item>{`Type: ${data?.type}`}</ListGroup.Item>
                        <ListGroup.Item>{`Blog: ${data?.blog}`}</ListGroup.Item>
                        <ListGroup.Item>
                            <span className={new Date(data?.created_at)> new Date(data?.updated_at) ? 'recent' : ''}> {`Created: ${data?.created_at}`} </span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className={new Date(data?.created_at)< new Date(data?.updated_at) ? 'recent' : ''}> {`Updated: ${data?.updated_at}`} </span>
                        </ListGroup.Item>
                        <ListGroup.Item>{`Public Repos: ${data?.public_repos}`}</ListGroup.Item>
                        <ListGroup.Item>Verification: <Badge bg={data?.is_verified ? 'success' : 'danger'}>{data?.is_verified ? 'Verified' : 'Not Verified'}</Badge></ListGroup.Item>
                    </ListGroup>
                </div>   
                }
               {(error || statusCode) && <ApiError error={error} statusCode={statusCode}/>}       
        </div>  
    )
}

export default Homepage