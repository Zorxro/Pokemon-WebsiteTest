// Language selector functionality
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.toggle('active');

    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(event) {
        if (!event.target.closest('.language-selector')) {
            dropdown.classList.remove('active');
            document.removeEventListener('click', closeDropdown);
        }
    });
}

function changeLanguage(languageCode) {
    // Update i18n language
    if (window.i18n) {
        window.i18n.setLanguage(languageCode);
    }

    // Update language selector UI
    updateLanguageSelectorUI(languageCode);

    // Close dropdown
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.remove('active');

    // Update active language option
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
        option.classList.remove('active');
        if (option.onclick.toString().includes(`'${languageCode}'`)) {
            option.classList.add('active');
        }
    });
}

function updateLanguageSelectorUI(languageCode) {
    const flagElement = document.getElementById('current-flag');
    const nameElement = document.querySelector('.current-language');

    const languageData = {
        'en': { flag: '🇺🇸', name: 'English' },
        'es': { flag: '🇪🇸', name: 'Español' },
        'ja': { flag: '🇯🇵', name: '日本語' },
        'fr': { flag: '🇫🇷', name: 'Français' }
    };

    if (languageData[languageCode]) {
        if (flagElement) flagElement.textContent = languageData[languageCode].flag;
        if (nameElement) nameElement.textContent = languageData[languageCode].name;
    }
}

// Initialize language selector when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language display based on current i18n language
    if (window.i18n) {
        const currentLang = window.i18n.getCurrentLanguage();
        updateLanguageSelectorUI(currentLang);

        // Update active state in dropdown
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            option.classList.remove('active');
            if (option.onclick.toString().includes(`'${currentLang}'`)) {
                option.classList.add('active');
            }
        });
    }
});

// Export for other modules
window.languageSelector = {
    toggleLanguageDropdown,
    changeLanguage,
    updateLanguageSelectorUI
};