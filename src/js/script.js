$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 1100,
        arrows: true,
        prevArrow: '<button type="button" class="slick slick-prev"><img src="icons/section_4/prev_button.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick slick-next"><img src="icons/section_4/next_button.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: false,
                arrows: false
              }
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                centerMode: true,
                // width: 100%,
                slidesToShow: 1,
                centerPadding: '0px'
              }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this)
        .index()).addClass('catalog__content_active');
    });

    function toggleCard(item) {
      $(item).each(function(i){
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }

    toggleCard('.catalog-item__link');
    toggleCard('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.modal, .overlay').fadeOut('slow');
    });

    document.addEventListener('keydown', function(e) {
      if (e.key == 'Escape') {
        $('.modal, .overlay').fadeOut('slow');
      }
    });

    document.addEventListener('click', function(e) {
      if ( e.target.className == 'overlay') {
        console.log(e.target);
        $('.modal, .overlay').fadeOut('slow');
      }
    });

    // $('.overlay && !.modal').on('click', function() {
    //   $('.modal, .overlay').fadeOut();
    // });

    // $('.button_mini').on('click', function() {
    //   $('.overlay, #order').fadeIn();
    // });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      });
    });
});
  