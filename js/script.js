$(function () {
    $('.j-btn-modal').click(function () {
        $('.j-modal').modal('show');
    });
});
$(function () {
    $('.j-btn-modal-1').click(function () {
        $('.j-modal-1').modal('show');
    });
});
$(function () {
    $('.j-btn-modal-2').click(function () {
        $('.j-modal-2').modal('show');
    });
});
$(function () {
    $('.j-btn-modal-3').click(function () {
        $('.j-modal-3').modal('show');
    });
});

//MASCARA DE CAMPOS

$(document).ready(function () {
    $('.date').mask('11/11/1111');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-00009');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
});

$(function () {
    $('.main-header a').click(function () {
//        $('.main-header a').removeClass('a_ativo');
//        var linkAtivo = $('.main-header a[href="' + $(this).attr('href') + '"]');
//        $(linkAtivo).addClass('a_ativo');

        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.main-header').outerHeight()}, 1000);

        return false;

    });
});


//SUSPENDER MENU
$(window).scroll(function () {
    if ($(this).scrollTop() > $('.main-header').outerHeight() + 150) {
        $('body').css('padding-top', $('.main-header').outerHeight());
        $('.main-header').addClass('main-header-fixed');
        $('.j-back').fadeIn(500);
    } else {
        $('body').css('padding-top', '0');
        $('.main-header').removeClass('main-header-fixed');
        $('.j-back').fadeOut(500);
    }


});

//BACK TOPO
$('.j-back').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
});

$(document).ready(function () {

    /* ao clicar na div com id="box" executa a função */
    $("#box").click(function () {

        /* a função muda o background da div com id="box" */
        $("#box").css("background", "#f00");

    });

});


//Scroollnice
$(document).ready(function () {
    $("html").niceScroll({
         mousescrollstep: 40,
         cursorwidth: "10px"
    });
});