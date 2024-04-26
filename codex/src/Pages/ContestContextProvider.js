import { createContext, useEffect, useState } from "react";

export const ContestContext = createContext();


export const ContestContextProvider = (props) => {
    const [contest, setContest] = useState({});

    
    useEffect(()=>{
        
        const fetchdata = async() =>{
            try {
                await fetch("")
            } catch (error) {
                
            }
        }
    },[])

    return (
        <ProfileContext.Provider value={[contest, setContest]}>
            {props.children}
        </ProfileContext.Provider>
    )
}