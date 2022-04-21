export const converToMinute = (time : number) : string => {
    const minutes = Math.floor(time / 60000); 
    const seconds = ((time % 60000) / 1000).toFixed(0)
    return `${minutes} : ${seconds}`
}
