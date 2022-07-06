import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
			<img src={logo} alt="Star Wars" width="85" height="40" className="d-inline-block  ms-5"></img>
			
			</Link>

		<div className="btn-group">
  			<button type="button" className="btn btn-dark dropdown-toggle me-5" data-bs-toggle="dropdown" aria-expanded="false">
    		Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
			</button>
  			<ul className="dropdown-menu dropdown-menu-end">
				{store.favorites.map((item,i) => {
				return (
					<li key={i}><a className="dropdown-item d-flex justify-content-between">
						{item} <button className="btn btn-outline-secondary border-0 btn-sm" > <i className="fa-solid fa fa-trash" onClick={()=> actions.deleteFavorites(i)}></i></ button>
						</a>
					</li>
					)
				})
				}
  			</ul>
  		</div>
		</nav>
	);
};
