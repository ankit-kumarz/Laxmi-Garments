// Banner images
const banners = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

// Gallery images (add images named gallery1.jpg, gallery2.jpg etc. to /images)
const galleryImages = Array.from({length: 12}, (_, i) => `images/gallery/gallery${i + 1}.jpg`);

// Product Categories
const categories = [
    {
        id: 1,
        name: 'Traditional Wear',
        image: 'images/categories/traditional.jpg',
        description: 'Elegant sarees, lehengas, and traditional suits'
    },
    {
        id: 2,
        name: 'Men\'s Collection',
        image: 'images/categories/mens.jpg',
        description: 'Formal shirts, casual wear, and traditional outfits'
    },
    {
        id: 3,
        name: 'Women\'s Collection',
        image: 'images/categories/women.jpg',
        description: 'Sarees, kurtis, and more.'
    },
    {
        id: 4,
        name: 'Kids Collection',
        image: 'images/categories/kids.jpg',
        description: 'Comfortable and stylish clothes for children'
    }
];

// Products Data
const products = [
    // Traditional Wear
    { id: 1, name: 'Banarasi Silk Saree', category: 'saree', price: 1000, image: 'images/traditional/trad1.jpg', description: 'Luxurious Banarasi silk saree with intricate patterns, perfect for festive occasions.', rating: 4.8, isNew: true },
    { id: 2, name: 'Zari Work Lehenga Choli', category: 'kurti', price: 3000, image: 'images/traditional/trad2.jpg', description: 'Lehenga choli set featuring beautiful zari embroidery for weddings and celebrations.', rating: 4.9, isNew: true },
    { id: 3, name: 'Anarkali Suits', category: 'kurti', price: 1100, image: 'images/traditional/trad3.jpg', description: 'Elegant Anarkali suits with flowing design, ideal for parties and functions.', rating: 4.7, isNew: false },
    { id: 4, name: 'Chikankari Kurti', category: 'kurti', price: 1200, image: 'images/traditional/trad4.jpg', description: 'Hand-embroidered Chikankari kurti from Lucknow, soft and stylish.', rating: 4.8, isNew: true },
    { id: 5, name: 'Patiala Suit Set', category: 'kurti', price: 650, image: 'images/traditional/trad5.jpg', description: 'Classic Patiala suit set with comfortable fit and vibrant colors.', rating: 4.6, isNew: false },
    { id: 6, name: 'Kanjeevaram Saree', category: 'saree', price: 1500, image: 'images/traditional/trad6.jpg', description: 'Authentic Kanjeevaram silk saree from South India, rich and traditional.', rating: 4.9, isNew: true },
    { id: 7, name: 'Sherwani with Dupatta', category: 'kurti', price: 4000, image: 'images/traditional/trad7.jpg', description: 'Regal sherwani set with matching dupatta for special occasions.', rating: 4.8, isNew: false },
    { id: 8, name: 'Bandhani Dress Material', category: 'kurti', price: 150, image: 'images/traditional/trad8.jpg', description: 'Colorful Bandhani dress material, perfect for custom tailoring.', rating: 4.7, isNew: true },
    { id: 9, name: 'Kurta Pajama Set', category: 'kurti', price: 699, image: 'images/traditional/trad9.jpg', description: 'Simple and elegant kurta pajama set for daily and festive wear.', rating: 4.5, isNew: false },
    { id: 10, name: 'Dhoti Gamcha Set', category: 'kurti', price: 800, image: 'images/traditional/trad10.jpg', description: 'Traditional dhoti and gamcha set for a classic ethnic look.', rating: 4.6, isNew: true },

    // Men's Collection
    { id: 11, name: 'Cotton Formal Shirt', category: 'shirt', price: 350, image: 'images/men/men1.jpg', description: 'Crisp cotton formal shirt, ideal for office and formal events.', rating: 4.7, isNew: false },
    { id: 12, name: 'Slim Fit Jeans', category: 'jeans', price: 600, image: 'images/men/men2.jpg', description: 'Trendy slim fit jeans for a modern and sharp look.', rating: 4.6, isNew: true },
    { id: 13, name: 'Linen Kurta Pajama', category: 'shirt', price: 550, image: 'images/men/men3.jpg', description: 'Breathable linen kurta pajama, perfect for summer comfort.', rating: 4.8, isNew: false },
    { id: 14, name: 'Casual Printed T-Shirts', category: 'shirt', price: 250, image: 'images/men/men4.jpg', description: 'Funky and stylish printed t-shirts for casual outings.', rating: 4.5, isNew: true },
    { id: 15, name: 'Hooded Winter Jackets', category: 'shirt', price: 900, image: 'images/men/men5.jpg', description: 'Warm and stylish hooded jackets for winter season.', rating: 4.7, isNew: false },
    { id: 16, name: 'Joggers', category: 'shirt', price: 600, image: 'images/men/men6.jpg', description: 'Comfortable and trendy joggers for everyday wear.', rating: 4.8, isNew: true },
    { id: 17, name: 'RUPA FRONTLINE Baniyan', category: 'shirt', price: 90, image: 'images/men/men7.jpg', description: 'Pack of classic RUPA FRONTLINE baniyans for daily comfort.', rating: 4.6, isNew: false },
    { id: 18, name: 'Macromen Underware', category: 'shirt', price: 100, image: 'images/men/men8.jpg', description: 'Comfortable Macromen underwear for men.', rating: 4.7, isNew: true },
    { id: 19, name: 'Scratch jeans', category: 'jeans', price: 600, image: 'images/men/men9.jpg', description: 'Trendy scratch jeans for a rugged look.', rating: 4.5, isNew: false },
    { id: 20, name: 'Lattu Gamcha', category: 'shirt', price: 110, image: 'images/men/men10.jpg', description: 'Traditional lattu gamcha for multipurpose use.', rating: 4.8, isNew: true },

    // Women's Collection
    { id: 21, name: 'Party Wear Sarees', category: 'kurti', price:1500, image: 'images/women/women1.jpg', description: 'Gorgeous party wear sarees with elegant designs.', rating: 4.7, isNew: true },
    { id: 22, name: 'Weeding Sarees', category: 'kurti', price: 1100, image: 'images/women/women2.jpg', description: 'Beautiful wedding sarees for special occasions.', rating: 4.6, isNew: false },
    { id: 23, name: 'Suti Saree', category: 'kurti', price: 300, image: 'images/women/women3.jpg', description: 'Soft and comfortable suti saree for daily wear.', rating: 4.8, isNew: true },
    { id: 24, name: 'Laxmipati saree', category: 'kurti', price: 550, image: 'images/women/women4.jpg', description: 'Premium Laxmipati saree with unique patterns.', rating: 4.5, isNew: false },
    { id: 25, name: 'Chunri Duptta', category: 'kurti', price: 400, image: 'images/women/women5.jpg', description: 'Traditional chunri dupatta with vibrant colors.', rating: 4.4, isNew: true },
    { id: 26, name: 'Cotton Suit', category: 'saree', price: 450, image: 'images/women/women6.jpg', description: 'Comfortable cotton suit for women.', rating: 4.9, isNew: true },
    { id: 27, name: 'Liza Suit', category: 'kurti', price: 1200, image: 'images/women/women7.jpg', description: 'Trendy Liza suit with modern design.', rating: 4.6, isNew: false },
    { id: 28, name: 'MFC Suit', category: 'kurti', price: 800, image: 'images/women/women8.jpg', description: 'Fashionable MFC suit for festive occasions.', rating: 4.7, isNew: true },
    { id: 29, name: 'Kurta with Palazzo', category: 'kurti', price: 750, image: 'images/women/women9.jpg', description: 'Stylish kurta with palazzo set for women.', rating: 4.5, isNew: false },
    { id: 30, name: 'Denim Jacket for Women', category: 'kurti', price: 350, image: 'images/women/women10.jpg', description: 'Classic denim jacket for women, suitable for all seasons.', rating: 4.8, isNew: true },

    // Kids Collection
    { id: 31, name: 'Cartoon Printed T-Shirt', category: 'kids', price: 250, image: 'images/kids/kids1.jpg', description: 'Fun cartoon printed t-shirt for kids.', rating: 4.7, isNew: true },
    { id: 32, name: 'Frock with Hairband Set', category: 'kids', price: 550, image: 'images/kids/kids2.jpg', description: 'Cute frock with matching hairband for girls.', rating: 4.8, isNew: false },
    { id: 33, name: 'Modi Dress', category: 'kids', price: 350, image: 'images/kids/kids3.jpg', description: 'Ethnic Modi dress for boys.', rating: 4.6, isNew: true },
    { id: 34, name: 'Girls Party Wear Gown', category: 'kids', price: 650, image: 'images/kids/kids4.jpg', description: 'Elegant party wear gown for girls.', rating: 4.9, isNew: false },
    { id: 35, name: 'Military Joggers', category: 'kids', price: 250, image: 'images/kids/kids5.jpg', description: 'Comfortable military joggers for kids.', rating: 4.7, isNew: true },
    { id: 36, name: 'Kids Denim Shorts', category: 'kids', price: 150, image: 'images/kids/kids6.jpg', description: 'Durable denim shorts for kids.', rating: 4.8, isNew: false },
    { id: 37, name: 'Kids Tshirt Pant', category: 'kids', price: 200, image: 'images/kids/kids7.jpg', description: 'T-shirt and pant set for kids, perfect for playtime.', rating: 4.5, isNew: true },
    { id: 38, name: 'Winter Woolen Sweater', category: 'kids', price: 250, image: 'images/kids/kids8.jpg', description: 'Warm woolen sweater for kids during winter.', rating: 4.8, isNew: false },
    { id: 39, name: 'New Born Baby Dress', category: 'kids', price: 250, image: 'images/kids/kids9.jpg', description: 'Soft and cozy dress for newborn babies.', rating: 4.7, isNew: true },
    { id: 40, name: 'School Uniform Kit', category: 'kids', price: 450, image: 'images/kids/kids10.jpg', description: 'Complete school uniform kit for children.', rating: 4.6, isNew: false }
];

window.products = products;