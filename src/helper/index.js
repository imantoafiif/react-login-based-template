import moment from 'moment';
import { useSelector } from 'react-redux';

const getBusinessCode = () => {
    return process.env.REACT_APP_BUSCD
}

const todayDate = () => {
    return moment().format('YYYY-MM-DD')
}

const getApplicationID = () => {
    return process.env.REACT_APP_ID
}

const getSession = () => {
    let session = localStorage.getItem('auth.session')
    return JSON.parse(session)
}

export { 
    getBusinessCode, 
    todayDate,
    getApplicationID,
    getSession,
}