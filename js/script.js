// Sample Pokemon TCG Sets Data
const pokemonSets = [
    // Scarlet & Violet Series
    {
        id: 'sv8-surging-sparks',
        name: 'Surging Sparks',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Nov 2024',
        cardCount: 191,
        icon: 'SSP'
    },
    {
        id: 'sv7-stellar-crown',
        name: 'Stellar Crown',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Sep 2024',
        cardCount: 142,
        icon: 'SCR'
    },
    {
        id: 'sv6-twilight-masquerade',
        name: 'Twilight Masquerade',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'May 2024',
        cardCount: 167,
        icon: 'TWM'
    },
    {
        id: 'sv5-temporal-forces',
        name: 'Temporal Forces',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Mar 2024',
        cardCount: 162,
        icon: 'TEF'
    },
    {
        id: 'sv4-paradox-rift',
        name: 'Paradox Rift',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Nov 2023',
        cardCount: 182,
        icon: 'PAR'
    },
    {
        id: 'sv3-obsidian-flames',
        name: 'Obsidian Flames',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Aug 2023',
        cardCount: 197,
        icon: 'OBF'
    },
    {
        id: 'sv2-paldea-evolved',
        name: 'Paldea Evolved',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Jun 2023',
        cardCount: 193,
        icon: 'PAL'
    },
    {
        id: 'sv1-scarlet-violet',
        name: 'Scarlet & Violet',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Mar 2023',
        cardCount: 198,
        icon: 'SVI'
    },

    // Sword & Shield Series
    {
        id: 'swsh12-silver-tempest',
        name: 'Silver Tempest',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Nov 2022',
        cardCount: 195,
        icon: 'SIT'
    },
    {
        id: 'swsh11-lost-origin',
        name: 'Lost Origin',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Sep 2022',
        cardCount: 196,
        icon: 'LOR'
    },
    {
        id: 'swsh10-astral-radiance',
        name: 'Astral Radiance',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'May 2022',
        cardCount: 189,
        icon: 'ASR'
    },

    // Sun & Moon Series
    {
        id: 'sm12-cosmic-eclipse',
        name: 'Cosmic Eclipse',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Nov 2019',
        cardCount: 236,
        icon: 'CEC'
    },
    {
        id: 'sm11-unified-minds',
        name: 'Unified Minds',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Aug 2019',
        cardCount: 236,
        icon: 'UNM'
    }
];

// Sample cards data for demonstration
const sampleCards = {
    'sv8-surging-sparks': [
        { id: 1, name: 'Pikachu ex', number: '001', rarity: 'rare-ultra', type: 'pokemon' },
        { id: 2, name: 'Raichu', number: '002', rarity: 'rare', type: 'pokemon' },
        { id: 3, name: 'Professor Research', number: '190', rarity: 'uncommon', type: 'trainer' },
        { id: 4, name: 'Lightning Energy', number: '191', rarity: 'common', type: 'energy' },
        { id: 5, name: 'Charizard ex', number: '015', rarity: 'rare-ultra', type: 'pokemon' },
        { id: 6, name: 'Blastoise', number: '025', rarity: 'rare-holo', type: 'pokemon' },
        { id: 7, name: 'Venusaur', number: '035', rarity: 'rare-holo', type: 'pokemon' },
        { id: 8, name: 'Ultra Ball', number: '180', rarity: 'uncommon', type: 'trainer' }
    ]
};

