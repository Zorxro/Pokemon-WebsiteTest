// Complete Pokemon TCG Sets Data
const pokemonSets = [
    // Mega Evolution Series
    {
        id: 'mega-evolution-promos',
        name: 'Mega Evolution Black Star Promos',
        series: 'Mega Evolution',
        seriesCode: 'mega',
        date: 'Dec 2024',
        cardCount: 50,
        icon: 'MEP'
    },
    {
        id: 'mega-evolution',
        name: 'Mega Evolution',
        series: 'Mega Evolution',
        seriesCode: 'mega',
        date: 'Dec 2024',
        cardCount: 165,
        icon: 'MEV'
    },

    // Scarlet & Violet Series
    {
        id: 'sv-white-flare',
        name: 'White Flare',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Dec 2024',
        cardCount: 180,
        icon: 'WHF'
    },
    {
        id: 'sv-black-bolt',
        name: 'Black Bolt',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Dec 2024',
        cardCount: 180,
        icon: 'BBL'
    },
    {
        id: 'sv-destined-rivals',
        name: 'Destined Rivals',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Dec 2024',
        cardCount: 155,
        icon: 'DSR'
    },
    {
        id: 'sv-journey-together',
        name: 'Journey Together',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Dec 2024',
        cardCount: 210,
        icon: 'JTO'
    },
    {
        id: 'sv-mcdonalds-dragon-discovery',
        name: 'McDonald\'s Dragon Discovery',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Dec 2024',
        cardCount: 6,
        icon: 'MDD'
    },
    {
        id: 'sv-prismatic-evolutions',
        name: 'Prismatic Evolutions',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Dec 2024',
        cardCount: 175,
        icon: 'PEV'
    },
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
        id: 'sv-holiday-calendar-2024',
        name: 'Holiday Calendar 2024',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Dec 2024',
        cardCount: 25,
        icon: 'HC4'
    },
    {
        id: 'sv-trick-or-trade-2024',
        name: 'Trick or Trade 2024',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Oct 2024',
        cardCount: 30,
        icon: 'TOT'
    },
    {
        id: 'sv6.5-shrouded-fable',
        name: 'Shrouded Fable',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Aug 2024',
        cardCount: 99,
        icon: 'SHF'
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
        id: 'sv4.5-paldean-fates',
        name: 'Paldean Fates',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Jan 2024',
        cardCount: 91,
        icon: 'PAF'
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
        id: 'sv3.5-151',
        name: 'Scarlet & Violet - 151',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Sep 2023',
        cardCount: 207,
        icon: '151'
    },
    {
        id: 'sv-holiday-calendar-2023',
        name: 'Holiday Calendar 2023',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Dec 2023',
        cardCount: 25,
        icon: 'HC3'
    },
    {
        id: 'sv-trick-or-trade-2023',
        name: 'Trick or Trade 2023',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Oct 2023',
        cardCount: 30,
        icon: 'TT3'
    },
    {
        id: 'sv-mcdonalds-match-battle-2023',
        name: 'McDonald\'s Match Battle 2023',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Aug 2023',
        cardCount: 15,
        icon: 'MMB'
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
        id: 'sv-energies',
        name: 'Scarlet & Violet Energies',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Mar 2023',
        cardCount: 11,
        icon: 'SVE'
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
    {
        id: 'sv-promos',
        name: 'Scarlet & Violet Promos',
        series: 'Scarlet & Violet',
        seriesCode: 'sv',
        date: 'Mar 2023',
        cardCount: 200,
        icon: 'SVP'
    },

    // Sword & Shield Series
    {
        id: 'swsh12.5-crown-zenith',
        name: 'Crown Zenith',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Jan 2023',
        cardCount: 160,
        icon: 'CRZ'
    },
    {
        id: 'swsh12.5-crown-zenith-gg',
        name: 'Crown Zenith - Galarian Gallery',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Jan 2023',
        cardCount: 70,
        icon: 'GG'
    },
    {
        id: 'swsh12-silver-tempest-tg',
        name: 'Silver Tempest - Trainer Gallery',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Nov 2022',
        cardCount: 30,
        icon: 'STG'
    },
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
        id: 'swsh11-lost-origin-tg',
        name: 'Lost Origin - Trainer Gallery',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Sep 2022',
        cardCount: 30,
        icon: 'LTG'
    },
    {
        id: 'swsh-holiday-calendar-2022',
        name: 'Holiday Calendar 2022',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Dec 2022',
        cardCount: 25,
        icon: 'HC2'
    },
    {
        id: 'swsh-trick-or-trade',
        name: 'Trick or Trade',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Oct 2022',
        cardCount: 30,
        icon: 'TOT'
    },
    {
        id: 'swsh-mcdonalds-match-battle',
        name: 'McDonald\'s Match Battle',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Aug 2022',
        cardCount: 15,
        icon: 'MMB'
    },
    {
        id: 'swsh11.5-pokemon-go',
        name: 'Pokemon Go',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Jul 2022',
        cardCount: 88,
        icon: 'PGO'
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
    {
        id: 'swsh10-astral-radiance-tg',
        name: 'Astral Radiance - Trainer Gallery',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'May 2022',
        cardCount: 30,
        icon: 'ATG'
    },
    {
        id: 'swsh9-brilliant-stars',
        name: 'Brilliant Stars',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Feb 2022',
        cardCount: 172,
        icon: 'BRS'
    },
    {
        id: 'swsh9-brilliant-stars-tg',
        name: 'Brilliant Stars - Trainer Gallery',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Feb 2022',
        cardCount: 30,
        icon: 'BTG'
    },
    {
        id: 'swsh8-fusion-strike',
        name: 'Fusion Strike',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Nov 2021',
        cardCount: 264,
        icon: 'FST'
    },
    {
        id: 'swsh8.5-celebrations',
        name: 'Celebrations',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Oct 2021',
        cardCount: 50,
        icon: 'CEL'
    },
    {
        id: 'swsh7-evolving-skies',
        name: 'Evolving Skies',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Aug 2021',
        cardCount: 237,
        icon: 'EVS'
    },
    {
        id: 'swsh6-chilling-reign',
        name: 'Chilling Reign',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Jun 2021',
        cardCount: 198,
        icon: 'CRE'
    },
    {
        id: 'swsh5-battle-styles',
        name: 'Battle Styles',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Mar 2021',
        cardCount: 163,
        icon: 'BST'
    },
    {
        id: 'swsh4.5-shining-fates',
        name: 'Shining Fates',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Feb 2021',
        cardCount: 72,
        icon: 'SHF'
    },
    {
        id: 'swsh-mcdonalds-25th',
        name: 'McDonald\'s 25th Anniversary',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Feb 2021',
        cardCount: 25,
        icon: 'MC25'
    },
    {
        id: 'swsh4-vivid-voltage',
        name: 'Vivid Voltage',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Nov 2020',
        cardCount: 185,
        icon: 'VIV'
    },
    {
        id: 'swsh3.5-champions-path',
        name: 'Champion\'s Path',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Sep 2020',
        cardCount: 73,
        icon: 'CPA'
    },
    {
        id: 'swsh-futsal-promos',
        name: 'Pokemon Futsal Promos',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Aug 2020',
        cardCount: 5,
        icon: 'FUT'
    },
    {
        id: 'swsh3-darkness-ablaze',
        name: 'Darkness Ablaze',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Aug 2020',
        cardCount: 189,
        icon: 'DAA'
    },
    {
        id: 'swsh2-rebel-clash',
        name: 'Rebel Clash',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'May 2020',
        cardCount: 192,
        icon: 'RCL'
    },
    {
        id: 'swsh1-sword-shield',
        name: 'Sword & Shield',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Feb 2020',
        cardCount: 202,
        icon: 'SSH'
    },
    {
        id: 'swsh-promos',
        name: 'Sword & Shield Promos',
        series: 'Sword & Shield',
        seriesCode: 'swsh',
        date: 'Feb 2020',
        cardCount: 400,
        icon: 'SWSHP'
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
        id: 'sm-mcdonalds-2019-fr',
        name: 'McDonald\'s Collection (2019 FR)',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Oct 2019',
        cardCount: 12,
        icon: 'MC19F'
    },
    {
        id: 'sm-mcdonalds-2019',
        name: 'McDonald\'s Collection (2019)',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Oct 2019',
        cardCount: 12,
        icon: 'MC19'
    },
    {
        id: 'sm11.5-hidden-fates',
        name: 'Hidden Fates',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Aug 2019',
        cardCount: 69,
        icon: 'HIF'
    },
    {
        id: 'sm11-unified-minds',
        name: 'Unified Minds',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Aug 2019',
        cardCount: 236,
        icon: 'UNM'
    },
    {
        id: 'sm10-unbroken-bonds',
        name: 'Unbroken Bonds',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'May 2019',
        cardCount: 214,
        icon: 'UNB'
    },
    {
        id: 'sm-detective-pikachu',
        name: 'Detective Pikachu',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Apr 2019',
        cardCount: 26,
        icon: 'DET'
    },
    {
        id: 'sm9-team-up',
        name: 'Team Up',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Feb 2019',
        cardCount: 181,
        icon: 'TEU'
    },
    {
        id: 'sm8-lost-thunder',
        name: 'Lost Thunder',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Nov 2018',
        cardCount: 214,
        icon: 'LOT'
    },
    {
        id: 'sm-mcdonalds-2018',
        name: 'McDonald\'s Collection (2018)',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Oct 2018',
        cardCount: 12,
        icon: 'MC18'
    },
    {
        id: 'sm7.5-dragon-majesty',
        name: 'Dragon Majesty',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Sep 2018',
        cardCount: 70,
        icon: 'DRM'
    },
    {
        id: 'sm7-celestial-storm',
        name: 'Celestial Storm',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Aug 2018',
        cardCount: 183,
        icon: 'CES'
    },
    {
        id: 'sm6-forbidden-light',
        name: 'Forbidden Light',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'May 2018',
        cardCount: 131,
        icon: 'FLI'
    },
    {
        id: 'sm5-ultra-prism',
        name: 'Ultra Prism',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Feb 2018',
        cardCount: 156,
        icon: 'UPR'
    },
    {
        id: 'sm4-crimson-invasion',
        name: 'Crimson Invasion',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Nov 2017',
        cardCount: 111,
        icon: 'CIN'
    },
    {
        id: 'sm3.5-shining-legends',
        name: 'Shining Legends',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Oct 2017',
        cardCount: 73,
        icon: 'SLG'
    },
    {
        id: 'sm3-burning-shadows',
        name: 'Burning Shadows',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Aug 2017',
        cardCount: 147,
        icon: 'BUS'
    },
    {
        id: 'sm-mcdonalds-2017',
        name: 'McDonald\'s Collection (2017)',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Jun 2017',
        cardCount: 12,
        icon: 'MC17'
    },
    {
        id: 'sm2-guardians-rising',
        name: 'Guardians Rising',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'May 2017',
        cardCount: 145,
        icon: 'GRI'
    },
    {
        id: 'sm-promos',
        name: 'Sun & Moon Promos',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Feb 2017',
        cardCount: 250,
        icon: 'SMP'
    },
    {
        id: 'sm1-sun-moon',
        name: 'Sun & Moon',
        series: 'Sun & Moon',
        seriesCode: 'sm',
        date: 'Feb 2017',
        cardCount: 149,
        icon: 'SUM'
    },

    // XY Series
    {
        id: 'xy12-evolutions',
        name: 'Evolutions',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Nov 2016',
        cardCount: 108,
        icon: 'EVO'
    },
    {
        id: 'xy-mcdonalds-2016',
        name: 'McDonald\'s Collection (2016)',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Oct 2016',
        cardCount: 12,
        icon: 'MC16'
    },
    {
        id: 'xy11-steam-siege',
        name: 'Steam Siege',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Aug 2016',
        cardCount: 114,
        icon: 'STS'
    },
    {
        id: 'xy10-fates-collide',
        name: 'Fates Collide',
        series: 'XY',
        seriesCode: 'xy',
        date: 'May 2016',
        cardCount: 124,
        icon: 'FCO'
    },
    {
        id: 'xy-generations',
        name: 'Generations',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Feb 2016',
        cardCount: 83,
        icon: 'GEN'
    },
    {
        id: 'xy9-breakpoint',
        name: 'BREAKPoint',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Feb 2016',
        cardCount: 122,
        icon: 'BKP'
    },
    {
        id: 'xy-mcdonalds-2015',
        name: 'McDonald\'s Collection (2015)',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Dec 2015',
        cardCount: 12,
        icon: 'MC15'
    },
    {
        id: 'xy8-breakthrough',
        name: 'XY BREAKthrough',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Nov 2015',
        cardCount: 162,
        icon: 'BKT'
    },
    {
        id: 'xy7-ancient-origins',
        name: 'Ancient Origins',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Aug 2015',
        cardCount: 98,
        icon: 'AOR'
    },
    {
        id: 'xy6-roaring-skies',
        name: 'Roaring Skies',
        series: 'XY',
        seriesCode: 'xy',
        date: 'May 2015',
        cardCount: 108,
        icon: 'ROS'
    },
    {
        id: 'xy-double-crisis',
        name: 'Double Crisis',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Mar 2015',
        cardCount: 34,
        icon: 'DCR'
    },
    {
        id: 'xy5-primal-clash',
        name: 'Primal Clash',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Feb 2015',
        cardCount: 160,
        icon: 'PRC'
    },
    {
        id: 'xy4-phantom-forces',
        name: 'Phantom Forces',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Nov 2014',
        cardCount: 119,
        icon: 'PHF'
    },
    {
        id: 'xy3-furious-fists',
        name: 'Furious Fists',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Aug 2014',
        cardCount: 111,
        icon: 'FFI'
    },
    {
        id: 'xy-mcdonalds-2014',
        name: 'McDonald\'s Collection (2014)',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Jun 2014',
        cardCount: 12,
        icon: 'MC14'
    },
    {
        id: 'xy2-flashfire',
        name: 'XY Flashfire',
        series: 'XY',
        seriesCode: 'xy',
        date: 'May 2014',
        cardCount: 106,
        icon: 'FLF'
    },
    {
        id: 'xy-kalos-starter',
        name: 'Kalos Starter Set',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Nov 2013',
        cardCount: 39,
        icon: 'KSS'
    },
    {
        id: 'xy-promos',
        name: 'XY Promos',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Oct 2013',
        cardCount: 220,
        icon: 'XYP'
    },
    {
        id: 'xy1-xy',
        name: 'XY',
        series: 'XY',
        seriesCode: 'xy',
        date: 'Oct 2013',
        cardCount: 146,
        icon: 'XY'
    },

    // Black & White Series
    {
        id: 'bw-radiant-collection',
        name: 'Radiant Collection',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Nov 2012',
        cardCount: 25,
        icon: 'RC'
    },
    {
        id: 'bw11-legendary-treasures',
        name: 'Legendary Treasures',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Nov 2013',
        cardCount: 113,
        icon: 'LTR'
    },
    {
        id: 'bw10-plasma-blast',
        name: 'Plasma Blast',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Aug 2013',
        cardCount: 101,
        icon: 'PLB'
    },
    {
        id: 'bw9-plasma-freeze',
        name: 'Plasma Freeze',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'May 2013',
        cardCount: 116,
        icon: 'PLF'
    },
    {
        id: 'bw8-plasma-storm',
        name: 'Plasma Storm',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Feb 2013',
        cardCount: 135,
        icon: 'PLS'
    },
    {
        id: 'bw7-boundaries-crossed',
        name: 'Boundaries Crossed',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Nov 2012',
        cardCount: 149,
        icon: 'BCR'
    },
    {
        id: 'bw-dragon-vault',
        name: 'Dragon Vault',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Oct 2012',
        cardCount: 20,
        icon: 'DRV'
    },
    {
        id: 'bw6-dragons-exalted',
        name: 'Dragons Exalted',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Aug 2012',
        cardCount: 124,
        icon: 'DRX'
    },
    {
        id: 'bw5-dark-explorers',
        name: 'Dark Explorers',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'May 2012',
        cardCount: 108,
        icon: 'DEX'
    },
    {
        id: 'bw4-next-destinies',
        name: 'Next Destinies',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Feb 2012',
        cardCount: 99,
        icon: 'NXD'
    },
    {
        id: 'bw3-noble-victories',
        name: 'Noble Victories',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Nov 2011',
        cardCount: 101,
        icon: 'NVI'
    },
    {
        id: 'bw2-emerging-powers',
        name: 'Emerging Powers',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Aug 2011',
        cardCount: 98,
        icon: 'EPO'
    },
    {
        id: 'bw1-black-white',
        name: 'Black & White',
        series: 'Black & White',
        seriesCode: 'bw',
        date: 'Apr 2011',
        cardCount: 114,
        icon: 'BLW'
    },

    // Black & White Promos Series
    {
        id: 'bw-mcdonalds-2013',
        name: 'McDonald\'s Collection (2013)',
        series: 'Black & White Promos',
        seriesCode: 'bwp',
        date: 'Sep 2013',
        cardCount: 12,
        icon: 'MC13'
    },
    {
        id: 'bw-mcdonalds-2012',
        name: 'McDonald\'s Collection (2012)',
        series: 'Black & White Promos',
        seriesCode: 'bwp',
        date: 'Oct 2012',
        cardCount: 12,
        icon: 'MC12'
    },
    {
        id: 'bw-mcdonalds-2011',
        name: 'McDonald\'s Collection (2011)',
        series: 'Black & White Promos',
        seriesCode: 'bwp',
        date: 'Sep 2011',
        cardCount: 12,
        icon: 'MC11'
    },
    {
        id: 'bw-promos',
        name: 'Black & White Promos',
        series: 'Black & White Promos',
        seriesCode: 'bwp',
        date: 'Apr 2011',
        cardCount: 101,
        icon: 'BWP'
    },

    // Call of Legends Series
    {
        id: 'col-call-of-legends',
        name: 'Call of Legends',
        series: 'Call of Legends',
        seriesCode: 'col',
        date: 'Feb 2011',
        cardCount: 95,
        icon: 'CL'
    },

    // HeartGold SoulSilver Series
    {
        id: 'hgss4-triumphant',
        name: 'HS Triumphant',
        series: 'HeartGold SoulSilver',
        seriesCode: 'hgss',
        date: 'Nov 2010',
        cardCount: 102,
        icon: 'TRM'
    },
    {
        id: 'hgss3-undaunted',
        name: 'HS Undaunted',
        series: 'HeartGold SoulSilver',
        seriesCode: 'hgss',
        date: 'Aug 2010',
        cardCount: 90,
        icon: 'UD'
    },
    {
        id: 'hgss2-unleashed',
        name: 'HS Unleashed',
        series: 'HeartGold SoulSilver',
        seriesCode: 'hgss',
        date: 'May 2010',
        cardCount: 95,
        icon: 'UL'
    },
    {
        id: 'hgss-promos',
        name: 'HeartGold SoulSilver Promos',
        series: 'HeartGold SoulSilver',
        seriesCode: 'hgss',
        date: 'Feb 2010',
        cardCount: 25,
        icon: 'HGSS'
    },
    {
        id: 'hgss1-heartgold-soulsilver',
        name: 'HeartGold SoulSilver',
        series: 'HeartGold SoulSilver',
        seriesCode: 'hgss',
        date: 'Feb 2010',
        cardCount: 123,
        icon: 'HGSS'
    },

    // Platinum Series
    {
        id: 'pl-pokemon-rumble',
        name: 'Pokemon Rumble',
        series: 'Platinum',
        seriesCode: 'pl',
        date: 'Dec 2009',
        cardCount: 16,
        icon: 'RBL'
    },
    {
        id: 'pl4-arceus',
        name: 'Platinum - Arceus',
        series: 'Platinum',
        seriesCode: 'pl',
        date: 'Nov 2009',
        cardCount: 99,
        icon: 'AR'
    },
    {
        id: 'pl3-supreme-victors',
        name: 'Platinum - Supreme Victors',
        series: 'Platinum',
        seriesCode: 'pl',
        date: 'Aug 2009',
        cardCount: 147,
        icon: 'SV'
    },
    {
        id: 'pl2-rising-rivals',
        name: 'Platinum - Rising Rivals',
        series: 'Platinum',
        seriesCode: 'pl',
        date: 'May 2009',
        cardCount: 111,
        icon: 'RR'
    },
    {
        id: 'pl1-platinum',
        name: 'Platinum',
        series: 'Platinum',
        seriesCode: 'pl',
        date: 'Feb 2009',
        cardCount: 127,
        icon: 'PL'
    },

    // Nintendo Promos Series
    {
        id: 'pop9',
        name: 'POP Series 9',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Mar 2009',
        cardCount: 17,
        icon: 'POP9'
    },
    {
        id: 'pop8',
        name: 'POP Series 8',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Sep 2008',
        cardCount: 17,
        icon: 'POP8'
    },
    {
        id: 'pop7',
        name: 'POP Series 7',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Mar 2008',
        cardCount: 17,
        icon: 'POP7'
    },
    {
        id: 'pop6',
        name: 'POP Series 6',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Sep 2007',
        cardCount: 17,
        icon: 'POP6'
    },
    {
        id: 'pop5',
        name: 'POP Series 5',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Mar 2007',
        cardCount: 17,
        icon: 'POP5'
    },
    {
        id: 'pop4',
        name: 'POP Series 4',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Aug 2006',
        cardCount: 17,
        icon: 'POP4'
    },
    {
        id: 'pop3',
        name: 'POP Series 3',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Apr 2006',
        cardCount: 17,
        icon: 'POP3'
    },
    {
        id: 'pop2',
        name: 'POP Series 2',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Sep 2005',
        cardCount: 17,
        icon: 'POP2'
    },
    {
        id: 'pop1',
        name: 'POP Series 1',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Sep 2004',
        cardCount: 17,
        icon: 'POP1'
    },
    {
        id: 'nintendo-promos',
        name: 'Nintendo Promos',
        series: 'Nintendo Promos',
        seriesCode: 'np',
        date: 'Sep 1999',
        cardCount: 53,
        icon: 'PROMO'
    },

    // Diamond & Pearl Series
    {
        id: 'dp7-stormfront',
        name: 'Stormfront',
        series: 'Diamond & Pearl',
        seriesCode: 'dp',
        date: 'Nov 2008',
        cardCount: 100,
        icon: 'SF'
    },
    {
        id: 'dp6-legends-awakened',
        name: 'Legends Awakened',
        series: 'Diamond & Pearl',
        seriesCode: 'dp',
        date: 'Aug 2008',
        cardCount: 146,
        icon: 'LA'
    },
    {
        id: 'dp5-majestic-dawn',
        name: 'Majestic Dawn',
        series: 'Diamond & Pearl',
        seriesCode: 'dp',
        date: 'May 2008',
        cardCount: 100,
        icon: 'MD'
    },
    {
        id: 'dp4-great-encounters',
        name: 'Great Encounters',
        series: 'Diamond & Pearl',
        seriesCode: 'dp',
        date: 'Feb 2008',
        cardCount: 106,
        icon: 'GE'
    },
    {
        id: 'dp3-secret-wonders',
        name: 'Secret Wonders',
        series: 'Diamond & Pearl',
        seriesCode: 'dp',
        date: 'Nov 2007',
        cardCount: 132,
        icon: 'SW'
    },
    {
        id: 'dp2-mysterious-treasures',
        name: 'Mysterious Treasures',
        series: 'Diamond & Pearl',
        seriesCode: 'dp',
        date: 'Aug 2007',
        cardCount: 123,
        icon: 'MT'
    },
    {
        id: 'dp-promos',
        name: 'DP Black Star Promos',
        series: 'Diamond & Pearl',
        seriesCode: 'dp',
        date: 'May 2007',
        cardCount: 56,
        icon: 'DPP'
    },
    {
        id: 'dp1-diamond-pearl',
        name: 'Diamond & Pearl',
        series: 'Diamond & Pearl',
        seriesCode: 'dp',
        date: 'May 2007',
        cardCount: 130,
        icon: 'DP'
    },

    // EX Ruby & Sapphire Series
    {
        id: 'ex16-power-keepers',
        name: 'EX Power Keepers',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Feb 2007',
        cardCount: 108,
        icon: 'PK'
    },
    {
        id: 'ex15-dragon-frontiers',
        name: 'EX Dragon Frontiers',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Nov 2006',
        cardCount: 101,
        icon: 'DF'
    },
    {
        id: 'ex14-crystal-guardians',
        name: 'EX Crystal Guardians',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Aug 2006',
        cardCount: 100,
        icon: 'CG'
    },
    {
        id: 'ex13-holon-phantoms',
        name: 'EX Holon Phantoms',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'May 2006',
        cardCount: 110,
        icon: 'HP'
    },
    {
        id: 'ex12-legend-maker',
        name: 'EX Legend Maker',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Feb 2006',
        cardCount: 92,
        icon: 'LM'
    },
    {
        id: 'ex11-delta-species',
        name: 'EX Delta Species',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Oct 2005',
        cardCount: 113,
        icon: 'DS'
    },
    {
        id: 'ex10-unseen-forces-unown',
        name: 'EX Unseen Forces Unown Collection',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Aug 2005',
        cardCount: 28,
        icon: 'UF2'
    },
    {
        id: 'ex10-unseen-forces',
        name: 'EX Unseen Forces',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Aug 2005',
        cardCount: 115,
        icon: 'UF'
    },
    {
        id: 'ex9-emerald',
        name: 'EX Emerald',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'May 2005',
        cardCount: 106,
        icon: 'EM'
    },
    {
        id: 'ex8-deoxys',
        name: 'EX Deoxys',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Feb 2005',
        cardCount: 107,
        icon: 'DX'
    },
    {
        id: 'ex7-team-rocket-returns',
        name: 'EX Team Rocket Returns',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Nov 2004',
        cardCount: 109,
        icon: 'TRR'
    },
    {
        id: 'ex6-firered-leafgreen',
        name: 'EX FireRed & LeafGreen',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Aug 2004',
        cardCount: 112,
        icon: 'FRLG'
    },
    {
        id: 'ex5-hidden-legends',
        name: 'EX Hidden Legends',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Jun 2004',
        cardCount: 101,
        icon: 'HL'
    },
    {
        id: 'ex4-team-magma-aqua',
        name: 'EX Team Magma vs Team Aqua',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Mar 2004',
        cardCount: 95,
        icon: 'MA'
    },
    {
        id: 'ex3-dragon',
        name: 'EX Dragon',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Nov 2003',
        cardCount: 97,
        icon: 'DR'
    },
    {
        id: 'ex2-sandstorm',
        name: 'EX Sandstorm',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Sep 2003',
        cardCount: 100,
        icon: 'SS'
    },
    {
        id: 'ex1-ruby-sapphire',
        name: 'EX Ruby & Sapphire',
        series: 'EX Ruby & Sapphire',
        seriesCode: 'ex',
        date: 'Jun 2003',
        cardCount: 109,
        icon: 'RS'
    },

    // e-Card Series
    {
        id: 'ecard4-skyridge',
        name: 'Skyridge',
        series: 'e-Card',
        seriesCode: 'ecard',
        date: 'May 2003',
        cardCount: 144,
        icon: 'SK'
    },
    {
        id: 'ecard3-aquapolis',
        name: 'Aquapolis',
        series: 'e-Card',
        seriesCode: 'ecard',
        date: 'Jan 2003',
        cardCount: 147,
        icon: 'AQ'
    },
    {
        id: 'ecard-best-of-game',
        name: 'Best of Game',
        series: 'e-Card',
        seriesCode: 'ecard',
        date: 'Dec 2002',
        cardCount: 9,
        icon: 'BOG'
    },
    {
        id: 'ecard1-expedition',
        name: 'Expedition',
        series: 'e-Card',
        seriesCode: 'ecard',
        date: 'Sep 2002',
        cardCount: 165,
        icon: 'EX'
    },

    // Legendary Collection Series
    {
        id: 'legendary-collection',
        name: 'Legendary Collection',
        series: 'Legendary Collection',
        seriesCode: 'lc',
        date: 'May 2002',
        cardCount: 110,
        icon: 'LC'
    },

    // Neo Genesis Series
    {
        id: 'neo4-destiny',
        name: 'Neo Destiny',
        series: 'Neo Genesis',
        seriesCode: 'neo',
        date: 'Feb 2001',
        cardCount: 105,
        icon: 'N4'
    },
    {
        id: 'neo3-revelation',
        name: 'Neo Revelation',
        series: 'Neo Genesis',
        seriesCode: 'neo',
        date: 'Sep 2000',
        cardCount: 64,
        icon: 'N3'
    },
    {
        id: 'southern-islands',
        name: 'Southern Islands',
        series: 'Neo Genesis',
        seriesCode: 'neo',
        date: 'Jul 2001',
        cardCount: 18,
        icon: 'SI'
    },
    {
        id: 'neo2-discovery',
        name: 'Neo Discovery',
        series: 'Neo Genesis',
        seriesCode: 'neo',
        date: 'Jun 2000',
        cardCount: 75,
        icon: 'N2'
    },
    {
        id: 'neo1-genesis',
        name: 'Neo Genesis',
        series: 'Neo Genesis',
        seriesCode: 'neo',
        date: 'Dec 2000',
        cardCount: 111,
        icon: 'N1'
    },

    // Topps Chrome Series
    {
        id: 'topps3',
        name: 'Topps Series 3',
        series: 'Topps Chrome',
        seriesCode: 'topps',
        date: 'Aug 2000',
        cardCount: 54,
        icon: 'TOP3'
    },
    {
        id: 'topps2',
        name: 'Topps Series 2',
        series: 'Topps Chrome',
        seriesCode: 'topps',
        date: 'Feb 2000',
        cardCount: 54,
        icon: 'TOP2'
    },
    {
        id: 'topps1',
        name: 'Topps Series 1',
        series: 'Topps Chrome',
        seriesCode: 'topps',
        date: 'Aug 1999',
        cardCount: 54,
        icon: 'TOP1'
    },

    // Gym Heroes Series
    {
        id: 'gym2-challenge',
        name: 'Gym Challenge',
        series: 'Gym Heroes',
        seriesCode: 'gym',
        date: 'Oct 2000',
        cardCount: 132,
        icon: 'G2'
    },
    {
        id: 'gym1-heroes',
        name: 'Gym Heroes',
        series: 'Gym Heroes',
        seriesCode: 'gym',
        date: 'Aug 2000',
        cardCount: 132,
        icon: 'G1'
    },

    // Base Set Series
    {
        id: 'base4-team-rocket',
        name: 'Team Rocket',
        series: 'Base Set',
        seriesCode: 'base',
        date: 'Apr 2000',
        cardCount: 83,
        icon: 'TR'
    },
    {
        id: 'base3-base-set-2',
        name: 'Base Set 2',
        series: 'Base Set',
        seriesCode: 'base',
        date: 'Feb 2000',
        cardCount: 130,
        icon: 'B2'
    },
    {
        id: 'base2-fossil',
        name: 'Fossil',
        series: 'Base Set',
        seriesCode: 'base',
        date: 'Oct 1999',
        cardCount: 62,
        icon: 'FO'
    },
    {
        id: 'wizards-promos',
        name: 'Wizards of the Coast Promos',
        series: 'Base Set',
        seriesCode: 'base',
        date: 'Jul 1999',
        cardCount: 53,
        icon: 'WP'
    },
    {
        id: 'base1.5-jungle',
        name: 'Jungle',
        series: 'Base Set',
        seriesCode: 'base',
        date: 'Jun 1999',
        cardCount: 64,
        icon: 'JU'
    },
    {
        id: 'base1-base-set',
        name: 'Base Set',
        series: 'Base Set',
        seriesCode: 'base',
        date: 'Jan 1999',
        cardCount: 102,
        icon: 'BS'
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
    

    // Search bar in hero section (only if elements exist)
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value;
            filterSearch.value = searchTerm;
            handleSearch();
        });
    }
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

    // Generate logo path based on series and set name
    const logoPath = getLogoPath(set);

    setCard.innerHTML = `
        <div class="set-logo-container">
            <img src="${logoPath}" alt="${set.name} logo" class="set-logo" onerror="this.style.display='none'; this.nextElementSibling.style.marginTop='2rem';" />
            <div class="set-subtitle">${set.name}</div>
        </div>
        <div class="set-meta">
            <span class="set-date">${set.date}</span>
            <span class="set-count">${set.cardCount} cards</span>
        </div>
    `;

    return setCard;
}

