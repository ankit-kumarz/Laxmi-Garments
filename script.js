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

    // Initialize Banner
    initBannerSlider();

    // Load dynamic content
    loadCategories();
    loadGallery();

    // Load products based on page
    if (document.querySelector('.collection-page')) {
        loadProducts();
    } else {
        // We are on the homepage (index.html)
        loadProducts('all');
        setupProductFilter();
    }
    
    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    const filterProductsByName = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };
    
    if(searchBtn && searchInput) {
        searchBtn.addEventListener('click', filterProductsByName);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                filterProductsByName();
            }
        });
    }

    // Setup Size Guide
    setupSizeGuide();
});

function initBannerSlider() {
    const bannerContainer = document.querySelector('.banner-container');
    if (!bannerContainer || !banners || banners.length === 0) return;

    let slidesHtml = '';
    banners.forEach((banner, index) => {
        slidesHtml += `<div class="banner-slide ${index === 0 ? 'active' : ''}" style="background-image: url('${banner}')"></div>`;
    });
    bannerContainer.innerHTML = slidesHtml;

    const slides = bannerContainer.querySelectorAll('.banner-slide');
    const prevBtn = document.querySelector('.prev-banner');
    const nextBtn = document.querySelector('.next-banner');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlide = index;
    };

    const nextSlide = () => showSlide((currentSlide + 1) % slides.length);
    const prevSlide = () => showSlide((currentSlide - 1 + slides.length) % slides.length);

    if(prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    setInterval(nextSlide, 5000);
}

function loadCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    if (!categoriesGrid || !categories) return;
    categoriesGrid.innerHTML = categories.map(category => {
        const pageName = category.name.toLowerCase()
            .replace(/'s collection/g, '')
            .replace(/ collection/g, '')
            .replace(/ wear/g, '');
        
        return `
            <div class="category-card">
                <div class="category-img" style="background-image: url('${category.image}')"></div>
                <div class="category-info">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    <a href="${pageName}.html" class="btn">View Collection</a>
                </div>
            </div>
        `;
    }).join('');
}

function loadProducts(filter = 'all') {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid || !products) return;

    let productsToShow = [];

    // On collection pages
    if (document.querySelector('.collection-page')) {
        const pageTitle = document.title;
        let pageCategories = null;

        if (pageTitle.includes("Men's Collection")) {
            pageCategories = ['jeans', 'shirt'];
        } else if (pageTitle.includes("Women's Collection") || pageTitle.includes("Traditional Wear")) {
            pageCategories = ['saree', 'kurti'];
        } else if (pageTitle.includes("Kids' Collection")) {
            pageCategories = ['kids'];
        }
        
        if (pageCategories) {
            productsToShow = products.filter(product => pageCategories.includes(product.category));
        }
    } 
    // On homepage
    else {
        if (filter === 'all') {
            productsToShow = products;
        } else {
            productsToShow = products.filter(product => product.category === filter);
        }
    }
    
    if (productsToShow.length > 0) {
        productsGrid.innerHTML = productsToShow.map(product => getProductHtml(product)).join('');
    } else {
        productsGrid.innerHTML = `<p class="no-products">No products found in this category.</p>`;
    }
}

