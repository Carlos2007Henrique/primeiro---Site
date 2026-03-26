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
    
    if (cart.length === 0) {
        cartDiv.innerHTML = 'Nenhum item no carrinho.';
        document.getElementById('total').textContent = '0.00';
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        
        const p = document.createElement('p');
        p.textContent = `${item.name} - Qtd: ${item.qty} - R$ ${itemTotal.toFixed(2)} `;
        
        const button = document.createElement('button');
        button.textContent = 'Remover';
        button.onclick = () => removeFromCart(index);
        
        p.appendChild(button);
        fragment.appendChild(p);
    });
    
    cartDiv.innerHTML = '';
    cartDiv.appendChild(fragment);
    document.getElementById('total').textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function enterSite() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

function showIntro() {
    document.getElementById('intro').style.display = 'flex';
    document.getElementById('main-content').style.display = 'none';
}