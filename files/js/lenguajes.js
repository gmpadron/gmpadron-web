$(document).ready(function () {
    const storedLanguage = localStorage.getItem("languagesPageKey");
    const languageButtons = $(".language-button");

    if (storedLanguage) {
        redirectToLanguagePage(storedLanguage);
    } else {
        const languageFromPath = getLanguageFromPath();
        if (languageFromPath) {
            localStorage.setItem("languagesPageKey", languageFromPath);
            redirectToLanguagePage(languageFromPath);
        }
    }

    languageButtons.click(function (e) {
        e.preventDefault(); 
        const selectedLanguage = $(this).data("language");

        if (selectedLanguage !== storedLanguage) {
            localStorage.setItem("languagesPageKey", selectedLanguage);

            redirectToLanguagePage(selectedLanguage);
        }
    });

    function redirectToLanguagePage(language) {
        const pathMap = {
            englishPage: "/",
            spanishPage: "/es/",
            portuguesePage: "/pt-br/",
        };

        if (language in pathMap) {
            const newPath = pathMap[language];
            if (window.location.pathname !== newPath) {
                window.location.href = newPath;
            }
        }
    }

    function getLanguageFromPath() {
        const path = window.location.pathname;
        if (path === "/") {
            return "englishPage";
        } else if (path === "/es/") {
            return "spanishPage";
        } else if (path === "/pt-br/") {
            return "portuguesePage";
        }
        return null; 
    }
});
