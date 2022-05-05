const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const priceCurrentProducts = $$('.home-product-item__total')
const totalPrice = $('.home-product-totals__price')
const payment = $('#payment')
const btnSuccess = $('btn-success')

function start() {
    updateTotalPrice()
}
start()

function updateTotalPrice() {
    let totalPriceProduct = 0;
    if (priceCurrentProducts) {
        priceCurrentProducts.forEach((priceCurrentProduct) => {
            totalPriceProduct += parseInt(priceCurrentProduct.innerText)
        })
    }
    totalPrice.innerHTML = totalPriceProduct
    if (totalPrice.innerText == '0') {
        openModalBtn.disabled = true
        openModalBtn.style.backgroundColor = '#ccc'
    }
}

function handleUpdatePrice(id) {
    const productId = $(`[product-id='${id}']`)
    const quantity = productId.querySelector('.home-product-item__quantity')
    const priceUpdate = productId.querySelector('.home-product-item__total')
    const priceNewProduct = parseInt(productId.querySelector('.home-product-item__price-current').innerText)
    var priceTotal = parseInt(totalPrice.innerText)
    priceTotal = priceTotal - parseInt(priceUpdate.innerText)
    const total = priceNewProduct* quantity.value
    priceTotal += total
    priceUpdate.innerText = total
    totalPrice.innerText = priceTotal
    if (totalPrice.innerText == '0') {
        openModalBtn.disabled = true
        openModalBtn.style.backgroundColor = '#ccc'
    }
}

