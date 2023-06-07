//Type tabs move bg
$(document).ready(function () {

   const handleActiveTab = (tabs, event, className) => {
      tabs.forEach((tab) => {
         tab.classList.remove(className);
      });

      if (!event.target.classList.contains(className)) {
         event.target.classList.add(className);
      }
   };

   const destinationTabs = document.querySelector(".destination-type__nav");
   const destinationButtons = document.querySelectorAll(".destination-type__btn");
   const offerTabs = document.querySelector(".trip-type__nav");
   const offerButtons = document.querySelectorAll(".trip-type__btn");

   destinationTabs.addEventListener("click", (event) => {
      const root = document.documentElement;
      const targetTranslateValue = event.target.dataset.translateValue;

      if (event.target.classList.contains("destination-type__btn")) {
         root.style.setProperty("--translate-destination-filters-slider", targetTranslateValue);
         handleActiveTab(destinationButtons, event, "description__btn-active");
      }
   });
   offerTabs.addEventListener("click", (event) => {
      const root = document.documentElement;
      const targetTranslateValue = event.target.dataset.translateValue;

      if (event.target.classList.contains("trip-type__btn")) {
         root.style.setProperty("--translate-offers-filters-slider", targetTranslateValue);
         handleActiveTab(offerButtons, event, "trip__btn-active");
      }
   });
});

//Filter function
$(function () {
   let tripFilter = $("[data-filter-trip]");
   let destinationFilter = $("[data-filter-destination]");

   destinationFilter.on("click", function (event) {
      event.preventDefault();

      let cat = $(this).data('filter-destination');

      $("[data-cat]").each(function () {
         let workCat = $(this).data('cat');

         if (workCat != cat) {
            $(this).addClass('hide');
         }
         else {
            $(this).removeClass('hide');
         }
      });

   });

   tripFilter.on("click", function (event) {
      event.preventDefault();

      let cat = $(this).data('filter-trip');

      $("[data-type]").each(function () {
         let workType = $(this).data('type');

         if (workType != cat) {
            $(this).addClass('hide');
         }
         else {
            $(this).removeClass('hide');
         }
      });

   });

});

//Slick slider setup
$(document).ready(function () {
   $('.slider__wrapper').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      prevArrow: '<button class="slide-arrow prev-arrow btn"><svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1429 1.28564L2.85715 11.5714L13.1429 21.8571"  stroke- width="3"/></svg></button>',
      nextArrow: '<button class="slide-arrow next-arrow btn"><svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.85714 1.28564L12.1429 11.5714L1.85714 21.8571"  stroke- width="3"/></svg></button>',
      appendArrows: $('.slider__buttons'),
      responsive: [
         {
            breakpoint: 1240,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });
});

//Scroll to
$(document).ready(function () {
   $(".menu__wrapper").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1000);
   });
})

//
$(document).ready(function () {
   $(".menu__body").on("click", ".menu__item", function () {
      document.documentElement.classList.remove("menu-open");
      document.documentElement.classList.remove("lock");
   });
});