jQuery(document).ready(function($) {
	
	// Set up toggle click data listener
    $('[data-togglename]').click(toggleDiv);
    
    function toggleDiv(){
	    
	    if($(this).hasClass('active')){
		    $(this).removeClass('active');
		    $('.wide-project-info-wrap').removeClass('active');
		    $('.mob-project').removeClass('active');
		    return false;
	    }
		var toggleName = $(this).attr('data-togglename');
		var toggleClass = $(this).attr('data-toggleclass');
		var clickedInfo = $(this).parent('.project-wrap').find('.project-open-wrap').html();
		$("."+toggleClass).removeClass(toggleClass);
		$(this).addClass(toggleClass);
		if ($(window).width() < 640) {
			$(".mob-project."+toggleName).addClass(toggleClass);
		} else {
			$("."+toggleName+'.wide-project-info-wrap').addClass(toggleClass);
			$("."+toggleName+'.wide-project-info-wrap').html(clickedInfo);
		}
	};
	
//	$(window).resize(function() {
//		$('.active').removeClass('active');
//	});
	
	$('.close').live('click', function(){
		$('.active').removeClass('active');
	});
	
	var wHeight = $(window).height();
	var dHeight = $(document).height();
	var leadImage = $('.lead-image').height() - 75;
	var windowWidth = $(window).width();
	
	
	// Only fix header if we are on bigger than 640px screens
	if (windowWidth > 640) {
		
		$( window ).scroll(function() {
		
			var scrollTop = $(window).scrollTop();
		
			if (scrollTop > 0){
				$('.logo-wrap').addClass('header-fixed');
				$('.site-header').addClass('header-fixed');
		    } else {
				$('.logo-wrap').removeClass('header-fixed');
				$('.site-header').removeClass('header-fixed');
		    }
		    
			if (scrollTop > leadImage){
				$('.logo-wrap').addClass('white');
				$('.site-header').addClass('white');
		    } else {
				$('.logo-wrap').removeClass('white');
				$('.site-header').removeClass('white');
		    }
		    
		    /*
			if (scrollTop > dHeight-wHeight-550){
				$('.get-started').addClass('show');
		    }
		    
		    $('test-value').html('st='+scrollTop+" dH="+dHeight);
		    
			if (scrollTop > wHeight*.7){
				$('.home-work h2').addClass('active');
				setTimeout(function(){$('.home-work-images .first').addClass('active')},300);
				setTimeout(function(){$('.home-work-images .second').addClass('active')},450);
				setTimeout(function(){$('.home-work-images .columns').addClass('active')},600);
		    } else {
				$('.home-work h2').removeClass('active');
				$('.home-work-images .columns').removeClass('active');
		    } */
		    
		});
		
	}

/*    
    var we_text = $('.we-lead-text').html();
	var we_text = we_text.split(',');
    
    var text_count = count_array(we_text);
    var count = 0
    
    setInterval(function() {
	    	
	    	$('.rotate').animate({ opacity:0 }, 300);
	    	setTimeout(function(){
	        	$('.rotate').html(we_text[count]);
	        	$('.rotate').animate({ opacity:1 }, 300);
			}, 800);
			
		   	count++;
	   		if(count == text_count){
		   		count = 0;
	   		}
	   		
      }, 2300);
	
	function count_array(array) {
    	var count = 0;
    	$.each(array, function(i,v) { count++; });
	    return count;
	}
*/

	$('.site-header a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
			return false;
			}
		}
	});

});