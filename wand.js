
var wandNames = ['Harrowing Hornwood','Winking Weasley', 'Disdainful Dilopogus', 'Menacing Meadow', 'Charming blaze', 'Ferocious cane', 'Bolting Boon', 'Notorious Nitty', 'Eveline Enchanting','Templar Gingivitis', 'Nimble Nebula', 'Excelsior Mumblemouth', 'Surge Whatchamacallit', 'Saffron Semantics'];

function randomNumberGenerator()
{
	var randNum = Math.floor(Math.random()*wandNames.length);
	return randNum;
}
var num = randomNumberGenerator();
var geth1 = document.getElementById('randomWandName');
var text = document.createTextNode(`${wandNames[num]}`);
geth1.appendChild(text);

function randomImageGenerator()
{
	var randNum = Math.floor(Math.random()*6);
	return randNum;
}

 var i = parseInt(randomImageGenerator());
// var getImgSrc = document.getElementById('wandImage');
// var text = document.createTextNode(`${i}.png`);
// getImgSrc.src += text /*`wand${img}.png`;*/
var getImgSrc = document.getElementById('wandImage');
// document.write(`<img src="images/wand${img}.png">`);
// var text = document.createTextNode(`${img}.png`);
getImgSrc.src += `wand${i}.png`;
