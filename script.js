const dropdowns=document.querySelectorAll('.divider');

dropdowns.forEach(dropdown=>{
  const dropdownItem=dropdown.querySelector('.dropdown__items');
  dropdown.addEventListener('click',()=>{
    if(dropdownItem.classList.contains('toggle')){
      dropdownItem.classList.remove('toggle')
    }else{
      dropdownItem.classList.add('toggle')
    }
  });
 });
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu.addEventListener('click',()=>{
  nav.classList.toggle('show')
  menu.classList.toggle('active')
})

const swiperSlides=document.querySelectorAll('.swiper__slide');
console.log(swiperSlides)

//buttons
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');

  let counter=0;
 function showSlide(index){
  swiperSlides.forEach((swiperSlide,i)=>{
    swiperSlide.classList.toggle('active',i===index)
  })
}
next.addEventListener('click',()=>{
  counter = (counter+1)%swiperSlides.length;
  showSlide(counter);
})
prev.addEventListener('click',()=>{
  counter = (counter-1+swiperSlides.length)%swiperSlides.length;
  showSlide(counter);
});

showSlide(counter);

var swiper = new Swiper(".mySwiper", {
  zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints :{
    1000:{
      slidesPerView:3,
      spaceBetween:20,
    },
    770:{
      slidesPerView:2,
      spaceBetween:40,
    }
  }
});



 
