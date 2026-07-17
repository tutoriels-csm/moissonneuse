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

    // === CALIBRATION DES CAPTEURS ===
    {
        id: 3,
        title: "Calibration du quantimètre",
        description: "Apprenez à calibrer correctement le quantimètre de votre moissonneuse CLAAS.",
        category: "Calibration des capteurs",
        youtubeId: "OmpPT2jmrA8",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/OmpPT2jmrA8/hqdefault.jpg"
    },
    {
        id: 4,
        title: "Calibration de capteurs liés à CEMOS Dialog",
        description: "Configuration et calibration des capteurs intégrés à CEMOS Dialog.",
        category: "Calibration des capteurs",
        youtubeId: "j3skWj0wlxo",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/j3skWj0wlxo/hqdefault.jpg"
    },
    {
        id: 5,
        title: "Calibration de la Grain Quality Camera",
        description: "Procédure de calibration de la caméra de qualité de grain.",
        category: "Calibration des capteurs",
        youtubeId: "hei91mWOxfY",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/hei91mWOxfY/hqdefault.jpg"
    },

    // === RÉGLAGES DE LA COUPE ===
    {
        id: 6,
        title: "Création d'une Nouvelle Culture",
        description: "Étapes pour créer et configurer une nouvelle campagne culturale.",
        category: "Réglages de la coupe",
        youtubeId: "VOTRE_VIDEO_ID_6",
        duration: "10:15",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_6/hqdefault.jpg"
    },
    {
        id: 7,
        title: "Gestion des Parcelles",
        description: "Découvrez comment gérer efficacement vos parcelles de terrain.",
        category: "Réglages de la coupe",
        youtubeId: "VOTRE_VIDEO_ID_7",
        duration: "11:20",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_7/hqdefault.jpg"
    },
    {
        id: 8,
        title: "Suivi des Rendements",
        description: "Analysez et suivez vos rendements avec CEMOS.",
        category: "Réglages de la coupe",
        youtubeId: "VOTRE_VIDEO_ID_8",
        duration: "13:50",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_8/hqdefault.jpg"
    },

    // === UTILISATION DES OUTILS D'ASSISTANCE À LA CONDUITE ===
    {
        id: 9,
        title: "Optimisation de la Récolte",
        description: "Techniques pour optimiser vos opérations de récolte avec CEMOS.",
        category: "Utilisation des outils d'assistance à la conduite",
        youtubeId: "VOTRE_VIDEO_ID_9",
        duration: "16:30",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_9/hqdefault.jpg"
    },
    {
        id: 10,
        title: "Analyse des Données de Performance",
        description: "Comment analyser et interpréter vos données de performance.",
        category: "Utilisation des outils d'assistance à la conduite",
        youtubeId: "VOTRE_VIDEO_ID_10",
        duration: "14:05",
        thumbnail: "https://img.youtube.com/vi/VOTRE_VIDEO_ID_10/hqdefault.jpg"
    },
    {
        id: 11,
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
