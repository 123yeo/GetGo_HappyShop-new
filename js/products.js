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

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
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
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))