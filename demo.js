function get(){
     let result = document.getElementById('City').value
     const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '41f3001a6emsh0110854b5b87aaep1692c5jsn31b8a2ce925f',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch(`https://open-weather13.p.rapidapi.com/city/${result}`, options)
	.then(response => response.json())
	.then(response => console.log(
          document.getElementById('weather').innerHTML = response.weather[0].main,
          document.getElementById('response1').innerHTML = response.main.temp,
          document.getElementById('response2').innerHTML = response.main.temp_max,
          document.getElementById('response3').innerHTML = response.main.temp_min
     ))
	.catch(err => console.error(err));
}