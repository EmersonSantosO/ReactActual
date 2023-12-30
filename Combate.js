import React, { useState } from "react";

const Combate = () => {
	const [Pokemon1, setPokemon1] = useState({});
	const [Pokemon2, setPokemon2] = useState({});
	const [hp1, setHp1] = useState(0);
	const [hp2, setHp2] = useState(0);
	const [disabled, setDisabled] = useState(false);

	React.useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
			.then((result) => result.json())
			.then((data) => {
				setPokemon2(data);
				data.stats.map((stats) => {
					if (stats.stat.name === "hp") {
						setHp2(stats.base_stat);
					}
				});
			});

		fetch("https://pokeapi.co/api/v2/pokemon/ditto")
			.then((result) => result.json())
			.then((data) => {
				setPokemon1(data);
				data.stats.map((stats) => {
					if (stats.stat.name === "hp") {
						setHp1(stats.base_stat);
					}
				});
			});
	}, []);

	const handleAttackPokemon1 = (damage) => {
		setHp2(hp2 - damage);
		setDisabled(!disabled);
		if (hp1 <= 0) {
			alert("pokemon 1 gano");
			setHp2(0);
		}
	};

	const handleAttackPokemon2 = (damage) => {
		setHp1(hp1 - damage);
		setDisabled(!disabled);
		if (hp1 <= 0) {
			alert("pokemon 2 gano");
			setHp1(0);
		}
	};

	return (
		<>
			Pokemon 1: Vida : {hp1}
			<img src={Pokemon1.sprites?.front_edault} />
			{Pokemon1.stats.map((stat) => {
				if (
					stat.stat.name === "attack" ||
					stat.stat.name === "special-attack"
				) {
					return (
						<button
							disabled={!disabled}
							onClick={() => handleAttackPokemon1(stat.base_stat)}
						>
							{stat.stat.name}
						</button>
					);
				}
			})}
			<hr />
			Pokemon 2: Vida : {hp2}
			<img src={Pokemon2.sprites?.front_edault} />
			{Pokemon2.stats.map((stat) => {
				if (
					stat.stat.name === "attack" ||
					stat.stat.name === "special-attack"
				) {
					return (
						<button
							disabled={!disabled}
							onClick={() => handleAttackPokemon2(stat.base_stat)}
						>
							{stat.stat.name}
						</button>
					);
				}
			})}
		</>
	);
};

export default Combate;
