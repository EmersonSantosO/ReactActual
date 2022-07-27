import { startTransition } from "react"

const Combate = (props) => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu") 
        
        .then(result => result.json())
        .then((data) =>{
            setPokemon2(data)
            data.stats.map{(stats) => {
                if(start.start.name=="hp")
                    setHp2(stats.base_stat)
            }
        })
    }
    fetch("https://pokeapi.co/api/v2/pokemon/ditto") 
        
        .then(result => result.json())
        .then((data) =>{
            setPokemon1(data)
            data.stats.map{(stats) => {
                if(start.start.name=="hp")
                    setHp2(stats.base_stat)
            }
        }
    
    ),[])

    
    
    
    const handleAttackPokemon1 = (damage) => {
        setHp2(hp2 - damage)
        setDesibled(!disabled)
        if ( hp1 <= 0 ){
            alert("pokemon 1 gano")
            setHp2(0)
        }
    }
    
    
    const handleAttackPokemon2 = (damage) => {
              
        setHp1(hp1 - damage)
        setDesibled(!disabled)
        if ( hp1 <= 0 ){
            alert("pokemon 2 gano")
            setHp1(0)
        }    
    }
            
   
   
    return (
        <>
            Pokemon 1: Vida : {hp1}
            <img src={Pokemon1.sprites?.front_edault}/>
            {Pokemon1.stats.map((stat) => {
                if(stat.stat.name === `attack` || stat.stat.name === `special-attack`)
                    return(<buton  disabled={!disabled}  onClick={() =>{handleAttackPokemon1(stat.base_stat)}}>(stat.stat.name)</buton>)
                }
            })}
            <hr />
            Pokemon 2: Vida : {hp2}
            <img src={Pokemon2.sprites?.front_edault}/>
            {Pokemon2.stats.map((stat) => {
                if(stat.stat.name === `attack` || stat.stat.name === `special-attack`)
                    return(<buton disabled={!disabled} onClick={() =>{handleAttackPokemon2()}}>(stat.stat.name)</buton>)
                }
            })}


            
        </>
    )

    

export default Combate