$(document).ready(function() {

var money = 0;
var clickMultiplyer = 1;
var start = 0;
var upgradePrice = 50;

$('.score').html(money);
$('#smoke1, #smoke2, #smoke3, #smoke4, #smoke5, #cloud, #sun, #house1, #house2, #house3, #house4, #house5, #car1, #car2, #car3, #car4, #car5, #windmill1, #windmill2, #windmill3, #windmill4, #windmill5, button').hide();

$('#start').on("click", function() {
	$(this).fadeOut(500);
	$('button').fadeIn(500);
	start = 1;
});


$(document).keydown(function(e) {
	if(e.which === 66) {
		

		if(start == 1) {

		money += 1 * clickMultiplyer;






		$('.score').html(money);

		if(money == 15) {
		$('#house1').fadeIn(1000);
	} else if(money == 30) {
		$('#house2').fadeIn(1000);
	} else if(money == 45) {
		$('#house3').fadeIn(1000);
	} else if(money == 60) {
		$('#house4').fadeIn(1000);
	} else if(money == 75) {
		$('#house5').fadeIn(1000);
	} else if(money == 90) {
		$('#car1').fadeIn(1000);
		$('#car1').animate({ "left": "+=50px" }, "slow" );
	} else if(money == 105) {
		$('#car2').fadeIn(1000);
		$('#car2').animate({ "left": "+=50px" }, "slow" );
	} else if(money == 120) {
		$('#car3').fadeIn(1000);
		$('#car3').animate({ "left": "+=50px" }, "slow" );
	} else if(money == 135) {
		$('#car4').fadeIn(1000);
		$('#car4').animate({ "left": "+=50px" }, "slow" );
	} else if(money == 150) {
		$('#car5').fadeIn(1000);
		$('#car5').animate({ "left": "+=50px" }, "slow" );
	} else if(money == 165) {
		$('#windmill1').fadeIn(1000);
	} else if(money == 180) {
		$('#windmill2').fadeIn(1000);
	} else if(money == 195) {
		$('#windmill3').fadeIn(1000);
	} else if(money == 210) {
		$('#windmill4').fadeIn(1000);
	} else if(money == 225) {
		$('#windmill5').fadeIn(1000);
	} else if(money == 240) {
		$('#sun').fadeIn(1000);
	} else if(money == 255) {
		$('#cloud').fadeIn(1000);
		$('#cloud').animate({ "left": "+=500px" }, 15000 );
		$('#cloud').animate({ "left": "-=600px" }, 15000 );
		$('#cloud').animate({ "left": "+=500px" }, 15000 );
		$('#cloud').animate({ "left": "-=600px" }, 15000 );
		$('#cloud').animate({ "left": "+=500px" }, 15000 );
		$('#cloud').animate({ "left": "-=600px" }, 15000 );
	} else if(money == 270) {
		$('#smoke1').fadeIn(1000);
		$('#smoke1').auderoSmokeEffect({
			imagePath: 'images/smoke.png',
			height: 45,
			width: 45
		});
	} else if(money == 285) {
		$('#smoke2').fadeIn(1000);
		$('#smoke2').auderoSmokeEffect({
			imagePath: 'images/smoke.png',
			height: 45,
			width: 45
		});
	}

	}

		}
		
});


$('button.button').on("click", function() {
	money += 1 * clickMultiplyer;
	$('.score').html(money);


	if(money == 15) {
		$('#house1').fadeIn(1000);
	} else if(money == 30) {
		$('#house2').fadeIn(1000);
	} else if(money == 45) {
		$('#house3').fadeIn(1000);
	} else if(money == 60) {
		$('#house4').fadeIn(1000);
	} else if(money == 75) {
		$('#house5').fadeIn(1000);
	} else if(money == 90) {
		$('#car1').fadeIn(1000);
		$('#car1').animate({ "left": "+=50px" }, "slow" );
	} else if(money == 105) {
		$('#car2').fadeIn(1000);
	} else if(money == 120) {
		$('#car3').fadeIn(1000);
	} else if(money == 135) {
		$('#car4').fadeIn(1000);
	} else if(money == 150) {
		$('#car5').fadeIn(1000);
	} else if(money == 165) {
		$('#windmill1').fadeIn(1000);
	} else if(money == 180) {
		$('#windmill2').fadeIn(1000);
	} else if(money == 195) {
		$('#windmill3').fadeIn(1000);
	} else if(money == 210) {
		$('#windmill4').fadeIn(1000);
	} else if(money == 225) {
		$('#windmill5').fadeIn(1000);
	} else if(money == 240) {
		$('#sun').fadeIn(1000);
	} else if(money == 255) {
		$('#cloud').fadeIn(1000);
	}


});










});

