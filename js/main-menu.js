// JavaScript Document


$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});
    
$(document).ready(function() {

        
    // break rate count
    $.fn.startRateCount = function(options) {
        var settings = $.extend({
            countGap: 729,
            timerSpeed: 1000,
            useComma: true
        }, options)

        var $selector = $(this);
        var numberNow = 0;
        var countGap = settings.countGap;
        var timerSpeed = settings.timerSpeed;
        var useComma = settings.useComma;
        var numberNowComma = '';
        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = '0' + (today.getMonth() + 1); // January is 0.
        var dd = today.getDate();

        // 초기값
        numberNow = (yyyy + mm + dd) * countGap;
        updateRate();

        setInterval(function() {updateRate();}, timerSpeed);

        function updateRate() {
            if (useComma === true) {
                numberNowComma = numberNow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                $selector.text(numberNowComma);
            } else {
                $selector.text(numberNow);
            }
            numberNow += countGap;
        } // end of updateBreakRate
    } // end of jquery function - startRateCount








    $('.counter').startRateCount();

	(function() {
		// easing function
		var baseEasings = {};

		$.extend(baseEasings, {
			Elastic: function(p) {
				return p === 0 || p === 1 ? p :
					-Math.pow(2, 8 * ( p - 1 )) * Math.sin((( p - 1 ) * 80 - 7.5) * Math.PI / 15);
			},
			Bounce: function(p) {
				var pow2,
					bounce = 4;
				while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
				return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
			}
		}); // end of extend
		$.each(baseEasings, function(name, easeIn) {
			$.easing["easeIn" + name] = easeIn;
			$.easing["easeOut" + name] = function(p) {
				return 1 - easeIn(1 - p);
			};
			$.easing["easeInOut" + name] = function(p) {
				return p < 0.5 ?
					easeIn(p * 2) / 2 :
					1 - easeIn(p * -2 + 2) / 2;
			};
		}); // end of each
		// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)
	})(); // end of easing function
    








    
    // menu
	navMenu();
	function navMenu() {
        var menu = $('#menu')
		var openBtn = $('a.menu-open');
		var closeBtn = $('a.menu-close');
        
        open();
        close();
        
		// menu open
        function open() {
            openBtn.on('click', function() {
                menu.css({'display':'block'});
                $(this).parent().stop().animate({'top': -100 + '%'}, 200);
                menu.stop().delay(300).animate({'top': 0}, 1000, 'easeOutBounce');
            }); 
        } // end of open
        
		// menu close
        function close() {
            closeBtn.on('click', function() {
                menu.stop().animate({'top': -100 + '%'}, 100, function() {
                    $(this).css({'display': 'none'})
                });
                openBtn.parent().stop().animate({'top': -20 + 'px'}, 200);
            }); 
        } // end of close

        // menu click
        $('.gnb li a').on('click', function() {
            var index = $('.gnb li').index($(this).parent()) + 1;
            var pos = $('.menu0' + index).position().top;
            $(this).parents('#menu').stop().animate({'top': -100 + 'vh'}, 100, function() {
                $(this).css({'display': 'none'})
            	openBtn.parent().stop().animate({'top': -20 + 'px'}, 200);
                $('html, body').animate({scrollTop: pos});
            });
        }); // end of click  
	} // end of nav menu
	
   



    // infinite image slide - product list
    $.fn.setImageSlideInfinite = function(options) {
        var settings = $.extend({
            slideFirst: 1,
            timerSpeed: 3000
        }, options);

        this.each(function() {
            var $selector = $(this);
            var numSlide = $selector.find('ul.slide li').length;
            var slideNow = 0;
            var slideNext = 0;
            var slidePrev = 0;
            var slideFirst = settings.slideFirst;
            var timerSpeed = settings.timerSpeed;
            var onPlaying = false;

            // 초기화
            $selector.find('ul.slide li').each(function(i) {
                $selector.find('ul.indicator').append('<li><a href="#">product number ' + (i + 1) + '</a></li>\n');
            });

            showSlide(slideFirst);

            $selector.find('ul.indicator li a').on('click', function() {
                var index = $selector.find('ul.indicator li').index($(this).parent());
                showSlide(index + 1, 'direct');
            });
            $selector.find('p.control a.prev').on('click', function() {
                $(this).stop(true).animate({'left': '-70px'}, 50).animate({'left': '-60px'}, 100);
                showSlide(slidePrev, 'prev');
            });
            $selector.find('p.control a.next').on('click', function() {
                $(this).stop(true).animate({'right': '-70px'}, 50).animate({'right': '-60px'}, 100);
                showSlide(slideNext, 'next');
            });

            
        });  // end of each
    } // end of jquery function - setImageSlideInfinite

 
}) // end of ready