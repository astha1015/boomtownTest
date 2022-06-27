import { useState, useEffect } from 'react'

export const useApiData = ( url ) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [statusCode, setStatusCode] = useState()

    useEffect(() => {
      const fetchData = async () => {
        try {
            let response = await fetch(url);
            if (response.status === 200) {
                setData(await response.json());
            } else {
                setStatusCode (response.status)
                setError(response.statusText)
                throw new Error(response.statusText)
            }
        } catch (error) {
            console.error(`There was a problem fetching the response. Api errored with text: ${error}`)
        }
      }
      fetchData();
    }, [])

    return ([data,error,statusCode])
}



