import React from 'react'
import ApiError from './ApiError'
import { useApiData } from './ApiHandler/useApiData'
import NotFound from './NotFound'
import { baseUrl } from '../constants'

const Issues = () => {
    const [issues, error, statusCode] = useApiData(`${baseUrl}/issues`)
    if (statusCode === 404) return <NotFound />
    return (
        <div>
            {!error && <h1>Issues - {issues} </h1>}
            {(error || statusCode) && <ApiError error={error} statusCode={statusCode} />}
        </div>
    )
}

export default Issues