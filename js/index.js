let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'QUECHUA ',
        image1: './images/Thu1.avif',
        image2: './images/Thu2.avif',
        old_price: '600',
        curr_price: '375'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './images/3.png',
        image2: './images/3.1.png',
        old_price: '550',
        curr_price: '375'
    },
    {
        name: 'Tent',
        image1: './images/15.jpg',
        image2: './images/15.1.2',
        old_price: '600',
        curr_price: '425'
    },

    {
        name: 'NH21ZP009',
        image1: './images/9.jpg',
        image2: './images/9.1',
        old_price: '405',
        curr_price: '280'
    },
    {
        name: 'Village 5.0 NH21ZP009',
        image1: './images/6.webp',
        image2: './images/6.1.png',
        old_price: '500',
        curr_price: '420'
    },
    {
        name: 'NH21ZP810',
        image1: './images/7.png',
        image2: './images/7.1.png',
        old_price: '340',
        curr_price: '300'
    },
    {
        name: 'NB21ZP1080',
        image1: './images/10.png',
        image2: './images/10.1.png',
        old_price: '550',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})


