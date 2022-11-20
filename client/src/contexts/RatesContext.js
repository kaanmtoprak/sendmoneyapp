import axios from 'axios';
import {createContext,useContext, useEffect, useState} from 'react';

const RatesContext = createContext();

export const RatesProvider = ({children}) => {
const [currencies,setCurrencies] = useState(null)
const [activeCurrencies,setActiveCurrencies] = useState(null)
// const [starterOne,setStarterOne] = useState(null)
// const [starterTwo,setStarterTwo] = useState(null)

const fetchCurrencies = async () =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/get-currency`)

    setCurrencies(data.data)
    const activeFilter = await  data.data.filter(actives=>actives.activity)
    setActiveCurrencies(activeFilter)
    // const startOne = await activeCurrencies.find(i => i.name==="TRY")
    // setStarterOne(startOne)
    // const startTwo = await activeCurrencies.find(i => i.name==="KES")
    // setStarterTwo(startTwo)

    
}

useEffect(()=>{
fetchCurrencies();
},[])



const values = {
currencies,
activeCurrencies

}

    return <RatesContext.Provider value={values} >{children}</RatesContext.Provider>
}

export const useRates = () => useContext(RatesContext) 