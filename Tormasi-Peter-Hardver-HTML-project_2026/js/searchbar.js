const searchbox = document.getElementById("search-box-div");
const headbanner = document.getElementById("banner-content");

const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        searchbox.style.opacity = "1" 
        header.style.height = "50px"
        header.style.marginBottom = "50px"
        headbanner.style.pointerEvents = "None"
        headbanner.style.opacity = "0"
    } else {
        searchbox.style.opacity = "0"
        header.style.height = "100px"
        header.style.marginBottom = "0px"
        headbanner.style.pointerEvents = "All"
        headbanner.style.opacity = "1"
    }
});