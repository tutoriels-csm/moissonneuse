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
        description: "Découvrez comment gérer et organiser vos favoris dans CEBIS.",
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
        title: "Régler les positions CONTOUR et AUTO CONTOUR",
        description: "Apprenez à régler correctement les positions CONTOUR et AUTO CONTOUR de votre moissonneuse.",
        category: "Réglages de la coupe",
        youtubeId: "fSQoGX-LpnU",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/fSQoGX-LpnU/hqdefault.jpg"
    },
    {
        id: 7,
        title: "Régler le tablier VARIO",
        description: "Découvrez comment régler le tablier VARIO pour optimiser votre récolte.",
        category: "Réglages de la coupe",
        youtubeId: "sCuZ6YiILQc",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/sCuZ6YiILQc/hqdefault.jpg"
    },

    // === UTILISATION DES OUTILS D'ASSISTANCE À LA CONDUITE ===
    {
        id: 8,
        title: "Régler le CRUISE PILOT",
        description: "Apprenez à configurer et utiliser le CRUISE PILOT pour une conduite optimisée.",
        category: "Utilisation des outils d'assistance à la conduite",
        youtubeId: "OvDbUC-OYUY",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/OvDbUC-OYUY/hqdefault.jpg"
    },
    {
        id: 9,
        title: "Optimiser les stratégies avec CEMOS AUTO PRO",
        description: "Découvrez comment optimiser vos stratégies de récolte avec CEMOS AUTO PRO.",
        category: "Utilisation des outils d'assistance à la conduite",
        youtubeId: "sZq71o275TM",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/sZq71o275TM/hqdefault.jpg"
    },
    {
        id: 10,
        title: "Proposition d'optimisation avec CEMOS DIALOG",
        description: "Explorez les propositions d'optimisation automatiques de CEMOS DIALOG.",
        category: "Utilisation des outils d'assistance à la conduite",
        youtubeId: "ahPUQ3MBD8I",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/ahPUQ3MBD8I/hqdefault.jpg"
    },

    // === CEMOS ===
    {
        id: 11,
        title: "Introduction à CEMOS",
        description: "Découvrez le système CEMOS et ses fonctionnalités d'automatisation avancée.",
        category: "CEMOS",
        youtubeId: "sZq71o275TM",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/sZq71o275TM/hqdefault.jpg"
    },
    {
        id: 12,
        title: "Configuration de CEMOS",
        description: "Apprenez à configurer et personnaliser CEMOS selon vos besoins.",
        category: "CEMOS",
        youtubeId: "ahPUQ3MBD8I",
        duration: "00:00",
        thumbnail: "https://img.youtube.com/vi/ahPUQ3MBD8I/hqdefault.jpg"
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
//    - CEMOS
//
// 4. Enregistrez et rechargez la page pour voir vos changements !
