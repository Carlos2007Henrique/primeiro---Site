let cart = []; 
function addToCart(name, price, qtyId) { 
    const qty = parseInt(document.getElementById(qtyId).value); 
    if (qty > 0) { 
        cart.push({ name, price, qty }); 
        updateCart(); 
    } 
}
function updateCart() { 
    const cartDiv = document.getElementById('cart-items'); 
    let total = 0; 
    cartDiv.innerHTML = ''; 
    cart.forEach((item, index) => { 
        const itemTotal = item.price * item.qty; 
        total += itemTotal; 
        cartDiv.innerHTML += `<p>${item.name} - Qtd: ${item.qty} - R$ ${itemTotal.toFixed(2)} <button onclick=\