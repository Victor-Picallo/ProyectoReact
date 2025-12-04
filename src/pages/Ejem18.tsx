import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejem18() {
    const [form, setForm] = useState(
        {
            name: 'Juan',
            surname: 'Perez',
            email: '',
            edad: 20
        }
    )

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        //Hago lo que quiero con el form
        console.log('Se ha enviado el formulario: ', form)
    }

    return <form onSubmit={handleSubmit} className="flex flex-col items-center ">
        <label>
            Name: <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
            Surname: <input name="surname" value={form.surname} onChange={handleChange} />
        </label>
        <label>
            Email: <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
            Edad: <input name="edad" type="number" value={form.edad} onChange={handleChange} />
        </label>

        <button type="submit">Enviar</button>
    </form>
}