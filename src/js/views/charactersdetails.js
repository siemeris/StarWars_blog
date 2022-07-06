import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CharacterDetail = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();
    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"
    
    useEffect(() => {
        console.log(id);
        actions.getCharactersDetails(id);
      }, []);

    if (store.characterDetail) {
        return (
                <div className="container">
                            <div className="w-100 mt-4">
                                    <h1 className="text-dark">{store.characterDetail.properties.name}</h1>
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
                                    <p className="card-text text-dark fs-5"><strong>Birth Year: </strong>{store.characterDetail.properties.birth_year}</p>
                                    <p className="text-dark fs-5"><strong>Height: </strong>{store.characterDetail.properties.height}</p>
                                    <p className="text-dark fs-5"><strong>Mass: </strong>{store.characterDetail.properties.mass}</p>
                                    <p className="text-dark fs-5"><strong>Hair Color: </strong>{store.characterDetail.properties.hair_color}</p>
                                    <p className="text-dark fs-5"><strong>Skin Color: </strong>{store.characterDetail.properties.skin_color}</p>
                                    <p className="text-dark fs-5"><strong>Eyes Color: </strong>{store.characterDetail.properties.eye_color}</p>
                                    <p className="text-dark fs-5"><strong>Gender: </strong>{store.characterDetail.properties.gender}</p>
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