import React from 'react'
import { Table } from 'react-bootstrap'

const EventTable = ({events}) => {
  return (
    <div>
        <Table responsive striped bordered hover size="sm">
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

export default EventTable