const cuccok = [
    {kep: "images/rtx4060.png", name: "ASUS RTX 4060", description: "Memoria: 8GB <br> Orajel: 2460 MHz <br> Chipset: NVIDIA GeForce <br>", forras: "https://www.asus.com/us/motherboards-components/graphics-cards/dual/dual-rtx4060-8g-evo/", forrasjelen: "asus.com"},
    {kep: "images/RM750x_SHIFT_01.avif", name: "CORSAIR RM750x", description: "Teljesitmeny: 750W <br>Hatásfok: 80+ Gold <br>Ventilátor mérete: 140mm <br>", forras: "https://www.corsair.com/us/en/p/psu/CP-9020251-NA/rm750x-shift-80-plus-gold-fully-modular-atx-power-supply-cp-9020251-na?_gl=1*gtbo7*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwgeLHBhBuEiwAL5gNEWsSFfDh-za4znQ_ob3qXLxvxleHVwfO9VBkIXzo5De8juPjFe2UghoCm_4QAvD_BwE&gbraid=0AAAAA_Hs9xgA461v2rcbLtw14xB1Ha3X3", forrasjelen: "corsair.com"},
    {kep: "images/1761310-amd-ryzen-5-7000-series-PIB-angle__05313.webp", name: "Ryzen 5 7600X", description: "Magok száma: 6<br>Processzor órajel: 4700 MHz<br>Processzor foglalat: AM5 <br>", forras: "https://shop-eu-en.amd.com/amd-ryzen-5-7600x-processor/", forrasjelen: "amd.com"},
    {kep: "images/Liquid_Freezer_III_Pro_240_Black_g00.png", name: "ARCTIC LFIII Pro 240", description: "Ventilátorok száma: 2 <br>Ventilátor mérete: 120mm <br>Sebesség: 3000 RPM max. <br>", forras: "https://www.arctic.de/en/Liquid-Freezer-III-Pro-240/ACFRE00178A", forrasjelen: "arctic.de"}
]

let index = 0;
let counter = 0;

const container1 = document.getElementById("dialog");
const container2 = document.getElementById("dialog2");
const container3 = document.getElementById("dialog3");

function setContent(container, item) {
    container.querySelector("#wrapper").innerHTML = `<a href="#nogo"><img src="${item.kep}" alt=""></a>`;
    container.querySelector("#szoveg").innerHTML = `
        <h2 id="name">${item.name}</h2>
        <p id="description">${item.description}</p>
        <p id="forras-szoveg">
            Forrás: <a href="${item.forras}" id="forras">${item.forrasjelen}</a>
        </p>
    `;
}

function renderCards() {
    if (index%3 == 0) {
        container1.style.transform = `translateX(${0}px)`
        container1.style.opacity = "1"

        container2.style.transform = `translateX(${575}px)`
        container2.style.opacity = "1"

        container3.style.opacity = "0"
        container3.style.transform = `translateX(${-575}px)`

        setContent(container3, cuccok[(counter-1)%cuccok.length])
        setContent(container1, cuccok[(counter)%cuccok.length])
        setContent(container2, cuccok[(counter+1)%cuccok.length])
    }
    else if (index%3 == 1) {
        container1.style.transform = `translateX(${-575}px)`
        container1.style.opacity = "0"

        container2.style.transform = `translateX(${0}px)`
        container2.style.opacity = "1"

        container3.style.opacity = "1"
        container3.style.transform = `translateX(${575}px)`

        setContent(container1, cuccok[(counter-1)%cuccok.length])
        setContent(container2, cuccok[(counter)%cuccok.length])
        setContent(container3, cuccok[(counter+1)%cuccok.length])
    }
    else {
        container1.style.transform = `translateX(${575}px)`
        container1.style.opacity = "1"

        container2.style.transform = `translateX(${-575}px)`
        container2.style.opacity = "0"

        container3.style.opacity = "1"
        container3.style.transform = `translateX(${0}px)`

        setContent(container2, cuccok[(counter-1)%cuccok.length])
        setContent(container3, cuccok[(counter)%cuccok.length])
        setContent(container1, cuccok[(counter+1)%cuccok.length])
    }
}

function next() {
    index = (index + 1) % (cuccok.length-1);
    counter += 1;
    renderCards();
}

function jumpTo(element, hova, opacity) {
    element.style.transition = "none";
    element.style.transform = `translateX(${hova}px)`;
    element.style.opacity = opacity;
    
    requestAnimationFrame(() => {
        element.style.transition = "";
    });
}


container1.addEventListener("transitionend", (e) => {
    if (e.target === container1 && e.propertyName === "transform" && index%3 === 1) {
        jumpTo(container1, 1191, 0);
    }
});

container2.addEventListener("transitionend", (e) => {
    if (e.target === container2 && e.propertyName === "transform" && index%3 === 2) {
        jumpTo(container2, 1191, 0);
    }
});

container3.addEventListener("transitionend", (e) => {
    if (e.target === container3 && e.propertyName === "transform" && index%3 === 0) {
        jumpTo(container3, 1191, 0);
    }
});

setInterval(next, 3000)