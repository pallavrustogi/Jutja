$(function () {
    $(document).scrollTop(0);

    $(window).scroll(function(){
    // global scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }        
    });
    
    // scroll nav
    $('.scroller').click(function(){
    	var section = $($(this).data("section"));
    	var top = section.offset().top-82;
        $("html, body").animate({ scrollTop: top }, 700);
        return false;
    });

	    	    
    // For the purpose of the demo this allows you to toggle the background between video and img
    $('.toggle_video').click(function(){
	    
	   $('#big-video-wrap').fadeToggle();
	   return false; 
	    
    });
    
	// BigVideo Setup
    var BV = new $.BigVideo({useFlashForFirefox:false});
	BV.init();
    //if (Modernizr.touch) {
    	// fallback image for mobile devices
        BV.show('assets/img/try1.jpg');
    //} else {
    //    BV.show('assets/img/bg2.jpg',
    //    {ambient:true, doLoop:true, altSource:'assets/video/frontier.ogv'});
    //}   
    
            
});