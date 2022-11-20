import { createContext,useCallback,useContext,useEffect,useState } from "react";
import axios from 'axios'


const ThemeContext = createContext();







export const ThemesProvider = ({children})=>{

const [announce,setAnnounce] = useState({
    announce:null
})
const [controlAnnounce,setControlAnnounce] = useState(false)
const [editAnnounce,setEditAnnounce] = useState("")
const [information,setInformation] = useState({
    information:null
})
const [editInformation,setEditInformation] = useState("")



const [header,setHeader] = useState({
    header:null
})
const [editHeader,setEditHeader] = useState("")



const fetchAnnounce = useCallback(async () =>{
    const {data} = await axios.get(`${BASE_URL}/announce`)
    if(typeof announce === "undefined"){

        setControlAnnounce(true)
    }
    else if(data.all.length === 0){
        setAnnounce({
            announce:null
        })
    }
    else{
        setAnnounce(data.all[0])
    }

    setControlAnnounce(false)

})
const fetchInformation = useCallback(async () =>{
    const {data} = await axios.get(`${BASE_URL}/information`)
    if(typeof information === "undefined"){

        setControlAnnounce(true)
    }
    else if(data.all.length === 0){
        setInformation({
            information:null
        })
    }
    else{
        setInformation(data.all[0])
    }



})
const fetchHeader = useCallback(async () =>{
    const {data} = await axios.get(`${BASE_URL}/header`)
    if(typeof header === "undefined"){

        setControlAnnounce(true)
    }
    else if(data.all.length === 0){
        setHeader({
            header:null
        })
    }
    else{
        setHeader(data.all[0])
    }



})








const [themeColors,setThemeColors] = useState(null)

const BASE_URL = process.env.REACT_APP_BASE_URL;

useEffect(()=>{
    fetchAnnounce();
    fetchInformation();
    fetchHeader();
},[fetchHeader,fetchInformation,fetchAnnounce])
















const values = {
    announce,
    setAnnounce,
    BASE_URL,
    editAnnounce,
    setEditAnnounce,
    information,
    setInformation,
    editInformation,
    setEditInformation,
    header,setHeader,
    editHeader,setEditHeader,
}

    return <ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)