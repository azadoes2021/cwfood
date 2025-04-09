/* 프로덕트 스와이퍼 */

  const productSwiper = new Swiper('.product_swiper', {
   // Optional parameters
  autoplay: {
  delay: 5000,
  },
  speed: 1500,
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
    768: {
      slidesPerView: 1,      
    },
    1024: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 1,
     }
  }
 });
  
  /* SNS 스와이퍼 */
  const snsSwiper = new Swiper('.sns_swiper', {
   // Optional parameters
  autoplay: {
  delay: 5000,
  },
  speed: 1500,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },  
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 5,
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
  
  /* 스크롤시 헤더 생김 */
  window.addEventListener('scroll', function() {
    if(window.scrollY > 900){
      header.classList.add('header_on')
    }else{
      header.classList.remove('header_on')
    }    
      //console.log(window.scrollY);
    });

    /* ETC 기타제품 탭 및 콘텐츠박스 활성화 */
    const tabs = document.querySelectorAll('.tabs li');
    const contboxes = document.querySelectorAll('.contbox');
    
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
    
        // 탭 활성화 (active 클래스 추가/제거)
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    
        // 콘텐츠 박스 활성화
        contboxes.forEach(box => box.classList.remove('contboxon'));
        contboxes[index].classList.add('contboxon');
      });
    });
    
    // 초기 활성화 (선택 사항 - 첫 번째 탭과 콘텐츠를 보여줌)
    if (tabs.length > 0 && contboxes.length > 0) {
      tabs[0].classList.add('active');
      contboxes[0].classList.add('contboxon');
    }


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




//02. ESG 경영 애니메이션
const ani2 = gsap.timeline();

ani2
  .from('.card01', {x: -150, autoAlpha: 0},1)
  .from('.card02', {x: -150, autoAlpha: 0},2)
  .from('.card03', {x: -150, autoAlpha: 0},3)

ScrollTrigger.create({
  animation: ani2,
  trigger: '.esg',
  pin: true,
  scrub: 3,
  // markers: true,
})


