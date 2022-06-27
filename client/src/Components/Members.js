import React from 'react'
import ApiError from './ApiError'
import MemberCard from './MemberCard'
import NotFound from './NotFound'
import { useApiData } from './ApiHandler/useApiData'
import { baseUrl } from '../constants'

const Members = () => {
    const [members, error, statusCode] = useApiData(`${baseUrl}/members`)
    if (statusCode === 404) return <NotFound />
    return (
        <div>
            {!error && 
                <>
                <h1>Members</h1>
                <MemberCard members={members} />
                </>
            } {(error || statusCode) && <ApiError error={error} statusCode={statusCode} />}
        </div>
    )
}

export default Members