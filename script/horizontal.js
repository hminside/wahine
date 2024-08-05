const collection = document.querySelector('.collection');
let offset = 0;

window.addEventListener('wheel', (e) => {
    offset += Math.sign(e.deltaY) * 60;

    if (offset < 0) {
        offset = 0;
    } else if (offset > 2000 - window.innerWidth) {
        offset = 2000 - window.innerWidth;
    }
    
    collection.style.transform = `translateX(-${offset}px`;
});
