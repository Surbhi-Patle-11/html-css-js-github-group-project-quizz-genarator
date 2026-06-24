const imagesArr = [
    "../images/slider-image.jpg",
    "../images/bank-slider.jpg",
    "../images/railway-slider.jpg",
    "../images/hospital-slider.jpg",
    "../images/slider-img-3.jpg",
    "../images/gk-slider.jpg",
    "../images/slider-img-5.avif"
];

let imgIndex = 0;

const imgElement = document.getElementById("img");

function prev() {
    if (imgIndex === 0) {
        imgIndex = imagesArr.length - 1;
    } else {
        imgIndex--;
    }

    imgElement.src = imagesArr[imgIndex];
}

function next() {
    if (imgIndex === imagesArr.length - 1) {
        imgIndex = 0;
    } else {
        imgIndex++;
    }

    imgElement.src = imagesArr[imgIndex];
}

/* Auto Slider */
setInterval(next, 5000);