import React, {useContext, useState} from 'react'
const userContext = React.createContext();

const UserProvider = ({children}) => {
    const session = JSON.parse(localStorage.getItem('session')) || undefined

    const [me, setMe] = useState(session)

    const setMeBis = v =>{
        localStorage.setItem('session', v ? JSON.stringify(v) : null)
        setMe(v)
    }
    return (
        <userContext.Provider value ={{me, setMe: setMeBis}}>

        {children}
        </userContext.Provider>
    )
    
}

export const useUser = () => {
   return useContext(userContext).me
}

export const useSetUser = () => {
    return useContext(userContext).setMe
 }

export default UserProvider;