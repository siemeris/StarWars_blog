import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { Vehicles } from "../component/Vehicles";

export const Home = () => (
	<div className="container-fluid mt-5">
		<h1 className="text-dark ms-5 mb-3">Characters</h1>
		<div className="mx-auto" style={{ width: "90%"}}>
		<CharacterCard />
		</div>
		<h1 className="text-dark ms-5 mb-3 mt-4">Planets</h1>
		<div className="mx-auto" style={{ width: "90%"}}>
		<PlanetCard />
		</div>
		<h1 className="text-dark ms-5 mb-3 mt-4">Vehicles</h1>
		<div className="mx-auto" style={{ width: "90%"}}>
		<Vehicles />
		</div>
		{/* <p>
			<img src={rigoImage} />
		</p> */}
		{/* <a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}
	</div>
);
