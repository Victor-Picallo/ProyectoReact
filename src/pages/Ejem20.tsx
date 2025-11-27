import { useState } from "react"

//TODO: Este Hook lo pondremos en src/hooks/useCounter.ts
function useCounter() {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    function reset() {
        setCount(0)
    }
    return {count, increment, decrement, reset}
}

export default function Ejem20() {
    const {count, increment, decrement, reset} = useCounter()
    
    return <div>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Resetear</button>
        <p>Valor del contador: {count}</p>
    </div>
}