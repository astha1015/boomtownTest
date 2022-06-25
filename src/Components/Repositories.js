import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../State'
import '../Styles/Repositories.css'
import { Cards } from './RepoCards'
import { CardGroup } from 'react-bootstrap'
import ApiError from './ApiError'
import NotFound from './NotFound'

const Repositories = () => {
    const repoAPI = useGlobalState('data')[0].repos_url
    const [repos, setAllRepos] = useState([])
    const [error, setError] = useState(null)
    const [statusCode, setStatusCode] = useState()

    useEffect(() => {
        fetch(repoAPI)
        .then(res => {
            if (!res.ok) {
                setStatusCode(res.status)
                setError(res.statusText)
                throw (res)
            }
            return res.json()})
        .then(res => {
            setAllRepos(res)
        })
        .catch(error => {
          console.log(`Response errored with status: ${error.status}`)
        })
    },[])
    if (statusCode == 404) return <NotFound />

    return (
        <div className='repo'>
            {!error && 
            <>
                <h1>Repositories</h1>
                <div className='repoList'>         
                    <CardGroup>
                        {repos.map(r=> {
                            return(
                                <div className='items'>
                                <Cards repo={r}/>
                                </div>
                            )
                        })}
                    </CardGroup>
                </div>
            </>
            } {error && <ApiError />}
        </div>
    )
}

export default Repositories