import axios from 'axios';
import {createContext,useCallback,useContext, useEffect, useState} from 'react';

const RatesContext = createContext();

export const RatesProvider = ({children}) => {
const [currencies,setCurrencies] = useState(null)
const [activeCurrencies,setActiveCurrencies] = useState(null)
const [starterOne,setStarterOne] = useState({
    name:"TRY",
    price:""
})
const [starterTwo,setStarterTwo] = useState({
    name:"KES",
    price:""
})

const fetchCurrencies = useCallback(
    async () =>{
        const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/get-currency`)
    
        setCurrencies(data.data)
        const activeFilter = await  data.data.filter(actives=>actives.activity)
        setActiveCurrencies(activeFilter)
        const startOne = await activeCurrencies.find(i => i.name==="TRY")
        setStarterOne(startOne)
        const startTwo = await activeCurrencies.find(i => i.name==="KES")
        setStarterTwo(startTwo)
    
        
    },[activeCurrencies]
)

useEffect(()=>{
fetchCurrencies();
},[fetchCurrencies])



const values = {
currencies,
activeCurrencies,
starterOne,
starterTwo

}

    return <RatesContext.Provider value={values} >{children}</RatesContext.Provider>
}

export const useRates = () => useContext(RatesContext) 