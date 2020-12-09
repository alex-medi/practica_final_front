import { useState, useEffect } from 'react'
import { useUser } from './usuarios/UserContext';


function useFetch(url) {
    const [data, setData] = useState();
    const me = useUser()
    
    useEffect(() => {
       fetch(url, {
          headers: { 'Authorization': 'Bearer ' + me.token }
       })
            .then(res => res.json())
            .then(d => setData(d))

    },[url, me.token])

    return (
               
       data
           
    )

}

export default useFetch;