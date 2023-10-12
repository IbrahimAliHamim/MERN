const applyCouponButton = document.getElementById('applyCoupon');
const totalProductCount = document.getElementById('total_product');
const productNameRow = document.getElementById('productName');
const priceRow = document.getElementById('price');
const discountRow = document.getElementById('discount');
const totalRow = document.getElementById('total');
const purchaseButton = document.getElementById('purchase');
const couponCodeInput = document.getElementById('couponCode');


const products = [];

let productNumber = 1;

function calculateTotal() {
    let total = 0;
    let discount = 0;

    for (const product of products) {
        total += product.price;
        discount += product.discount;
    }

    totalProductCount.innerText = products.length;
    priceRow.innerText = total;
    discountRow.innerText = discount;
    totalRow.innerText = (total - discount);
}


applyCouponButton.addEventListener('click', () => {
    const couponCode = couponCodeInput.value;


    if (couponCode === 'coupon123') {

        for (const product of products) {
            product.discount += product.price * 0.1;
        }
    }

    calculateTotal();
    couponCodeInput.disabled = true;
    applyCouponButton.disabled = true;

    couponApplied = true;
});

purchaseButton.addEventListener('click', () => {
    if (products.length > 0) {

        alert('Congratulations! Your purchase is successful.');

        location.reload();
    } else {

        alert('Please add products to your cart before purchasing.');
    }
});

const productCards = document.querySelectorAll('.product-card');

productCards.forEach((productCard) => {
    productCard.addEventListener('click', () => {
        const productName = productCard.querySelector('.card-title').innerText;
        const productPrice = parseFloat(productCard.querySelector('.card-text').innerText);

        const discount = productPrice * 0.1;

        products.push({ name: productName, price: productPrice, discount });

        const newRow = document.createElement('tr');
        newRow.innerHTML = `<th>${productNumber}</th><th>${productName}</th>`;
        productNameRow.appendChild(newRow);

        calculateTotal();
        productNumber++;
    });
});