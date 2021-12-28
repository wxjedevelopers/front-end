    // CAROUSEL PRINCIPAL 

    $(document).ready(function() {

        $(".owl-carousel").owlCarousel({
            items: 6,
            loop: true,
            margin: 10,
            nav: true,
            navText: ['Prev', 'Next'],
            autoplay: true,
            autoplayTimeout: 2000,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                360: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    });