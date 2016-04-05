//touch carousel
$(document).ready(function() {
    $("#block-six-carousel").swiperight(function() {
        $("#block-six-carousel").carousel('prev');
    });
    $("#block-six-carousel").swipeleft(function() {
        $("#block-six-carousel").carousel('next');
    });
});

//smooth scroll
$(document).ready(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//hamburger animation
$(document).ready(function() {
    document.querySelector(".navbar-toggle").addEventListener("click", function () {
        document.querySelector("#nav-toggle").classList.toggle("active");
    });
});