// Helper function to get logo path based on series and set name
function getLogoPath(set) {
    const seriesMap = {
        'mega': 'mega-evolutions',
        'sv': 'scarlet-violet',
        'swsh': 'sword-shield',
        'sm': 'sun-moon',
        'xy': 'xy',
        'bw': 'black-white',
        'bwp': 'black-white',
        'col': 'black-white', // Call of Legends era
        'hgss': 'heartgold-soulsilver',
        'pl': 'platinum',
        'np': 'nintendo',
        'dp': 'diamond-pearl',
        'ex': 'ex',
        'ecard': 'e-card',
        'lc': 'legendary-collection',
        'neo': 'neo',
        'topps': 'gym', // Topps maps to gym era
        'gym': 'gym',
        'base': 'base'
    };

    const seriesFolder = seriesMap[set.seriesCode] || 'base';

    // Special name mappings for exact matches
    const nameOverrides = {
        // Mega Evolution series
        'Mega Evolution Black Star Promos': 'mega-evolutions', // Use main logo as fallback
        'Mega Evolution': 'mega-evolutions',

        // Scarlet & Violet
        'Scarlet & Violet - 151': '151',
        'McDonald\'s Dragon Discovery': 'mcdonald_s-dragon-discovery',
        'McDonald\'s Match Battle 2023': 'mcdonald_s-match-battle-2023',

        // Sword & Shield
        'Champion\'s Path': 'champion_s-path',
        'Pokemon Go': 'pokemon-go',
        'McDonald\'s 25th Anniversary': 'ss-mcdonald_s-collection-25th-anniversary',
        'McDonald\'s Match Battle': 'match-battle-2022',
        'Pokemon Futsal Promos': 'fustal-promos',

        // McDonald's Collections
        'McDonald\'s Collection (2019)': 'sm-mcdonald_s-collection',
        'McDonald\'s Collection (2018)': 'sm-mcdonald_s-collection',
        'McDonald\'s Collection (2017)': 'sm-mcdonald_s-collection',
        'McDonald\'s Collection (2016)': 'xy-mcdonald_s-collection',
        'McDonald\'s Collection (2015)': 'xy-mcdonald_s-collection',
        'McDonald\'s Collection (2014)': 'xy-mcdonald_s-collection',
        'McDonald\'s Collection (2013)': 'bw-mcdonald_s-collection',
        'McDonald\'s Collection (2012)': 'bw-mcdonald_s-collection',
        'McDonald\'s Collection (2011)': 'bw-mcdonald_s-collection',

        // XY series
        'XY Flashfire': 'flashfire',
        'XY BREAKthrough': 'breakthrough',

        // EX series
        'EX Ruby & Sapphire': 'ruby-sapphire',
        'EX FireRed & LeafGreen': 'firered-leafgreen',
        'EX Team Magma vs Team Aqua': 'team-magma-vs-team-aqua',

        // Diamond & Pearl
        'Diamond & Pearl': 'diamond-and-pearl',
        'DP Black Star Promos': 'diamond-and-pearl-promos',

        // Base/Classic
        'Base Set': 'base',
        'Base Set 2': 'base-set-2',
        'Jungle': 'jungle',
        'Fossil': 'fossil',
        'Team Rocket': 'team-rocket',
        'Wizards of the Coast Promos': 'wotc-promos'
    };

    // Check for exact name override first
    if (nameOverrides[set.name]) {
        return `logos/${seriesFolder}/${nameOverrides[set.name]}.png`;
    }

    // Convert set name to filename format (lowercase, hyphens instead of spaces and special chars)
    let fileName = set.name
        .toLowerCase()
        .replace(/[&']/g, '') // Remove ampersands and apostrophes
        .replace(/[\s\-]+/g, '-') // Replace spaces and hyphens with single hyphen
        .replace(/[^\w\-]/g, '') // Remove any other special characters
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with single

    return `logos/${seriesFolder}/${fileName}.png`;
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