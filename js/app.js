(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    $(document).ready((function() {
        const handleActiveTab = (tabs, event, className) => {
            tabs.forEach((tab => {
                tab.classList.remove(className);
            }));
            if (!event.target.classList.contains(className)) event.target.classList.add(className);
        };
        const destinationTabs = document.querySelector(".destination-type__nav");
        const destinationButtons = document.querySelectorAll(".destination-type__btn");
        const offerTabs = document.querySelector(".trip-type__nav");
        const offerButtons = document.querySelectorAll(".trip-type__btn");
        destinationTabs.addEventListener("click", (event => {
            const root = document.documentElement;
            const targetTranslateValue = event.target.dataset.translateValue;
            if (event.target.classList.contains("destination-type__btn")) {
                root.style.setProperty("--translate-destination-filters-slider", targetTranslateValue);
                handleActiveTab(destinationButtons, event, "description__btn-active");
            }
        }));
        offerTabs.addEventListener("click", (event => {
            const root = document.documentElement;
            const targetTranslateValue = event.target.dataset.translateValue;
            if (event.target.classList.contains("trip-type__btn")) {
                root.style.setProperty("--translate-offers-filters-slider", targetTranslateValue);
                handleActiveTab(offerButtons, event, "trip__btn-active");
            }
        }));
    }));
    $((function() {
        let tripFilter = $("[data-filter-trip]");
        let destinationFilter = $("[data-filter-destination]");
        destinationFilter.on("click", (function(event) {
            event.preventDefault();
            let cat = $(this).data("filter-destination");
            $("[data-cat]").each((function() {
                let workCat = $(this).data("cat");
                if (workCat != cat) $(this).addClass("hide"); else $(this).removeClass("hide");
            }));
        }));
        tripFilter.on("click", (function(event) {
            event.preventDefault();
            let cat = $(this).data("filter-trip");
            $("[data-type]").each((function() {
                let workType = $(this).data("type");
                if (workType != cat) $(this).addClass("hide"); else $(this).removeClass("hide");
            }));
        }));
    }));
    $(document).ready((function() {
        $(".slider__wrapper").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 300,
            infinite: true,
            autoplaySpeed: 5e3,
            autoplay: true,
            prevArrow: '<button class="slide-arrow prev-arrow btn"><svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1429 1.28564L2.85715 11.5714L13.1429 21.8571"  stroke- width="3"/></svg></button>',
            nextArrow: '<button class="slide-arrow next-arrow btn"><svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.85714 1.28564L12.1429 11.5714L1.85714 21.8571"  stroke- width="3"/></svg></button>',
            appendArrows: $(".slider__buttons"),
            responsive: [ {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            } ]
        });
    }));
    $(document).ready((function() {
        $(".menu__wrapper").on("click", "a", (function(event) {
            event.preventDefault();
            var id = $(this).attr("href"), top = $(id).offset().top;
            $("body,html").animate({
                scrollTop: top
            }, 1e3);
        }));
    }));
    $(document).ready((function() {
        $(".menu__body").on("click", ".menu__item", (function() {
            document.documentElement.classList.remove("menu-open");
            document.documentElement.classList.remove("lock");
        }));
    }));
    window["FLS"] = true;
    isWebp();
    menuInit();
})();