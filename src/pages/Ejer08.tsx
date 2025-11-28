/*
Crea un formulario que permita guardar un post en una base de datos.
Para ello usaremos el simulador de api's jsonplaceholder, que nos permite hacer
peticiones HTTP a una url simulando el comportamiento d eun api.

Los datos a guardar son:
- Title de tipo string
- Body de tipo string

Hay que lanzar una peticion por POST a https://jsonplaceholder.typicode.com/posts
pasando por el body los datos del formulario
*/

import { useState, type ChangeEvent, type FormEvent } from "react"

const URL = "https://jsonplaceholder.typicode.com/posts"

export default function Ejer08() {
    const [form, setForm] = useState(
        {
            title: '',
            body: ''
        }
    )
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setLoading(true)
        //Hago lo que quiero con el form
        console.log('Form sended: ', form)
        setLoading(false)
    }
    return <form className="max-w-sm mx-auto">
        <label onSubmit={handleSubmit} className="block mb-2.5 text-sm font-medium text-heading">
            Title: <input name="title" value={form.title} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs" placeholder="Insert title" onChange={handleChange} />
        </label>
        <label onSubmit={handleSubmit} className="block mb-2.5 text-sm font-medium text-heading">
            Body: <input name="body" value={form.body} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs" placeholder="Insert body" onChange={handleChange} />
        </label>
        <button type="submit" disabled={loading} className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5">Submit</button>
        {loading && <div className="text-green-500">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
    </form>

}