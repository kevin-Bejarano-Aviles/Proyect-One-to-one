export const returnDateFormat = ()=>{
    return (new Date().toLocaleDateString()).split('/').join('-')
}