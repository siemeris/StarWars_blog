import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Vehicles = () => {
    const {store, actions} = useContext(Context);

    return(
        <div className="row d-flex flex-column" style={{height: "25rem", overflowX:"auto"}}>
            {store.vehiclesList.map((value, i) => ( 
        <div key={i} className="card p-0" style={{width: '15rem'}}>
        <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + value.uid + ".jpg"} className="card-img-top" style={{height: '14rem', width:"100%", objectFit:"cover"}} alt="Vehicle Image"></img>
        <div className="card-body">
        <h5 className="card-title">{value.name}</h5>
        <p className="card-text">Some quick example text.</p>
        <div className="d-flex justify-content-between">
					<Link to={`/vehicledetails/${value.uid}`}>
						<button href="#" className="btn btn-dark" style={{display: "none"}}>
							More info
						</button>
					</Link>
        <button key={i} type="button" className="btn btn-outline-warning" onClick={() => actions.addFavorites(value.name)}>
        {store.favorites.includes(value.name) ? <i key={i} className="fa-solid fa fa-heart"></i> : <i key={i} className="far fa-heart"></i>}
        </button>
				</div>
        </div>
        </div>
        
        ))}
        </div>
    )
};