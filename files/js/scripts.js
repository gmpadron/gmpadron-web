// developed by = gmpadron https://github.com/gmpadron

"use strict";

var general = {
  // Theme Page (Dark, Light)
  themePagina: function () {
    setTimeout(function () {
      const body = $("body");
      const themePage = localStorage.getItem("themePageKey");

      if (themePage === null || themePage === "Light") {
        body.addClass("themePageLight");
      } else if (themePage === "Dark") {
        body.addClass("themePageDark");
      } else {
        console.log("error body theme page");
      }

      $(".themePageModo").click(function () {
        const newTheme = themePage === "Light" ? "Dark" : "Light";
        body.removeClass(`themePage${themePage}`).addClass(`themePage${newTheme}`);
        localStorage.setItem("themePageKey", newTheme);
      });

    }, 500);
  },

  languagesHeaderClick: function () {
    // menu mobile of the page
    function toggleLanguagesOption() {
      $(".languages-option").toggleClass("languages-option-on");
    }

    $(".languagesModo").click(toggleLanguagesOption);
    $(".content-menu, .x-languages-option").click(function () {
      $(".languages-option").removeClass("languages-option-on");
    });
  },

  headerMob: function () {
    // menu mobile of the page
    function toggleMobileMenu() {
      $("header").toggleClass("menu-mob-on");
    }

    $(".content-menu, header nav ul .li-menu").click(toggleMobileMenu);

  },

  notUrl: function () {
    //Get all the hyperlink elements
    var links = document.getElementsByTagName("a");

    //Browse the previously created array
    Array.prototype.forEach.call(links, function (elem, index) {
      //Get the hyperlink target and if it refers to an id go inside condition
      var elemAttr = elem.getAttribute("href");
      if (elemAttr && elemAttr.includes("#")) {
        //Replace the regular action with a scrolling to target on click
        elem.addEventListener("click", function (ev) {
          ev.preventDefault();
          //Scroll to the target element using replace() and regex to find the href's target id
          document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        });
      }
    });
  },

  init: function () {
    general.themePagina(),
      general.languagesHeaderClick(),
      general.headerMob(),
      general.notUrl();
  },
},
  inicio = {
    skillsBtn: function () {
      
      function activateSkill(skillNumber) {
        $(".skill, .content-btn td").removeClass("active-skill");
        $(`#btn-${skillNumber}, #skill-${skillNumber}`).addClass("active-skill");
      }

      $("#btn-1").click(function () {
        activateSkill(1);
      });

      $("#btn-2").click(function () {
        activateSkill(2);
      });

      $("#btn-3").click(function () {
        activateSkill(3);
      });

      $("#btn-4").click(function () {
        activateSkill(4);
      });

    },

    carrouselExperience: function () {
      const buttonsWrapper = document.querySelector(".map");
      const slides = document.querySelector(".inner");
      const totalSlides = slides.children.length;
      const slideWidth = 100 / totalSlides;
      let currentIndex = 0;

      buttonsWrapper.addEventListener("click", e => {
        if (e.target.nodeName === "BUTTON") {
          const targetButton = e.target;

          if (targetButton.classList.contains("first")) {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          } else if (targetButton.classList.contains("second")) {
            currentIndex = (currentIndex + 1) % totalSlides;
          }

          slides.style.transform = `translateX(-${slideWidth * currentIndex}%)`;
        }
      });
    },

    init: function () {
      inicio.skillsBtn(), inicio.carrouselExperience();
    },
  };

function initialise() {
  general.init(), $("#inicio")[0] && inicio.init();
}

$(function () {
  initialise();
});
