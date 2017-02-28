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
	animation: "slide",
	pausePlay: true

	});

jQuery('.testimonial-slider, .stats-slider,.events-slider').flexslider({
	controlNav: false,
	directionNav: true,
	keyboard: true,
	slideshow: true	,
	animation: "slide"

	});
//banner slider ends
//jquery MAP

jQuery('#vmap').vectorMap({
    map: 'world_en',
      backgroundColor: '#ffffff',
      color: '#ededed',
      hoverColor: '#0385ad',
      hoverColors: {},
      selectedColor: '#0385ad',
      scaleColors: ['#ededed', '#ededed'],
      normalizeFunction: 'linear',
      enableZoom: false,
	  borderColor: '#ffffff',
      borderWidth: 1,
      borderOpacity: 0.25,
});

// MAP ends

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

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1) {
        jQuery('header').addClass("sticky");
        jQuery('header').css('position', 'fixed');
		jQuery('.admin-bar header').css('position', 'fixed').css('z-index', '9').css('top', 32);

	/*	jQuery('body').css('padding-top', 0);*/
    } else {
        jQuery('header').removeClass("sticky");
        jQuery('header').css('position', 'fixed').css('z-index', '19');
	/*	jQuery('body').css('padding-top', 0);*/
    }
});

var h_header = jQuery("header").height();
var h_header_logged = jQuery("header").height() + 32;
var l_pad = 0;
jQuery('.inside #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header);
jQuery('.inside .admin-bar #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header_logged);
/*jQuery('.inside body').css('padding-top', l_pad);*/
jQuery(window).scroll(function() {
	var h_top = jQuery("#banner").height() - 133;
	var h_top_logged = jQuery("#banner").height() - 165;


	var new_top = h_top ;

    if (jQuery(this).scrollTop() > new_top && screen.width > 767) {
        jQuery('#nav-2').addClass('sticky');
    }
	else if(jQuery(this).scrollTop() > h_top_logged && screen.width > 767){
		jQuery('.admin-bar #nav-2').addClass('sticky');
		}
	else if (jQuery(this).scrollTop() > 0 && screen.width > 767) {
        jQuery('#nav-2').removeClass('sticky');
    }
    if (jQuery(this).scrollTop() > 1 && screen.width > 767) {
        jQuery('.inside #nav-2').removeClass('sticky');
        jQuery('.inside #nav-2').addClass('stickyy');
        jQuery('.inside #nav-2').css('position', 'fixed').css('top',h_header);
		//jQuery('.logged-in #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_top_logged);
		jQuery('.inside .admin-bar #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header_logged);
	/*	jQuery('.inside body').css('padding-top', l_pad);*/

    } else if (jQuery(this).scrollTop() <= 0 && screen.width > 767) {
        jQuery('.inside #nav-2').removeClass('stickyy');
		jQuery('.inside #nav-2').removeClass('sticky');
        jQuery('.inside #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header);
		//jQuery('.logged-in #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_top_logged);
		jQuery('.inside .admin-bar #nav-2').css('position', 'fixed').css('z-index', '1').css('top',h_header_logged);
		/*jQuery('.inside body').css('padding-top', l_pad);*/

    }

});


jQuery(window).resize(function() {

    if (jQuery(this).scrollTop() > 0 && jQuery(this).width() <= 767 ) {
		jQuery('#nav-2').removeClass('sticky');
        jQuery('.inside #nav-2').removeClass('stickyy');
    }

});
jQuery(document).ready(function() {
    if (jQuery(this).scrollTop() > 0 && jQuery(this).width() <= 767 ) {
		jQuery('#nav-2').removeClass('sticky');
        jQuery('.inside #nav-2').removeClass('stickyy');
    }

});
// sticky nav functioning for home / inside pages ends




// accrodions for inside pages and side bar


// accrodions for member dashboard page ends

});
// window width specific
jQuery(function() {
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

jQuery(function() {
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


// select drop down
   jQuery(function () {

        var $win = jQuery(window); // or $box parent container
        var $box = jQuery(".dropcontainer");
        //  var $log = $(".log");

        $win.on("click.Bst", function (event) {
            if (
                $box.has(event.target).length == 0 //checks if descendants of $box was clicked
                    && !$box.is(event.target) && !jQuery('.trigger').is(event.target)//checks if the $box itself was clicked
                ) {
                if (jQuery(".dropcontainer ul").hasClass('dropdownvisible')) {
                    jQuery(".dropcontainer ul").removeClass('dropdownvisible');
                    jQuery(".dropcontainer ul").addClass('dropdownhidden');

                }
                if (jQuery(".dropcontainer ul").hasClass('dropdownhidden')) {
                    jQuery(".dropcontainer ul").removeClass('dropdownhhidden');
                    jQuery(".dropcontainer ul").addClass('dropdownvisible');

                }
            }
        });



    });



function test(i) {
    switch (i) {
        case 1:
            if (jQuery("#cat-dropdown ul").hasClass('dropdownhidden')) {
                jQuery("#cat-dropdown ul").removeClass('dropdownhidden');
                jQuery("#cat-dropdown ul").addClass('dropdownvisible');
            } else if (jQuery("#cat-dropdown ul").hasClass('dropdownvisible')) {
                jQuery("#cat-dropdown ul").removeClass('dropdownvisible');
                jQuery("#cat-dropdown ul").addClass('dropdownhidden');
            }
            break;
        case 2:
            if (jQuery("#arc-dropdown ul").hasClass('dropdownhidden')) {
                jQuery("#arc-dropdown ul").removeClass('dropdownhidden');
                jQuery("#arc-dropdown ul").addClass('dropdownvisible');
            } else if (jQuery("#arc-dropdown ul").hasClass('dropdownvisible')) {
                jQuery("#arc-dropdown ul").removeClass('dropdownvisible');
                jQuery("#arc-dropdown ul").addClass('dropdownhidden');
            }

            break;


    }

}
// select drop down ends

//member sidebar expand / collaps supporting functionality
jQuery(document).ready(function() {

	jQuery("li.current_page_item").parent("ul").addClass("current_ancestor_item");
	jQuery("li.current_page_item").parent("ul").parent("li").parent("ul").parent("li").siblings("li").addClass("non_current_ancestor_item");
		jQuery("li.current_page_item").parent("ul").parent("li").parent("ul").parent("li").addClass("current_ancestor_item_li");
		jQuery("ul.current_ancestor_item").parent("li").siblings("li").children("ul").css('display', 'none');
jQuery("li.current_page_item").siblings("li").children("ul").css('display', 'none');

});
//member sidebar expand / collaps supporting functionality ends



    jQuery(function(){
        setTimeout(function(){
            var shiftWindow = function() {
                var hash = "#" + location.hash.replace(/[^A-Za-z0-9_\-]/g, "");
                if (hash && jQuery(hash).offset()) {
                    var pos = jQuery(hash).offset().top - 210;
                    jQuery(window).scrollTop(pos);
                }
             };
            if (location.hash) shiftWindow();
            window.addEventListener("hashchange", shiftWindow);
        },10);
    })
