// Mahsulotlarni localStorage da saqlash
const form = document.getElementById('addProductForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const image = document.getElementById('productImage').value || 'https://via.placeholder.com/150';

        const product = { name, price, image };
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        document.getElementById('message').textContent = 'Mahsulot muvaffaqiyatli qo‘shildi!';
        form.reset();
    });
}

// Mahsulotlar sahifasida chiqarish
const productList = document.getElementById('products');
if (productList) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    if (products.length === 0) {
        productList.innerHTML = "<p>Hozircha mahsulot yo‘q.</p>";
    } else {
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.price} so‘m</p>
            `;
            productList.appendChild(card);
        });
    }
}
