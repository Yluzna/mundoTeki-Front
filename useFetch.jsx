import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
    try {
        setLoading(true)
        const response = await fetch(url)
        const jsonData = await response.json()
        setLoading(false)
        if(!jsonData) return setError("Couldn't fetch")
        setData(jsonData)
        console.log(data)
    }
    catch (err)
        {
           setError(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])
        

    return { data, loading, error}
}

export default useFetch