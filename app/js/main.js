$(function(){

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.218 1L1 9l8.218 8"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.782 17L9 9 .782 1"/></svg></button>',
        infinite: false,
    });

    // $('.questions__item-title').on('click', function(){
    //     $('.questions__item').removeClass('questions__item-active');
    //     $(this).parent().addClass('questions__item-active');
    // });

    // $('#fullpage').fullpage({
    //     autoScrolling: true,
    //     scrollHorizontally: true,
    //     sectionSelector: '.page-section',
    //     scrollOverflow: true,
    //     menu:'#header__nav',
    //     anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
    // });

    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__list-link').on('click', function(){
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

});



//==================== SECTION ACCORDION EFFECT CHAPTER ================================

const questions__items = document.querySelectorAll('.questions__item');

questions__items.forEach( (item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
});




//==================== SECTION FLASHING EFFECT CHAPTER ================================

const cards = document.querySelectorAll(".appearing_section")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show_appearing', entry.isIntersecting)
        })
    },
    {
        threshold: 0.3,
    }
)

cards.forEach(card => {
    observer.observe(card)
})

//=======================================================================================


//========================= SECTION SLIDER OF BENEFITS EFFECT =======================================


let nextDom = document.getElementById('benefits__next');
let prevDom = document.getElementById('benefits__prev');
let corouselDom = document.querySelector('.benefits__carousel');
let listItemDom = document.querySelector('.benefits__carousel__list');
let thumbnailDom = document.querySelector('.benefits__thumbnail');

nextDom.onclick = function(){
    showSlider('benefits__next');
}
prevDom.onclick = function(){
    showSlider('benefits__prev');
}

let timeRunning = 1000;
let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.benefits__carousel__item');
    let itemThumbnail = document.querySelectorAll('.benefits__thumbnail__item');

    if(type === 'benefits__next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        corouselDom.classList.add('benefits__carousel__next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        corouselDom.classList.add('benefits__carousel__prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        corouselDom.classList.remove('benefits__carousel__next');
        corouselDom.classList.remove('benefits__carousel__prev');
    }, timeRunning)
}










