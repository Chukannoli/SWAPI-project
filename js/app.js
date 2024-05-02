const fetchPeople = async ()=> {
	const response = await fetch(`https://swapi.dev/api/people`)
	const data = await response.json()
	const results = data.results
	console.log(results);
	renderPeople(results)

	function renderPeople (cards){
		const characterImages = [
			{
				name: "Luke Skywalker",
				link:	"assets/images/characters/luke-skywalker.png",
			},
			{
				name: "C-3PO",
				link:	"assets/images/characters/c-3po.png",
			},
			{
				name: "R2-D2",
				link:	"assets/images/characters/r2-d2.png",
			},
			{
				name: "Darth Vader",
				link:	"assets/images/characters/darth-vader.png",
			},
			{
				name: "Leia Organa",
				link:	"assets/images/characters/leia-organa.png",
			},
			{
				name: "Owen Lars",
				link:	"assets/images/characters/owen-lars.png",
			},
			{
				name: "Beru Whitesun lars",
				link:	"assets/images/characters/beru-whitesun.png",
			},
			{
				name: "R5-D4",
				link:	"assets/images/characters/r5-d4.png",
			},
			{
				name: "Biggs Darklighter",
				link:	"assets/images/characters/biggs-darklighter.png",
			},
			{
				name: "Obi-Wan Kenobi",
				link:	"assets/images/characters/obi-wan-kenobi.png",
			}
		]
		
		cards.forEach(card => {
			// CREATING ELEMENTS
					const cardContainer = document.createElement("div")
					const cardImageElement = document.createElement('div')
					const cardImage = document.createElement('img')
					const cardDescription = document.createElement('div')
					const paragraph1 = document.createElement('p')
					const paragraph2 = document.createElement('p')
					const paragraph3 = document.createElement('p')
					const paragraph4 = document.createElement('p')
					const paragraph5 = document.createElement('p')
	
			// APPENDING ELEMENTS
					const cardsContainer = document.querySelector(".cards-container")
					cardsContainer.append(cardContainer)
					cardContainer.append(cardImageElement, cardDescription)
					cardImageElement.append(cardImage)
					cardDescription.append(paragraph1,paragraph2,paragraph3,paragraph4, paragraph5)
	
	
			// ADDING CLASSES
				cardContainer.classList.add('card-container')
				cardImageElement.classList.add('card-image')
				cardDescription.classList.add('card__description')
	
			// SETTING CONTENT
				paragraph1.textContent = `Name: ${card.name}`
				paragraph2.textContent = `Birth year: ${card.birth_year}`
				paragraph3.textContent = `Height: ${card.height} Cm`
				paragraph4.textContent = `Weight: ${card.mass} Kg`
				paragraph5.textContent = `Gender: ${card.gender}`
				cardImage.src = assignImage()
	
	
	
			// SETTING IMAGE SOURCE
				function assignImage() {
					for (const characterImage of characterImages) {
						if (card.name === characterImage.name) {
							return characterImage.link;
						}
					}
			}
		});
	
	}
}

