import React, {useContext, useState} from 'react'
const temaSetContext = React.createContext();

const TemaProvider = ({children}) => {
    const [id, setId] = useState()
    return (
        <temaSetContext.Provider value ={{id, setId}}>

        {children}
        </temaSetContext.Provider>
    )
    
}

export const useTemaSelectedTema = () => {
   return useContext(temaSetContext).id
}

export const useTemaSetSelectedTema = () => {
    return useContext(temaSetContext).setId
 }

export default TemaProvider;