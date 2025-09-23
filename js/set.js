// Set detail page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadSetDetails();
    setupEventListeners();
    loadRecentSets();
});

// Load set details from localStorage
function loadSetDetails() {
    const currentSet = JSON.parse(localStorage.getItem('currentSet'));
    
    if (!currentSet) {
        // Redirect back to home if no set data
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title and info
    document.getElementById('set-title').textContent = currentSet.name;
    document.getElementById('set-info').textContent = 
        `${currentSet.series} • ${currentSet.date} • ${currentSet.cardCount} cards`;
    
    // Update page title
    document.title = `${currentSet.name} - PokéTCG Card Collector`;
    
    // Load cards for this set
    loadCards(currentSet.id);
}

// Setup event listeners for filters and back button
function setupEventListeners() {
    const cardSearch = document.getElementById('card-search');
    const rarityFilter = document.getElementById('rarity-filter');
    const typeFilter = document.getElementById('type-filter');
    const setsSearchInput = document.getElementById('sets-search-input');

    if (cardSearch) cardSearch.addEventListener('input', handleCardFilters);
    if (rarityFilter) rarityFilter.addEventListener('change', handleCardFilters);
    if (typeFilter) typeFilter.addEventListener('change', handleCardFilters);
    if (setsSearchInput) setsSearchInput.addEventListener('input', handleSetsSearch);

    // Setup back button functionality
    setupBackButton();
}

// Setup back button functionality
function setupBackButton() {
    const backButton = document.querySelector('.recent-sets-sidebar .back-button');

    if (backButton) {
        backButton.onclick = function(e) {
            e.preventDefault();
            // Navigate back to the main sets page
            window.location.href = 'index.html';
        };
    }
}

// Load cards for the current set
function loadCards(setId) {
    // In a real application, this would fetch from an API
    // For demo purposes, we'll use sample data
    let cards = window.sampleCards?.[setId] || [];
    
    // If no specific cards for this set, generate some sample cards
    if (cards.length === 0) {
        cards = generateSampleCards();
    }
    
    renderCards(cards);
}

// Generate sample cards for demonstration
function generateSampleCards() {
    const sampleNames = [
        'Pikachu', 'Charizard', 'Blastoise', 'Venusaur', 'Mewtwo', 'Mew',
        'Lugia', 'Ho-Oh', 'Rayquaza', 'Groudon', 'Kyogre', 'Dialga',
        'Professor Research', 'Ultra Ball', 'Quick Ball', 'Energy Switch',
        'Fire Energy', 'Water Energy', 'Grass Energy', 'Lightning Energy'
    ];
    
    const rarities = ['common', 'uncommon', 'rare', 'rare-holo', 'rare-ultra'];
    const types = ['pokemon', 'trainer', 'energy'];
    
    return sampleNames.map((name, index) => ({
        id: index + 1,
        name: name,
        number: String(index + 1).padStart(3, '0'),
        rarity: rarities[Math.floor(Math.random() * rarities.length)],
        type: name.includes('Energy') ? 'energy' : 
              name.includes('Professor') || name.includes('Ball') || name.includes('Switch') ? 'trainer' : 'pokemon'
    }));
}

// Handle card filtering
function handleCardFilters() {
    const currentSet = JSON.parse(localStorage.getItem('currentSet'));
    let cards = window.sampleCards?.[currentSet.id] || generateSampleCards();
    
    // Apply search filter
    const searchTerm = document.getElementById('card-search').value.toLowerCase();
    if (searchTerm) {
        cards = cards.filter(card => 
            card.name.toLowerCase().includes(searchTerm) ||
            card.number.includes(searchTerm)
        );
    }
    
    // Apply rarity filter
    const selectedRarity = document.getElementById('rarity-filter').value;
    if (selectedRarity) {
        cards = cards.filter(card => card.rarity === selectedRarity);
    }
    
    // Apply type filter
    const selectedType = document.getElementById('type-filter').value;
    if (selectedType) {
        cards = cards.filter(card => card.type === selectedType);
    }
    
    renderCards(cards);
}

// Render cards to the grid
function renderCards(cards) {
    const cardsGrid = document.getElementById('cards-grid');
    
    if (!cardsGrid) return;
    
    cardsGrid.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = createCardElement(card);
        cardsGrid.appendChild(cardElement);
    });
    
    if (cards.length === 0) {
        cardsGrid.innerHTML = '<p style="text-align: center; color: #666; font-size: 1.125rem;">No cards found matching your filters.</p>';
    }
}

// Create individual card element
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-item';
    cardDiv.onclick = () => navigateToCard(card);
    
    // Get rarity display name
    const rarityNames = {
        'common': 'Common',
        'uncommon': 'Uncommon', 
        'rare': 'Rare',
        'rare-holo': 'Rare Holo',
        'rare-ultra': 'Ultra Rare'
    };
    
    cardDiv.innerHTML = `
        <div class="card-image">
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🃏</div>
                <div style="font-size: 0.875rem;">Card Image</div>
            </div>
        </div>
        <div class="card-info">
            <div class="card-name">${card.name}</div>
            <div class="card-number">#${card.number} • ${rarityNames[card.rarity] || card.rarity}</div>
        </div>
    `;
    
    return cardDiv;
}

// Navigate to card price page
function navigateToCard(card) {
    // Store card data and current set info for the price page
    const currentSet = JSON.parse(localStorage.getItem('currentSet'));
    
    const cardData = {
        ...card,
        set: currentSet.name,
        setId: currentSet.id,
        setIcon: currentSet.icon
    };
    
    localStorage.setItem('currentCard', JSON.stringify(cardData));
    
    // Navigate to card detail page
    window.location.href = 'card.html';
}

// Load recent sets sidebar (same as card page)
function loadRecentSets(searchTerm = '') {
    const recentSetsList = document.getElementById('recent-sets-list');

    if (!recentSetsList) return;

    // Get all sets from window.pokemonSets (from script.js)
    let allSets = window.pokemonSets ? window.pokemonSets : [];

    // Filter sets based on search term
    if (searchTerm) {
        allSets = allSets.filter(set =>
            set.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            set.series.toLowerCase().includes(searchTerm.toLowerCase()) ||
            set.icon.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    recentSetsList.innerHTML = '';

    // Show filtered sets
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

    // Show message if no sets found
    if (allSets.length === 0 && searchTerm) {
        recentSetsList.innerHTML = '<p style="text-align: center; color: #666; font-size: 0.875rem; padding: 1rem;">No sets found matching your search.</p>';
    }
}

// Handle sets search functionality
function handleSetsSearch() {
    const searchTerm = document.getElementById('sets-search-input').value;
    loadRecentSets(searchTerm);
}

// Navigate to set (from recent sets sidebar)
function navigateToSet(set) {
    localStorage.setItem('currentSet', JSON.stringify(set));
    window.location.href = 'set.html';
}