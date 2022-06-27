import React from 'react'
import { Table, Container } from 'react-bootstrap'

const EventTable = ({events}) => {
  return (
    <Container>
        <Table responsive striped bordered style={{whiteSpace: 'nowrap', overflow:'scroll'}}>
        <thead>
            <tr>
            <th>#</th>
            <th>Event</th>
            <th>Repository</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
        {events.map((event,idx) => {
            return(
                <tr key={idx}>
                <td>{event?.id}</td>
                <td>{event?.type.replace('Event', '')}</td>
                <td><a href={event?.repo?.url}>{event?.repo?.name}</a></td>
                <td>{event?.created_at}</td>
              </tr>
            )
        })}
        </tbody>
        </Table>
    </Container>
  )
}

export default EventTable