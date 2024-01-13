$(function(){

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.218 1L1 9l8.218 8"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.782 17L9 9 .782 1"/></svg></button>',
        infinite: false,
    });

    $('.questions__item-title').on('click', function(){
        $('.questions__item').removeClass('questions__item-active');
        $(this).parent().addClass('questions__item-active');
    });

    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        menu:'#header__nav',
        anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
    });

    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__list-link').on('click', function(){
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

});





