
function makeWand (name, description, price, image, nameId) {
	//create a wand card
	var wandGuts = {};

	wandGuts.name = name;
	wandGuts.description = description;
	wandGuts.price = price;
	wandGuts.image = image;
	wandGuts.nameId = nameId;

	return wandGuts;
}

var wandGuts1 = makeWand("Phoenix Feather", "Learns most varied magic, hard to be chosen.", 100, "http://pm1.narvii.com/6011/c426c5ff7212d9baf2b73e8d7ae214ee1f1a6ded_hq.jpg", "Phoenix" );
var wandGuts2 = makeWand("Dragon Heartstring", "Powerful, easy to learn spells though can easily be committed to another owner.", 100, "https://hydra-media.cursecdn.com/pathofexile-ru.gamepedia.com/0/0d/%D0%A1%D0%B5%D1%80%D0%B4%D1%86%D0%B5_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0_card_art.png?version=5f683e0bd45b23df22d1f7a3ec82749c", "Dragonheart"  );
var wandGuts3 = makeWand("Unicorn Horn Dust", "Makes spell work without fail.", 100, "https://i.ytimg.com/vi/VQzn1hO0ino/maxresdefault.jpg", "Unicornhorn");
var wandGuts4 = makeWand("Thunder Beak Feather", "Fires spell faster than thunder. Stays loyal to the current owner.", 100, "https://i.ytimg.com/vi/4GuZ-NdG8Ls/maxresdefault.jpg", "Thunder");
var wandGuts5 = makeWand("Unicorn Blood", "Blood from the King of magical creatures. Makes for a particularly power wand.", 100, "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=10220727", "Unicornblood" );
var wandGuts6 = makeWand("Dragon Scales", "Craftfully removed from the legendary creatures, dragon scales provide the toughest defense in the known world to its user.", 100, "https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0336/2664/rrsparkle_holiday_metal_dragon_scales_ed_shop_preview.png", "Dragonscales" );
var wandGuts7 = makeWand("Cat Hair", "Craftfully removed from various furniture. Not so loyal to current owner.", 100, "https://georgiascatblog.files.wordpress.com/2013/03/cat-hair.jpg", "Cat");
var wandGuts8 = makeWand("Digested Dog Toy", "Makes spell fail without work.", 100, "https://fthmb.tqn.com/mP9rAO_x0xZO_lHfbXu9HPciWKo=/2126x1411/filters:no_upscale():fill(transparent,1)/about/pug-58151d7d3df78cc2e8837a27.jpg", "Dogtoy");

var eachWand = [wandGuts1, wandGuts2, wandGuts3, wandGuts4, wandGuts5, wandGuts6, wandGuts7, wandGuts8];

for (var i=0; i<=eachWand.length; i++) {
	document.getElementById("card").innerHTML +=
		`<img class="card-img-top" src="${eachWand[i].image}" alt="Card image cap">
  		<div class="card-block">
   			<h4 class="card-title">${eachWand[i].name}</h4>
    		<p class="card-text">${eachWand[i].description}</p>
    		<p class="card-text" id="productPrice">$${eachWand[i].price}</p>
  		</div>
  		<input id="checkBox" type="checkbox" name="${eachWand[i].nameId}" ID="${eachWand[i].nameId}">Click to Select`
}

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

