// Internationalization (i18n) system for Pokemon TCG app
class I18nManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.init();
    }

    init() {
        // Load saved language preference
        const savedLanguage = localStorage.getItem('pokemonTCG_language');
        if (savedLanguage) {
            this.currentLanguage = savedLanguage;
        }

        // Load translations
        this.loadTranslations();

        // Apply translations when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.applyTranslations());
        } else {
            this.applyTranslations();
        }
    }

    loadTranslations() {
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.sets': 'Sets',
                'nav.how_it_works': 'How it works',
                'nav.about': 'About',
                'nav.account': 'Account',

                // Home page
                'hero.title': 'Explore every<br>Pokémon TCG set.',
                'hero.subtitle': 'Browse expansions, drill into card lists, and track details – all in one fast, searchable site.',
                'hero.search_placeholder': 'Search sets or cards... (e.g. Lugia, SV8, Cosmic Eclipse)',
                'hero.search_button': 'Search',
                'hero.quick_picks': 'Quick picks:',

                // Sets page
                'sets.title': 'All Pokémon TCG Sets',
                'sets.description': 'Browse every set, filter by series or year, and click a set to view its cards.',
                'sets.search_placeholder': 'Search by set name or series...',
                'sets.all_series': 'All Series',
                'sets.all_years': 'All Years',
                'sets.sort.newest': 'Newest',
                'sets.sort.oldest': 'Oldest',
                'sets.sort.alphabetical': 'Alphabetical',
                'sets.group_by_series': 'Group by series',
                'sets.cards_count': 'cards',

                // Account page
                'account.signin': 'Sign In',
                'account.signup': 'Create Account',
                'account.email': 'Email',
                'account.password': 'Password',
                'account.username': 'Username',
                'account.confirm_password': 'Confirm Password',
                'account.signin_button': 'Sign In',
                'account.signup_button': 'Create Account',
                'account.no_account': "Don't have an account?",
                'account.have_account': 'Already have an account?',
                'account.signup_link': 'Sign up here',
                'account.signin_link': 'Sign in here',
                'account.welcome': 'Welcome',
                'account.logout': 'Logout',
                'account.my_collection': 'My Collection',
                'account.total_cards': 'Total Cards',
                'account.unique_cards': 'Unique Cards',
                'account.est_value': 'Est. Value',
                'account.recent_activity': 'Recent Activity',
                'account.no_activity': 'No recent activity',
                'account.view_collection': 'View Full Collection',

                // Card page
                'card.back_to_set': '← Back to Set',
                'card.pricing_info': 'Card pricing information',
                'card.market_prices': 'Current Market Prices',
                'card.raw_prices': 'Raw Card Prices',
                'card.graded_prices': 'Graded Card Prices (PSA)',
                'card.condition': 'Condition',
                'card.price_range': 'Price Range',
                'card.last_updated': 'Last Updated',
                'card.card_info': 'Card Information',
                'card.set': 'Set',
                'card.card_number': 'Card Number',
                'card.rarity': 'Rarity',
                'card.type': 'Type',
                'card.artist': 'Artist',
                'card.price_history': 'Price History',
                'card.view_ebay': 'View eBay Sold Listings',
                'card.add_to_collection': 'Add to Collection',
                'card.remove_from_collection': 'Remove from Collection',

                // Set page
                'set.back_to_sets': '← Back to Sets',
                'set.search_cards': 'Search cards...',
                'set.all_rarities': 'All Rarities',
                'set.all_types': 'All Types',
                'set.no_cards_found': 'No cards found matching your filters.',

                // Rarities
                'rarity.common': 'Common',
                'rarity.uncommon': 'Uncommon',
                'rarity.rare': 'Rare',
                'rarity.rare_holo': 'Rare Holo',
                'rarity.rare_ultra': 'Ultra Rare',

                // Types
                'type.pokemon': 'Pokémon',
                'type.trainer': 'Trainer',
                'type.energy': 'Energy',

                // Conditions
                'condition.near_mint': 'Near Mint',
                'condition.lightly_played': 'Lightly Played',
                'condition.moderately_played': 'Moderately Played',
                'condition.heavily_played': 'Heavily Played',
                'condition.damaged': 'Damaged',

                // PSA Grades
                'grade.psa_10': 'PSA 10 (Gem Mint)',
                'grade.psa_9': 'PSA 9 (Mint)',
                'grade.psa_8': 'PSA 8 (NM-MT)',

                // Messages
                'message.login_success': 'Login successful!',
                'message.logout_success': 'Logged out successfully',
                'message.account_created': 'Account created successfully!',
                'message.invalid_credentials': 'Invalid email or password',
                'message.passwords_dont_match': 'Passwords do not match',
                'message.user_exists': 'User with this email already exists',
                'message.added_to_collection': 'Added to collection!',
                'message.removed_from_collection': 'Removed from collection!',

                // Common
                'common.loading': 'Loading...',
                'common.today': 'Today',
                'common.yesterday': 'Yesterday',
                'common.days_ago': 'days ago'
            },

            es: {
                // Navigation
                'nav.home': 'Inicio',
                'nav.sets': 'Sets',
                'nav.how_it_works': 'Cómo funciona',
                'nav.about': 'Acerca de',
                'nav.account': 'Cuenta',

                // Home page
                'hero.title': 'Explora todos los<br>sets de Pokémon TCG.',
                'hero.subtitle': 'Navega expansiones, explora listas de cartas y rastrea detalles – todo en un sitio rápido y buscable.',
                'hero.search_placeholder': 'Buscar sets o cartas... (ej. Lugia, SV8, Cosmic Eclipse)',
                'hero.search_button': 'Buscar',
                'hero.quick_picks': 'Selecciones rápidas:',

                // Sets page
                'sets.title': 'Todos los Sets de Pokémon TCG',
                'sets.description': 'Navega todos los sets, filtra por serie o año, y haz clic en un set para ver sus cartas.',
                'sets.search_placeholder': 'Buscar por nombre de set o serie...',
                'sets.all_series': 'Todas las Series',
                'sets.all_years': 'Todos los Años',
                'sets.sort.newest': 'Más Nuevos',
                'sets.sort.oldest': 'Más Antiguos',
                'sets.sort.alphabetical': 'Alfabético',
                'sets.group_by_series': 'Agrupar por serie',
                'sets.cards_count': 'cartas',

                // Account page
                'account.signin': 'Iniciar Sesión',
                'account.signup': 'Crear Cuenta',
                'account.email': 'Correo Electrónico',
                'account.password': 'Contraseña',
                'account.username': 'Nombre de Usuario',
                'account.confirm_password': 'Confirmar Contraseña',
                'account.signin_button': 'Iniciar Sesión',
                'account.signup_button': 'Crear Cuenta',
                'account.no_account': '¿No tienes una cuenta?',
                'account.have_account': '¿Ya tienes una cuenta?',
                'account.signup_link': 'Regístrate aquí',
                'account.signin_link': 'Inicia sesión aquí',
                'account.welcome': 'Bienvenido',
                'account.logout': 'Cerrar Sesión',
                'account.my_collection': 'Mi Colección',
                'account.total_cards': 'Total de Cartas',
                'account.unique_cards': 'Cartas Únicas',
                'account.est_value': 'Valor Est.',
                'account.recent_activity': 'Actividad Reciente',
                'account.no_activity': 'Sin actividad reciente',
                'account.view_collection': 'Ver Colección Completa',

                // Card page
                'card.back_to_set': '← Volver al Set',
                'card.pricing_info': 'Información de precios de la carta',
                'card.market_prices': 'Precios Actuales del Mercado',
                'card.raw_prices': 'Precios de Carta Sin Graduar',
                'card.graded_prices': 'Precios de Carta Graduada (PSA)',
                'card.condition': 'Condición',
                'card.price_range': 'Rango de Precios',
                'card.last_updated': 'Última Actualización',
                'card.card_info': 'Información de la Carta',
                'card.set': 'Set',
                'card.card_number': 'Número de Carta',
                'card.rarity': 'Rareza',
                'card.type': 'Tipo',
                'card.artist': 'Artista',
                'card.price_history': 'Historial de Precios',
                'card.view_ebay': 'Ver Ventas de eBay',
                'card.add_to_collection': 'Añadir a Colección',
                'card.remove_from_collection': 'Remover de Colección',

                // Set page
                'set.back_to_sets': '← Volver a Sets',
                'set.search_cards': 'Buscar cartas...',
                'set.all_rarities': 'Todas las Rarezas',
                'set.all_types': 'Todos los Tipos',
                'set.no_cards_found': 'No se encontraron cartas que coincidan con tus filtros.',

                // Messages
                'message.login_success': '¡Inicio de sesión exitoso!',
                'message.logout_success': 'Sesión cerrada exitosamente',
                'message.account_created': '¡Cuenta creada exitosamente!',
                'message.invalid_credentials': 'Email o contraseña inválidos',
                'message.passwords_dont_match': 'Las contraseñas no coinciden',
                'message.user_exists': 'Ya existe un usuario con este email',
                'message.added_to_collection': '¡Añadido a la colección!',
                'message.removed_from_collection': '¡Removido de la colección!',

                // Common
                'common.loading': 'Cargando...',
                'common.today': 'Hoy',
                'common.yesterday': 'Ayer',
                'common.days_ago': 'días atrás'
            },

            ja: {
                // Navigation
                'nav.home': 'ホーム',
                'nav.sets': 'セット',
                'nav.how_it_works': '使い方',
                'nav.about': 'について',
                'nav.account': 'アカウント',

                // Home page
                'hero.title': 'すべてのポケモン<br>TCGセットを探索',
                'hero.subtitle': '拡張パック、カードリスト、詳細を1つの高速で検索可能なサイトでブラウズできます。',
                'hero.search_placeholder': 'セットやカードを検索... (例: ルギア, SV8, コズミックエクリプス)',
                'hero.search_button': '検索',
                'hero.quick_picks': 'クイックピック:',

                // Sets page
                'sets.title': 'すべてのポケモンTCGセット',
                'sets.description': 'すべてのセットをブラウズし、シリーズや年でフィルタリングして、セットをクリックしてカードを表示します。',
                'sets.search_placeholder': 'セット名やシリーズで検索...',
                'sets.all_series': 'すべてのシリーズ',
                'sets.all_years': 'すべての年',
                'sets.sort.newest': '新しい順',
                'sets.sort.oldest': '古い順',
                'sets.sort.alphabetical': 'アルファベット順',
                'sets.group_by_series': 'シリーズでグループ化',
                'sets.cards_count': '枚のカード',

                // Account page
                'account.signin': 'サインイン',
                'account.signup': 'アカウント作成',
                'account.email': 'メールアドレス',
                'account.password': 'パスワード',
                'account.username': 'ユーザー名',
                'account.confirm_password': 'パスワード確認',
                'account.signin_button': 'サインイン',
                'account.signup_button': 'アカウント作成',
                'account.no_account': 'アカウントをお持ちでない方は？',
                'account.have_account': 'すでにアカウントをお持ちの方は？',
                'account.signup_link': 'こちらでサインアップ',
                'account.signin_link': 'こちらでサインイン',
                'account.welcome': 'ようこそ',
                'account.logout': 'ログアウト',
                'account.my_collection': 'マイコレクション',
                'account.total_cards': '総カード数',
                'account.unique_cards': 'ユニークカード',
                'account.est_value': '推定価値',
                'account.recent_activity': '最近のアクティビティ',
                'account.no_activity': '最近のアクティビティなし',
                'account.view_collection': 'コレクション全体を表示',

                // Messages
                'message.login_success': 'ログイン成功！',
                'message.logout_success': 'ログアウト成功',
                'message.account_created': 'アカウント作成成功！',
                'message.invalid_credentials': 'メールアドレスまたはパスワードが無効です',
                'message.passwords_dont_match': 'パスワードが一致しません',
                'message.user_exists': 'このメールアドレスのユーザーが既に存在します',

                // Common
                'common.loading': '読み込み中...',
                'common.today': '今日',
                'common.yesterday': '昨日',
                'common.days_ago': '日前'
            },

            fr: {
                // Navigation
                'nav.home': 'Accueil',
                'nav.sets': 'Sets',
                'nav.how_it_works': 'Comment ça marche',
                'nav.about': 'À propos',
                'nav.account': 'Compte',

                // Home page
                'hero.title': 'Explorez tous les<br>sets Pokémon TCG.',
                'hero.subtitle': 'Parcourez les extensions, explorez les listes de cartes et suivez les détails – tout sur un site rapide et consultable.',
                'hero.search_placeholder': 'Rechercher sets ou cartes... (ex. Lugia, SV8, Cosmic Eclipse)',
                'hero.search_button': 'Rechercher',
                'hero.quick_picks': 'Sélections rapides:',

                // Sets page
                'sets.title': 'Tous les Sets Pokémon TCG',
                'sets.description': 'Parcourez tous les sets, filtrez par série ou année, et cliquez sur un set pour voir ses cartes.',
                'sets.search_placeholder': 'Rechercher par nom de set ou série...',
                'sets.all_series': 'Toutes les Séries',
                'sets.all_years': 'Toutes les Années',
                'sets.sort.newest': 'Plus Récents',
                'sets.sort.oldest': 'Plus Anciens',
                'sets.sort.alphabetical': 'Alphabétique',
                'sets.group_by_series': 'Grouper par série',
                'sets.cards_count': 'cartes',

                // Account page
                'account.signin': 'Se Connecter',
                'account.signup': 'Créer un Compte',
                'account.email': 'Email',
                'account.password': 'Mot de Passe',
                'account.username': "Nom d'Utilisateur",
                'account.confirm_password': 'Confirmer le Mot de Passe',
                'account.signin_button': 'Se Connecter',
                'account.signup_button': 'Créer un Compte',
                'account.no_account': "Vous n'avez pas de compte ?",
                'account.have_account': 'Vous avez déjà un compte ?',
                'account.signup_link': 'Inscrivez-vous ici',
                'account.signin_link': 'Connectez-vous ici',
                'account.welcome': 'Bienvenue',
                'account.logout': 'Déconnexion',
                'account.my_collection': 'Ma Collection',
                'account.total_cards': 'Total des Cartes',
                'account.unique_cards': 'Cartes Uniques',
                'account.est_value': 'Valeur Est.',
                'account.recent_activity': 'Activité Récente',
                'account.no_activity': 'Aucune activité récente',
                'account.view_collection': 'Voir la Collection Complète',

                // Messages
                'message.login_success': 'Connexion réussie !',
                'message.logout_success': 'Déconnexion réussie',
                'message.account_created': 'Compte créé avec succès !',
                'message.invalid_credentials': 'Email ou mot de passe invalide',
                'message.passwords_dont_match': 'Les mots de passe ne correspondent pas',
                'message.user_exists': 'Un utilisateur avec cet email existe déjà',

                // Common
                'common.loading': 'Chargement...',
                'common.today': "Aujourd'hui",
                'common.yesterday': 'Hier',
                'common.days_ago': 'jours'
            }
        };
    }

    // Get translation for a key
    t(key, replacements = {}) {
        const translation = this.translations[this.currentLanguage]?.[key]
                         || this.translations['en']?.[key]
                         || key;

        // Replace placeholders
        let result = translation;
        Object.entries(replacements).forEach(([placeholder, value]) => {
            result = result.replace(`{${placeholder}}`, value);
        });

        return result;
    }

    // Change language
    setLanguage(languageCode) {
        if (this.translations[languageCode]) {
            this.currentLanguage = languageCode;
            localStorage.setItem('pokemonTCG_language', languageCode);
            this.applyTranslations();
        }
    }

    // Apply translations to current page
    applyTranslations() {
        // Find all elements with data-i18n attribute
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);

            // Check if translation contains HTML
            if (translation.includes('<br>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Find all elements with data-i18n-placeholder attribute
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Update language selector
        this.updateLanguageSelector();
    }

    // Update language selector UI
    updateLanguageSelector() {
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            languageSelector.value = this.currentLanguage;
        }

        const currentLanguageDisplay = document.querySelector('.current-language');
        if (currentLanguageDisplay) {
            const languageNames = {
                'en': 'English',
                'es': 'Español',
                'ja': '日本語',
                'fr': 'Français'
            };
            currentLanguageDisplay.textContent = languageNames[this.currentLanguage];
        }
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get available languages
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }
}

// Initialize i18n manager
const i18n = new I18nManager();

// Export for global use
window.i18n = i18n;