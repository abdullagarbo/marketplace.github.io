/**
* 2007-2018 PrestaShop
*
* Joommasters Theme
*
*  @author    Joommasters <joommasters@gmail.com>
*  @copyright 2007-2018 Joommasters
*  @license   license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
*  @Website: http://www.joommasters.com
*/


 /*fixed menu*/
 jQuery(document).ready(function($) {
 	if($(".jms-megamenu").length) {
		$('.jms-megamenu').jmsMegaMenu({    			
			event: jmmm_event,
			duration: jmmm_duration
		});	
	}
});	

$('body').on('click', '.ajax-add-to-cart', function (event) {	
	event.preventDefault();
	var query = 'id_product=' + $(this).attr('data-id-product') + '&qty='+ $(this).attr('data-minimal-quantity') + '&token=' + $(this).attr('data-token') + '&add=1&action=update';
	var actionURL = prestashop['urls']['base_url'] +  'index.php?controller=cart';		
	$('.ajax-add-to-cart').removeClass('addtocart-selected');
	$(this).addClass('addtocart-selected');
	$(this).removeClass('checked');
	$(this).addClass('checking');
	var callerElement = $(this);
	$.post(actionURL, query, null, 'json').then(function (resp) {		
		if(jpb_addtocart == 'ajax_cartbottom');
	    prestashop.emit('updateCart', {
	        reason: {
	          idProduct: resp.id_product,
	          idProductAttribute: resp.id_product_attribute,
	          linkAction: 'add-to-cart'
	        }
	    });
		
		$(callerElement).removeClass('checking');
		$(callerElement).addClass('checked');
		window.setTimeout( function() {$(callerElement).removeClass('checked');}, 3000 );
	}).fail(function (resp) {
	    prestashop.emit('handleError', { eventType: 'addProductToCart', resp: resp });
	});
});
function view_as() { 
    var viewGrid = $(".view-grid"),
        viewList = $(".view-list"),
        productList = $(".product_list");
		viewGrid.click(function (e) {       
        productList.removeClass("products-list-in-row");
        productList.addClass("products-list-in-column");
        $(this).addClass('active');
        viewList.removeClass("active");
        e.preventDefault()
    });
    viewList.click(function (e) {       
        productList.removeClass("products-list-in-column");
        productList.addClass("products-list-in-row");
        viewGrid.removeClass("active");
        $(this).addClass('active');        
        e.preventDefault()
    })
}
jQuery(function ($) {
    "use strict";
    $(".view-grid").addClass('active');
    view_as();
});

