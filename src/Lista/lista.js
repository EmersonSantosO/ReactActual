
import react, {useEffect, useState} from "react"
const Lista = (props) => {
    const[titulo,setPokemons] = useState([])
    const[pokemon,setTitulo] = useState("Hola soy un titulo")

    useEffect(() =>(
        fetch("")
        .then(resp => resp.json())
        .then(
            (data) => {
                console.log(data)
                setPokemons(data.results)
            }

        )
    ),[])
    return(
        <>
            {pokemongs.map((pokemon) => {
                return(<div>{pokemon.name}</div>)
             })}
             Lista pokemon

        </>
    )
}
export default Lista