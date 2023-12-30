import { Link, Outlet } from "react-router-dom";

const Root = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/pokemon">Pokemon</Link>
					</li>
					<li>
						<Link to="/lista">Lista</Link>
					</li>
					<li>
						<Link to="/historial">Historial</Link>
					</li>
					<li>
						<Link to="/combate">Combate</Link>
					</li>
				</ul>
				<br />
				<br />
				<Outlet />
			</nav>
		</>
	);
};

export default Root;