function getProductHtml(product) {
    const badge = product.isNew ? `<span class="product-badge">New</span>` : '';
    const originalPrice = product.discount > 0 ? `<span class="original-price">₹${product.price}</span>` : '';
    const discountedPrice = product.discount > 0 ? `₹${(product.price * (1 - product.discount/100)).toFixed(2)}` : `₹${product.price}`;

    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-img" style="background-image: url('${product.image}')">
                ${badge}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <div>
                        ${originalPrice}
                        <span class="price">${discountedPrice}</span>
                    </div>
                    <div class="product-rating">
                        ${getRatingStars(product.rating)}
                    </div>
                </div>
                <a class="btn" href="product-details.html?id=${product.id}">View Details</a>
            </div>
        </div>
    `;
}

function getRatingStars(rating) {
    if (typeof rating !== 'number') return '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for(let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star"></i>';
    if(halfStar) starsHtml += '<i class="fas fa-star-half-alt"></i>';
    for(let i = 0; i < 5 - fullStars - (halfStar ? 1 : 0); i++) starsHtml += '<i class="far fa-star"></i>';
    
    return starsHtml;
}

function showProductDetails() {
    alert("This product is available in-store. Please visit us to see more!");
}

function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid || !galleryImages) return;

    galleryGrid.innerHTML = galleryImages.map(image => `
        <div class="gallery-item">
            <img src="${image}" alt="Gallery Image" class="gallery-img">
        </div>
    `).join('');
}

function setupSizeGuide() {
    const sizeTabs = document.querySelectorAll('.size-tab');
    if (sizeTabs.length === 0) return;

    const sizeGuideContent = document.querySelector('.size-guide-content');
    if (!sizeGuideContent) return;

    const sizeGuides = {
        women: {
            title: "Women's Size Guide (in inches)",
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            measurements: {
                bust: [32, 34, 36, 38, 40, 42],
                waist: [26, 28, 30, 32, 34, 36],
                hips: [34, 36, 38, 40, 42, 44]
            }
        },
        men: {
            title: "Men's Size Guide (in inches)",
            sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            measurements: {
                chest: [36, 38, 40, 42, 44, 46],
                waist: [30, 32, 34, 36, 38, 40],
            }
        },
        kids: {
            title: "Kids' Size Guide",
            sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y', '11-12Y'],
            measurements: {
                height: ['38-41"', '43-45"', '49-51"', '52-54"', '55-57"'],
                chest: ['22-23"', '24-25"', '27-28"', '28-30"', '30-31"'],
                waist: ['21-22"', '22-23"', '23-24"', '24-25"', '25-26"']
            }
        }
    };

    function updateSizeGuide(type) {
        const guide = sizeGuides[type];
        if (!guide) return;

        let tableHTML = `<h3>${guide.title}</h3><table class="size-table"><thead><tr><th>Size</th>`;
        const measurementKeys = Object.keys(guide.measurements);
        measurementKeys.forEach(key => {
            tableHTML += `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`;
        });
        tableHTML += '</tr></thead><tbody>';

        guide.sizes.forEach((size, index) => {
            tableHTML += `<tr><td>${size}</td>`;
            measurementKeys.forEach(key => {
                tableHTML += `<td>${guide.measurements[key][index]}</td>`;
            });
            tableHTML += '</tr>';
        });

        tableHTML += '</tbody></table>';
        sizeGuideContent.innerHTML = tableHTML;
    }

    sizeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            sizeTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            updateSizeGuide(this.dataset.type);
        });
    });

    // Initial load
    updateSizeGuide('women');
}

function setupProductFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProducts(this.dataset.category);
        });
    });
}

// Footer Contact Form Submission
const footerForm = document.getElementById('footer-contact-form');
const footerFormMsg = document.getElementById('footer-form-msg');
const scriptURLFooter = 'https://script.google.com/macros/s/AKfycbxuiiC490v8SWpe53V525dPhWhIi7Z8GgcKWXRVPwEoGM8h7abjzzLREPyrQguuFLOT6w/exec';

if (footerForm) {
    footerForm.addEventListener('submit', e => {
        e.preventDefault();
        const submitButton = footerForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        fetch(scriptURLFooter, { method: 'POST', body: new FormData(footerForm) })
            .then(response => {
                if (response.ok) {
                    footerFormMsg.textContent = 'Message sent successfully!';
                    footerForm.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                footerFormMsg.textContent = 'Error sending message. Please try again.';
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
                setTimeout(() => {
                    footerFormMsg.textContent = '';
                }, 5000);
            });
    });
}
