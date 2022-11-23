import axios from 'axios';

axios.interceptors.request.use(function(config){
    
    const { origin } = new URL(config.url);

    const allowedOrigins = [process.env.REACT_APP_BASE_URL];
    const token = localStorage.getItem('access-token');

    if(allowedOrigins.includes(origin)) {
        config.headers.authorization = token
    }

    return config;
}, function (error){
    
    return Promise.reject(error);
});


export const fetchRegister = async (input) =>{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`,input);
    return data
}
export const fetchMe = async ()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/me`) ;
    return data;
};

export const fetchLogOut = async()=>{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/logout`,{
        refresh_token: localStorage.getItem("refresh-token")
        
    });
    return data;
}

export const fetchLogin = async (input)=>{
const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,input);
return data;
}

