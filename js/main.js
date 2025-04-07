/* 프로덕트 스와이퍼 */

const productSwiper = new Swiper('.product_swiper', {
   // Optional parameters
   loop: true,
   centeredSlides: true,
   
   pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   breakpoints: {
     // when window width is >= 320px
     768: {
       slidesPerView: 1,
       spaceBetween: 30
     },
     // when window width is >= 480px
     1024: {
       slidesPerView: 1,
      //  spaceBetween: 40
     },
     // when window width is >= 640px
     1280: {
       slidesPerView: 1,
      //  spaceBetween: 50
     }
   }
 });
  
  
  const snsSwiper = new Swiper('.sns_swiper', {
   // Optional parameters
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      // spaceBetween: 30
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      // spaceBetween: 40
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 5,
      // spaceBetween: 50
    }
  }
});
  /* 헤더 스타일 변경 */
  const header = document.querySelector('header')
  const gnbDep1 = document.querySelectorAll('#gnb .dep1')

  gnbDep1.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      header.classList.add('scroll')
    })
    item.addEventListener('mouseout', function() {
      header.classList.remove('scroll')
    })

  });
  
  window.addEventListener('scroll', function() {
    if(window.scrollY > 900){
      header.classList.add('header_on')
    }else{
      header.classList.remove('header_on')
    }
    
      //console.log(window.scrollY);
    });


  const langBtn = document.querySelector('.lang_wrap button')
  const langList = document.querySelector('.lang_wrap ul')
  const langIco = document.querySelector('.lang_wrap button span')
  
  langBtn.addEventListener('click', function() {
    langList.classList.toggle('active')
    langIco.classList.toggle('active')
  })

  const allmenuOpenBtn = document.querySelector('.allmenu_open_btn');
  const allmenuCloseBtn = document.querySelector('.allmenu_close_btn');
  const allmenu = document.querySelector('.allmenu_popup');
    allmenu.style.display = 'none'
  allmenuOpenBtn.addEventListener('click', function() {
    allmenu.style.display = 'flex'
  });
  allmenuCloseBtn.addEventListener('click', function() {
    allmenu.style.display = 'none'
  });




//02.
const ani2 = gsap.timeline();

ani2
  .from('.card01', {x: 0, autoAlpha: 0},1)
  .from('.card02', {x: 0, autoAlpha: 0},1)
  .from('.card03', {x: 0, autoAlpha: 0},1)

ScrollTrigger.create({
  animation: ani2,
  trigger: '.esg',
  pin: true,scrub: true,
  markers: true,
})


