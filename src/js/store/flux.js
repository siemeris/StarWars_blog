const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [],
			characterDetail: null,
			favorites: [],
			planetsList: [],
			planetDetails: null,
			vehiclesList: [],
		},
		actions: {
			getCharacters: () => {
				try {
					return fetch("https://www.swapi.tech/api/people?page=1&limit=100", {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => setStore({ characterList: data.results}));
				} catch (error) {
					return [];
				}
			},

			getCharactersDetails: id => {
				try {
					return fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => 
							setStore({ characterDetail: data.result}));
				} catch (error) {
					return [];
				}
			},

			addFavorites: itemName => {
				const {favorites} = getStore();
				if (!favorites.find(i => i == itemName )){
					favorites.push(itemName)
				}
				console.log(favorites)
				setStore({favorites})
				// getActions().changeColor(0, "green");

			}, 

			deleteFavorites: itemIndex => {
				const {favorites} = getStore();
				const newFav = [...favorites]
				newFav.splice(itemIndex,1)
				setStore({favorites: newFav})
			},
			
			getPlanets: () => {
				try {
					return fetch("https://www.swapi.tech/api/planets?page=1&limit=100", {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => setStore({ planetsList: data.results}));
				} catch (error) {
					return [];
				}
			},

			getPlanetsDetails: (id) => {
				try {
					return fetch(`https://www.swapi.tech/api/planets/${id}`, {
						method: "GET",
						redirect: "follow"
					})
						.then(response2 => response2.json())
						.then(data2 => setStore({ planetDetails: data2.result}));
				} catch (error) {
					return [];
				}
			},

			getVehicles: () => {
				try {
					return fetch("https://www.swapi.tech/api/vehicles?page=1&limit=100", {
						method: "GET",
						redirect: "follow"
					})
						.then(response => response.json())
						.then(data => setStore({ vehiclesList: data.results}));
				} catch (error) {
					return [];
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		}
	};
};

export default getState;
