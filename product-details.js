// Get product ID from URL
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function showProductDetailsPage() {
    const productId = getProductIdFromUrl();
    if (!productId || !window.products) return;
    const product = window.products.find(p => p.id == productId);
    const imgEl = document.getElementById('product-img');
    const nameEl = document.getElementById('product-name');
    const descEl = document.getElementById('product-desc');
    if (product) {
        imgEl.src = product.image;
        imgEl.alt = product.name;
        nameEl.textContent = product.name;
        descEl.textContent = product.description;
    } else {
        imgEl.src = '';
        imgEl.alt = 'Product Not Found';
        nameEl.textContent = 'Product Not Found';
        descEl.textContent = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showProductDetailsPage();
    const whatsappBtn = document.getElementById('whatsapp-btn');
    whatsappBtn.addEventListener('click', function() {
        const productId = getProductIdFromUrl();
        let productName = 'this product';
        if (window.products) {
            const product = window.products.find(p => p.id == productId);
            if (product) productName = product.name;
        }
        const userMobile = document.getElementById('user-mobile').value.trim();
        let message = `Hello, I am interested in ${productName}`;
        if (userMobile) {
            message += `. My mobile number: ${userMobile}`;
        }
        const encodedMsg = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/916201563011?text=${encodedMsg}`;
        window.open(whatsappUrl, '_blank');
    });
}); 