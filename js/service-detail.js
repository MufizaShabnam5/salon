const serviceData = {
    "bridal": {
        hero: {
            title: "Bridal Perfection",
            tagline: "Look your absolute best on your special day",
            image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80&fit=crop"
        },
        overview: {
            description: "Your wedding day is one of the most important moments of your life. Our premium bridal makeup service ensures you radiate confidence and timeless elegance from the first look to the last dance.",
            benefits: [
                "Long-wear, high-definition luxury makeup",
                "Personalized pre-wedding consultation & trial",
                "Skin prep and hydration rituals included",
                "On-location styling available"
            ],
            whyChoose: "We use only the highest tier of professional, camera-ready cosmetics designed to withstand tears, heat, and hours of celebration."
        },
        process: [
            { title: "Consultation & Trial", duration: "90 mins", desc: "We discuss your vision, dress, and theme, and perform a full makeup trial to perfect the look." },
            { title: "Skin Preparation", duration: "30 mins", desc: "A mini facial to cleanse, hydrate, and plump the skin for a flawless canvas." },
            { title: "Application & Styling", duration: "120 mins", desc: "Expert application of long-wear makeup, contouring, and setting sprays." }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1487530811015-780ddc55e3af?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1560869713-da86a9ec0744?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&fit=crop"
        ],
        packages: [
            { name: "Essential Bride", price: "$250", features: ["Day-of Makeup", "False Lashes", "Skin Prep", "Touch-up Kit"], popular: false },
            { name: "Signature Bridal", price: "$450", features: ["Trial Session", "Day-of Makeup", "Premium Lashes", "Luxury Skin Prep", "Travel to Venue (Local)"], popular: true },
            { name: "Ultimate Experience", price: "$750", features: ["Trial Session", "Engagement Shoot Makeup", "Day-of Makeup", "Touch-ups until Reception", "Bridal Party Discounts"], popular: false }
        ]
    },
    "hair": {
        hero: {
            title: "Hair Services",
            tagline: "Precision cuts and bespoke styling",
            image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80&fit=crop"
        },
        overview: {
            description: "Transform your look with precision cuts, bespoke styling, advanced colouring techniques, and deeply nourishing hair treatments from our master stylists.",
            benefits: [
                "Expert color-matching and balayage",
                "Kérastase nourishing treatments",
                "Precision styling for your face shape",
                "Damage-free coloring techniques"
            ],
            whyChoose: "Our stylists are internationally trained and exclusively use premium, salon-grade products to ensure vibrant, lasting results."
        },
        process: [
            { title: "Consultation", duration: "15 mins", desc: "Discussing your hair history, desired look, and assessing hair health." },
            { title: "Wash & Treatment", duration: "20 mins", desc: "Deep cleansing and applying a nourishing mask tailored to your hair type." },
            { title: "Cut & Style", duration: "60 mins", desc: "Precision cutting and a signature blowout." }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1521590832167-7bfcbaa63f3f?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80&fit=crop"
        ],
        packages: [
            { name: "Maintenance Cut", price: "$85", features: ["Consultation", "Wash & Massage", "Precision Cut", "Simple Blowdry"], popular: false },
            { name: "Signature Restyle", price: "$150", features: ["Deep Consultation", "Nourishing Treatment", "Restyling Cut", "Signature Blowout"], popular: true },
            { name: "Colour & Style", price: "$280+", features: ["Balayage / Full Colour", "Bond-builder Treatment", "Toner", "Cut & Blowout"], popular: false }
        ]
    },
    "skin": {
        hero: {
            title: "Skin Care",
            tagline: "Rejuvenate your natural glow",
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80&fit=crop"
        },
        overview: {
            description: "Rejuvenate your glow with our signature facials, deep cleanups, detan treatments, and advanced clinical skincare therapies tailored to your unique skin type.",
            benefits: [
                "Deep pore cleansing and exfoliation",
                "Anti-aging and skin-plumping serums",
                "Reduction of pigmentation and sun damage",
                "Instantly brighter, glowing complexion"
            ],
            whyChoose: "We utilize medical-grade, botanical-infused serums and cutting-edge non-invasive technology for maximum results with zero downtime."
        },
        process: [
            { title: "Skin Analysis", duration: "15 mins", desc: "Using advanced mapping tools to assess your skin's hydration and concerns." },
            { title: "Exfoliation & Extraction", duration: "30 mins", desc: "Gently removing dead skin cells and clearing pores safely." },
            { title: "Therapy & Massage", duration: "45 mins", desc: "Infusing custom serums followed by a lymphatic drainage facial massage." }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&fit=crop"
        ],
        packages: [
            { name: "Express Glow", price: "$90", features: ["Skin Analysis", "Deep Cleanse", "Enzyme Peel", "Hydrating Mask"], popular: false },
            { name: "Signature HydraFacial", price: "$180", features: ["Advanced Mapping", "Vortex Extraction", "LED Light Therapy", "Custom Serum Infusion", "Facial Massage"], popular: true },
            { name: "Anti-Aging Peel", price: "$250", features: ["Clinical Peel", "Collagen Mask", "Lymphatic Drainage", "Eye & Lip Treatment", "Take-home Serum"], popular: false }
        ]
    },
    "spa": {
        hero: {
            title: "Spa & Relaxation",
            tagline: "Escape into absolute tranquility",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80&fit=crop"
        },
        overview: {
            description: "Escape into tranquility with therapeutic massages, body wraps, and full-body wellness rituals designed to melt stress away and restore your inner balance.",
            benefits: [
                "Relieves muscle tension and stress",
                "Improves blood circulation and detoxifies",
                "Aromatherapy for mental clarity",
                "Leaves skin soft and nourished"
            ],
            whyChoose: "Our massage therapists are experts in multiple modalities, blending Eastern and Western techniques within a soundproof, sensory-controlled environment."
        },
        process: [
            { title: "Sensory Selection", duration: "10 mins", desc: "Choosing your preferred organic essential oils and massage pressure." },
            { title: "The Treatment", duration: "60-90 mins", desc: "A seamless, continuous flow massage addressing your specific areas of tension." },
            { title: "Awakening", duration: "15 mins", desc: "A gentle hot towel wipe down and time to relax with herbal tea." }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80&fit=crop"
        ],
        packages: [
            { name: "Swedish Relaxation", price: "$110", features: ["60 Min Massage", "Organic Oils", "Hot Towel Finish", "Herbal Tea"], popular: false },
            { name: "Aroma Hot Stone", price: "$165", features: ["90 Min Massage", "Heated Basalt Stones", "Custom Aromatherapy", "Scalp Massage", "Private Suite"], popular: true },
            { name: "Couples Retreat", price: "$350", features: ["90 Min Dual Massage", "Champagne & Truffles", "Private Suite Access", "Foot Scrub Add-on", "Take-home Oil"], popular: false }
        ]
    },
    "nails": {
        hero: {
            title: "Luxury Nail Care",
            tagline: "Impeccable manicures and bespoke nail art",
            image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1600&q=80&fit=crop"
        },
        overview: {
            description: "Experience perfection with our luxury manicures and pedicures. We offer everything from classic gel polishes to intricate, long-lasting bespoke nail art designs.",
            benefits: [
                "Long-lasting, chip-resistant finishes",
                "Deep cuticle care and hydration",
                "Extensive collection of premium polishes",
                "Strict hygiene and sterilization protocols"
            ],
            whyChoose: "We use exclusively premium, non-toxic polishes and enforce medical-grade sterilization for all our implements."
        },
        process: [
            { title: "Prep & Shape", duration: "15 mins", desc: "Trimming, filing to your preferred shape, and detailed cuticle work." },
            { title: "Massage & Hydrate", duration: "10 mins", desc: "A relaxing hand or foot massage using rich botanical lotions." },
            { title: "Polish & Art", duration: "30 mins", desc: "Application of base, premium color, custom nail art, and a high-shine top coat." }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=600&q=80&fit=crop"
        ],
        packages: [
            { name: "Classic Manicure", price: "$45", features: ["Shape & Buff", "Cuticle Care", "Standard Polish", "Lotion Application"], popular: false },
            { name: "Gel Polish Art", price: "$75", features: ["Complete Manicure", "Gel Polish", "2 Custom Art Nails", "Hand Massage", "Cuticle Oil"], popular: true },
            { name: "Acrylic Extensions", price: "$110", features: ["Full Set Extensions", "Premium Gel Polish", "Intricate Art / Ombre", "Paraffin Wax Dip"], popular: false }
        ]
    },
    "pedicure": {
        hero: {
            title: "Luxury Pedicure",
            tagline: "The ultimate treat for your feet",
            image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1600&q=80&fit=crop"
        },
        overview: {
            description: "Indulge your feet in our signature spa pedicure, featuring deep exfoliation, a hot stone massage, and flawless gel polish application.",
            benefits: [
                "Removes dead skin and calluses",
                "Relieves tired, aching feet",
                "Restores moisture and softness",
                "Beautiful, long-lasting toe polish"
            ],
            whyChoose: "Our pedicure chairs feature pipeless jet technology to ensure absolute sanitation, and we use medical-grade foot peels for ultimate smoothness."
        },
        process: [
            { title: "Soak & Soften", duration: "15 mins", desc: "A warm mineral salt bath to relax the feet and soften calluses." },
            { title: "Exfoliate & Mask", duration: "25 mins", desc: "Sugar scrub exfoliation followed by a hydrating clay mask wrapped in hot towels." },
            { title: "Massage & Polish", duration: "20 mins", desc: "A calf and foot massage, concluding with flawless polish application." }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1516975080661-468acb0a0307?w=600&q=80&fit=crop",
            "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80&fit=crop"
        ],
        packages: [
            { name: "Express Pedicure", price: "$55", features: ["Mineral Soak", "Shape & Cuticle Care", "Light Scrub", "Standard Polish"], popular: false },
            { name: "Signature Spa Pedi", price: "$85", features: ["Extended Soak", "Callus Removal", "Sugar Scrub & Mask", "Hot Towel Wrap", "Gel Polish"], popular: true },
            { name: "Ultimate Hot Stone", price: "$120", features: ["All Signature Features", "Paraffin Wax Dip", "Hot Stone Massage", "Extended Reflexology", "Premium Gel"], popular: false }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Service ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id') || 'bridal'; // Default to bridal if none provided
    
    const data = serviceData[serviceId];
    if (!data) return; // Fail gracefully if invalid ID

    // 2. Populate Hero
    const heroSection = document.getElementById('sd-hero');
    heroSection.style.backgroundImage = `url('${data.hero.image}')`;
    document.getElementById('sd-hero-title').textContent = data.hero.title;
    document.getElementById('sd-hero-tagline').textContent = data.hero.tagline;

    // 3. Populate Overview
    document.getElementById('sd-overview-desc').textContent = data.overview.description;
    document.getElementById('sd-overview-why').textContent = data.overview.whyChoose;
    
    const benefitsList = document.getElementById('sd-benefits-list');
    benefitsList.innerHTML = '';
    data.overview.benefits.forEach(ben => {
        const li = document.createElement('li');
        li.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> ${ben}`;
        benefitsList.appendChild(li);
    });

    // 4. Populate Process (Timeline)
    const processContainer = document.getElementById('sd-process');
    processContainer.innerHTML = '';
    data.process.forEach((step, index) => {
        const stepHTML = `
            <div class="timeline-step reveal reveal-delay-${index}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h4>${step.title}</h4>
                    <span class="step-duration">${step.duration}</span>
                    <p>${step.desc}</p>
                </div>
            </div>
        `;
        processContainer.insertAdjacentHTML('beforeend', stepHTML);
    });

    // 5. Populate Gallery
    const galleryContainer = document.getElementById('sd-gallery');
    galleryContainer.innerHTML = '';
    data.gallery.forEach((imgSrc, index) => {
        const galHTML = `
            <div class="gallery-item reveal reveal-delay-${index}">
                <img src="${imgSrc}" alt="${data.hero.title} Gallery Image">
            </div>
        `;
        galleryContainer.insertAdjacentHTML('beforeend', galHTML);
    });

    // 6. Populate Packages
    const packagesContainer = document.getElementById('sd-packages');
    packagesContainer.innerHTML = '';
    data.packages.forEach((pkg, index) => {
        let featuresHTML = pkg.features.map(f => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> ${f}</li>`).join('');
        const popClass = pkg.popular ? 'popular' : '';
        const popBadge = pkg.popular ? '<div class="popular-badge">Most Popular</div>' : '';
        
        const pkgHTML = `
            <div class="pkg-card ${popClass} reveal reveal-delay-${index}">
                ${popBadge}
                <h3>${pkg.name}</h3>
                <div class="pkg-price">${pkg.price}</div>
                <ul class="pkg-features">${featuresHTML}</ul>
                <a href="login.html" class="btn-${pkg.popular ? 'primary' : 'outline'}">Select Package</a>
            </div>
        `;
        packagesContainer.insertAdjacentHTML('beforeend', pkgHTML);
    });

    // Initialize Scroll Reveals for dynamically added elements
    setTimeout(() => {
        const revealEls = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) { 
                    e.target.classList.add('visible'); 
                    observer.unobserve(e.target); 
                }
            });
        }, { threshold: 0.10 });
        revealEls.forEach(el => observer.observe(el));
    }, 100);
});
