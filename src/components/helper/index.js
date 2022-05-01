export const calcDeadDay = (bDay) => {
    return `${(parseInt(bDay.substring(0,4))) +80}-${bDay.substring(5,10)}`
}

export const emptyFields = (fields) => {
    return Object.values(fields).every((field) => field !== '')
}

export const getMediaAge = (clients) => {
    let total = 0;
    clients.map(({edad}) => total+=Number(edad))
    const resultado = ( total / clients.length);
    return resultado
}