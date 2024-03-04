document.addEventListener("DOMContentLoaded", () => {
    // Desktop
    /*
    Toggle navbar dropdown list icons
     */
    const linkDropdown = document.querySelectorAll(".link-dropdown") as NodeListOf<HTMLAnchorElement>;
    linkDropdown.forEach((element : HTMLAnchorElement) => {
        element.addEventListener("click", () => {
            element.getAttribute("data-toggle") == "close" ? element.setAttribute("data-toggle", "open") : element.setAttribute("data-toggle", "close");
            console.log(element);
        })
    })

    /*
    Toggle dropdown items visibility (features)
     */
    const featuresDropdpwn : HTMLAnchorElement = document.getElementById("feature-dropdown") as HTMLAnchorElement;
    const featuresDropdownItems : HTMLAnchorElement = document.getElementById("feature-dropdown-items") as HTMLAnchorElement;
    featuresDropdpwn.addEventListener("click", () => {
        featuresDropdownItems.classList.toggle("d-none");
    })

    /*
    Toggle dropdown items visibility (company)
    */
    const companyDropdown : HTMLAnchorElement = document.getElementById("company-dropdown") as HTMLAnchorElement;
    const companyDropdownItems : HTMLAnchorElement = document.getElementById("company-dropdown-items") as HTMLAnchorElement;
    companyDropdown.addEventListener("click", () => {
        companyDropdownItems.classList.toggle("d-none");
    })

    // Mobile
    /*
    Toggle hamburger menu status
     */
    const hamburgerMenu:HTMLButtonElement = document.querySelector("#hamburger-menu") as HTMLButtonElement;
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.getAttribute("data-toggle") == "opened" ? hamburgerMenu.setAttribute("data-toggle", "closed"): hamburgerMenu.setAttribute("data-toggle", "opened");
    })

    const featureDropdownMobile : HTMLButtonElement = document.querySelector("#feature-dropdown-mobile") as HTMLButtonElement;
    const featureDropdownMobileItems: HTMLElement = document.querySelector("#feature-dropdown-items-mobile")  as HTMLElement;
    featureDropdownMobile.addEventListener("click", () => {
        featureDropdownMobileItems.classList.toggle("d-none");
    })

    const companyDropdownMobile : HTMLButtonElement = document.querySelector("#company-dropdown-mobile") as HTMLButtonElement;
    const companyDropdownMobileItems: HTMLElement = document.querySelector("#company-dropdown-items-mobile") as HTMLElement;
    companyDropdownMobile.addEventListener("click", () => {
        companyDropdownMobileItems.classList.toggle("d-none");
    })
})