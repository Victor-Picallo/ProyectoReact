import { useState } from "react"

export default function Ejem07(){
    const [num, setNum] = useState(0)

    const handleClick = () => {setNum(num + 1)}

    return<div onClick={handleClick}>{num}</div>
}