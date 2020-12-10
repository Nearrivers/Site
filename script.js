let carouselInner = $('.carousel.inner');
let carouselIndicator = $('.carousel-indicator');
let sources = $.getJSON('./img/carousel/sources.json');

for (let source in sources) {

    let indicator = `<li data-target="#carouselExampleFade" data-slide-to="${source.number}"></li>`;
    let item =  `<div class="carousel-item active" data-interval="2000">`
                + ` <img src="${source.path}" class="d-block w-100" alt="..."></div>`;

    carouselIndicator.append(indicator);
    carouselInner.append(item);
    
    $('.carousel.active:first-child').addClass('active');
}
