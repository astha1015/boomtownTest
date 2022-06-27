import React from 'react'
import ApiError from './ApiError'
import EventTable from './EventTable'
import NotFound from './NotFound'
import { useApiData } from './ApiHandler/useApiData'
import { baseUrl } from '../constants'

const Events = () => {
  const [events, error, statusCode] = useApiData(`${baseUrl}/events`)
  if (statusCode === 404) return <NotFound />
  return (
    <div>
      {!error &&
      <> 
        <h1>Events</h1>
        <EventTable events = {events} />
      </> 
      } {(error || statusCode) && <ApiError error={error} statusCode={statusCode} />}
    </div>
  )
}

export default Events