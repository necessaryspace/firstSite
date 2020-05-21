$(document).ready(function(){
 $('.about__slider').slick({
   arrows:true,
   slidesToShow:4,
   speed:1000,
   responsive:[{
      breakpoint: 768,
      settings: {
        slidesToShow:1
      }
    }
    ,{
      breakpoint: 1024,
      settings: {
        slidesToShow:3
      }
    }
  ]
 });
  $('.clients__slider').slick({
    arrows:false,
    dots:true,
    slidesToShow:1,
});
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

let tabs__block = function(){
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tabs__block'),
        tabName;
    tabNav.forEach(item => {
      item.addEventListener('click',selectTabNav)
    })
    function selectTabNav() {
       tabNav.forEach(item => {
         item.classList.remove('is-active');
       });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') :
        item.classList.remove('is-active');
      });
    }
};
tabs__block();





  //  dots:true,
  //  easing:'linear',
  //  autoplay:true,
  //  autoplaySpeed:500,
  //  infinite:true,
  //  initialSlide:3,
  //  slidesToScroll:1,
  //  adaptiveHeight:true
  // pauseOnFocus:true,
  // pauseOnHover:true,
  // pauseOnDotHover:true,
  // draggable:false,
  // swipe:true,
  // touchThreshold:2
  // touchMove:false
  // waitForAnimate:false
  // centerMode:true
  // variebleWidth:true
  // rows:1
  // slidesPerRow:1
  // vertical:true
  // mobieleFirst:true