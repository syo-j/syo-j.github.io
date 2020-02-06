$(function(){

	//サイトタイトル
	
	var defaultcolor = $('.site-title').css('color');
	$(".site-title").hover(function(){
		$(".site-title").animate({
			"color":"#FF8C00"
		},2000);

	},function(){
		$(".site-title").animate({
			"color": defaultcolor
		},2000);
	});

	//contact
	$('#button-contact').click(function(){
		$('#contact').slideToggle(1500);

		return false;
	});

	$('.close-btn2').click(function(){
		$('#contact').slideToggle(1500);

		return false;
	});

	//contact about,work
	$('.button-contact').click(function(){
		$('#contact').slideToggle(1500);

		return false;
	});


	//menu
	$('#button-menu').click(function(){
		$('nav').slideToggle(1500);

		return false;
	});

	$('.close-btn1').click(function(){
		$('nav').slideToggle(1500);

		return false;
	});


	//menu contact
	var ContactSlidea = function(){
		$('#contact').slideToggle(1500);
	}

	$('.menu-comtact').click(function(){
		$('nav').slideToggle(1500);

		setTimeout(ContactSlidea, 1500);

		return false;
	});


	//abouttext

	var Time=2000;

	$('.about-text').hover(function(){
		$('.text0').animate({'opacity' : '1.0'},Time);
		$('.text1').animate({'opacity' : '1.0'},Time+=500);
		$('.text2').animate({'opacity' : '1.0'},Time+=500);
		$('.text3').animate({'opacity' : '1.0'},Time+=500);
		$('.text4').animate({'opacity' : '1.0'},Time+=500);
		$('.text5').animate({'opacity' : '1.0'},Time+=500);
		$('.text6').animate({'opacity' : '1.0'},Time+=500);
		$('.text7').animate({'opacity' : '1.0'},Time+=500);
		$('.text8').animate({'opacity' : '1.0'},Time+=500);
		$('.text9').animate({'opacity' : '1.0'},Time+=500);

		Time =3000;
		
	});





});