jQuery(document).ready(function($) {
	// Facebook wall
    var $container = $('#cff');
// init
$container.isotope({
  // options

  itemSelector: '.cff-item',
    masonry: {
    columnWidth: 40
      //  gutter: 10
  }
});
    $(".refresh").click(function () {
        $container.isotope('layout');
    });
    $(".refresh a").click(function (event) {
        event.preventDefault();
    });
    //$(".pl-full").hide();
    $(".pl-full a:has(img)").each(function() { $(this).replaceWith($(this).children()); });
    //$(".pl-full:has(img)").each(function() { $(this).replaceWith($(this).children()); });
    // $('.cff-item').first().each(function() { $(this).replaceWith($(this).children()); });
    // $('#cff').first().each(function() { $(this).replaceWith($(this).children()); });
    // $('.cff-wrapper').first().each(function() { $(this).replaceWith($(this).children()); });

    //$(".pl-full img").addClass("fb-image");
    //$("#cff has(img)").each(function() { $(this).replaceWith($(this).children()); });
    //$(".pl-full div#cff:has(img)").each(function() { $(this).replaceWith($(this).children()); });

    //$(".pl-full").removeClass();
    //$('#cff').first().removeAttr('id');
    //$('.cff-item').first().removeClass();
    //$(".pl-full #cff").attr("id","newId");
    //  $(".pl-full").closest( "#cff" ).removeAttr('id');
    //  $(".pl-full img").unwrap();
    $('.poster-inner').hide();
    $('.poster-inner-left').hide();
    $('#navigation').addClass('animated fadeIn');
    $('.poster').addClass('animated bounceInDown');
    $('.poster').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
    function doSomething() {
      $('.poster-inner-left').show();
      $('.poster-inner').show();
      $('.poster-inner').addClass('animated bounceInUp');
      $('.poster-inner-left').addClass('animated bounceInUp');
    }
});
