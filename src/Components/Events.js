import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../State'
import ApiError from './ApiError'
import EventTable from './EventTable'
import NotFound from './NotFound'

const Events = () => {
    const eventsUrl = useGlobalState('data')[0].events_url
    const [events, setEvents] = useState([])
    const [error, setError] = useState(null)
    const [statusCode, setStatusCode] = useState()

    useEffect(() => {
        fetch(eventsUrl)
        .then(res => {
          if (!res.ok) {
              setStatusCode(res.status)
              setError(res.statusText)
              throw (res)
          }
          return res.json()})
      .then(res => {
          setEvents(res)
      })
      .catch(error => {
        console.log(`Response errored with status: ${error.status}`)
      })
  },[])
  if (statusCode == 404) return <NotFound />
  return (
    <div>
      {!error &&
      <> 
        <h1>Events</h1>
        <EventTable events = {events} />
      </> 
      } {error && <ApiError />}
    </div>
  )
}

export default Events