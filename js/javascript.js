
 //Tab.addEventListener("click",function(){
function weather(){
	const APIkey = '8d214f1a71c91b2ec12a035b0ce91984';
	const Tab = document.getElementById("tab");
	const result = document.getElementById('result');
	console.log (result);

	let city = document.getElementById('input').value;
	let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);

	xhr.send();

	if (xhr.status!=200){
			console.log(xhr.status +' ' +xhr.statusText);
			var text = 'Город не найден';
			result.innerHTML = text;
			//document.write(text);
	} else {
			let xml = JSON.parse(xhr.responseText);
			console.log(xml);
			console.log(city);
			result.innerHTML = 	city 
								+ '</br>' 
								+ "Температура в К: "+ Math.round(xml.main.temp)
								+ '</br>' 
								+ 'Температура в градусах: ' + Math.round(xml.main.temp - 273)
								+ '</br>' 
								+' Скорость ветра: '+ xml.wind.speed;
				};
};
// });



/*
button.onclick = function(){
	let city = document.getElementById('input').value;
	let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);

	xhr.send();

if (xhr.status!=200){
			console.log(xhr.status +' ' +xhr.statusText);
			var text = 'Город не найден';
			document.write(text);
} else {
			let xml = JSON.parse(xhr.responseText);
			console.log(xml);
			document.write('</br></br> Ваш город: '+ city);
			document.write('</br> Температура в К: '+ Math.round(xml.main.temp));
			document.write('</br> Температура в градусах: ' + Math.round((xml.main.temp - 273)));
			document.write('</br> Скорость ветра : '+ xml.wind.speed);
			//document.write(xml.)
				};

};
*/
