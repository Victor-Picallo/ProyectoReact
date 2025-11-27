/*
Crea un componente de react que muestre el precio actual del bitcoin (en tiempo real)
usa este api gratuita

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur
https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR
*/

import { useEffect, useState } from "react"

const URL = import.meta.env.VITE_API_URL as string

export default function Ejer07() {
    const [price, setPrice] = useState(0)
    //Loading
    const [loading, setLoading] = useState(true)
    //Error
    const [error, setError] = useState("")

    //TODO: Mover esto a la carpeta services
    async function bitCoinApiCall() {
        try {

            const response = await fetch(URL)
            if (!response.ok) throw new Error('Fallo al llamar a la api' + response.statusText)
            const data = await response.json()
            setPrice(data.bitcoin.eur)

        } catch (error: { message: string } | any) {
            console.log('Error: ', error)
            setError(error)

        } finally {
            setLoading(false)
        }
    }
    //Este useEffect se llama solo una vez cuando el componente se monta
    useEffect(() => {
        bitCoinApiCall()
    }, [])

   if(error) return <div>Error: {error}</div>
   if(loading) return <div>Loading...</div>
   return <div>
        El bitcoin vale {price} €
    </div>
}