// Enhanced card price page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadCardDetails();
    setupBackButton();
    loadRecentSets();
    setupBreadcrumb();
    setupCollectionControls();
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

// Load pricing data (simulated) - enhanced for raw and graded
function loadPricingData(card) {
    // Simulate API call delay
    setTimeout(() => {
        const rawPricing = generateRawPricingData(card);
        const gradedPricing = generateGradedPricingData(card);
        updateRawPriceTable(rawPricing);
        updateGradedPriceTable(gradedPricing);

        // Load price history chart
        loadPriceHistoryChart(card);
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

// Generate raw card pricing data
function generateRawPricingData(card) {
    let basePrice = 1;

    switch (card.rarity) {
        case 'common':
            basePrice = Math.random() * 2 + 0.25;
            break;
        case 'uncommon':
            basePrice = Math.random() * 5 + 1;
            break;
        case 'rare':
            basePrice = Math.random() * 15 + 3;
            break;
        case 'rare-holo':
            basePrice = Math.random() * 40 + 10;
            break;
        case 'rare-ultra':
            basePrice = Math.random() * 200 + 50;
            break;
        default:
            basePrice = Math.random() * 10 + 1;
    }

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

// Generate graded card pricing data (PSA)
function generateGradedPricingData(card) {
    const basePricing = generateRawPricingData(card);
    const nmPrice = basePricing['Near Mint'].price;

    return {
        'PSA 10': {
            price: nmPrice * 4.5,
            range: `$${(nmPrice * 4.0).toFixed(2)} - $${(nmPrice * 5.0).toFixed(2)}`,
            lastUpdated: 'Today'
        },
        'PSA 9': {
            price: nmPrice * 2.8,
            range: `$${(nmPrice * 2.5).toFixed(2)} - $${(nmPrice * 3.1).toFixed(2)}`,
            lastUpdated: 'Yesterday'
        },
        'PSA 8': {
            price: nmPrice * 1.8,
            range: `$${(nmPrice * 1.6).toFixed(2)} - $${(nmPrice * 2.0).toFixed(2)}`,
            lastUpdated: '2 days ago'
        }
    };
}

// Update raw price table
function updateRawPriceTable(pricing) {
    const tableBody = document.getElementById('raw-price-table-body');

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

// Update graded price table
function updateGradedPriceTable(pricing) {
    const tableBody = document.getElementById('graded-price-table-body');

    if (!tableBody) return;

    tableBody.innerHTML = '';

    Object.entries(pricing).forEach(([grade, data]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${grade}</td>
            <td><strong>${data.range}</strong></td>
            <td>${data.lastUpdated}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load recent sets sidebar
function loadRecentSets() {
    const recentSetsList = document.getElementById('recent-sets-list');

    if (!recentSetsList) return;

    // Get all sets from window.pokemonSets (from script.js)
    const allSets = window.pokemonSets ? window.pokemonSets : [];

    recentSetsList.innerHTML = '';

    // Show all sets, not just the first 6
    allSets.forEach(set => {
        const setItem = document.createElement('a');
        setItem.className = 'recent-set-item';
        setItem.href = '#';
        setItem.onclick = (e) => {
            e.preventDefault();
            navigateToSet(set);
        };

        setItem.innerHTML = `
            <div class="recent-set-icon ${set.seriesCode}">${set.icon}</div>
            <div class="recent-set-info">
                <div class="recent-set-name">${set.name}</div>
                <div class="recent-set-date">${set.date}</div>
            </div>
        `;

        recentSetsList.appendChild(setItem);
    });
}

// Navigate to set (from recent sets sidebar)
function navigateToSet(set) {
    localStorage.setItem('currentSet', JSON.stringify(set));
    window.location.href = 'set.html';
}

// Setup breadcrumb navigation
function setupBreadcrumb() {
    const currentCard = JSON.parse(localStorage.getItem('currentCard'));
    const currentSet = JSON.parse(localStorage.getItem('currentSet'));

    if (currentCard && currentSet) {
        const breadcrumbSet = document.getElementById('breadcrumb-set');
        const breadcrumbCard = document.getElementById('breadcrumb-card');

        if (breadcrumbSet) {
            breadcrumbSet.textContent = currentSet.name;
        }

        if (breadcrumbCard) {
            breadcrumbCard.textContent = currentCard.name;
        }
    }
}

// Setup collection controls
function setupCollectionControls() {
    const currentCard = JSON.parse(localStorage.getItem('currentCard'));

    if (!currentCard) return;

    updateCollectionUI(currentCard);
}

// Update collection UI based on user's collection
function updateCollectionUI(card) {
    const addBtn = document.getElementById('add-to-collection');
    const removeBtn = document.getElementById('remove-from-collection');
    const countDiv = document.getElementById('collection-count');

    // Check if user is logged in
    if (!window.accountManager || !window.accountManager.currentUser) {
        if (addBtn) addBtn.style.display = 'none';
        if (removeBtn) removeBtn.style.display = 'none';
        if (countDiv) countDiv.style.display = 'none';
        return;
    }

    // Check if user has this card
    const hasCard = window.accountManager.hasCard(card.id);
    const quantity = window.accountManager.getCardQuantity(card.id);

    if (addBtn && removeBtn) {
        if (hasCard) {
            addBtn.classList.add('hidden');
            removeBtn.classList.remove('hidden');
        } else {
            addBtn.classList.remove('hidden');
            removeBtn.classList.add('hidden');
        }
    }

    if (countDiv) {
        if (quantity > 0) {
            countDiv.textContent = `You own ${quantity} of this card`;
            countDiv.style.display = 'block';
        } else {
            countDiv.style.display = 'none';
        }
    }
}

// Load price history chart
function loadPriceHistoryChart(card) {
    const ctx = document.getElementById('price-history-chart');

    if (!ctx) return;

    // Generate sample price history data
    const dates = [];
    const prices = [];
    const basePrice = generateRawPricingData(card)['Near Mint'].price;

    // Generate 30 days of price history
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dates.push(date.toLocaleDateString());

        // Add some price variation
        const variation = (Math.random() - 0.5) * 0.3; // ±15% variation
        const price = basePrice * (1 + variation);
        prices.push(price.toFixed(2));
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Near Mint Price ($)',
                data: prices,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                },
                x: {
                    ticks: {
                        maxTicksLimit: 7
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Collection management functions
function addToCollection() {
    if (!window.accountManager || !window.accountManager.currentUser) {
        alert('Please log in to add cards to your collection.');
        window.location.href = 'account.html';
        return;
    }

    const currentCard = JSON.parse(localStorage.getItem('currentCard'));
    if (!currentCard) return;

    if (window.accountManager.addToCollection(currentCard)) {
        updateCollectionUI(currentCard);
        showMessage('Added to collection!', 'success');
    }
}

function removeFromCollection() {
    if (!window.accountManager || !window.accountManager.currentUser) {
        return;
    }

    const currentCard = JSON.parse(localStorage.getItem('currentCard'));
    if (!currentCard) return;

    if (window.accountManager.removeFromCollection(currentCard.id)) {
        updateCollectionUI(currentCard);
        showMessage('Removed from collection!', 'success');
    }
}

// eBay integration
function openEbayListings() {
    const currentCard = JSON.parse(localStorage.getItem('currentCard'));
    if (!currentCard) return;

    // Construct eBay search URL for sold listings
    const searchQuery = `${currentCard.name} ${currentCard.set} #${currentCard.number} pokemon card`;
    const ebayUrl = `https://www.ebay.com/sch/i.html?_from=R40&_sacat=0&LH_Sold=1&_nkw=${encodeURIComponent(searchQuery)}&rt=nc&LH_Complete=1`;

    window.open(ebayUrl, '_blank');
}

// Enhanced card info display
function loadCardInfo(card) {
    // Update card details
    document.getElementById('card-set').textContent = card.set;
    document.getElementById('card-number-display').textContent = `#${card.number}`;
    document.getElementById('card-rarity').textContent = formatRarity(card.rarity);
    document.getElementById('card-type').textContent = formatType(card.type);
    document.getElementById('card-artist').textContent = 'Various Artists';

    // Update card image with Pokemon card styling
    const cardImage = document.getElementById('card-image');
    if (cardImage) {
        cardImage.innerHTML = `
            <div style="text-align: center; color: white; z-index: 1; position: relative;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🃏</div>
                <div style="font-size: 1.125rem; font-weight: 500;">${card.name}</div>
                <div style="font-size: 0.875rem; margin-top: 0.5rem; opacity: 0.8;">${card.set}</div>
            </div>
        `;

        // Add card number in bottom left corner
        cardImage.style.setProperty('--card-number', `"#${card.number}"`);
    }
}

// Show message helper
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
}