function back_to_top() {   
    $('#back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    })
}
jQuery(function ($) {
    "use strict";
    $(window).scroll(function () {
     if ($(window).scrollTop() >= 30) {
      $("#back-to-top").stop().fadeIn(300);
     } else if ($(window).scrollTop() < $('header').outerHeight()) {
      $("#back-to-top").stop().fadeOut(300);
     }
    });
});



var initialLoad = true;
$(document).ready(function() {	
	if(initialLoad){
		setTimeout(function() {
			jQuery('.preloader').fadeOut();
		}, 3000);		
		initialLoad = false;
	}
});
/**********************HOME PAGE **************************/
$(window).load(function(){
		if($('.slider').length > 0)
		$('.slider').fractionSlider({	
			'slideTransition' : jmsslider_trans,
			'slideEndAnimation' : jmsslider_end_animate,
			'transitionIn' : jmsslider_trans_in,
			'transitionOut' : jmsslider_trans_out,
			'fullWidth' : jmsslider_full_width,
			'delay' : jmsslider_delay,
			'timeout' : jmsslider_duration,
			'speedIn' : jmsslider_speed_in,
			'speedOut' : jmsslider_speed_out,
			'easeIn' : jmsslider_ease_in,
			'easeOut' : jmsslider_ease_out,
			'controls' : jmsslider_navigation,
			'pager' : jmsslider_pagination,
			'autoChange' : jmsslider_autoplay,
			'pauseOnHover' : jmsslider_pausehover,
			'backgroundAnimation' : jmsslider_bg_animate,
			'backgroundEase' : jmsslider_bg_ease,
			'responsive' : jmsslider_responsive,
			'dimensions' : jmsslider_dimensions,
			'fullscreen' : true
		});
});


/**MASK*/
 jQuery(function($)
 {
 	"use strict";
 	$( ' .btn-menu-toggle' ).on( 'click', function (e) {
 		var mask = '<div class="mask-overlay"></div>';

 		$( 'body' ).toggleClass( 'has-vertical-menu' );
 		$(mask).hide().appendTo( 'header' ).fadeIn( 'fast' );
 		$( '.mask-overlay, .text-menu , .iconclose' ).on( 'click', function() {
 			$( 'body' ).removeClass( 'has-vertical-menu' );
 			$( '.mask-overlay' ).remove();
 		});
 	});

 });


/**fix menu***/
jQuery(function ($) {
    "use strict";
$(window).scroll(function () {
    	if ($(window).scrollTop()){
			$(".fix-menu").addClass("fixed-top");
    	} else {
			$(".fix-menu").removeClass("fixed-top");
    	}
    });
});
/*two - row*/
jQuery(document).ready(function($) {
    if($(".product-carousel-wrapper").length) {
        if( $(window).width() > 1300 ) {
            var c_height = $('.product-carousel-wrapper').outerHeight();
            var c_width = $('.product-carousel-wrapper .producttab-carousel').width();
            var c_show = c_height * 45 / 100;
            var c_hide = c_height * 35 / 100;
            var c_offset = $('.product-carousel-wrapper').offset().top;
            var sc_width = $( window ).width();
            var w_space = (sc_width - c_width) / 2;
        
            $('.product-carousel-wrapper .owl-controls > .owl-prev').css('left', (w_space - 24) );
            $('.product-carousel-wrapper .owl-controls > .owl-next').css('left', (w_space + c_width) );
            $( window ).scroll(function() {
                var scroll = $(this).scrollTop();
                if(scroll >= (c_offset - c_show) ) {
                    $('.product-carousel-wrapper').addClass('show-arrow');         
                } 
                if(scroll >= (c_offset + c_hide) ) {
                    $('.product-carousel-wrapper').removeClass('show-arrow');
                }   
               if(scroll < (c_offset - c_show) ) {
                    $('.product-carousel-wrapper').removeClass('show-arrow');
               }
            });   
        }
    }
 });



jQuery(function ($) {
	"use strict";

	if($(".customs-carousel-product").length) {		
		var customsCarouselProduct = $(".customs-carousel-product");			
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		customsCarouselProduct.owlCarousel({
			responsiveClass:true,
			responsive:{		
				1170:{
					items: 4
				},
				991:{
					items: 3
				},
				768:{
					items: 2
				},
				480:{
					items: 1
				},
				318:{
					items: 1
				}
			},
			rtl: rtl,
			margin: 30,
			nav: true,
			dots: false,
			autoplay: false,
			slideSpeed: 800,
			navText: ["<span class='nav-prev'>Prev</span>", "<span class='nav-next'>Next</span>"],
		});
	}
});
/******************* PRODUCT CAROUSEL **************************/
jQuery(function ($) {
    "use strict";
    if($(".product-carousel").length) {		
		var productCarousel = $(".product-carousel");			
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		productCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{		
				1200:{
					items: p_itemsDesktop
				},
				992:{
					items: p_itemsDesktopSmall
				},
				767:{
					items: p_itemsTablet
				},
				575:{
					items: p_itemsMobile
				},
				318:{
					items: 1
				}
			},
			rtl: rtl,
			margin: 30,
			nav: p_nav,
			dots: p_pag,
			autoplay: auto_play_carousel,
			slideSpeed: 800,
			navText: ["<span class='nav-prev'>Prev</span>", "<span class='nav-next'>Next</span>"],
		});
	}


});
/*********************PRODUCT TAB******************/
jQuery(function ($) {
    "use strict";
	if($(".producttab-carousel").length) {
		var producttabCarousel = $(".producttab-carousel");			
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		producttabCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1199:{
					items:tab_itemsDesktop
				},
				991:{
					items:tab_itemsDesktopSmall
				},
				768:{
					items:tab_itemsTablet
				},
				481:{
					items:tab_itemsMobile
				},
				361:{
					items:1
				},
				0: {
					items:1
				}
			},
			rtl: rtl,
				margin:0,
			    nav: p_nav_tab,
		        dots: p_pag_tab,
				autoplay: auto_play_tab,
				loop:true,
			    navText: ["<span class='nav-prev'>Prev</span>", "<span class='nav-next'>Next</span>"],
			    slideSpeed: 200
		});
	}

	/***********PRODUCT MEGATAB***********/

	if($(".megatab-carousel").length) {
		var magetabCarousel = $(".megatab-carousel");			
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		magetabCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1170:{
					items: megatab_itemsDesktop
				},
				991:{
					items: megatab_itemsDesktopSmall
				},
				768:{
					items: megatab_itemsTablet
				},
				480:{
					items: megatab_itemsMobile
				},
				318:{
					items: 1
				}
			},
			rtl: rtl,
			margin: 30,
		    nav: p_nav_megatab,
	        dots: p_pag_megatab,
			autoplay: auto_play_megatab,
			loop: true,
		    navText: ["<span class='nav-prev'>Prev</span>", "<span class='nav-next'>Next</span>"],
		    slideSpeed: 200
		});
	}
});
/*****************HOTDEAL***************/
jQuery(function ($) {
	"use strict";
	if($(".hotdeal-carousel").length) {
	 	var hotdealCarousel = $(".hotdeal-carousel");
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		hotdealCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1170:{
					items:h_itemsDesktop
				},
				991:{
					items:h_itemsDesktopSmall
				},
				768:{
					items:h_itemsTablet
				},
				480:{
					items:h_itemsMobile
				},
				318:{
					items:1
				}
			},
			rtl: rtl,
			margin: 30,
		    nav: false,
		    dots: false,
			autoplay:false,
		    rewindNav: false,
		    navText: ["<span class='nav-prev'>Prev</span>", "<span class='nav-next'>Next</span>"],
		    slideBy: 1,
		    slideSpeed: 200	
		});
	}
});
/*************INSTAGRAM***************/
jQuery(function ($) {
		"use strict";
	if($(".instagram-carousel").length) {
			var instagramCarousel = $(".instagram-carousel");
			var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		instagramCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1199:{
					items:9
					},
				991:{
					items:5
				},
				768:{
					items:3
				},
			
				318:{
					items:2
				}
			},
			rtl: rtl,
			margin: 10,
			nav: false,
			dots: false,
			autoplay: true,
			slideSpeed: 200,
			loop: true
		});
		}
});
$(document).ready(function() {
/* Apply fancybox to multiple items */
	$('.grouped_elements').fancybox();
});


