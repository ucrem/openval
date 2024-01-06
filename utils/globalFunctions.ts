

// Funzione per fare join di classi tailwind dinamicamente
export  function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(' ')
}


export  function convertDates(timestamp:string){
    return new Date(timestamp).toLocaleDateString(undefined)
}
