import React, { useState, useEffect } from 'react'
import '../Styles/Homepage.css'

const Homepage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/orgs/boomtownroi')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(error => console.log(error))
    },[])
    return (
        <div>
            <div className='home'>
                <div>
                    <h1>{`${data.id} - ${data.name}`}</h1>
                </div>
                <div className='companyDetails'>
                    <a href = {data.url}>
                        <img src={data.avatar_url} />
                    </a>
                    
                    <div className='description'>
                        <table>
                            <tr>
                                <th>CREATED:</th>
                                <td>{data.created_at}</td>
                            </tr>
                            <tr>
                                <th>UPDATED:</th>
                                <td>{data.updated_at}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>        
        </div>  
    )
}

export default Homepage