import React, {useContext, useState} from 'react'
const AskSetContext = React.createContext();

const AskProvider = ({children}) => {
    const [id, setId] = useState()
    return (
        <AskSetContext.Provider value ={{id, setId}}>

        {children}
        </AskSetContext.Provider>
    )
    
}

export const useAskSelectedAsk = () => {
   return useContext(AskSetContext).id
}

export const useAskSetSelectedAsk = () => {
    return useContext(AskSetContext).setId
 }

export default AskProvider;