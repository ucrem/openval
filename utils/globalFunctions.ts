

// Funzione per fare join di classi tailwind dinamicamente
export default function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(' ')
}
