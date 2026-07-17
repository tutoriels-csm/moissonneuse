// ==================== Données des Tutoriels ====================
// Modifiez ce fichier pour ajouter vos propres tutoriels YouTube

const tutorials = [
    // === CONFIGURATION INITIALE ===
    {
        id: 1,
        title: "Chargement d'un produit dans la moissonneuse",
        description: "Apprenez comment charger correctement un produit dans la moissonneuse CLAAS",
        category: "Configuration Initiale",
        youtubeId: "yg_vJ1MOdFU",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/yg_vJ1MOdFU/hqdefault.jpg"
    },
    {
        id: 2,
        title: "Installation et Configuration de Base",
        description: "Guide complet pour installer et configurer CEMOS CLAAS pour la première fois.",
        category: "Configuration Initiale",
        youtubeId: "VOTRE_VIDEO_ID_1",
        duration: "12:34",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_1/hqdefault.jpg"
    },
    {
        id: 3,
        title: "Connexion et Authentification",
        description: "Apprenez à vous connecter à CEMOS CLAAS avec votre compte utilisateur.",
        category: "Configuration Initiale",
        youtubeId: "VOTRE_VIDEO_ID_2",
        duration: "5:20",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_2/hqdefault.jpg"
    },

    // === GESTION DES MACHINES ===
    {
        id: 4,
        title: "Enregistrement de Vos Machines",
        description: "Comment enregistrer et configurer vos machines CLAAS dans CEMOS.",
        category: "Gestion des Machines",
        youtubeId: "VOTRE_VIDEO_ID_3",
        duration: "8:45",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_3/hqdefault.jpg"
    },
    {
        id: 5,
        title: "Paramétrage des Capteurs",
        description: "Configuration détaillée des capteurs et de la télémétrie des machines.",
        category: "Gestion des Machines",
        youtubeId: "VOTRE_VIDEO_ID_4",
        duration: "15:10",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_4/hqdefault.jpg"
    },
    {
        id: 6,
        title: "Synchronisation des Données",
        description: "Synchronisez vos données entre la machine et la plateforme CEMOS.",
        category: "Gestion des Machines",
        youtubeId: "VOTRE_VIDEO_ID_5",
        duration: "7:30",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_5/hqdefault.jpg"
    },

    // === GESTION DES CULTURES ===
    {
        id: 7,
        title: "Création d'une Nouvelle Culture",
        description: "Étapes pour créer et configurer une nouvelle campagne culturale.",
        category: "Gestion des Cultures",
        youtubeId: "VOTRE_VIDEO_ID_6",
        duration: "10:15",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_6/hqdefault.jpg"
    },
    {
        id: 8,
        title: "Gestion des Parcelles",
        description: "Découvrez comment gérer efficacement vos parcelles de terrain.",
        category: "Gestion des Cultures",
        youtubeId: "VOTRE_VIDEO_ID_7",
        duration: "11:20",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_7/hqdefault.jpg"
    },
    {
        id: 9,
        title: "Suivi des Rendements",
        description: "Analysez et suivez vos rendements avec CEMOS.",
        category: "Gestion des Cultures",
        youtubeId: "VOTRE_VIDEO_ID_8",
        duration: "13:50",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_8/hqdefault.jpg"
    },

    // === OPTIMISATION ET PERFORMANCE ===
    {
        id: 10,
        title: "Optimisation de la Récolte",
        description: "Techniques pour optimiser vos opérations de récolte avec CEMOS.",
        category: "Optimisation et Performance",
        youtubeId: "VOTRE_VIDEO_ID_9",
        duration: "16:30",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_9/hqdefault.jpg"
    },
    {
        id: 11,
        title: "Analyse des Données de Performance",
        description: "Comment analyser et interpréter vos données de performance.",
        category: "Optimisation et Performance",
        youtubeId: "VOTRE_VIDEO_ID_10",
        duration: "14:05",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_10/hqdefault.jpg"
    },
    {
        id: 12,
        title: "Économies de Carburant et Consommation",
        description: "Stratégies pour réduire votre consommation de carburant.",
        category: "Optimisation et Performance",
        youtubeId: "VOTRE_VIDEO_ID_11",
        duration: "9:45",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_11/hqdefault.jpg"
    },

    // === DIAGNOSTIC ET MAINTENANCE ===
    {
        id: 13,
        title: "Diagnostic des Problèmes Courants",
        description: "Guide de diagnostic pour résoudre les problèmes les plus courants.",
        category: "Diagnostic et Maintenance",
        youtubeId: "VOTRE_VIDEO_ID_12",
        duration: "18:20",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_12/hqdefault.jpg"
    },
    {
        id: 14,
        title: "Maintenance Préventive",
        description: "Programme de maintenance préventive avec CEMOS.",
        category: "Diagnostic et Maintenance",
        youtubeId: "VOTRE_VIDEO_ID_13",
        duration: "12:10",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_13/hqdefault.jpg"
    },
    {
        id: 15,
        title: "Interprétation des Alertes",
        description: "Comprenez et répondez aux alertes système dans CEMOS.",
        category: "Diagnostic et Maintenance",
        youtubeId: "VOTRE_VIDEO_ID_14",
        duration: "11:55",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_14/hqdefault.jpg"
    },

    // === RAPPORTS ET ANALYSES ===
    {
        id: 16,
        title: "Génération de Rapports",
        description: "Comment générer et personnaliser vos rapports CEMOS.",
        category: "Rapports et Analyses",
        youtubeId: "VOTRE_VIDEO_ID_15",
        duration: "10:40",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_15/hqdefault.jpg"
    },
    {
        id: 17,
        title: "Export de Données",
        description: "Exportez vos données dans différents formats.",
        category: "Rapports et Analyses",
        youtubeId: "VOTRE_VIDEO_ID_16",
        duration: "8:15",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_16/hqdefault.jpg"
    },
    {
        id: 18,
        title: "Analyse Comparative",
        description: "Comparez vos performances sur plusieurs campagnes.",
        category: "Rapports et Analyses",
        youtubeId: "VOTRE_VIDEO_ID_17",
        duration: "14:30",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_17/hqdefault.jpg"
    },

    // === CONSEILS AVANCÉS ===
    {
        id: 19,
        title: "Intégration avec d'autres Outils",
        description: "Connectez CEMOS avec d'autres applications et services.",
        category: "Conseils Avancés",
        youtubeId: "VOTRE_VIDEO_ID_18",
        duration: "13:25",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_18/hqdefault.jpg"
    },
    {
        id: 20,
        title: "Gestion des Utilisateurs et Permissions",
        description: "Gérez les accès et les permissions pour votre équipe.",
        category: "Conseils Avancés",
        youtubeId: "VOTRE_VIDEO_ID_19",
        duration: "11:10",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_19/hqdefault.jpg"
    },
    {
        id: 21,
        title: "Conseils Pratiques pour Maximiser CEMOS",
        description: "Astuces et bonnes pratiques d'utilisation de CEMOS.",
        category: "Conseils Avancés",
        youtubeId: "VOTRE_VIDEO_ID_20",
        duration: "15:50",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_20/hqdefault.jpg"
    }
];

// ==================== INSTRUCTIONS D'UTILISATION ====================
// Pour ajouter vos propres tutoriels :
//
// 1. Trouvez l'ID de votre vidéo YouTube :
//    - Allez sur votre vidéo YouTube
//    - L'ID se trouve dans l'URL : https://www.youtube.com/watch?v=VOTRE_VIDEO_ID
//
// 2. Modifiez un objet tutorial :
//    {
//        id: [numéro unique],
//        title: "Titre de votre tutoriel",
//        description: "Description courte du contenu",
//        category: "Nom de la catégorie",
//        youtubeId: "VOTRE_VIDEO_ID", // Remplacez par l'ID réel
//        duration: "MM:SS",
//        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID/hqdefault.jpg"
//    }
//
// 3. Les catégories disponibles :
//    - Configuration Initiale
//    - Gestion des Machines
//    - Gestion des Cultures
//    - Optimisation et Performance
//    - Diagnostic et Maintenance
//    - Rapports et Analyses
//    - Conseils Avancés
//
// 4. Enregistrez et rechargez la page pour voir vos changements !
