"use strict";

var general = {
    headerMob: function () {
      $(".content-menu").click(function () {
        $("header").toggleClass("menu-mob-on");
      });

      $("header nav ul .li-menu").click(function () {
        $("header").toggleClass("menu-mob-on");
      });
    },

    themePagina: function() {

      let themePage = localStorage.getItem("themePageKey");

      if(themePage == null){
        localStorage.setItem("themePageKey", "Light");
        $("body").addClass("themePageLight");
        console.log("datos guardados");
      }else if(themePage == "Light"){
        $("body").addClass("themePageLight");
        //console.log("modo Light");
      }else if(themePage == "Dark"){
        $("body").addClass("themePageDark");
        //console.log("modo Dark");
      }else{
        console.log("error body theme page");
      };

      function functionThemePageModo() {
        let themePage = localStorage.getItem("themePageKey");
        
          if(themePage == "Light"){
            $("body").addClass("themePageDark");
            $("body").removeClass("themePageLight");
            localStorage.setItem("themePageKey", "Dark");
          }else if(themePage == "Dark"){
            $("body").addClass("themePageLight");
            $("body").removeClass("themePageDark");
            localStorage.setItem("themePageKey", "Light");
          }else{
            console.log("error click theme page");
          }
      };

      $(".themePageModo").click(function () {
        functionThemePageModo();
      });

    },

    init: function () {
      general.headerMob(), general.themePagina();
    },
  },
  inicio = {
    skillsBtn: function () {
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

    init: function () {
      inicio.skillsBtn();
    },
  };

function initialise() {
  general.init(),
  $("#inicio")[0] && inicio.init();
}

$(function () {
  initialise();
});
