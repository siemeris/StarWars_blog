import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const PlanetDetail = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();
    const urlImage = "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"
    
    useEffect(() => {
        console.log(id);
        actions.getPlanetsDetails(id);
      }, []);

    if (store.planetDetails) {
        return (
                <div className="container">
                            <div className="w-100 mt-4">
                                    <h1 className="text-dark">{store.planetDetails.properties.name}</h1>
                            </div>
                            <div class="card mb-3" style={{maxwidth: "540px"}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src={urlImage} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    {/* <h5 class="card-title">{store.characterDetail.properties.name}</h5> */}
                                    <h1 className="card-title text-dark fs-1"></h1>{" "}
                                    <p className="card-text text-dark fs-5"><strong>Diameter: </strong>{store.planetDetails.properties.diameter}</p>
                                    <p className="text-dark fs-5"><strong>Rotation period: </strong>{store.planetDetails.properties.rotation_period}</p>
                                    <p className="text-dark fs-5"><strong>Orbital period: </strong>{store.planetDetails.properties.orbital_period}</p>
                                    <p className="text-dark fs-5"><strong>Gravity: </strong>{store.planetDetails.properties.gravity}</p>
                                    <p className="text-dark fs-5"><strong>Population: </strong>{store.planetDetails.properties.population}</p>
                                    <p className="text-dark fs-5"><strong>Climate: </strong>{store.planetDetails.properties.climate}</p>
                                    <p className="text-dark fs-5"><strong>Terrain: </strong>{store.planetDetails.properties.terrain}</p>
                                    <p className="text-dark fs-5"><strong>Surface Water: </strong>{store.planetDetails.properties.surface_water}</p>
                                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                </div>
            )} 
        else {
        return <div>Loading data...</div>;
      }
}