// DOM Elements
const setsGrid = document.getElementById('sets-grid');
const filterSearch = document.querySelector('.filter-search');
const seriesFilter = document.getElementById('series-filter');
const yearFilter = document.getElementById('year-filter');
const sortFilter = document.getElementById('sort-filter');
const groupBySeriesCheckbox = document.getElementById('group-by-series');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderSets(pokemonSets);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    filterSearch.addEventListener('input', handleSearch);
    
    // Filter functionality
    seriesFilter.addEventListener('change', handleFilters);
    yearFilter.addEventListener('change', handleFilters);
    sortFilter.addEventListener('change', handleFilters);
    groupBySeriesCheckbox.addEventListener('change', handleFilters);
    
    // Quick pick buttons
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const series = this.getAttribute('data-series');
            seriesFilter.value = series;
            handleFilters();
        });
    });

    // Search bar in hero section
    document.querySelector('.search-btn').addEventListener('click', function() {
        const searchTerm = document.querySelector('.search-input').value;
        filterSearch.value = searchTerm;
        handleSearch();
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = filterSearch.value.toLowerCase();
    const filteredSets = pokemonSets.filter(set => 
        set.name.toLowerCase().includes(searchTerm) || 
        set.series.toLowerCase().includes(searchTerm) ||
        set.icon.toLowerCase().includes(searchTerm)
    );
    renderSets(filteredSets);
}

// Handle all filters
function handleFilters() {
    let filteredSets = [...pokemonSets];
    
    // Apply series filter
    const selectedSeries = seriesFilter.value;
    if (selectedSeries) {
        filteredSets = filteredSets.filter(set => set.seriesCode === selectedSeries);
    }
    
    // Apply year filter
    const selectedYear = yearFilter.value;
    if (selectedYear) {
        filteredSets = filteredSets.filter(set => set.date.includes(selectedYear));
    }
    
    // Apply search filter
    const searchTerm = filterSearch.value.toLowerCase();
    if (searchTerm) {
        filteredSets = filteredSets.filter(set => 
            set.name.toLowerCase().includes(searchTerm) || 
            set.series.toLowerCase().includes(searchTerm) ||
            set.icon.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    const sortBy = sortFilter.value;
    if (sortBy === 'newest') {
        filteredSets.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
        filteredSets.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'alphabetical') {
        filteredSets.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    renderSets(filteredSets);
}

// Render sets to the grid
function renderSets(sets) {
    if (!setsGrid) return;
    
    setsGrid.innerHTML = '';
    
    const groupBySeries = groupBySeriesCheckbox?.checked ?? true;
    
    if (groupBySeries) {
        renderGroupedSets(sets);
    } else {
        renderFlatSets(sets);
    }
}

// Render sets grouped by series
function renderGroupedSets(sets) {
    const groupedSets = groupSetsBySeries(sets);
    
    Object.entries(groupedSets).forEach(([series, seriesSets]) => {
        // Create series title
        const seriesGroup = document.createElement('div');
        seriesGroup.className = 'series-group';
        
        const seriesTitle = document.createElement('h3');
        seriesTitle.className = 'series-title';
        seriesTitle.textContent = series;
        seriesGroup.appendChild(seriesTitle);
        
        setsGrid.appendChild(seriesGroup);
        
        // Create set cards for this series
        seriesSets.forEach(set => {
            const setCard = createSetCard(set);
            setsGrid.appendChild(setCard);
        });
    });
}

// Render sets in flat layout
function renderFlatSets(sets) {
    sets.forEach(set => {
        const setCard = createSetCard(set);
        setsGrid.appendChild(setCard);
    });
}

// Group sets by series
function groupSetsBySeries(sets) {
    return sets.reduce((groups, set) => {
        const series = set.series;
        if (!groups[series]) {
            groups[series] = [];
        }
        groups[series].push(set);
        return groups;
    }, {});
}

// Create individual set card
function createSetCard(set) {
    const setCard = document.createElement('div');
    setCard.className = 'set-card';
    setCard.onclick = () => navigateToSet(set);
    
    setCard.innerHTML = `
        <div class="set-icon ${set.seriesCode}">${set.icon}</div>
        <div class="set-name">${set.name}</div>
        <div class="set-series">${set.series}</div>
        <div class="set-meta">
            <span class="set-date">${set.date}</span>
            <span class="set-count">${set.cardCount} cards</span>
        </div>
    `;
    
    return setCard;
}

// Navigate to set detail page
function navigateToSet(set) {
    // Store set data in localStorage for the detail page
    localStorage.setItem('currentSet', JSON.stringify(set));
    
    // Navigate to set detail page
    window.location.href = 'set.html';
}

// Export functions for other pages to use
window.pokemonSets = pokemonSets;
window.sampleCards = sampleCards;