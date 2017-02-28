jQuery(function() {
// aria navigation 		
    jQuery('.nav, .nav2, .nav-sec ').setup_navigation();
// aria navigation  ends
//// Font resizing initializer
            jQuery("#textsizer li a").textresizer({
                target: "body",
				sizes: [".875em", "1em", "1.125em", "1.25em", "1.375em", "1.5em", "1.625em", "1.75em", "1.875em"]
            });
//
//// Font resizing initializer ends
//banner slider
jQuery('.flexslider').flexslider({
	controlNav: true,
	directionNav: true, 
	keyboard: true,
	slideshow: true	,
	animation: "fade",
	pausePlay: true
	
	});

jQuery('.testimonial-slider').flexslider({
	controlNav: false,
	directionNav: true, 
	keyboard: true,
	slideshow: true	,
	animation: "slide" 
	
	});	
jQuery('.stats-slider').flexslider({
	animation: "fade" 
	
	});		
jQuery('.content-inside-box .flexslider').flexslider({
	controlNav: false,
	directionNav: true, 
	keyboard: true,
	slideshow: true	,
	animation: "slide",
	pausePlay: false
	
	});	
//banner slider ends


// mobile menu functioning
    jQuery("a#trigger").on("click", function() {
        jQuery("body").addClass("disabled");
    });
    jQuery("#page").on("click", function() {
        jQuery("body").removeClass("disabled");
    });
// mobile menu functioning ends



// skip content / back to top buttons
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.skip-content').fadeOut();
            jQuery('.back-to-top').fadeIn();

        } else {
            jQuery('.skip-content').fadeIn();
            jQuery('.back-to-top').fadeOut();

        }
    });

	jQuery('.back-to-top').click(function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
// skip content / back to top buttons ends	
	




// sticky nav functioning for home / inside pages
jQuery('header').css('position', 'fixed').css('z-index', '9');

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
        $('header').css('position', 'fixed');
		$('.admin-bar header').css('position', 'fixed').css('z-index', '9').css('top', 32);
		
	/*	$('body').css('padding-top', 0);*/
    } else {
        $('header').removeClass("sticky");
        $('header').css('position', 'fixed').css('z-index', '19');
	/*	$('body').css('padding-top', 0);*/
    }
});
 
var h_header = $("header").height();
var h_header_logged = $("header").height() + 32;
var l_pad = 0;						  
$('.inside #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header);
$('.inside .admin-bar #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header_logged);
/*$('.inside body').css('padding-top', l_pad);*/
$(window).scroll(function() {
	var h_top = $("#banner").height() - 133;
	var h_top_logged = $("#banner").height() - 165;
	
	
	var new_top = h_top ;
	
    if ($(this).scrollTop() > new_top && screen.width > 767) {
        $('#nav-2').addClass('sticky');
    } 
	else if($(this).scrollTop() > h_top_logged && screen.width > 767){
		$('.admin-bar #nav-2').addClass('sticky');
		}
	else if ($(this).scrollTop() > 0 && screen.width > 767) {
        $('#nav-2').removeClass('sticky');
    }
    if ($(this).scrollTop() > 1 && screen.width > 767) {
        $('.inside #nav-2').removeClass('sticky');
        $('.inside #nav-2').addClass('stickyy');
        $('.inside #nav-2').css('position', 'fixed').css('top',h_header);
		//$('.logged-in #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_top_logged);
		$('.inside .admin-bar #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header_logged);
	/*	$('.inside body').css('padding-top', l_pad);*/
		
    } else if ($(this).scrollTop() <= 0 && screen.width > 767) {
        $('.inside #nav-2').removeClass('stickyy');
		$('.inside #nav-2').removeClass('sticky');
        $('.inside #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header);
		//$('.logged-in #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_top_logged);
		$('.inside .admin-bar #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header_logged);
		/*$('.inside body').css('padding-top', l_pad);*/

    }

});


$(window).resize(function() {
		  
    if ($(this).scrollTop() > 0 && $(this).width() <= 767 ) {
		$('#nav-2').removeClass('sticky');
        $('.inside #nav-2').removeClass('stickyy');
    }

});
$(document).ready(function() {
    if ($(this).scrollTop() > 0 && $(this).width() <= 767 ) {
		$('#nav-2').removeClass('sticky');
        $('.inside #nav-2').removeClass('stickyy');
    }								
								
});
// sticky nav functioning for home / inside pages ends

// select drop down
/*$(function () {

        var $win = $(window); // or $box parent container
        var $box = $(".dropcontainer");
        //  var $log = $(".log");

        $win.on("click.Bst", function (event) {
            if (
                $box.has(event.target).length == 0 //checks if descendants of $box was clicked
                    && !$box.is(event.target) && !$('.trigger').is(event.target)//checks if the $box itself was clicked
                ) {
                if ($(".dropcontainer ul").hasClass('dropdownvisible')) {
                    $(".dropcontainer ul").removeClass('dropdownvisible');
                    $(".dropcontainer ul").addClass('dropdownhidden');

                }
                if ($(".dropcontainer ul").hasClass('dropdownhidden')) {
                    $(".dropcontainer ul").removeClass('dropdownhhidden');
                    $(".dropcontainer ul").addClass('dropdownvisible');

                }
            }
        });
		


    });
//function test(i) {
    switch (i) {
        case 1:
            if ($("#cat-dropdown ul").hasClass('dropdownhidden')) {
                $("#cat-dropdown ul").removeClass('dropdownhidden');
                $("#cat-dropdown ul").addClass('dropdownvisible');
            } else if ($("#cat-dropdown ul").hasClass('dropdownvisible')) {
                $("#cat-dropdown ul").removeClass('dropdownvisible');
                $("#cat-dropdown ul").addClass('dropdownhidden');
            }
            break;
        case 2:
            if ($("#arc-dropdown ul").hasClass('dropdownhidden')) {
                $("#arc-dropdown ul").removeClass('dropdownhidden');
                $("#arc-dropdown ul").addClass('dropdownvisible');
            } else if ($("#arc-dropdown ul").hasClass('dropdownvisible')) {
                $("#arc-dropdown ul").removeClass('dropdownvisible');
                $("#arc-dropdown ul").addClass('dropdownhidden');
            }

            break;


    }
}*/

	function DropDown(el) {
				this.dd = el;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						event.stopPropagation();
					});	
				}
			}

			$(function() {

				var dd = new DropDown( $('#resource-type') );
				var dd = new DropDown( $('#resource-country') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown-2').removeClass('active');
				});

			});	

// select drop down ends

// accrodions for inside pages and side bar
$('.news-box-mobile, .events-box-mobile, .board-member-mobile, .country-section-mobile')
  .accordion({
    autoheight: false,
    collapsible: true,
    active: false
  });

// accrodions for member dashboard page ends
//jquery MAP

jQuery('#vmap').vectorMap({
	
    map: 'world_en',
      backgroundColor: 'null',
      color: '#8e0b56',
	  colors: {gl: '#eeeeee',pe: '#eeeeee',bo: '#eeeeee'},
      hoverColor: '#eeeeee',
      hoverColors: {},
      selectedColor: '#eeeeee',
      scaleColors: ['#eeeeee', '#eeeeee'],
      normalizeFunction: 'polynomial',
      enableZoom: true,
	  borderColor: '#ffffff',
      borderWidth: 1,
      borderOpacity: 0.25,
	  
});

// MAP ends
});
// window width specific
$(function() {
    if (screen.width < 768) {
		
	}	
	else{
	//jQuery(".facebook-box > div").removeClass("facebook-slider");	
	//jQuery(".facebook-box > div ul").removeClass("slides");
		}
	return false;
});	
jQuery(window).load(function() {
    if (screen.width > 768) {
	}	
	return false;
});	
jQuery(window).resize(function() {
    if (screen.width < 768) {
	
	}	

	return false;
});	

