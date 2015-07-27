Crafty.init(Crafty.viewport.width,Crafty.viewport.height, document.getElementById('game'));
var assets = {
	"sprites": {
		
		"(1).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe1: [0,0]
			}
		},
		"(2).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe2: [0,0]
			}
		},
		"(3).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe3: [0,0]
			}
		},
		"(4).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe4: [0,0]
			}
		},
		"(5).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe5: [0,0]
			}
		},
		"(6).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe6: [0,0]
			}
		},
		"(7).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe7: [0,0]
			}
		},
		"(8).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe8: [0,0]
			}
		},
		"(9).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe9: [0,0]
			}
		},
		"(10).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe10: [0,0]
			}
		},
		"(11).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe11: [0,0]
			}
		},
		"(12).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe12: [0,0]
			}
		},
		"(13).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe13: [0,0]
			}
		},
		"(14).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe14: [0,0]
			}
		},
		"(15).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe15: [0,0]
			}
		},
		"(16).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe16: [0,0]
			}
		},
		"(17).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe17: [0,0]
			}
		},
		"(18).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe18: [0,0]
			}
		},
		"(19).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe19: [0,0]
			}
		},
		"(20).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe20: [0,0]
			}
		},
		"(21).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe21: [0,0]
			}
		},
		"(22).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe22: [0,0]
			}
		},
		"(23).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe23: [0,0]
			}
		},
		"(24).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe24: [0,0]
			}
		}

	}
};
Crafty.load(assets, function(){});
var pepeCount = 0;
var manualRate = 1;
newPepe();

Crafty.e('2D, DOM, Color').attr({
	x: Crafty.viewport.width-800, y: 0,
	w: 800, h: Crafty.viewport.height-10
}).color('#63C914').css({
	"border": "1px solid black",
	"border-radius": "20px"
})
Crafty.e('2D, DOM, Text').attr({
	x: Crafty.viewport.width-500, y:0,
	w:50
}).text("SHOPE").textFont({"size": "32px", "family": "Comic Sans MS"})
Crafty.e('2D, DOM, Image').attr({
	x: Crafty.viewport.width/2-600, y: 0,
}).image("title.png")

var collectionText = Crafty.e('2D, DOM, Text')
  .attr({
    x: 80,
    y: 150,
    w: 400
  });
 collectionText.text("<-- Pepe Collection")
 collectionText.textFont({
 	size: '24px',
 	family: "Comic Sans MS"
 })
 var pepeCountText = Crafty.e('2D, DOM, Text')
 	.attr({
 		x: Crafty.viewport.width/2-450,
 		y: 470,
 		w: 1000,
 		h: 200
 	})


 pepeCountText.text("Pepes Stolen: " + pepeCount);
 pepeCountText.textFont({
 	size: '24px',
 	family: 'Comic Sans MS'
 });


Crafty.e("2D, DOM, Text").attr({
	x: Crafty.viewport.width-760,
	y:70,
	w:200
}).text("auto pepe thief").textFont({
	"family": "Comic Sans MS",
	"size": "18px"
})




function stealPepe (pepe) {
	pepeCount++;
	Crafty.e("2D, DOM, Text, Tween")
		.attr({
			x: (Crafty.viewport.width/2-200)+Math.floor((Math.random() * +50) -30), y: 300+Math.floor((Math.random() * +50) -30), w: 400, h: 250,
			rotation: Math.floor((Math.random() * +50) -30),
			alpha: 1.0
		})
		.text("+ " + manualRate + " pepe")
		.textFont({
			"size": "24px",
			"family": "Comic Sans MS"
		})
		.tween({alpha: 0.0}, 700)

	pepeCountText.text("Pepes Stolen: " + pepeCount);

	newPepe();
	pepe.bind("EnterFrame", function steal_animation() {
			if (pepe.x > -500){
				pepe.x = pepe.x-40;
				pepe.rotation = pepe.rotation+15;
				pepe.origin('center');
				pepe.w = pepe.w - 15;
				pepe.h = pepe.h - 15;
			}
			else
			{	
				pepe.unbind("EnterFrame", steal_animation);
				
			}	
	})
	
}

function newPepe() {
	Crafty.e("2D", "DOM", "pepe" + Math.floor((Math.random() * 24) + 1), "Mouse")
	.attr({x: Crafty.viewport.width/2-500, y: 200, w: 275, h: 260})
	.bind('Click', function(MouseEvent){
  	stealPepe(this);
});
}