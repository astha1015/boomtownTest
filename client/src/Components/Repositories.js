import React from 'react'
import '../Styles/Repositories.css'
import { Cards } from './RepoCards'
import { CardGroup } from 'react-bootstrap'
import ApiError from './ApiError'
import NotFound from './NotFound'
import { useApiData } from './ApiHandler/useApiData'
import { baseUrl } from '../constants'

const Repositories = () => {
    const [repos, error, statusCode] = useApiData(`${baseUrl}/repos`)
    if (statusCode === 404) return <NotFound />

    return (
        <div className='repo'>
            {!error && 
            <>
                <h1>Repositories</h1>
                <div className='repoList'>         
                    <CardGroup>
                        {repos.map((r,idx)=> {
                            return(
                                <div key={idx} className='items'>
                                <Cards repo={r}/>
                                </div>
                            )
                        })}
                    </CardGroup>
                </div>
            </>
            } {(error || statusCode) && <ApiError error={error} statusCode={statusCode} />}
        </div>
    )
}

export default Repositories