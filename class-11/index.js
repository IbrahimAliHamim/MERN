let cart = [];
let total = 0;

function addProduct(button) {
  const card = button.parentElement;
  const productName = card.querySelector('.card-title').textContent;
  const productPriceSpan = card.querySelector('.card-text span');
  const productPrice = parseFloat(productPriceSpan.textContent);

  cart.push({ name: productName, price: productPrice });
  total += productPrice;
  updateCart();
}

function updateCart() {
  const totalProductElement = document.getElementById('total_product');
  totalProductElement.textContent = cart.length;

  const cartTableBody = document.getElementById('somevalue');
  cartTableBody.innerHTML = '';

  cart.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${product.name}</td>
      <td>$${product.price}</td>
    `;
    cartTableBody.appendChild(row);
  }); 

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <th scope="row">Total</th>
    <td></td>
    <td>$${total}</td>
  `;
  cartTableBody.appendChild(totalRow);
}

const buyNowButtons = document.querySelectorAll('.btn-primary');
buyNowButtons.forEach((button) => {
  button.addEventListener('click', () => addProduct(button));
});