/*************BLOG**********/
jQuery(function ($) {
	"use strict";
	if($(".blog-carousel").length) {
		var blogCarousel = $(".blog-carousel");		
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		blogCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1199:{
					items:blog_itemsDesktop
				},
				991:{
					items:blog_itemsDesktopSmall
				},
				768:{
					items:blog_itemsTablet
				},
				481:{
					items:blog_itemsMobile
				},
				0: {
					items:1
				}
			},
				rtl: rtl,
				margin:30,
				nav: p_nav_blog,
		        dots: p_pag_blog,
				autoplay:auto_play_blog,
				slideSpeed: 800,	
		});
	}
});	

/***************BRAND***************/

jQuery(function ($) {
		"use strict";
		if($(".brand-carousel").length) {
			var brandCarousel = $(".brand-carousel");		
			var rtl = false;
			if ($("body").hasClass("rtl")) rtl = true;				
			brandCarousel.owlCarousel({
				responsiveClass:true,
				responsive:{			
					1199:{
						items:brand_itemsDesktop
					},
					991:{
						items:brand_itemsDesktopSmall
					},
					768:{
						items:brand_itemsTablet
					},
					481:{
						items:brand_itemsMobile
					},
					0: {
						items:1
					}
				},
					rtl: rtl,
					margin:0,
					nav: p_nav_brand,
			        dots: p_pag_brand,
					autoplay:auto_play_brand,
					loop:true,
					slideSpeed: 800,	
			});
		}

});

