import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../State'
import '../Styles/Repositories.css'
import { Cards } from './Cards'
import { CardGroup } from 'react-bootstrap'

const Repositories = () => {
    const repoAPI = useGlobalState('data')[0].repos_url
    const [repos, setAllRepos] = useState([])

    useEffect(() => {
        fetch(repoAPI)
        .then(res => res.json())
        .then(res => setAllRepos(res))
        .catch(error => console.log(error))
    },[])

  return (
    <div className='repo'>
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
    </div>
  )
}

export default Repositories