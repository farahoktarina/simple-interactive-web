var main = function() {

// Event : Menu Toggle
    var isMenuOpen = false;
    $('.icon-menu').click(function(){
        // $('.icon-menu').children('span').fadeToggle();
        $('#menu').slideToggle();
        isMenuOpen = !isMenuOpen;
    });

    $(window).resize(function(){
        var size = $(window).width();
        if($(window).width()>576){
            $('#menu').show();
        }
        else{
            if(isMenuOpen){
                $('#menu').show();
            }else{
                $('#menu').hide();
            }
        }
    });

    $('#menu-about').click(function(){
        $('html,body').animate({
            scrollTop:$('#about').offset().top
        },1000);
    })

    $('#menu-home').click(function(){
        $('html, body').animate({
            scrollTop:$('#home').offset().top
        },1000);
    })

// Effects : Make slide auto next
    setInterval(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
          nextSlide = $('.slide').first();
          nextDot = $('.dot').first();
        }


        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        // currentSlide.removeClass('active-slide');
        // nextSlide.addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    },3000);

// DOM Manipulation : Make message displayed
        $('#btn-message').click(function(){
            var message = $('#box-message').val();
            $('<li>').text(message).prependTo('#list-messages');
            $('#box-message').val('');
            $('.counter').text('140');
            $('#btn-message').addClass('disabled');
            var count_message = $('#list-messages li');
            if(count_message.length > 3){
                count_message.slice(3).hide();
            }
            var col_message = $('#col-message');
            $('html, body').animate({
                scrollTop:$(col_message).offset().top
            },2000);
        });

        $('#box-message').keyup(function(){
            var messageLength = $(this).val().length;
            var characterLeft = 140 - messageLength;
            $('.counter').text(characterLeft);

            if(characterLeft < 0 || characterLeft == 140){
                $('#btn-message').addClass('disabled');
            }
            else{
                $('#btn-message').removeClass('disabled');
            }
        });
        $('#btn-message').addClass('disabled');
}

$(document).ready(main);
