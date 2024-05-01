const fetchData = async (page)=> {
	const response = await fetch(`https://swapi.dev/api/${page}`)
	const data = await response.json()
	const results = data.results
	console.log(results);
	
}
fetchData('people')