$(function() {
    if (screen.width < 767) {
	}	
	return false;
});	
jQuery(window).load(function() {
    if (screen.width < 767) {

	}	
	return false;
});	
jQuery(window).resize(function() {
    if (screen.width < 767) {

	}	
	return false;
});	




// equal heigt container creates

equalheight = function(container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    jQuery(container).each(function() {

        $el = jQuery(this);
        jQuery($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

jQuery(function() {
    if (screen.width < 1024) {
        jQuery(".content-area-inside, .sidebar-right").removeClass("eq-height");
        jQuery(".content-area-inside, .sidebar-right").css('height', 'auto');
    } else if (screen.width > 1024) {
        equalheight('.content-area-wrap > .eq-height');

        return false;
    }

});

jQuery(window).load(function() {
    if (screen.width < 1024) {
        jQuery(".content-area-inside, .sidebar-right").removeClass("eq-height");
        jQuery(".content-area-inside, .sidebar-right").css('height', 'auto');
        
    } else if (screen.width > 1024) {
        equalheight('.content-area-wrap > .eq-height');


        return false;
    }


});

jQuery(window).resize(function() {
    if (screen.width < 1024) {
        jQuery(".content-area-inside, .sidebar-right").removeClass("eq-height");
        jQuery(".content-area-inside, .sidebar-right").css('height', 'auto');

    } else if (screen.width > 1024) {
        equalheight('.content-area-wrap > .eq-height');

    }



});
	
jQuery(window).load(function() {
    if (screen.width > 767) {
		 equalheight('#resources-facebook .transparent-box');

    } else {

 jQuery("#resources-facebook .transparent-box").css('height', 'auto');
    }
});
jQuery(function() {

    if (screen.width > 767) {
		 equalheight('#resources-facebook .transparent-box');

    } else {

 jQuery("#resources-facebook .transparent-box").css('height', 'auto');
    }
});

jQuery(window).resize(function() {
    if (screen.width > 767) {
		 equalheight('#resources-facebook .transparent-box');

    } else {

 jQuery("#resources-facebook .transparent-box").css('height', 'auto');
    }
});

// equal heigt container ends




//member sidebar expand / collaps supporting functionality
jQuery(document).ready(function() {
		
	jQuery("li.current_page_item").parent("ul").addClass("current_ancestor_item");
	jQuery("li.current_page_item").parent("ul").parent("li").parent("ul").parent("li").siblings("li").addClass("non_current_ancestor_item");
		jQuery("li.current_page_item").parent("ul").parent("li").parent("ul").parent("li").addClass("current_ancestor_item_li");
		jQuery("ul.current_ancestor_item").parent("li").siblings("li").children("ul").css('display', 'none');
jQuery("li.current_page_item").siblings("li").children("ul").css('display', 'none');
		 
});							 
//member sidebar expand / collaps supporting functionality ends


//anchor link for sticky menu
    $(function(){
        setTimeout(function(){
            var shiftWindow = function() { 
                var hash = "#" + location.hash.replace(/[^A-Za-z0-9_\-]/g, "");
                if (hash && $(hash).offset()) {
                    var pos = $(hash).offset().top - 210;
                    $(window).scrollTop(pos);
                }
             };
            if (location.hash) shiftWindow();
            window.addEventListener("hashchange", shiftWindow);
        },10);
    })
//anchor link for sticky menu ends
//image mask code

//image mask code end