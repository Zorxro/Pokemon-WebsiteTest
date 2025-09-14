// Account management JavaScript
class AccountManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        // Check if user is already logged in
        this.currentUser = this.getCurrentUser();
        this.updateUI();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Login form
        const loginForm = document.getElementById('login-form-element');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Register form
        const registerForm = document.getElementById('register-form-element');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }
    }

    // Handle user login
    handleLogin(e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Get stored users
        const users = this.getStoredUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            this.setCurrentUser(user);
            this.showSuccess('Login successful!');
            this.updateUI();
        } else {
            this.showError('Invalid email or password');
        }
    }

    // Handle user registration
    handleRegister(e) {
        e.preventDefault();

        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate passwords match
        if (password !== confirmPassword) {
            this.showError('Passwords do not match');
            return;
        }

        // Check if user already exists
        const users = this.getStoredUsers();
        if (users.some(u => u.email === email)) {
            this.showError('User with this email already exists');
            return;
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            username: username,
            email: email,
            password: password, // In production, this should be hashed
            createdAt: new Date().toISOString(),
            collection: []
        };

        // Save user
        users.push(newUser);
        localStorage.setItem('pokemonTCG_users', JSON.stringify(users));

        // Log them in
        this.setCurrentUser(newUser);
        this.showSuccess('Account created successfully!');
        this.updateUI();
    }

    // Get current logged in user
    getCurrentUser() {
        const userData = localStorage.getItem('pokemonTCG_currentUser');
        return userData ? JSON.parse(userData) : null;
    }

    // Set current user
    setCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem('pokemonTCG_currentUser', JSON.stringify(user));
    }

    // Get all stored users
    getStoredUsers() {
        const users = localStorage.getItem('pokemonTCG_users');
        return users ? JSON.parse(users) : [];
    }

    // Update UI based on login status
    updateUI() {
        const authContainer = document.getElementById('auth-container');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const userDashboard = document.getElementById('user-dashboard');

        if (this.currentUser) {
            // User is logged in - show dashboard
            if (loginForm) loginForm.classList.add('hidden');
            if (registerForm) registerForm.classList.add('hidden');
            if (userDashboard) {
                userDashboard.classList.remove('hidden');
                this.updateDashboard();
            }
        } else {
            // User is not logged in - show login form
            if (userDashboard) userDashboard.classList.add('hidden');
            if (loginForm) loginForm.classList.remove('hidden');
            if (registerForm) registerForm.classList.add('hidden');
        }

        // Update navigation
        this.updateNavigation();
    }

    // Update dashboard with user data
    updateDashboard() {
        if (!this.currentUser) return;

        const usernameDisplay = document.getElementById('username-display');
        if (usernameDisplay) {
            usernameDisplay.textContent = this.currentUser.username;
        }

        // Update collection stats
        const collection = this.currentUser.collection || [];
        const totalCards = collection.reduce((sum, item) => sum + (item.quantity || 1), 0);
        const uniqueCards = collection.length;
        const estimatedValue = collection.reduce((sum, item) => sum + (item.estimatedValue || 0), 0);

        const totalCardsEl = document.getElementById('total-cards');
        const uniqueCardsEl = document.getElementById('unique-cards');
        const collectionValueEl = document.getElementById('collection-value');

        if (totalCardsEl) totalCardsEl.textContent = totalCards;
        if (uniqueCardsEl) uniqueCardsEl.textContent = uniqueCards;
        if (collectionValueEl) collectionValueEl.textContent = `$${estimatedValue.toFixed(2)}`;
    }

    // Update navigation based on login status
    updateNavigation() {
        // This will be called from other pages too
        const userMenuLink = document.getElementById('user-menu-toggle');
        if (userMenuLink) {
            if (this.currentUser) {
                userMenuLink.textContent = this.currentUser.username;
                userMenuLink.href = 'account.html';
            } else {
                userMenuLink.textContent = 'Account';
                userMenuLink.href = 'account.html';
            }
        }
    }

    // Add card to user's collection
    addToCollection(cardData) {
        if (!this.currentUser) return false;

        const collection = this.currentUser.collection || [];
        const existingCard = collection.find(item => item.cardId === cardData.id);

        if (existingCard) {
            existingCard.quantity = (existingCard.quantity || 1) + 1;
        } else {
            collection.push({
                cardId: cardData.id,
                cardName: cardData.name,
                setName: cardData.set,
                cardNumber: cardData.number,
                rarity: cardData.rarity,
                quantity: 1,
                estimatedValue: this.getCardValue(cardData),
                addedAt: new Date().toISOString()
            });
        }

        this.currentUser.collection = collection;
        this.updateStoredUser();
        return true;
    }

    // Remove card from collection
    removeFromCollection(cardId) {
        if (!this.currentUser) return false;

        const collection = this.currentUser.collection || [];
        const cardIndex = collection.findIndex(item => item.cardId === cardId);

        if (cardIndex !== -1) {
            const card = collection[cardIndex];
            if (card.quantity > 1) {
                card.quantity--;
            } else {
                collection.splice(cardIndex, 1);
            }
            this.currentUser.collection = collection;
            this.updateStoredUser();
            return true;
        }
        return false;
    }

    // Update stored user data
    updateStoredUser() {
        const users = this.getStoredUsers();
        const userIndex = users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = this.currentUser;
            localStorage.setItem('pokemonTCG_users', JSON.stringify(users));
            localStorage.setItem('pokemonTCG_currentUser', JSON.stringify(this.currentUser));
        }
    }

    // Get estimated card value (placeholder)
    getCardValue(cardData) {
        const baseValues = {
            'common': 0.25,
            'uncommon': 1.00,
            'rare': 3.00,
            'rare-holo': 15.00,
            'rare-ultra': 75.00
        };
        return baseValues[cardData.rarity] || 1.00;
    }

    // Logout user
    logout() {
        this.currentUser = null;
        localStorage.removeItem('pokemonTCG_currentUser');
        this.updateUI();
        this.showSuccess('Logged out successfully');
    }

    // Show success message
    showSuccess(message) {
        this.showMessage(message, 'success');
    }

    // Show error message
    showError(message) {
        this.showMessage(message, 'error');
    }

    // Show message (success or error)
    showMessage(message, type) {
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;

        // Add to page
        document.body.appendChild(messageDiv);

        // Remove after 3 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 3000);
    }

    // Check if user owns a specific card
    hasCard(cardId) {
        if (!this.currentUser || !this.currentUser.collection) return false;
        return this.currentUser.collection.some(item => item.cardId === cardId);
    }

    // Get card quantity in collection
    getCardQuantity(cardId) {
        if (!this.currentUser || !this.currentUser.collection) return 0;
        const card = this.currentUser.collection.find(item => item.cardId === cardId);
        return card ? card.quantity || 1 : 0;
    }
}

// Global functions for HTML onclick handlers
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function logout() {
    if (window.accountManager) {
        window.accountManager.logout();
    }
}

function viewCollection() {
    // Navigate to collection page
    window.location.href = 'collection.html';
}

// Initialize account manager when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.accountManager = new AccountManager();
});

// Export for other modules
window.AccountManager = AccountManager;