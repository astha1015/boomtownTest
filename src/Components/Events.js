import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../State'
import { Table } from 'react-bootstrap'

const Events = () => {
    const eventsUrl = useGlobalState('data')[0].events_url
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(eventsUrl)
        .then(res => res.json())
        .then(res => setEvents(res))
        .catch(error => console.log(error))
    },[])
  return (
    <div>
        <h1>Events</h1>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Event</th>
            <th>Repository</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
        {events.map(event => {
            return(
                <tr>
                <td>{event?.id}</td>
                <td>{event?.type.replace('Event', '')}</td>
                <td><a href={event?.repo?.url}>{event?.repo?.name}</a></td>
                <td>{event?.created_at}</td>
              </tr>
            )
        })}
        </tbody>
        </Table>
    </div>
  )
}

export default Events