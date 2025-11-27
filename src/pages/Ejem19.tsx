import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejem19(){
    const [name, setName] = useState('Manolo')

    function handleChangeName(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }

    function handleSubmit(event: FormEvent){
        event.preventDefault()
        //Hago lo que quiero con el form
        console.log('Se ha enviado el formulario: ' +name)
    }

    return<form onSubmit={handleSubmit}>
        <label>
            Nombre: <input value={name} onChange={handleChangeName}/>
        </label>
        <button type="submit">Enviar</button>
    </form>
}