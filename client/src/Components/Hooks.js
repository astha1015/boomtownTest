import React from 'react'
import ApiError from './ApiError'
import NotFound from './NotFound'
import {useApiData} from './ApiHandler/useApiData'
import { baseUrl } from '../constants'

const Hooks = () => {
    const [hooks, error, statusCode] = useApiData(`${baseUrl}/hooks`)
    if (statusCode === 404) return <NotFound />
    return (
        <div>
            {!error && <h1>Hooks - {hooks} </h1>}
            {(error || statusCode) && <ApiError error={error} statusCode={statusCode} />}
        </div>
    )
}

export default Hooks