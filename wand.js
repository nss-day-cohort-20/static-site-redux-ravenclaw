var wandNames = ['Harrowing Hornwood','Winking Weasley', 'Disdainful Dilopogus', 'Menacing Meadow', 'Charming blaze', 'The Ferocious cane', 'Bolting Boon', 'Notorious Nitty', 'Eveline Enchanting','Templar Gingivitis', 'Nimble Nebula', 'Excelsior Mumblemouth', 'Surge Whatchamacallit', 'Saffron Semantics'];
function randomNumberGenerator()
{
	var randNum = Math.floor(Math.random()*wandNames.length);
	return randNum;
}
var num = randomNumberGenerator();
var geth1 = document.getElementById('randomWandName');
var text = document.createTextNode(`${wandNames[num]}`);
geth1.appendChild(text);