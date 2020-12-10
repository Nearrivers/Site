let carouselInner = $('.carousel.inner');
let carouselIndicator = $('.carousel-indicator');
//let sources = $.getJSON('./img/carousel/sources.json');

function afficher(results) {
    for (let result in results) {

        console.log(result);
        // console.log(results);
        let indicator = `<li data-target="#carouselExampleFade" data-slide-to="${result.number}"></li>`;
        let item =  `<div class="carousel-item active" data-interval="2000">`
                    + ` <img src="${result.path}" class="d-block w-100" alt="..."></div>`;

        carouselIndicator.append(indicator);
        carouselInner.append(item);
        
        $('.carousel.active:first-child').addClass('active');
    }
}

fetch('https://raw.githubusercontent.com/Nearrivers/Site/master/img/carousel/sources.json')
.then((response) => {
    return response.json();
}).then((res) => {
    console.log(res);
    afficher(res);
})
.catch((err) => {
    console.log(err);
})
