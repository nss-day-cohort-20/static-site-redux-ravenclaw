
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

var wandGuts1 = makeWand("Phoenix Feather", "Learns most varied magic spells types and varients. It is hard to be chosen. ", 100, "http://pm1.narvii.com/6011/c426c5ff7212d9baf2b73e8d7ae214ee1f1a6ded_hq.jpg", "Phoenix" );
var wandGuts2 = makeWand("Dragon Heartstring", "Powerful, easy to learn spells though can easily be committed to another owner.", 100, "https://hydra-media.cursecdn.com/pathofexile-ru.gamepedia.com/0/0d/%D0%A1%D0%B5%D1%80%D0%B4%D1%86%D0%B5_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0_card_art.png?version=5f683e0bd45b23df22d1f7a3ec82749c", "Dragonheart"  );
var wandGuts3 = makeWand("Unicorn Horn Dust", "Makes spell work every single time, no matter what, without fail.", 100, "https://i.ytimg.com/vi/VQzn1hO0ino/maxresdefault.jpg", "Unicornhorn");
var wandGuts4 = makeWand("Thunder Beak Feather", "Fires spell faster than thunder. Stays loyal to the current owner.", 100, "https://i.ytimg.com/vi/4GuZ-NdG8Ls/maxresdefault.jpg", "Thunder");
var wandGuts5 = makeWand("Unicorn Blood", "Blood from the King of magical creatures. Makes for a particularly power wand.", 100, "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=10220727", "Unicornblood" );
var wandGuts6 = makeWand("Dragon Scales", "Craftfully removed from legendary creatures, dragon scales provide toughest defense in the world to its user.", 100, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ334DYgR1Qim_QQZ76WRuFeqcw-s-MIkn2vnYz5x8zTYYSJIQW", "Dragonscales" );
var wandGuts7 = makeWand("Cat Hair", "Craftfully removed from various furniture. Not so loyal to current owner.", 100, "https://georgiascatblog.files.wordpress.com/2013/03/cat-hair.jpg", "Cat");
var wandGuts8 = makeWand("Digested Dog Toy", "Makes spell fail without work.", 100, "https://fthmb.tqn.com/mP9rAO_x0xZO_lHfbXu9HPciWKo=/2126x1411/filters:no_upscale():fill(transparent,1)/about/pug-58151d7d3df78cc2e8837a27.jpg", "Dogtoy");

var eachWand = [wandGuts1, wandGuts2, wandGuts3, wandGuts4, wandGuts5, wandGuts6, wandGuts7, wandGuts8];

for (var i=0; i<eachWand.length; i++) 
{
	document.getElementById("card").innerHTML +=
		` <div class="card">
		<img src="${eachWand[i].image}" class="card-img-top" alt="Card image cap">
  		<div class="card-block">
   			<h4 class="card-title">${eachWand[i].name}</h4>
    		<p class="card-text">${eachWand[i].description}</p>
    		<p class="card-text" id="productPrice">$${eachWand[i].price}</p>
  		</div>

  		// <input class="checkBox1" type="checkbox" name="${eachWand[i].nameId}" value="${eachWand[i].name}" id="${eachWand[i].nameId}">
  		// <h4 id="clickSelectText">Click to select</h4>

  		<h1 id="clickSelectText">Click to select</h1>
  		<input id="checkBox" type="checkbox" name="${eachWand[i].nameId}" ID="${eachWand[i].nameId}">
  		
</div>`
}

	// var toPrint = [];
	// geth1 = document.getElementById("hereIsYourWand"); 
	// function display() 
	// {	
	// 	if(document.getElementById("Phoenix").checked === true)
	// 	{ 
	// 		toPrint.push(document.getElementById("Phoenix").value);
	// 	}
	// 	if(document.getElementById("Dragonheart").checked === true)
	// 	{ 
	// 		toPrint.push(document.getElementById("Dragonheart").value);
	// 	}
	// 	if(document.getElementById("Unicornhorn").checked === true)
	// 	{ 
	// 		toPrint.push(document.getElementById("Unicornhorn").value);
	// 	}
	// 	if(document.getElementById("Thunder").checked === true)
	// 	{ 
	// 		toPrint.push(document.getElementById("Thunder").value);
	// 	}
	// 	if(document.getElementById("Unicornblood").checked === true)
	// 	{ 
	// 		toPrint.push(document.getElementById("Unicornblood").value);
	// 	}
	// 	if(document.getElementById("Dragonscales").checked === true)
	// 	{ 
	// 		toPrint.push(document.getElementById("Dragonscales").value);
	// 	}
	// 	if(document.getElementById("Cat").checked === true)
	// 	{ 
	// 		toPrint.push(document.getElementById("Cat").value);
	// 	}
	// 	if(document.getElementById("Dogtoy").checked === true)
	// 	{ 
	// 		toPrint.push(document.getElementById("Dogtoy").value);
	// 	}
	
	// geth1.innerHTML += toPrint;
	// }

