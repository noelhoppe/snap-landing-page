document.addEventListener("DOMContentLoaded", function () {
    // Desktop
    /*
    Toggle navbar dropdown list icons
     */
    var linkDropdown = document.querySelectorAll(".link-dropdown");
    linkDropdown.forEach(function (element) {
        element.addEventListener("click", function () {
            element.getAttribute("data-toggle") == "close" ? element.setAttribute("data-toggle", "open") : element.setAttribute("data-toggle", "close");
            console.log(element);
        });
    });
    /*
    Toggle dropdown items visibility (features)
     */
    var featuresDropdpwn = document.getElementById("feature-dropdown");
    var featuresDropdownItems = document.getElementById("feature-dropdown-items");
    featuresDropdpwn.addEventListener("click", function () {
        featuresDropdownItems.classList.toggle("d-none");
    });
    /*
    Toggle dropdown items visibility (company)
    */
    var companyDropdown = document.getElementById("company-dropdown");
    var companyDropdownItems = document.getElementById("company-dropdown-items");
    companyDropdown.addEventListener("click", function () {
        companyDropdownItems.classList.toggle("d-none");
    });
    // Mobile
    /*
    Toggle hamburger menu status
     */
    var hamburgerMenu = document.querySelector("#hamburger-menu");
    hamburgerMenu.addEventListener("click", function () {
        hamburgerMenu.getAttribute("data-toggle") == "opened" ? hamburgerMenu.setAttribute("data-toggle", "closed") : hamburgerMenu.setAttribute("data-toggle", "opened");
    });
    var featureDropdownMobile = document.querySelector("#feature-dropdown-mobile");
    var featureDropdownMobileItems = document.querySelector("#feature-dropdown-items-mobile");
    featureDropdownMobile.addEventListener("click", function () {
        featureDropdownMobileItems.classList.toggle("d-none");
    });
    var companyDropdownMobile = document.querySelector("#company-dropdown-mobile");
    var companyDropdownMobileItems = document.querySelector("#company-dropdown-items-mobile");
    companyDropdownMobile.addEventListener("click", function () {
        companyDropdownMobileItems.classList.toggle("d-none");
    });
});
