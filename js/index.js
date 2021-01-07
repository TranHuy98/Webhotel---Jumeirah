//drop menu header
$(document).ready(function(){
	$('.header li .title').mouseenter(function(){
		$(this).parent().find('.drop-menu').css('animation-name','dropShow');
	});
	$('.header li .title').mouseleave(function(){
		$(this).parent().find('.drop-menu').css('animation-name','dropHide');
	});
})


//header scroll fixed
$(document).ready(function(){
  $(window).scroll(function(){
    var pos = $('html,body').scrollTop();
    if(pos>135){
      $('.header').addClass('fixed-header');
    }
    else{
      $('.header').removeClass('fixed-header');
    }
  });
});


//list guest slide
$(document).ready(function(){
	$('.list-guest').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  });
})

//switch info-tab
$(document).ready(function(){
	$('.guest-item .item-bg').mouseenter(function(){
		$(this).parent().find('.detail').css('animation-name','detailHide');
		$(this).parent().find('.hidden-detail').css('animation-name','hiddenDetailShow');
	});
	$('.guest-item .item-bg').mouseleave(function(){
		$(this).parent().find('.detail').css('animation-name','detailShow');
		$(this).parent().find('.hidden-detail').css('animation-name','hiddenDetailHide');
	});
})

//read more icon animation
$(document).ready(function(){
	$('.hidden-detail .info .more a').mouseenter(function(){
		$(this).find('i').css('animation-name','readMoreMouseIn');
	});
	$('.hidden-detail .info .more a').mouseleave(function(){
		$(this).find('i').css('animation-name','readMoreMouseOut');
	});
})


//review slide
$(document).ready(function(){
	$('.review-slide').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
})









// resheader button animation
$(document).ready(function(){
  $('#box1').click(function(){
    $('#box3').css('display','none');
    $('#box1').css('display','none');
    $('#box2').css('display','block');
    $('.resHeader').slideUp(500);
  });
});
$(document).ready(function(){
  $('#box2').click(function(){
    $('#box3').css('display','none');
    $('#box2').css('display','none'); 
    $('#box1').css('display','block');
    $('.resHeader').slideDown(500);
  });
});
$(document).ready(function(){
  $('#box3').click(function(){
    $('#box3').css('display','none');
    $('#box2').css('display','none'); 
    $('#box1').css('display','block');
    $('.resHeader').slideDown(500);
  });
});


//grand child menu of res menu
$(document).ready(function(){
  $('.pre-hid-child').click(function(){
    $(this).parent().find('.grandchild-menu').slideToggle(500);
  });
});

$(document).ready(function(){
  $('.pre-hid-child').click(function(){
    $(this).parent().find('.grand-child-menu').slideToggle(500);
  });
});

//toggle each item of res menu
$(document).ready(function(){
  $('.pre-hid').click(function(){
    $('.each').slideUp(300);
    if($(this).parent().find('.child-menu').css('display') == 'none'){
      $(this).parent().find('.child-menu').slideDown(300);
    }
    else{
      $(this).parent().find('.child-menu').slideUp(300);
    }
  });
});