import { createContext, useEffect, useState } from "react";

export const ContestContext = createContext();


export const ContestContextProvider = (props) => {
    const [contest, setContest] = useState({});
console.log("COONTEST: ",contest)
    
const fetchdata = async() =>{
    try {
        await fetch('http://localhost:6969/api/contest/',{
            method: "GET"
        })
        .then(res=>res.json()).then((result)=>{
            console.log(result[0]);
            setContest(result[0]);
            
            localStorage.setItem("contestdetails",result[0])

            console.log("contest details",contest)
        })
    } catch (error) {
        console.log("error",error);
    }
}

fetchdata();

    return (
        <ContestContext.Provider value={[contest, setContest]}>
            {props.children}
        </ContestContext.Provider>
    )
}