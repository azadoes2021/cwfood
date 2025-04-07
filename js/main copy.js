/* 프로덕트 스와이퍼 */

const productSwiper = new Swiper('.product_swiper', {
  // autoplay: true, //자동실행
  // autoplay : {
  //   delay: 2000,    //다음 애니메이션 시작시간과의 간격
  // },
  speed:2000, //애니메이션 지속시간

  
  slidePerView: 4,


  /* 전체적인 슬라이드의 왼쪽에 20px 공백을 준다. */
	// slidesOffsetBefore: 200,
  /* 전체적인 슬라이드의 오른쪽에 20px 공백을 준다. */
  // slidesOffsetAfter: 200,
  // sliderPerGroup: 3,
  // centerSlide: "true",
  }); 
