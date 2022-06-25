import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../State'
import ApiError from './ApiError'
import MemberCard from './MemberCard'
import NotFound from './NotFound'

const Members = () => {
    const memberUrl = useGlobalState('data')[0]?.members_url
    const membersUrl = memberUrl?.replace(/{(.*?)}/,'')
    const [members, setMembers] = useState([])
    const [error, setError] = useState(null)
    const [statusCode, setStatusCode] = useState()

    useEffect(() => {
        fetch(membersUrl)
        .then(res => {
            if (!res.ok) {
                setStatusCode(res.status)
                setError(res.statusText)
                throw (res)
            }
            return res.json()})
        .then(res => {
            setMembers(res)
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
                <h1>Members</h1>
                <MemberCard members={members} />
                </>
            } {error && <ApiError />}
        </div>
    )
}

export default Members