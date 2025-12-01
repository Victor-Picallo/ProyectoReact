import { useParams } from "react-router-dom"

// https://localhost:5000/cursos/234
export default function Ejem21() {

    const { id } = useParams()

    return <div>
        Mostrando el usuario {id}
    </div>
}