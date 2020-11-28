
function easy_background(selector, sld_args) {

	function empty_img(x) {
	  if (x) {
		return "<img src='" + x + "'>";
	  } else {
		return "";
	  }
	}
  
	//use object same as arrays in php {nameofindex:variable} inside object you can use arrays [value1,val2] (variable in object can be as array
	//var sld_args={i:["img/555.jpg","img/44.jpg","img/33.jpg","img/22.jpg","img/11.jpg","img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"],d:[3000,3000,3000,3000,3000] };
  
	//if delay is empty or forgotten then use this default value
	var def_del = 3000;
  
	var p = document.createElement("div");
	p.innerHTML = " ";
	p.classList.add("easy_slider");
  
	document.body.insertBefore(p, document.body.firstChild);
	//switch all values in object -- objectname.index in you case sld_args is object and i is index of array which keep images (i). We use this function for fill div with img tags
	//and for insert delays into empty or forgotten places in object
	sld_args.slide.forEach(function(v, i) {
	  if (v) {
		document.querySelector(".easy_slider").innerHTML += empty_img(v);
		if (typeof sld_args.delay[i] == 'undefined' || typeof sld_args.delay[i] == '' || sld_args.delay[i] == 0) {
		  sld_args.delay[i] = def_del;
		}
	  }
  
	});
  
	//add various style on selector
	document.querySelector(".easy_slider").style.display = "none";
  
  
	//add various style on selector
	document.querySelector(selector).style.backgroundSize = "cover";
	document.querySelector(selector).style.backgroundRepeat = "no-repeat";
	document.querySelector(selector).style.backgroundPosition = "center center";
	document.querySelector(selector).style.overflowY = "hidden";
  
  
	setTimeout(function() {
	  //add various style on selector
	  if (typeof sld_args.transition_timing === 'undefined') {
		sld_args.transition_timing = "ease-in";
	  }
	  if (typeof sld_args.transition_duration === 'undefined') {
		sld_args.transition_duration = 1000;
	  }
	  var transition = "all " + sld_args.transition_duration + 'ms ' + sld_args.transition_timing;
	  document.querySelector(selector).style.WebkitTransition = transition;
	  document.querySelector(selector).style.MozTransition = transition;
	  document.querySelector(selector).style.MsTransition = transition;
	  document.querySelector(selector).style.OTransition = transition;
	  document.querySelector(selector).style.transition = transition;
	}, 100);
  
  
	//this n is number of row  in object - if first row one function if more than 1 then other
	var n = 1;
	//li collection previous delays from previous slides
	var li = 0;
  
	function slider() {
	  //switching all images one by one
	  sld_args.slide.forEach(function(vvv, iii) {
		//here go all slides except first
		if (n > 1) {
		  //set delay from collected number from previous slides
		  var delay = li;
		  setTimeout(function() {
  
			document.querySelector(selector).style.backgroundImage = "url('" + vvv + "')";
  
		  }, delay); // >1
		  //collecting delays from curent
		  li = li + sld_args.delay[iii];
  
		} else { //this function for only  first slide
  
		  //next row
		  n++;
		  //collect delay first time
		  li = sld_args.delay[iii];
  
		  document.querySelector(selector).style.backgroundImage = "url('" + vvv + "')";
  
		}
  
	  });
  
	};
  
	slider();
  
	setInterval(function() { // REPEAT
  
	  slider();
	  //here used length of array of delays in object instead you tot_time variable
	}, sld_args.delay.length);
  
  }
  








































var moreBtn= document.querySelector("#more");
moreBtn.style.display = 'none';


$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){

		$(this).fadeOut('slow');


		easy_background("body",

      {
        slide: ["img1/1.jpeg", "img1/2.jpeg", "img1/3.jpeg", "img1/4.jpeg", "img1/5.jpeg", "img1/6.jpeg", "img1/7.jpeg", "img1/8.jpeg", "img1/9.jpeg", "img1/10.jpeg", "img1/11.jpeg", "img1/12.jpeg", "img1/13.jpeg", "img1/14.jpeg", "img1/15.jpeg", "img1/16.jpeg", "img1/17.jpeg", "img1/18.jpeg", "img1/19.jpeg", "img1/20.jpeg", "img1/21.jpeg", "img1/22.jpeg", "img1/23.jpeg", "img1/24.jpeg"],

        delay: [5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500]
      }


    );

		
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		

		


		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(4500);
			if(i==50){ //10->50
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () { //9->49
					$('.cake').fadeIn('fast');
				});
				//moreBtn.style.display = 'inline-block';	
				$("#more").fadeIn("slow");
			
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);


		// moreBtn.style.display = 'inline-block';
		
	});
});




//alert('hello');