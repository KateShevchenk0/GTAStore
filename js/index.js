const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("move");
    menu.classList.toggle("active");
    notification.classList.remove("active");
};

const notification = document.querySelector(".notification");
const notIcon = document.querySelector("#notication-icon");

notIcon.onclick = () => {
    notification.classList.toggle("active");
};




var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}


// //scroll 
(function(){

  const smoothScroll = function(targetEl, duration){
      const headerElHeight = document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;

      const ease = function(t,b,c,d){
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 *(t *(t - 2 ) - 1 ) + b;  
      };

     const animation = function(currentTime){
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0,run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
  };

  const scrollTo = function(){
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each =>{
          each.addEventListener('click', function (){
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());