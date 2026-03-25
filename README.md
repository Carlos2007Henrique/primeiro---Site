<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Peças para PCs Gamers</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="intro">
        <div class="intro-content">
            <h1 class="fade-in">Bem-vindo à Loja de Peças para PCs Gamers</h1>
            <p class="fade-in-delay">Descubra os melhores componentes para seu setup gamer.</p>
            <button onclick="enterSite()" class="enter-btn">Entrar no Site</button>
        </div>
    </div>
    <div id="main-content">
    <header>
        <h1>Loja de Peças para PCs Gamers</h1>
        <p>Engenheiro Henry</p>
        <nav>
            <ul>
                <li><a href="#" onclick="showIntro()">Home</a></li>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main id="home">
        <h2>Bem-vindo à Nossa Loja</h2>
        <p>Encontre as melhores peças para montar ou atualizar seu PC gamer. Explore nossa seleção de componentes de alta performance.</p>
        <p>Comece navegando pelos produtos abaixo ou entre em contato conosco.</p>
    </main>

    <section id="produtos">
        <h2>Produtos em Destaque</h2>
        <article>
            <h3>Processador Intel Core i7-13700K</h3>
            <p>Processador de alto desempenho para jogos e multitarefas. 16 núcleos, 24 threads.</p>
            <p>Preço: R$ 2.500,00</p>
            <label for="qty1">Quantidade:</label>
            <input type="number" id="qty1" min="1" value="1">
            <button onclick="addToCart('Processador Intel Core i7-13700K', 2500.00, 'qty1')">Adicionar ao Carrinho</button>
        </article>
        <article>
            <h3>Placa de Vídeo NVIDIA RTX 4070</h3>
            <p>Gráficos de última geração para jogos em 4K. 12GB GDDR6X.</p>
            <p>Preço: R$ 3.200,00</p>
            <label for="qty2">Quantidade:</label>
            <input type="number" id="qty2" min="1" value="1">
            <button onclick="addToCart('Placa de Vídeo NVIDIA RTX 4070', 3200.00, 'qty2')">Adicionar ao Carrinho</button>
        </article>
        <article>
            <h3>Memória RAM Corsair Vengeance 32GB DDR4</h3>
            <p>Kit de 2x16GB, 3200MHz, ideal para jogos e edição.</p>
            <p>Preço: R$ 450,00</p>
            <label for="qty3">Quantidade:</label>
            <input type="number" id="qty3" min="1" value="1">
            <button onclick="addToCart('Memória RAM Corsair Vengeance 32GB DDR4', 450.00, 'qty3')">Adicionar ao Carrinho</button>
        </article>
        <article>
            <h3>SSD Samsung 970 EVO 1TB</h3>
            <p>Armazenamento rápido NVMe para tempos de carregamento reduzidos.</p>
            <p>Preço: R$ 600,00</p>
            <label for="qty4">Quantidade:</label>
            <input type="number" id="qty4" min="1" value="1">
            <button onclick="addToCart('SSD Samsung 970 EVO 1TB', 600.00, 'qty4')">Adicionar ao Carrinho</button>
        </article>
        <article>
            <h3>Notebook Acer Nitro V15</h3>
            <p>Notebook gamer com processador Intel Core i7, RTX 4060, 16GB RAM e 512GB SSD.</p>
            <p>Preço: R$ 5.000,00</p>
            <label for="qty6">Quantidade:</label>
            <input type="number" id="qty6" min="1" value="1">
            <button onclick="addToCart('Notebook Acer Nitro V15', 5000.00, 'qty6')">Adicionar ao Carrinho</button>
        </article>
    </section>

    <section id="carrinho">
        <h2>Carrinho de Compras</h2>
        <div id="cart-items">Nenhum item no carrinho.</div>
        <p>Total: R$ <span id="total">0.00</span></p>
    </section>

    <section id="contato">
        <h2>Contato</h2>
        <p>Email: contato@pecasgamers.com</p>
        <p>Telefone: (11) 1234-5678</p>
    </section>

    <footer>
        <p>&copy; 2023 Loja de Peças para PCs Gamers. Todos os direitos reservados.</p>
    </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>

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
        cartDiv.innerHTML += `<p>${item.name} - Qtd: ${item.qty} - R$ ${itemTotal.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button></p>`;
    });
    if (cart.length === 0) {
        cartDiv.innerHTML = 'Nenhum item no carrinho.';
    }
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

body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

header {
    background-color: #1e1e1e;
    padding: 20px;
    text-align: center;
    border-bottom: 2px solid #ff0000;
}

h1 {
    margin: 0;
    color: #00ff00;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0 0 0;
}

nav li {
    display: inline;
    margin: 0 15px;
}

nav a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #ff0000;
}

main {
    padding: 20px;
    text-align: center;
}

section {
    padding: 20px;
    margin: 20px 0;
}

#produtos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

article {
    background-color: #1e1e1e;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    width: 300px;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}

article h3 {
    color: #00ff00;
    margin-top: 0;
}

article p {
    margin: 5px 0;
}

#contato {
    background-color: #1e1e1e;
    text-align: center;
}

footer {
    background-color: #1e1e1e;
    text-align: center;
    padding: 10px;
    border-top: 2px solid #ff0000;
    color: #cccccc;
}

input[type="number"] {
    width: 60px;
    margin: 5px;
    padding: 5px;
    background-color: #333;
    color: #fff;
    border: 1px solid #555;
    border-radius: 4px;
}

button {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: #cc0000;
}

#carrinho {
    background-color: #1e1e1e;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #333;
}

#cart-items p {
    margin: 5px 0;
    color: #00ff00;
}

#intro {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #000000, #1a1a1a, #333333);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    color: #ffffff;
    text-align: center;
}

.intro-content h1 {
    font-size: 3em;
    margin-bottom: 20px;
    color: #00ff00;
    animation: fadeIn 2s ease-in;
}

.intro-content p {
    font-size: 1.5em;
    margin-bottom: 40px;
    animation: fadeIn 2s ease-in 1s both;
}

.enter-btn {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s;
    animation: fadeIn 2s ease-in 2s both;
}

.enter-btn:hover {
    background-color: #cc0000;
}

#main-content {
    display: none;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

header p {
    font-size: 0.8em;
    color: #cccccc;
    text-align: center;
    margin: 5px 0;
}