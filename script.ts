document.addEventListener("DOMContentLoaded", () => {
    /*
    Toggle navbar dropdown list
     */
    const linkDropdown = document.querySelectorAll(".link-dropdown") as NodeListOf<HTMLAnchorElement>;
    linkDropdown.forEach((element : HTMLAnchorElement) => {
        element.addEventListener("click", () => {
            element.getAttribute("data-toggle") == "close" ? element.setAttribute("data-toggle", "open") : element.setAttribute("data-toggle", "close");
            console.log(element);
        })
    })
})