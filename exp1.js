let images = document.querySelectorAll('.slideshow img');
let index = 0;

function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(changeImage, 2000);