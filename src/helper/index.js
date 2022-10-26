import moment from 'moment';

const getBusinessCode = () => {
    return process.env.REACT_APP_BUSCD
}

const todayDate = () => {
    return moment().format('YYYY-MM-DD')
}

const getApplicationID = () => {
    return process.env.REACT_APP_ID
}

export { 
    getBusinessCode, 
    todayDate,
    getApplicationID,
}