/***************CONTENTCAROUSEL***************/

jQuery(function ($) {
	"use strict";
	if($(".content-carousel").length) {
		var contentCarousel = $(".content-carousel");		
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		contentCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1170:{
					items:content_itemsDesktop
				},
				991:{
					items:content_itemsDesktopSmall
				},
				768:{
					items:content_itemsTablet
				},
				480:{
					items:content_itemsMobile
				},
				318: {
					items:content_itemsMobile
				}
			},
			loop       : true,
			rtl   	   : rtl,
			margin 	   : 30,
			nav        : p_nav_content,
	        dots       : p_pag_content,
			autoplay   : auto_play_content,
			slideSpeed : 700,
			navText: ["<span class='nav-prev'>Prev</span>", "<span class='nav-next'>Next</span>"],
		});
	}
});


/***************CONTENTCAROUSEL H11***************/

jQuery(function ($) {
	"use strict";
	if($(".content-carousel11").length) {
		var contentCarousel11 = $(".content-carousel11");		
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		contentCarousel11.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1170:{
					items:content_itemsDesktop11
				},
				991:{
					items:content_itemsDesktopSmall11
				},
				768:{
					items:content_itemsTablet11
				},
				480:{
					items:content_itemsMobile11
				},
				318: {
					items:content_itemsMobile11
				}
			},
			animateOut : 'fadeOut',
			center     : true,
			items      : 2,
			loop       : true,
			rtl   	   : rtl,
			margin 	   : 30,
			nav        : p_nav_content11,
	        dots       : p_pag_content11,
			autoplay   : auto_play_content11,
			slideSpeed : 700,
			navText: ["<span class='nav-prev'>Prev</span>", "<span class='nav-next'>Next</span>"],
		});
	}
});
/***************TESTIMONIAL***************/

jQuery(function ($) {
		"use strict";
if($(".testimonial-carousel").length) {
			var testimonialCarousel = $(".testimonial-carousel");		
			var rtl = false;
			if ($("body").hasClass("rtl")) rtl = true;				
			testimonialCarousel.owlCarousel({
				responsiveClass:true,
				responsive:{			
					1199:{
						items:testi_itemsDesktop
					},
					991:{
						items:testi_itemsDesktopSmall
					},
					768:{
						items:testi_itemsTablet
					},
					481:{
						items:testi_itemsMobile
					},
					0: {
						items:1
					}
				},
					rtl: rtl,
					margin:0,
					nav: p_nav_testi,
			        dots: p_pag_testi,
					autoplay:auto_play_testi,
					slideSpeed: 800,	
			});
		}
});

//**************** CATEGORIES *********************//
jQuery(function ($) {
    "use strict";
	var categoriesCarousel = $(".categories-carousel2");		
	var rtl = false;
	if ($("body").hasClass("rtl")) rtl = true;				
	categoriesCarousel.owlCarousel({
		responsiveClass:true,
		responsive:{			
			1170:{
				items:4
			},
			991:{
				items:3
			},
			768:{
				items:2
			},
			480:{
				items:1
			},
			318: {
				items:1
			}
		},
		rtl: rtl,
			margin: 30,
			loop:true,
			nav: false,
		    dots: true,
			autoplay:false,
		    slideSpeed: 200	
	});


	if($(".banner-product-carousel").length) {
	 	var bannerproductCarousel = $(".banner-product-carousel");
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		bannerproductCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				
				1199:{
					items:bp_itemsDesktopSmall
				},
				992:{
                   items:bp_itemsDesktopSmall
				},
				768:{
					items:1
				},
				482:{
					items:2
				},
				318:{
					items:bp_itemsMobile
				}
				
			},
			rtl: rtl,
			margin: 0,
			loop:true,
			nav: bp_nav,
		    dots: bp_pag,
			autoplay:bp_play,
		    slideSpeed: 200	
		});
	}

	if($("#instant-products").length > 0) {
		$("#instant-products").loadMore({
			selector: 'div.item',
			loadBtn: '#btn',
			limit: instantshow_limit,
			load: instantshow_load,
			animate: true,
			animateIn: 'fadeIn'
		});
	}

	if($(".menu-carousel").length) {
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;	
		$('.menu-carousel').owlCarousel({
		    loop:true,
		    margin:30,
		    nav:false,
		    responsive:{
		        0:{
		            items:1
		        },
		        992:{
		            items:4
		        }
		    },
			rtl: rtl
		});
	}
});