const fetchVehicles = async ()=> {
	const response = await fetch(`https://swapi.dev/api/vehicles`)
	const data = await response.json()
	const results = data.results
	console.log(results);
	renderVehicles(results)

	function renderVehicles (cards){
		const vehicleImages = [
			{
				name: "Sand Crawler",
				link:	"assets/images/vehicles/sand-crawler.png",
			},
			{
				name: "T-16 skyhopper",
				link:	"assets/images/vehicles/t-16-skyhopper.png",
			},
			{
				name: "X-34 landspeeder",
				link:	"assets/images/vehicles/x-34-landspeeder.webp",
			},
			{
				name: "TIE/LN starfighter",
				link:	"assets/images/vehicles/tie-ln-starfighter.webp",
			},
			{
				name: "Snowspeeder",
				link:	"assets/images/vehicles/snowspeeder.webp",
			},
			{
				name: "TIE bomber",
				link:	"assets/images/vehicles/tie-Bomber.webp",
			},
			{
				name: "AT-AT",
				link:	"assets/images/vehicles/at-at.webp",
			},
			{
				name: "AT-ST",
				link:	"assets/images/vehicles/at-st.webp",
			},
			{
				name: "Storm IV Twin-Pod cloud car",
				link:	"assets/images/vehicles/cloud-car.webp",
			},
			{
				name: "Sail barge",
				link:	"assets/images/vehicles/sail-barge.webp",
			}
		]
		
		cards.forEach(card => {
			// CREATING ELEMENTS
					const cardContainer = document.createElement("div")
					const cardImageElement = document.createElement('div')
					const cardImage = document.createElement('img')
					const cardDescription = document.createElement('div')
					const paragraph1 = document.createElement('p')
					const paragraph2 = document.createElement('p')
					const paragraph3 = document.createElement('p')
					const paragraph4 = document.createElement('p')
					const paragraph5 = document.createElement('p')
	
			// APPENDING ELEMENTS
					const cardsContainer = document.querySelector(".cards-container")
					cardsContainer.append(cardContainer)
					cardContainer.append(cardImageElement, cardDescription)
					cardImageElement.append(cardImage)
					cardDescription.append(paragraph1,paragraph2,paragraph3,paragraph4, paragraph5)
	
	
			// ADDING CLASSES
				cardContainer.classList.add('card-container')
				cardImageElement.classList.add('card-image')
				cardDescription.classList.add('card__description')
	
			// SETTING CONTENT
				paragraph1.textContent = `Name: ${card.name}`
				paragraph2.textContent = `Model: ${card.model}`
				paragraph3.textContent = `Manufacturer: ${card.manufacturer}`
				paragraph4.textContent = `Cargo Capacity: ${card.cargo_capacity} Kg`
				paragraph5.textContent = `Cost: ${card.cost_in_credits} Credits`
				cardImage.src = assignImage()
	
	
	
			// SETTING IMAGE SOURCE
				function assignImage() {
					for (const vehicleImage of vehicleImages) {
						if (card.name === vehicleImage.name) {
							return vehicleImage.link;
						}
					}
			}
		});
	
	}
}


const fetchPlanets = async ()=> {
	const response = await fetch(`https://swapi.dev/api/planets`)
	const data = await response.json()
	const results = data.results
	console.log(results);
	renderPlanets(results)

	function renderPlanets (cards){
		const planetImages = [
			{
				name: "Tatooine",
				link:	"assets/images/planets/tatooine.png",
			},
			{
				name: "Alderaan",
				link:	"assets/images/planets/alderan.png",
			},
			{
				name: "Yavin IV",
				link:	"assets/images/planets/yavin-4.png",
			},
			{
				name: "Hoth",
				link:	"assets/images/planets/hoth.png",
			},
			{
				name: "Dagobah",
				link:	"assets/images/planets/dagobah.png",
			},
			{
				name: "Bespin",
				link:	"assets/images/planets/bespin.png",
			},
			{
				name: "Endor",
				link:	"assets/images/planets/endor.png",
			},
			{
				name: "Naboo",
				link:	"assets/images/planets/naboo.png",
			},
			{
				name: "Coruscant",
				link:	"assets/images/planets/coruscant.png",
			},
			{
				name: "Kamino",
				link:	"assets/images/planets/kamino.png",
			}
		]
		
		cards.forEach(card => {
			// CREATING ELEMENTS
					const cardContainer = document.createElement("div")
					const cardImageElement = document.createElement('div')
					const cardImage = document.createElement('img')
					const cardDescription = document.createElement('div')
					const paragraph1 = document.createElement('p')
					const paragraph2 = document.createElement('p')
					const paragraph3 = document.createElement('p')
					const paragraph4 = document.createElement('p')
					const paragraph5 = document.createElement('p')
	
			// APPENDING ELEMENTS
					const cardsContainer = document.querySelector(".cards-container")
					cardsContainer.append(cardContainer)
					cardContainer.append(cardImageElement, cardDescription)
					cardImageElement.append(cardImage)
					cardDescription.append(paragraph1,paragraph2,paragraph3,paragraph4, paragraph5)
	
	
			// ADDING CLASSES
				cardContainer.classList.add('card-container')
				cardImageElement.classList.add('card-image')
				cardDescription.classList.add('card__description')
	
			// SETTING CONTENT
				paragraph1.textContent = `Name: ${card.name}`
				paragraph2.textContent = `Population: ${card.population}`
				paragraph3.textContent = `Terrain: ${card.terrain}`
				paragraph4.textContent = `Gravity: ${card.gravity}`
				paragraph5.textContent = `Climate: ${card.climate}`
				cardImage.src = assignImage()
	
	
	
			// SETTING IMAGE SOURCE
				function assignImage() {
					for (const planetImage of planetImages) {
						if (card.name === planetImage.name) {
							return planetImage.link;
						}
					}
			}
		});
	
	}
}


