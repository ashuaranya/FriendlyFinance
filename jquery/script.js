jQuery(document).ready(function() {
    jQuery('.navbar-header').click(function() {
		jQuery('#myNavbar').slideToggle('slow');
	});
	jQuery('.navbar-nav a').each(function() {
        if((window.location.pathname.indexOf(jQuery(this).attr('href'))) > -1) {
            jQuery(this).addClass('active');
            return false; // once you find one that matches, stop looking!
        }
    });
	jQuery('.termin-button').insertAfter( ".baufina-list-content" );
});