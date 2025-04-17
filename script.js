document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize banner slider
    initBannerSlider();
    
    // Load categories
    loadCategories();
    
    // Load products
    loadProducts();
    
    // Filter products
    setupProductFilter();
    
    // Load gallery
    loadGallery();
});

function initBannerSlider() {
    const bannerContainer = document.querySelector('.banner-container');
    const prevBtn = document.querySelector('.prev-banner');
    const nextBtn = document.querySelector('.next-banner');
    
    // Create banner slides
    banners.forEach((banner, index) => {
        const slide = document.createElement('div');
        slide.className = 'banner-slide';
        slide.style.backgroundImage = `url(images/${banner})`;
        if (index === 0) slide.classList.add('active');
        bannerContainer.appendChild(slide);
    });
    
    const slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;
    
    // Show slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    // Previous slide
    function prevSlide() {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }
    
    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide change
    setInterval(nextSlide, 5000);
}

function loadCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        categoryCard.innerHTML = `
            <div class="category-img" style="background-image: url(images/${category.image})"></div>
            <div class="category-info">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <a href="#products" class="btn">View Collection</a>
            </div>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
}

function loadProducts(filter = 'all') {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    let filteredProducts = products;
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
        const originalPrice = product.originalPrice ? `<span class="original-price">₹${product.originalPrice}</span>` : '';
        
        productCard.innerHTML = `
            <div class="product-img" style="background-image: url(images/${product.image})">
                ${badge}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <div>
                        ${originalPrice}
                        <span class="price">₹${product.price}</span>
                    </div>
                    <div class="product-rating">
                        ${getRatingStars(product.rating)}
                    </div>
                </div>
                <button class="btn">Add to Cart</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function setupProductFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter products
            const category = this.dataset.category;
            loadProducts(category);
        });
    });
}

function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="images/${image}" alt="Gallery Image" class="gallery-img">
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}
