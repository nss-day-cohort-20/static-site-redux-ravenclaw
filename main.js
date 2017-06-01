function makeWand (name, description, price, image, nameId) {
	//create a wand card
	var wandGuts = {};

	wandGuts.name = name;
	wandGuts.description = description;
	wandGuts.image = image;
	wandGuts.nameId = nameId;

	return wandGuts;
}

var wandGuts1 = makeWand("Phoenix Feather", "Learns most varied magic, hard to be chosen.", 100, "http://pm1.narvii.com/6011/c426c5ff7212d9baf2b73e8d7ae214ee1f1a6ded_hq.jpg", "Phoenix" );
var wandGuts2 = makeWand("Dragon Heartstring", "Powerful, easy to learn spells though can easily be committed to another owner.", 100, "https://hydra-media.cursecdn.com/pathofexile-ru.gamepedia.com/0/0d/%D0%A1%D0%B5%D1%80%D0%B4%D1%86%D0%B5_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0_card_art.png?version=5f683e0bd45b23df22d1f7a3ec82749c", "Dragonheart"  );
var wandGuts3 = makeWand("Unicorn Horn Dust", "Makes spell work without fail.", "Unicornhorn");
var wandGuts4 = makeWand("Thunder Beak Feather", "Fires spell faster than thunder. Stays loyal to the current owner.", 100, "url here", "Thunder");
var wandGuts5 = makeWand("Unicorn Blood", "Blood from the King of magical creatures. Makes for a particularly power wand.", 100, "url here", "Unicornblood" );
var wandGuts6 = makeWand("Dragon Scales", "Craftfully removed from the legendary creatures, dragon scales provide the toughest defense in the known world to its user.", 100, "url here", "Dragonscales" );
var wandGuts7 = makeWand("Cat Hair", "Craftfully removed from various furniture. Not so loyal to current owner.", 100, "https://georgiascatblog.files.wordpress.com/2013/03/cat-hair.jpg", "Cat");
var wandGuts8 = makeWand("Digested Dog Toy", "Makes spell fail without work.", 100, "Dogtoy");

var eachWand = [wandGuts1, wandGuts2, wandGuts3, wandGuts4, wandGuts5, wandGuts6, wandGuts7, wandGuts8];

