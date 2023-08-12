// developed by = gmpadron https://github.com/gmpadron

"use strict";

var general = {
  // Theme Page (Dark, Light)
  themePagina: function () {
    setTimeout(function () {
      let themePage = localStorage.getItem("themePageKey");

      if (themePage == null) {
        localStorage.setItem("themePageKey", "Light");
        $("body").addClass("themePageLight");
        // console.log("datos guardados");
      } else if (themePage == "Light") {
        $("body").addClass("themePageLight");
        //console.log("modo Light");
      } else if (themePage == "Dark") {
        $("body").addClass("themePageDark");
        //console.log("modo Dark");
      } else {
        console.log("error body theme page");
      }

      function functionThemePageModo() {
        let themePage = localStorage.getItem("themePageKey");

        if (themePage == "Light") {
          $("body").addClass("themePageDark");
          $("body").removeClass("themePageLight");
          localStorage.setItem("themePageKey", "Dark");
        } else if (themePage == "Dark") {
          $("body").addClass("themePageLight");
          $("body").removeClass("themePageDark");
          localStorage.setItem("themePageKey", "Light");
        } else {
          console.log("error click theme page");
        }
      }

      $(".themePageModo").click(function () {
        functionThemePageModo();
      });
    }, 500);
  },

  languagesHeaderClick: function () {
    // menu mobile of the page
    $(".languagesModo").click(function () {
      $(".languages-option").toggleClass("languages-option-on");
    });

    $(".content-menu").click(function () {
      $(".languages-option").removeClass("languages-option-on");
    });

    $(".x-languages-option").click(function () {
      $(".languages-option").removeClass("languages-option-on");
    });
  },

  headerMob: function () {
    // menu mobile of the page
    $(".content-menu").click(function () {
      $("header").toggleClass("menu-mob-on");
    });

    $("header nav ul .li-menu").click(function () {
      $("header").toggleClass("menu-mob-on");
    });
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
      // Action Skill

      //  var btnTitleSkill = $(".content-btn td");
      //  $(".content-btn td").click(function () {
      //    btnTitleSkill = $(this);
      //   $(this).toggleClass('active');
      //  });

      $("#btn-1").click(function () {
        $(".skill").removeClass("active-skill");
        $(".content-btn td").removeClass("active-skill");
        $("#btn-1").addClass("active-skill");
        $("#skill-1").addClass("active-skill");
      });
      $("#btn-2").click(function () {
        $(".skill").removeClass("active-skill");
        $(".content-btn td").removeClass("active-skill");
        $("#btn-2").addClass("active-skill");
        $("#skill-2").addClass("active-skill");
      });
      $("#btn-3").click(function () {
        $(".skill").removeClass("active-skill");
        $(".content-btn td").removeClass("active-skill");
        $("#btn-3").addClass("active-skill");
        $("#skill-3").addClass("active-skill");
      });
      $("#btn-4").click(function () {
        $(".skill").removeClass("active-skill");
        $(".content-btn td").removeClass("active-skill");
        $("#btn-4").addClass("active-skill");
        $("#skill-4").addClass("active-skill");
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
