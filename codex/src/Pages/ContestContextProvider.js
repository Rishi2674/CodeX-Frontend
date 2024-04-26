import { createContext, useEffect, useState } from "react";

export const ContestContext = createContext();


export const ContestContextProvider = (props) => {
    const [contest, setContest] = useState({});

    
    useEffect(()=>{
        
        const fetchdata = async() =>{
            try {
                await fetch('http://localhost:6969/api/contest',{
                    method: "GET"
                })
                .then(res=>res.json()).then((result)=>{
                    console.log(result[0]);
                    setContest(result[0]);
                })
            } catch (error) {
                console.log("error",error);
            }
        }
        fetchdata();
    },[])

    return (
        <ContestContext.Provider value={[contest, setContest]}>
            {props.children}
        </ContestContext.Provider>
    )
}