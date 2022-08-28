
var totalPrice = document.getElementById('totalPrice').value;

var quantity, productPrice, sellingQuantity;


submit=document.getElementById('submit');

submit.addEventListener('mouseover', (e) => {
    e.preventDefault();

    sellingQuantity = document.getElementById('sellingQuantity').value;
    productPrice= Number(document.getElementById('productMrp').value);

    console.log(sellingQuantity , productPrice)
    total = sellingQuantity * productPrice;
    totalPrice= total;
})
