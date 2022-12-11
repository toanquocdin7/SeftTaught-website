$(document).ready (
    function () {
        //sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky')
                }
            }, {
                offset: '750px'
            }
        )
        //Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
        });

        //mobile nav
        $('.mobile-icon').click(
            function(){
                $('.main-nav').slideToggle(200);

                if($('.mobile-icon').hasClass('fa-bars')){
                    $('.mobile-icon').addClass('fa-times')
                    $('.mobile-icon').removeClass('fa-bars')
                } else {
                    $('.mobile-icon').addClass('fa-bars')
                    $('.mobile-icon').removeClass('fa-times')
                }
            }
        )
    }
)