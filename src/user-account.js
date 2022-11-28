import { createContext } from "react"
import axios from "./axios-config"

export const Account = createContext()

const initAccount = () => {

    axios.get(`/ldap/api/auth/account`, {
        params: {
            include: 'user_role,role_buscd,role_pernr,avatar,notification,personal,position'
        }
    })
    .then(r => {
        if(r.data.message === 'unauthenticated') {
            return null
        }
        return r.data.data
    })
    .catch(e => {
        console.log(e)
    })
   
}

export default initAccount