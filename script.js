const maleCategories = [
    { name: "Shirts", icon: "👔", items: ["Casual Shirts", "Formal Shirts", "T-Shirts", "Polo Shirts"] },
    { name: "Pants", icon: "👖", items: ["Jeans", "Chinos", "Formal Pants", "Shorts"] },
    { name: "Suits", icon: "🤵", items: ["Business Suits", "Wedding Suits", "Blazers"] },
    { name: "Shoes", icon: "👞", items: ["Formal Shoes", "Sneakers", "Boots", "Sandals"] },
    { name: "Accessories", icon: "⌚", items: ["Watches", "Belts", "Ties", "Wallets"] },
    { name: "Sportswear", icon: "🏃", items: ["Gym Wear", "Running Shoes", "Sports T-Shirts"] }
];

const femaleCategories = [
    { name: "Dresses", icon: "👗", items: ["Casual Dresses", "Evening Dresses", "Summer Dresses", "Maxi Dresses"] },
    { name: "Tops", icon: "👚", items: ["Blouses", "T-Shirts", "Tank Tops", "Crop Tops"] },
    { name: "Bottoms", icon: "👖", items: ["Jeans", "Skirts", "Pants", "Shorts"] },
    { name: "Shoes", icon: "👠", items: ["Heels", "Flats", "Sneakers", "Boots"] },
    { name: "Accessories", icon: "👜", items: ["Handbags", "Jewelry", "Scarves", "Sunglasses"] },
    { name: "Activewear", icon: "🧘", items: ["Yoga Pants", "Sports Bras", "Running Shoes", "Gym Tops"] }
];

let currentGender = '';

function showCategories(gender) {
    currentGender = gender;
    const categories = gender === 'male' ? maleCategories : femaleCategories;
    const categoryTitle = gender === 'male' ? "Men's Categories" : "Women's Categories";
    
    // Hide gender selection and show categories
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('categories').classList.add('active');
    document.getElementById('category-title').textContent = categoryTitle;
    
    // Populate categories
    const categoryGrid = document.getElementById('category-grid');
    categoryGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.onclick = () => showSubcategories(category);
        categoryCard.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h4>${category.name}</h4>
        `;
        categoryGrid.appendChild(categoryCard);
    });
}

function showSubcategories(category) {
    alert(`You selected ${category.name}!\n\nAvailable items:\n${category.items.join('\n')}\n\nThis would typically navigate to a product listing page.`);
}

function goBack() {
    document.getElementById('categories').classList.remove('active');
    document.getElementById('gender-selection').style.display = 'block';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactivity to the hero section
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    let mouseX = 0;
    let mouseY = 0;

    hero.addEventListener('mousemove', function(e) {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        this.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    hero.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0px, 0px)';
    });
});