/************ANIMATE.CSS***********/

jQuery(function () {
    "use strict";
    if ($(window).width() >= 991){
	    if($(".featured-row, .brand-row, .instagram-row, .featured-shop-column, .top-artists-row").length > 0) {
			$('.featured-row, .brand-row, .instagram-row, .featured-shop-column, .top-artists-row').viewportChecker({
			    classToAdd: 'a-visible animated zoomIn', // Class to add to the elements when they are visible
			    offset: 50,
			});
		}


		if($(".banner-left, .about-us-image").length > 0) {
			$('.banner-left, .about-us-image').viewportChecker({
			    classToAdd: 'a-visible animated fadeInLeft', // Class to add to the elements when they are visible
			    offset: 30,
			});
		}

		if($(".banner-right, .wapper-about-us-content").length > 0) {
			$('.banner-right, .wapper-about-us-content').viewportChecker({
			    classToAdd: 'a-visible animated fadeInRight', // Class to add to the elements when they are visible
			    offset: 30,
			});
		}

		if($(".popular_gift_row, .blog-row, .banner-colum-h3, .blog-column").length > 0) {
			$('.popular_gift_row, .blog-row, .banner-colum-h3, .blog-column').viewportChecker({
			    classToAdd: 'a-visible animated fadeInUp', // Class to add to the elements when they are visible
			    offset: 30,
			});
		}
		if($(".categories-row, .workshop-row").length > 0) {
			$('.categories-row, .workshop-row').viewportChecker({
			    classToAdd: 'a-visible animated fadeIn', // Class to add to the elements when they are visible
			    offset: 50,
			});
		}
	}

	$( '#vertical-button, #vertical-button-mobile' ).on( 'click', function (e) {
		e.preventDefault();

		if ($('.vertical-menu-block').hasClass('open')){
			$('.vertical-menu-block').removeClass('open');
		} else{
			$('.vertical-menu-block').addClass('open');
		}
	});

	/**************OPEN MENU SIDE V4*************/

	$('#mega-menu-button').on('click', function (e) {
		var $this = $(this);
		$this.toggleClass('open');
		e.preventDefault();
		$('.menu-fixed').toggleClass('open');
		$('body').toggleClass('open-menu-fixed');
		if($(".sidebar-fixed").length > 0) {
			$('.sidebar-fixed').toggleClass('open-sidebar-fixed');
		}
	});
	$('#close-menu-button, #close-button').on('click', function (e) {
		$('body').removeClass('open-menu-fixed');
		$('.menu-fixed').removeClass('open');
		if($("body").hasClass('show-menu') ) {
			$('body').removeClass('show-menu');
		}
		$('#mega-menu-button').removeClass('open');
		if($(".sidebar-fixed").length > 0) {
			$('.sidebar-fixed').removeClass('open-sidebar-fixed');
		}
	});

	/**********END MENU SIDE V4*********/

	$( window ).resize(function() {
		if ($(window).width() >= 1200) {
			var outerHeight = $('.slider-row').height();
			if($("body").hasClass('has-header-fixed') ) {
				setTimeout(function() {
					$('.header-fixed').css("height", outerHeight);
				}, 500);
			}
		}
	});

	//if ($(window).width() >= 1200) {
	//	if($("body:not(.home-3)").hasClass('has-header-fixed') ) {
	//		setTimeout(function() {
	//			var outerHeight = $('.slider-row').height();		
	//			$('.header-fixed').css("height", outerHeight);
	//		}, 500);
	//	}
	//}


	/**********HOME 3**********/

	if ($(window).width() >= 1200) {
		if($("body").hasClass('home-3') ) {
			var outerHeight = $('.slider-row').height();
			var heightslider = 900;

			if ($(window).width() >= 1800) {
				heightslider = 890;
			} else if ($(window).width() >= 1600) {
				heightslider = 713;
			} else if ($(window).width() >= 1366) {
				heightslider = 576;
			} else if ($(window).width() >= 1200) {
				heightslider = 526;
			}

			if (outerHeight <= 400 ){
				$('.header-fixed').height(heightslider);
			} else {
				$('.header-fixed').css("height", outerHeight);
			}		
		}
	}

	/*********HOME 12*******/

	$( window ).resize(function() {
		if ($(window).width() >= 1200) {
			var outerHeight = $('.slider-row').height();
			if($("body").hasClass('home-12') ) {
				setTimeout(function() {
					$('.header-12').css("height", outerHeight);
				}, 1500);
			}
		}
	});

	if ($(window).width() >= 1200) {
		if($("body").hasClass('home-12') ) {
			var outerHeight = $('.slider-row').height();
			var heightslider = 891;

			if ($(window).width() >= 1800) {
				heightslider = 891;
			} else if ($(window).width() >= 1600) {
				heightslider = 725;
			} else if ($(window).width() >= 1366) {
				heightslider = 597;
			} else if ($(window).width() >= 1200) {
				heightslider = 506;
			}

			if (outerHeight <= 400 ){
				$('.header-12').height(heightslider);
			} else {
				$('.header-12').css("height", outerHeight);
			}		
		}
	}



	/***********HOME 4*********/

	$( window ).resize(function() {
		if($("body").hasClass('home-4') ) {
			setTimeout(function() {
				var outerHeight = $('.wrapper-center .addon-box .jms-slider-wrapper').height() + 40;		
				$('.wrapper-left, .wrapper-right').css("height", outerHeight);
			}, 500);
		}
	});


	if ($(window).width() >= 992) {
		if($("body").hasClass('home-4') ) {
			var outerHeight = $('.wrapper-center .addon-box .jms-slider-wrapper').height() + 40;
			var heightWrapper = 658;

			if ($(window).width() >= 1800) {
				heightWrapper = 658;
			} else if ($(window).width() >= 1700) {
				heightWrapper = 584;
			} else if ($(window).width() >= 1600) {
				heightWrapper = 694;
			} else if ($(window).width() >= 1366) {
				heightWrapper = 585;
			} else if ($(window).width() >= 1200) {
				heightWrapper = 500;
			} else if ($(window).width() >= 992) {
				heightWrapper = 440;
			}

			if (outerHeight <= 440 ){
				$('.wrapper-left, .wrapper-right').height(heightWrapper);
			} else {
				$('.wrapper-left, .wrapper-right').css("height", outerHeight);
			}		
		}
	}

	/***********HOME 5*********/

	if ($(window).width() >= 1200) {
		if($("body").hasClass('home-5') ) {
			var outerHeight = $('.slider-row').height();
			var heightslider = 800;

			if ($(window).width() >= 1800) {
				heightslider = 800;
			} else if ($(window).width() >= 1600) {
				heightslider = 645;
			} else if ($(window).width() >= 1366) {
				heightslider = 524;
			} else if ($(window).width() >= 1200) {
				heightslider = 438;
			}

			if (outerHeight <= 400 ){
				$('.header-fixed').height(heightslider);
			} else {
				$('.header-fixed').css("height", outerHeight);
			}		
		}
	}

	/*********MENU SIDE VER 2**********/

	$('.material-icons').on('click', function(event) {
	    event.preventDefault();
	    $('.category-top-menu').addClass('menu-close');
	    $('.title-back').on('click', function(e){
	    	if($('.collapse').hasClass('in')){
	    		$('.collapse').removeClass('in');
	    	}
	    	$('.category-top-menu').removeClass('menu-close');
	    });
	});


	if($("#category-mansory .subcategories-block").length > 0) {
		var $grid = $('#category-mansory .subcategories-block').imagesLoaded( function() {
		  // init Masonry after all images have loaded
		  $grid.masonry({
		    itemSelector: '#category-mansory .subcategories-item',
			columnWidth: '#category-mansory .subcategories-item',
			percentPosition: true
		  });
		});
	}


}); 

$(window).load(function () {     
    back_to_top(); 
});