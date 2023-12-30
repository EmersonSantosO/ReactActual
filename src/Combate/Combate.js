const Combate = (props) => {
	const { pokemon1, pokemon2 } = props;

	const iniciarCombate = () => {
		console.log(`¡${pokemon1} vs ${pokemon2}!`);
	};

	return (
		<>
			<button onClick={iniciarCombate}>Iniciar Combate</button>
		</>
	);
};

export default Combate;
// FILEPATH: /C:/Users/emers/Desktop/practicaa/ReactActual/src/Combate/Combate.js
