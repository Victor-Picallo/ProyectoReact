export default function Ejem05(){
    const miEstilos = {
        backgroundColor: 'green'
    }
    return<>
        <button className="naranja">Pulsame</button>
        <button style={miEstilos}>Pulsame</button>
        <button style={{backgroundColor: 'blue'}}>Pulsame</button>
    </>
}