import { createContext, useEffect, useState } from "react";

export const ContestContext = createContext();


export const ContestContextProvider = (props) => {
    const [contest, setContest] = useState({});
    // console.log("COONTEST: ",contest)

    const fetchdata = () => {
        fetch('http://localhost:6969/api/contest/', {
            method: "GET"
        })
            .then(response => response.json())
            .then(result => {
                console.log("fetched results", result[0]);
                setContest(result[0]);
            })
            .catch(error => console.log("error", error));
    }

    useEffect(() => {
        fetchdata();

    }, []);
    return (
        <ContestContext.Provider value={[contest, setContest]}>
            {props.children}
        </ContestContext.Provider>
    )
}