// Collection page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
    loadCollectionData();
    setupEventListeners();
});

// Check if user is logged in
function checkAuthentication() {
    if (!window.accountManager || !window.accountManager.currentUser) {
        // Redirect to account page if not logged in
        window.location.href = 'account.html';
        return;
    }

    // Update page title with username
    const titleElement = document.getElementById('collection-title');
    if (titleElement) {
        titleElement.textContent = `${window.accountManager.currentUser.username}'s Collection`;
    }
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('collection-search');
    const setFilter = document.getElementById('collection-set-filter');
    const rarityFilter = document.getElementById('collection-rarity-filter');
    const sortSelect = document.getElementById('collection-sort');

    if (searchInput) searchInput.addEventListener('input', filterCollection);
    if (setFilter) setFilter.addEventListener('change', filterCollection);
    if (rarityFilter) rarityFilter.addEventListener('change', filterCollection);
    if (sortSelect) sortSelect.addEventListener('change', filterCollection);
}

// Load and display collection data
function loadCollectionData() {
    if (!window.accountManager || !window.accountManager.currentUser) return;

    const collection = window.accountManager.currentUser.collection || [];

    updateCollectionStats(collection);
    populateSetFilter(collection);
    renderCollection(collection);
}

// Update collection statistics
function updateCollectionStats(collection) {
    const totalCards = collection.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const uniqueCards = collection.length;
    const setsRepresented = [...new Set(collection.map(item => item.setName))].length;
    const estimatedValue = collection.reduce((sum, item) =>
        sum + (item.estimatedValue * (item.quantity || 1)), 0);

    // Update stat displays
    updateStatDisplay('total-cards-stat', totalCards);
    updateStatDisplay('unique-cards-stat', uniqueCards);
    updateStatDisplay('sets-represented', setsRepresented);
    updateStatDisplay('estimated-value', `$${estimatedValue.toFixed(2)}`);
}

// Update individual stat display
function updateStatDisplay(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
    }
}

// Populate set filter dropdown
function populateSetFilter(collection) {
    const setFilter = document.getElementById('collection-set-filter');
    if (!setFilter) return;

    // Get unique sets from collection
    const uniqueSets = [...new Set(collection.map(item => item.setName))];

    // Clear existing options (except "All Sets")
    while (setFilter.children.length > 1) {
        setFilter.removeChild(setFilter.lastChild);
    }

    // Add set options
    uniqueSets.sort().forEach(setName => {
        const option = document.createElement('option');
        option.value = setName;
        option.textContent = setName;
        setFilter.appendChild(option);
    });
}

// Render collection cards
function renderCollection(collection) {
    const collectionGrid = document.getElementById('collection-grid');
    const emptyState = document.getElementById('empty-collection');

    if (!collectionGrid || !emptyState) return;

    if (collection.length === 0) {
        collectionGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    collectionGrid.style.display = 'grid';
    emptyState.style.display = 'none';
    collectionGrid.innerHTML = '';

    collection.forEach(item => {
        const cardElement = createCollectionCardElement(item);
        collectionGrid.appendChild(cardElement);
    });
}

// Create individual collection card element
function createCollectionCardElement(item) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'collection-card';

    // Format rarity
    const rarityNames = {
        'common': 'Common',
        'uncommon': 'Uncommon',
        'rare': 'Rare',
        'rare-holo': 'Rare Holo',
        'rare-ultra': 'Ultra Rare'
    };

    const formattedRarity = rarityNames[item.rarity] || item.rarity;
    const totalValue = (item.estimatedValue * (item.quantity || 1)).toFixed(2);

    cardDiv.innerHTML = `
        <div class="collection-card-image">
            <div class="card-placeholder">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🃏</div>
                <div style="font-size: 0.75rem;">Card Image</div>
            </div>
            <div class="quantity-badge">${item.quantity || 1}x</div>
        </div>
        <div class="collection-card-info">
            <div class="card-name">${item.cardName}</div>
            <div class="card-details">
                <span class="card-set">${item.setName}</span>
                <span class="card-number">#${item.cardNumber}</span>
            </div>
            <div class="card-meta">
                <span class="card-rarity">${formattedRarity}</span>
                <span class="card-value">$${totalValue}</span>
            </div>
            <div class="card-actions">
                <button class="action-btn view-btn" onclick="viewCard('${item.cardId}', '${item.setName}')">
                    View
                </button>
                <button class="action-btn remove-btn" onclick="removeCardFromCollection('${item.cardId}')">
                    Remove
                </button>
            </div>
        </div>
    `;

    return cardDiv;
}

// Filter collection based on user input
function filterCollection() {
    if (!window.accountManager || !window.accountManager.currentUser) return;

    let collection = window.accountManager.currentUser.collection || [];

    // Apply search filter
    const searchTerm = document.getElementById('collection-search').value.toLowerCase();
    if (searchTerm) {
        collection = collection.filter(item =>
            item.cardName.toLowerCase().includes(searchTerm) ||
            item.setName.toLowerCase().includes(searchTerm) ||
            item.cardNumber.includes(searchTerm)
        );
    }

    // Apply set filter
    const selectedSet = document.getElementById('collection-set-filter').value;
    if (selectedSet) {
        collection = collection.filter(item => item.setName === selectedSet);
    }

    // Apply rarity filter
    const selectedRarity = document.getElementById('collection-rarity-filter').value;
    if (selectedRarity) {
        collection = collection.filter(item => item.rarity === selectedRarity);
    }

    // Apply sorting
    const sortBy = document.getElementById('collection-sort').value;
    switch (sortBy) {
        case 'recent':
            collection.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
            break;
        case 'name':
            collection.sort((a, b) => a.cardName.localeCompare(b.cardName));
            break;
        case 'value':
            collection.sort((a, b) => (b.estimatedValue * (b.quantity || 1)) - (a.estimatedValue * (a.quantity || 1)));
            break;
        case 'quantity':
            collection.sort((a, b) => (b.quantity || 1) - (a.quantity || 1));
            break;
    }

    renderCollection(collection);
}

// View card details
function viewCard(cardId, setName) {
    // Find the card data and set data
    const collection = window.accountManager.currentUser.collection || [];
    const cardItem = collection.find(item => item.cardId == cardId);

    if (!cardItem) return;

    // Create card data object for the card page
    const cardData = {
        id: cardItem.cardId,
        name: cardItem.cardName,
        number: cardItem.cardNumber,
        rarity: cardItem.rarity,
        type: 'pokemon', // Default type
        set: cardItem.setName,
        setId: 'unknown',
        setIcon: 'SET'
    };

    // Create set data object
    const setData = {
        id: 'unknown',
        name: cardItem.setName,
        icon: 'SET'
    };

    // Store data and navigate
    localStorage.setItem('currentCard', JSON.stringify(cardData));
    localStorage.setItem('currentSet', JSON.stringify(setData));
    window.location.href = 'card.html';
}

// Remove card from collection
function removeCardFromCollection(cardId) {
    if (!window.accountManager) return;

    // Show confirmation
    if (!confirm('Are you sure you want to remove this card from your collection?')) {
        return;
    }

    if (window.accountManager.removeFromCollection(cardId)) {
        // Reload collection data
        loadCollectionData();
        showMessage('Card removed from collection!', 'success');
    } else {
        showMessage('Failed to remove card', 'error');
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

// Export functions for global access
window.collectionManager = {
    loadCollectionData,
    filterCollection,
    viewCard,
    removeCardFromCollection
};