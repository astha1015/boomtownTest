import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../State'
import ApiError from './ApiError'
import NotFound from './NotFound'

const Issues = () => {
    const issuesUrl = useGlobalState('data')[0].issues_url
    const [issues, setIssues] = useState([])
    const [statusCode, setStatusCode] = useState();
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(issuesUrl)
        .then(res => {
            if (!res.ok) {
                setStatusCode(res.status)
                setError(res.statusText)
                throw (res)
            }
            return res.json()})
        .then(res => {
            setIssues(res)
        })
        .catch(error => {
          console.log(`Response errored with status: ${error.status}`)
        })
    },[])
    if (statusCode == 404) return <NotFound />
    return (
        <div>
            {!error && <h1>Issues - {issues} </h1>}
            {error && <ApiError />}
        </div>
    )
}

export default Issues