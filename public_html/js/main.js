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


    //Animations 
    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
        animateHeader();
    });


    //Team section - slider
    if ($('.team-slider').length > 0) {
        $('.team-slider').owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            loop: true,
            mouseDrag: true,
            lazyLoad: true
        });
    }

    // form validating
    if ($('.contact-form').length > 0) {

        //FORM VALIDATION
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true
                    },
                    message: {
                        required: true
                    }


                },
                messages: {

                    name: {
                        required: 'The Name* is required field.'
                    },
                    email: {
                        required: 'The Email* is required field.',
                        email: 'Please provide a valid Email address.'
                    },
                    subject: {
                        required: 'The Subject* is required field.'
                    },
                    message: {
                        required: 'The Message* is required field.'
                    }



                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }



});

