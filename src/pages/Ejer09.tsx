import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejer09() {
    const [form, setForm] = useState({
        num1: 0,
        num2: 0
    })

    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setLoading(true)
        setError("")

        try {
            const response = await fetch("http://localhost:5000/api/suma", {
                method: "POST",
                body: JSON.stringify({
                    num1: Number(form.num1),
                    num2: Number(form.num2)
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                throw new Error("Error en la petición al backend")
            }

            const data = await response.json()
            setResult(data.resultado)
        } catch (error) {
            console.error("Error", error)
            setError("Error al conectar con el servidor")
            setResult(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h1>Sumador</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col border rounded-4xl w-1/2"
            >
                <label>
                    Número 1:
                    <input
                        className="p-4 m-4 border"
                        name="num1"
                        type="number"
                        value={form.num1}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Número 2:
                    <input
                        className="p-4 m-4 border"
                        name="num2"
                        type="number"
                        value={form.num2}
                        onChange={handleChange}
                    />
                </label>
                <button
                    disabled={loading}
                    className="hover:bg-blue-600 p-4 m-4 bg-blue-400 border rounded-2xl text-black"
                >
                    Sumar
                </button>
            </form>

            <div
                className="flex flex-col border rounded-4xl w-1/2">
                {loading ? "calculando..." : result}</div>
                
            {error && <div className="text-red-600">{error}</div>}
        </div>
    )
}
