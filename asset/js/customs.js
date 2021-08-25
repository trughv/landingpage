wow = new WOW();
wow.init();
$(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("body").mousemove(function(e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 + 30;
        var newvalue2Y = height * pageY * -1 + 250;
        $('.imagemove').css({
            'left': newvalueX + 'px',
            'top': newvalueY + 'px',
        });
        $('.imagemove2').css({
            'left': newvalueX + 'px',
            'top': newvalue2Y + 'px',
        });
    });
});



var swiper = new Swiper(".investorSwiper", {
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".benefitSwiper", {
    spaceBetween: 42,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".activitySwiper", {
    spaceBetween: 42,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper1 = new Swiper(".feebackSwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= 10) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
// go link
function goToByScroll(id) {
    // Reove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        },
        'fast');
}
        
$('#survey-form').on('submit', (e) => {
    var form = new FormData();
    form.append("entry.2005620554", "TênForm");
    form.append("entry.1065046570", "Địa chỉ 123");
    form.append("entry.1166974658", "091029109");
    form.append("entry.839337160", "Note");

    var settings = {
      "url": "https://docs.google.com/forms/d/e/1FAIpQLSfWU6efhV5fMPycACfMHBt3fyDeIgVV5XkwkYazlolLCTFlRQ/formResponse",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Cookie": "NID=221=K5D-tr7TNiFKIDNoSTKcu08Fk0Kii7cQmErpsPfAa9BR8gvELPrCPfJrXwIws8DuNMeGXiyn12bHUIpw6S94synZ3iWjFDTH04yrwONEF1S4fBHRUoZT7VBi5k3azdH2Tu2RwW-R4VgOPhy2zU2Oppoyu7XGjC2-EjlUWZLTII4"
      },
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
});
        
$("#sidebar > ul > li > .ladi-link").click(function(e) {
    $(this).parents('.header').find('#sidebar > ul > li > a').removeClass('active');
    $(this).addClass('active');
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr("id"));
});

var origin = window.location.origin;
var url      = window.location.href.split('/index.html').join('');
if (origin == 'file://') {
    var images = [
    url  + '/asset/images/thanhtuu-1.png',
    url  + '/asset/images/thanhtuu-2.png',
    url  + '/asset/images/thanhtuu-3.png',
    url  + '/asset/images/thanhtuu-4.png',
    url  + '/asset/images/thanhtuu-5.png',
    url  + '/asset/images/thanhtuu-1.png',

];
}else{
    var images = [
    origin  + '/asset/images/thanhtuu-1.png',
    origin  + '/asset/images/thanhtuu-2.png',
    origin  + '/asset/images/thanhtuu-3.png',
    origin  + '/asset/images/thanhtuu-4.png',
    origin  + '/asset/images/thanhtuu-5.png',
    origin  + '/asset/images/thanhtuu-1.png',

];
}


$(function() {
    $('.investorGallery').imagesGrid({
        images: images,
        align: true,
        getViewAllText: function(imgsCount) { return '' }
    });

});

$(".back-to-top").click(function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    })
});

$('.mobi-icon').on('click', function(){
    $('.header').toggleClass('show');
    $('.overlay').toggle();
});
$('.overlay').on('click', function(){
    $('.header').removeClass('show');
    $(this).hide();
});
$('.menu ul li a').on('click', function(){
    $('.header').removeClass('show');
    $('.overlay').hide();
});
//text banner
    $(window).on("load", function(e) {
    var tlOnLoad = gsap.timeline({delay: 1});
    var onLoadTextCount = $(".anim-text-banner>.anim-text").length;
    console.log(onLoadTextCount);
    
    for( var i= 1 ; i <= onLoadTextCount ; i++ ){
        var onLoadTextWidth = ".anim-text-banner>.anim-text:nth-of-type("+i+")";
        tlOnLoad.to(onLoadTextWidth, {clip: "rect(0px, "+$(onLoadTextWidth).width()+"px, 300px, 0px)", ease: "expo.out", duration: 1}, "-=0.2");
    }
    
    // ------------
    
    var tlMainAnim = gsap.timeline({repeat: -1});
    var animTextCount = $(".anim-text-parent>.anim-text").length;

    for( var i= 1 ; i <= animTextCount ; i++ ){
        var animTextWidth = ".anim-text-parent>.anim-text:nth-of-type("+i+")";
        tlMainAnim.to(animTextWidth, {opacity: 1, duration: 0.1});
        tlMainAnim.to(animTextWidth, {clip: "rect(0px, "+$(animTextWidth).width()+"px, 300px, 0px)", ease: "expo.out", duration: 1});
        tlMainAnim.to(animTextWidth, {clip: "rect(0px, 0px, 300px, 0px)", ease: "expo.out", duration: 1}, "+=0.75");
        tlMainAnim.to(animTextWidth, {opacity: 0, duration: 0.1});
    }
    
    tlOnLoad.add(tlMainAnim, "-=0.5");
});
