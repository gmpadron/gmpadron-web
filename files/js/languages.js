// developed by = gmpadron https://github.com/gmpadron

$(document).ready(function () {
  const languagesPage = localStorage.getItem("languagesPageKey");
  const languagesPageMode = localStorage.getItem("languagesPageKeyMode");

  if (languagesPage == null) {
    localStorage.setItem("languagesPageKey", "englishPage");
  } else if (languagesPage === "englishPage") {
    if (languagesPageMode === "englishPageTrue") {
      const currentURL = window.location.href;
      const domainURL = window.location.origin + "/";
      if (currentURL !== domainURL && languagesPageMode !== "englishPageRedirected") {
        localStorage.setItem("languagesPageKeyMode", "englishPageRedirected");
        window.location.href = domainURL;
      }
    }
  } else if (languagesPage === "spanishPage") {
    if (languagesPageMode === "spanishPageTrue") {
      const currentURL = window.location.href;
      if (!currentURL.endsWith("/es") && languagesPageMode !== "espanolPageRedirected") {
        localStorage.setItem("languagesPageKeyMode", "espanolPageRedirected");
        window.location.href = "/es";
      }
    }
  } else if (languagesPage === "portuguesePage") {
    if (languagesPageMode === "portuguesePageTrue") {
      const currentURL = window.location.href;
      if (!currentURL.endsWith("/pt-br") && languagesPageMode !== "portuguesPageRedirected") {
        localStorage.setItem("languagesPageKeyMode", "portuguesPageRedirected");
        window.location.href = "/pt-br";
      }
    }
  } else {
    console.log("error Languages Page");
  }

  $("#englishPageModo").click(function () {
    const languagesPage = localStorage.getItem("languagesPageKey");
    if (languagesPage === "englishPage") {
      $(".languages-option").toggleClass("languages-option-on");
      $("header").toggleClass("menu-mob-on");
    } else {
      localStorage.setItem("languagesPageKey", "englishPage");
      localStorage.setItem("languagesPageKeyMode", "englishPageTrue");
      location.reload();
    }
  });

  $("#spanishPageModo").click(function () {
    const languagesPage = localStorage.getItem("languagesPageKey");
    if (languagesPage === "spanishPage") {
      $(".languages-option").toggleClass("languages-option-on");
      $("header").toggleClass("menu-mob-on");
    } else {
      localStorage.setItem("languagesPageKey", "spanishPage");
      localStorage.setItem("languagesPageKeyMode", "spanishPageTrue");
      location.reload();
    }
  });

  $("#portuguesePageModo").click(function () {
    const languagesPage = localStorage.getItem("languagesPageKey");
    $(".languages-option").toggleClass("languages-option-on");
    if (languagesPage !== "portuguesePage") {
      localStorage.setItem("languagesPageKey", "portuguesePage");
      localStorage.setItem("languagesPageKeyMode", "portuguesePageTrue");
      location.reload();
    }
  });
});
