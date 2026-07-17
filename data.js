// ==================== Données des Tutoriels ====================
// Modifiez ce fichier pour ajouter vos propres tutoriels YouTube

const tutorials = [
    // === CHARGEMENT PRODUITS, GESTION DES FAVORIS ===
    {
        id: 1,
        title: "Chargement d'un produit dans la moissonneuse",
        description: "Apprenez comment charger correctement un produit dans la moissonneuse CLAAS",
        category: "Chargement produits, gestion des favoris",
        youtubeId: "yg_vJ1MOdFU",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/yg_vJ1MOdFU/hqdefault.jpg"
    },
    {
        id: 2,
        title: "Gestion des favoris",
        description: "Découvrez comment gérer et organiser vos favoris dans CEMOS CLAAS.",
        category: "Chargement produits, gestion des favoris",
        youtubeId: "xUcrtv7DOtE",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/xUcrtv7DOtE/hqdefault.jpg"
    },
    {
        id: 3,
        title: "Installation et Configuration de Base",
        description: "Guide complet pour installer et configurer CEMOS CLAAS pour la première fois.",
        category: "Chargement produits, gestion des favoris",
        youtubeId: "VOTRE_VIDEO_ID_1",
        duration: "12:34",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_1/hqdefault.jpg"
    },
    {
        id: 4,
        title: "Connexion et Authentification",
        description: "Apprenez à vous connecter à CEMOS CLAAS avec votre compte utilisateur.",
        category: "Chargement produits, gestion des favoris",
        youtubeId: "VOTRE_VIDEO_ID_2",
        duration: "5:20",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_2/hqdefault.jpg"
    },

    // === CALIBRATION DES CAPTEURS ===
    {
        id: 5,
        title: "Enregistrement de Vos Machines",
        description: "Comment enregistrer et configurer vos machines CLAAS dans CEMOS.",
        category: "Calibration des capteurs",
        youtubeId: "VOTRE_VIDEO_ID_3",
        duration: "8:45",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_3/hqdefault.jpg"
    },
    {
        id: 6,
        title: "Paramétrage des Capteurs",
        description: "Configuration détaillée des capteurs et de la télémétrie des machines.",
        category: "Calibration des capteurs",
        youtubeId: "VOTRE_VIDEO_ID_4",
        duration: "15:10",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_4/hqdefault.jpg"
    },
    {
        id: 7,
        title: "Synchronisation des Données",
        description: "Synchronisez vos données entre la machine et la plateforme CEMOS.",
        category: "Calibration des capteurs",
        youtubeId: "VOTRE_VIDEO_ID_5",
        duration: "7:30",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_5/hqdefault.jpg"
    },

    // === RÉGLAGES DE LA COUPE ===
    {
        id: 8,
        title: "Création d'une Nouvelle Culture",
        description: "Étapes pour créer et configurer une nouvelle campagne culturale.",
        category: "Réglages de la coupe",
        youtubeId: "VOTRE_VIDEO_ID_6",
        duration: "10:15",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_6/hqdefault.jpg"
    },
    {
        id: 9,
        title: "Gestion des Parcelles",
        description: "Découvrez comment gérer efficacement vos parcelles de terrain.",
        category: "Réglages de la coupe",
        youtubeId: "VOTRE_VIDEO_ID_7",
        duration: "11:20",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_7/hqdefault.jpg"
    },
    {
        id: 10,
        title: "Suivi des Rendements",
        description: "Analysez et suivez vos rendements avec CEMOS.",
        category: "Réglages de la coupe",
        youtubeId: "VOTRE_VIDEO_ID_8",
        duration: "13:50",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_8/hqdefault.jpg"
    },

    // === UTILISATION DES OUTILS D'ASSISTANCE À LA CONDUITE ===
    {
        id: 11,
        title: "Optimisation de la Récolte",
        description: "Techniques pour optimiser vos opérations de récolte avec CEMOS.",
        category: "Utilisation des outils d'assistance à la conduite",
        youtubeId: "VOTRE_VIDEO_ID_9",
        duration: "16:30",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_9/hqdefault.jpg"
    },
    {
        id: 12,
        title: "Analyse des Données de Performance",
        description: "Comment analyser et interpréter vos données de performance.",
        category: "Utilisation des outils d'assistance à la conduite",
        youtubeId: "VOTRE_VIDEO_ID_10",
        duration: "14:05",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_10/hqdefault.jpg"
    },
    {
        id: 13,
        title: "Économies de Carburant et Consommation",
        description: "Stratégies pour réduire votre consommation de carburant.",
        category: "Utilisation des outils d'assistance à la conduite",
        youtubeId: "VOTRE_VIDEO_ID_11",
        duration: "9:45",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_11/hqdefault.jpg"
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
//    - Chargement produits, gestion des favoris
//    - Calibration des capteurs
//    - Réglages de la coupe
//    - Utilisation des outils d'assistance à la conduite
//
// 4. Enregistrez et rechargez la page pour voir vos changements !
