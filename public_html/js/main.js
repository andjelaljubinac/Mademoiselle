$(document).ready(function () {

    //Lead section - check header height
    function checkHeaderHeight() {
        //take Height with padding
        let headerHeight = $('header').innerHeight();
        //set header height as main's margin top 
        $('main').css('margin-top', headerHeight);
    }

    //call function
    checkHeaderHeight();
    $(window).resize(function () {
        checkHeaderHeight();
    });



});

