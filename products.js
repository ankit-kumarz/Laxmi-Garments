// Product categories data
const categories = [
    {
        id: 1,
        name: "Sarees",
        description: "Traditional and designer sarees for all occasions",
        image: "saree1.jpg"
    },
    {
        id: 2,
        name: "Kurtis",
        description: "Casual and party wear kurtis in various designs",
        image: "kurti1.jpg"
    },
    {
        id: 3,
        name: "Jeans",
        description: "Premium quality jeans for men and women",
        image: "jeans1.jpg"
    },
    {
        id: 4,
        name: "Shirts",
        description: "Formal and casual shirts in latest designs",
        image: "shirt1.jpg"
    },
    {
        id: 5,
        name: "Traditional Wear",
        description: "Salwar suits, lehengas and more",
        image: "traditional1.jpg"
    },
    {
        id: 6,
        name: "Western Wear",
        description: "Trendy tops, dresses and more",
        image: "western1.jpg"
    }
];

// Products data
const products = [
    {
        id: 1,
        name: "Silk Banarasi Saree",
        category: "saree",
        price: 2499,
        originalPrice: 2999,
        rating: 4.5,
        image: "saree1.jpg",
        badge: "Popular"
    },
    {
        id: 2,
        name: "Cotton Printed Saree",
        category: "saree",
        price: 1499,
        originalPrice: 1999,
        rating: 4.2,
        image: "saree2.jpg"
    },
    {
        id: 3,
        name: "Designer Kurti",
        category: "kurti",
        price: 899,
        originalPrice: 1299,
        rating: 4.7,
        image: "kurti1.jpg",
        badge: "Bestseller"
    },
    {
        id: 4,
        name: "Casual Kurti",
        category: "kurti",
        price: 699,
        originalPrice: 999,
        rating: 4.0,
        image: "kurti2.jpg"
    },
    {
        id: 5,
        name: "Slim Fit Jeans",
        category: "jeans",
        price: 1599,
        originalPrice: 1999,
        rating: 4.3,
        image: "jeans1.jpg"
    },
    {
        id: 6,
        name: "Boyfriend Jeans",
        category: "jeans",
        price: 1399,
        originalPrice: 1799,
        rating: 4.1,
        image: "jeans2.jpg"
    },
    {
        id: 7,
        name: "Formal Shirt",
        category: "shirt",
        price: 999,
        originalPrice: 1299,
        rating: 4.4,
        image: "shirt1.jpg"
    },
    {
        id: 8,
        name: "Casual Shirt",
        category: "shirt",
        price: 799,
        originalPrice: 999,
        rating: 4.0,
        image: "shirt2.jpg"
    },
    {
        id: 9,
        name: "Designer Lehenga",
        category: "traditional",
        price: 4999,
        originalPrice: 5999,
        rating: 4.8,
        image: "lehenga1.jpg",
        badge: "New"
    },
    {
        id: 10,
        name: "Salwar Suit",
        category: "traditional",
        price: 1999,
        originalPrice: 2499,
        rating: 4.2,
        image: "salwar1.jpg"
    },
    {
        id: 11,
        name: "Summer Dress",
        category: "western",
        price: 1299,
        originalPrice: 1599,
        rating: 4.5,
        image: "dress1.jpg"
    },
    {
        id: 12,
        name: "Casual Top",
        category: "western",
        price: 599,
        originalPrice: 799,
        rating: 4.1,
        image: "top1.jpg"
    }
];

// Banner images
const banners = [
    "banner1.jpg",
    "banner2.jpg",
    "banner3.jpg"
];

// Gallery images (you just need to add these images to your images folder)
const galleryImages = [];
for (let i = 1; i <= 12; i++) {
    galleryImages.push(`gallery${i}.jpg`);
}