import { useEffect, useState, type FormEvent } from "react"
import { useSearchParams } from "react-router-dom"

const names = ['Ana', 'Juan', 'Luis', 'Antonio', 'Pedro']

export default function Ejem22(){

    const [searchParam, setSearchParam] = useSearchParams()
    const qFromUrl = searchParam.get('q') ?? ''

    const [search, setSearch] = useState(qFromUrl)
    const [nameFilter, setNameFilter] = useState<string[]>(names)


   /*  useEffect (() => {
        setSearchParam(qFromUrl)
    },[qFromUrl]) */

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        
        setNameFilter( names.filter( name => name.toLowerCase().startsWith(qFromUrl.trim().toLowerCase()) ))
        setSearchParam ({ q: search } )
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Buscar por nombre..."/>
            <button type="submit">Buscar</button>
        </form>
        <ul>
            {nameFilter.map( (name, index) => <li key={index}>{name}</li>)}
        </ul>
    </div>
}