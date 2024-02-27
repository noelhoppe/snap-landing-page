document.addEventListener("DOMContentLoaded", function () {
    /*
    Toggle navbar dropdown list
     */
    var linkDropdown = document.querySelectorAll(".link-dropdown");
    linkDropdown.forEach(function (element) {
        element.addEventListener("click", function () {
            element.getAttribute("data-toggle") == "close" ? element.setAttribute("data-toggle", "open") : element.setAttribute("data-toggle", "close");
            console.log(element);
        });
    });
});
