// Card price page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadCardDetails();
    setupBackButton();
});

// Load card details from localStorage
function loadCardDetails() {
    const currentCard = JSON.parse(localStorage.getItem('currentCard'));
    
    if (!currentCard) {
        // Redirect back to home if no card data
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title and header
    document.getElementById('card-title').textContent = currentCard.name;
    document.getElementById('card-subtitle').textContent = 
        `${currentCard.set} • #${currentCard.number}`;
    
    // Update page title
    document.title = `${currentCard.name} - PokéTCG Card Collector`;
    
    // Load card information
    loadCardInfo(currentCard);
    
    // Load pricing data
    loadPricingData(currentCard);
}

// Setup back button functionality
function setupBackButton() {
    const backButton = document.getElementById('back-to-set');
    const currentCard = JSON.parse(localStorage.getItem('currentCard'));
    
    if (backButton && currentCard) {
        backButton.href = 'set.html';
        backButton.onclick = function(e) {
            e.preventDefault();
            // Ensure the set data is still available
            const currentSet = JSON.parse(localStorage.getItem('currentSet'));
            if (!currentSet) {
                // Reconstruct set data from card info
                const setData = {
                    id: currentCard.setId,
                    name: currentCard.set,
                    icon: currentCard.setIcon
                };
                localStorage.setItem('currentSet', JSON.stringify(setData));
            }
            window.location.href = 'set.html';
        };
    }
}

// Load card information
function loadCardInfo(card) {
    // Update card details
    document.getElementById('card-set').textContent = card.set;
    document.getElementById('card-number').textContent = `#${card.number}`;
    document.getElementById('card-rarity').textContent = formatRarity(card.rarity);
    document.getElementById('card-type').textContent = formatType(card.type);
    document.getElementById('card-artist').textContent = 'Various Artists'; // Placeholder
    
    // Update card image placeholder
    const cardImage = document.getElementById('card-image');
    if (cardImage) {
        cardImage.innerHTML = `
            <div style="text-align: center; color: #999;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🃏</div>
                <div style="font-size: 1.125rem; font-weight: 500;">${card.name}</div>
                <div style="font-size: 0.875rem; margin-top: 0.5rem;">#${card.number}</div>
            </div>
        `;
    }
}

// Load pricing data (simulated)
function loadPricingData(card) {
    // Simulate API call delay
    setTimeout(() => {
        const pricing = generatePricingData(card);
        updatePriceTable(pricing);
    }, 500);
}

// Generate simulated pricing data
function generatePricingData(card) {
    // Base price varies by rarity
    let basePrice = 1;
    
    switch (card.rarity) {
        case 'common':
            basePrice = Math.random() * 2 + 0.25; // $0.25 - $2.25
            break;
        case 'uncommon':
            basePrice = Math.random() * 5 + 1; // $1 - $6
            break;
        case 'rare':
            basePrice = Math.random() * 15 + 3; // $3 - $18
            break;
        case 'rare-holo':
            basePrice = Math.random() * 40 + 10; // $10 - $50
            break;
        case 'rare-ultra':
            basePrice = Math.random() * 200 + 50; // $50 - $250
            break;
        default:
            basePrice = Math.random() * 10 + 1;
    }
    
    // Different conditions have different multipliers
    return {
        'Near Mint': {
            price: basePrice,
            range: `$${(basePrice * 0.9).toFixed(2)} - $${(basePrice * 1.1).toFixed(2)}`,
            lastUpdated: 'Today'
        },
        'Lightly Played': {
            price: basePrice * 0.8,
            range: `$${(basePrice * 0.7).toFixed(2)} - $${(basePrice * 0.9).toFixed(2)}`,
            lastUpdated: 'Yesterday'
        },
        'Moderately Played': {
            price: basePrice * 0.6,
            range: `$${(basePrice * 0.5).toFixed(2)} - $${(basePrice * 0.7).toFixed(2)}`,
            lastUpdated: '2 days ago'
        },
        'Heavily Played': {
            price: basePrice * 0.4,
            range: `$${(basePrice * 0.3).toFixed(2)} - $${(basePrice * 0.5).toFixed(2)}`,
            lastUpdated: '3 days ago'
        }
    };
}

// Update the price table with actual data
function updatePriceTable(pricing) {
    const tableBody = document.getElementById('price-table-body');
    
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    Object.entries(pricing).forEach(([condition, data]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${condition}</td>
            <td><strong>${data.range}</strong></td>
            <td>${data.lastUpdated}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Helper functions
function formatRarity(rarity) {
    const rarityNames = {
        'common': 'Common',
        'uncommon': 'Uncommon',
        'rare': 'Rare',
        'rare-holo': 'Rare Holo',
        'rare-ultra': 'Ultra Rare'
    };
    return rarityNames[rarity] || rarity;
}

function formatType(type) {
    const typeNames = {
        'pokemon': 'Pokémon',
        'trainer': 'Trainer',
        'energy': 'Energy'
    };
    return typeNames[type] || type;
}