const fetchFilms = async ()=> {
	const response = await fetch(`https://swapi.dev/api/films`)
	const data = await response.json()
	const results = data.results
	console.log(results);
	renderFilms(results)

	function renderFilms (cards){
		const filmImages = [
			{
				name: "A New Hope",
				link:	"assets/images/films/a-new-hope.png",
			},
			{
				name: "The Empire Strikes Back",
				link:	"assets/images/films/empire-strikes-back.webp",
			},
			{
				name: "Return of the Jedi",
				link:	"assets/images/films/return-of-the-jedi.png",
			},
			{
				name: "The Phantom Menace",
				link:	"assets/images/films/phantom-menace.webp",
			},
			{
				name: "Attack of the Clones",
				link:	"assets/images/films/attack-of-the-clones.webp",
			},
			{
				name: "Revenge of the Sith",
				link:	"assets/images/films/revenge-of-the-sith.webp",
			}
		]
		
		cards.forEach(card => {
			// CREATING ELEMENTS
					const cardContainer = document.createElement("div")
					const cardImageElement = document.createElement('div')
					const cardImage = document.createElement('img')
					const cardDescription = document.createElement('div')
					const paragraph1 = document.createElement('p')
					const paragraph2 = document.createElement('p')
					const paragraph3 = document.createElement('p')
					const paragraph4 = document.createElement('p')
					const paragraph5 = document.createElement('p')
	
			// APPENDING ELEMENTS
					const cardsContainer = document.querySelector(".cards-container")
					cardsContainer.append(cardContainer)
					cardContainer.append(cardImageElement, cardDescription)
					cardImageElement.append(cardImage)
					cardDescription.append(paragraph1,paragraph2,paragraph3,paragraph4, paragraph5)
	
	
			// ADDING CLASSES
				cardContainer.classList.add('card-container')
				cardImageElement.classList.add('card-image')
				cardDescription.classList.add('card__description')
	
			// SETTING CONTENT
				paragraph1.textContent = `Title: ${card.title}`
				paragraph2.textContent = `Episode: ${card.episode_id}`
				paragraph3.textContent = `Release date: ${card.release_date}`
				paragraph4.textContent = `Director: ${card.director}`
				paragraph5.textContent = `Producer: ${card.producer}`
				cardImage.src = assignImage()

			// SETTING IMAGE SOURCE
				function assignImage() {
					for (const filmImage of filmImages) {
						if (card.title === filmImage.name) {
							return filmImage.link;
						}
					}
				}
		});
	
	}
}


const charactersPage = document.querySelector(".characters")
const vehiclesPage = document.querySelector(".vehicles")
const planetsPage = document.querySelector(".planets")
const filmsPage = document.querySelector(".films")

if (charactersPage){
	fetchPeople()
} else if (vehiclesPage){
	fetchVehicles()
} else if (planetsPage){
	fetchPlanets()
} else if (filmsPage){
	fetchFilms()
}else {
	""
}
