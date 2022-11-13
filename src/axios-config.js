import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

instance.interceptors.request.use(
    async config => {
        const token = Cookies.get(`auth.token`)
        config.headers = {
            Authorization: (token ? `Bearer ${token}` : null),
            Accept: 'application/json',
        }
        return config
    }, 
    error => {
        Promise.reject(error)
        alert('token expired')
    }
)

// instance.interceptors.response.use(
//     async config => {

//     }
// )

export default instance;