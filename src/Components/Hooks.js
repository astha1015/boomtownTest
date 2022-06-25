import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../State'
import ApiError from './ApiError'
import NotFound from './NotFound'

const Hooks = () => {
    const hooksUrl = useGlobalState('data')[0].hooks_url
    const [hooks, setHooks] = useState([])
    const [statusCode, setStatusCode] = useState();
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(hooksUrl)
        .then(res => {
            if (!res.ok) {
                setStatusCode(res.status)
                setError(res.statusText)
                throw (res)
            }
            return res.json()})
        .then(res => {
            setHooks(res)
        })
        .catch(error => {
          console.log(`Response errored with status: ${error.status}`)
        })
    },[])
    if (statusCode == 404) return <NotFound />
    return (
        <div>
            {!error && <h1>Hooks - {hooks} </h1>}
            {error && <ApiError />}
        </div>
    )
}

export default Hooks