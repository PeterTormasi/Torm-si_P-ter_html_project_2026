const elements = []
const rects = []

for (let i = 0; i < 9; i++) {
    if (i != 4) {
        const el = document.querySelector('#image' + (i + 1))
        elements.push(el)
        rects.push(el.getBoundingClientRect())
    }
}

const mainel = document.querySelector('#image5')
const mainrect = mainel.getBoundingClientRect()

function animate() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            elements[i].style.opacity = 0;
            elements[i].style.transform = `translate(${mainrect.left - rects[i].left}px, ${mainrect.top - rects[i].top}px)`;
        }, i * 1000);
    }

    setTimeout(() => {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                elements[7-i].style.opacity = 1;
                elements[7-i].style.transform = `translate(${0}px, ${0}px)`;
            }, i * 1000);
        }
    }, 9000);
}

animate()

setInterval(animate, 20000)
