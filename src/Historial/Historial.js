import React, { useEffect, useState } from "react";

const Historial = (props) => {
	const [historial, setHistorial] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then((response) => response.json())
			.then((data) => setHistorial(data.results))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<h1>Historial Pokemon!</h1>
			<ul>
				{historial.map((pokemon) => (
					<li key={pokemon.name}>{pokemon.name}</li>
				))}
			</ul>
		</>
	);
};

export default Historial;
