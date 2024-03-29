import React, { useEffect, useState } from "react";

const Pokemon = (props) => {
	const [texto, setTexto] = useState("");
	const [pokemonABuscar, setPokemonABuscar] = useState("muk");
	const [imgPokemonFront, setImgPokemonFront] = useState("");
	const [imgPokemonShiny, setImgPokemonShiny] = useState("");

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonABuscar}`)
			.then((res) => res.json())
			.then((data) => {
				setImgPokemonFront(data.sprites.front_default);
				setImgPokemonShiny(data.sprites.front_shiny);
			});
	}, [pokemonABuscar]);

	const handleChange = (e) => {
		setTexto(e.target.value);
	};

	const handleClick = () => {
		setPokemonABuscar(texto);
	};

	return (
		<>
			Composicion<br></br>
			<input type="text" onChange={handleChange} /> <br></br>
			<button onClick={handleClick}>Buscar</button> <br></br>
			<img src={imgPokemonFront} alt="Front" />
			<img src={imgPokemonShiny} alt="Shiny" />
		</>
	);
};

export default Pokemon;
