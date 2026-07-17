// ==================== Logique d'Application ====================

document.addEventListener('DOMContentLoaded', function() {
    displayCategories();
    setupModalHandler();
});

// ==================== Modal Video Player ====================
function setupModalHandler() {
    const modal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    
    // Fermer le modal en cliquant le X
    if (closeModal) {
        closeModal.addEventListener('click', closeVideoModal);
    }
    
    // Fermer le modal en cliquant en dehors
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeVideoModal();
            }
        });
    }
    
    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeVideoModal();
        }
    });
}

function openVideoModal(youtubeId, title) {
    const modal = document.getElementById('videoModal');
    const modalContent = document.getElementById('modalContent');
    
    // Créer l'iframe YouTube
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    
    modalContent.innerHTML = `
        <button class="close-modal" id="closeModal">&times;</button>
        <div class="modal-content">
            <iframe 
                src="${embedUrl}" 
                title="${title}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
    `;
    
    // Ajouter l'event listener au nouveau bouton X
    document.getElementById('closeModal').addEventListener('click', closeVideoModal);
    
    // Afficher le modal
    modal.classList.add('active');
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.classList.remove('active');
    // Arrêter la vidéo en vidant le contenu
    document.getElementById('modalContent').innerHTML = '';
}

// ==================== Affichage des Catégories ====================
function displayCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    const categories = getUniqueCategories();
    
    categoryGrid.innerHTML = '';
    
    categories.forEach(category => {
        const count = tutorials.filter(t => t.category === category).length;
        
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.onclick = () => filterByCategory(category);
        
        categoryCard.innerHTML = `
            <h3>${category}</h3>
            <span class="category-count">${count} tutoriels</span>
            <p style="margin-top: 1rem; cursor: pointer;">Voir →</p>
        `;
        
        categoryGrid.appendChild(categoryCard);
    });
}

// ==================== Affichage des Tutoriels ====================
function displayTutorials(filteredTutorials = tutorials) {
    const tutorielsGrid = document.getElementById('tutorielsGrid');
    tutorielsGrid.innerHTML = '';
    
    if (filteredTutorials.length === 0) {
        tutorielsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Aucun tutoriel trouvé.</p>';
        return;
    }
    
    filteredTutorials.forEach(tutorial => {
        const tutorialCard = createTutorialCard(tutorial);
        tutorielsGrid.appendChild(tutorialCard);
    });
}

// ==================== Création d'une Carte Tutoriel ====================
function createTutorialCard(tutorial) {
    const card = document.createElement('div');
    card.className = 'tutorial-card';
    
    // Click sur la carte pour ouvrir le modal
    card.addEventListener('click', () => {
        openVideoModal(tutorial.youtubeId, tutorial.title);
    });
    
    card.innerHTML = `
        <div class="tutorial-thumbnail">
            <img src="${tutorial.thumbnail}" alt="${tutorial.title}" loading="lazy">
            <button class="play-button" title="Regarder le tutoriel">
                ▶
            </button>
        </div>
        <div class="tutorial-content">
            <span class="tutorial-category">${tutorial.category}</span>
            <h3>${tutorial.title}</h3>
            <p>${tutorial.description}</p>
            <div class="tutorial-footer">
                <span class="tutorial-duration">⏱ ${tutorial.duration}</span>
            </div>
        </div>
    `;
    
    return card;
}

// ==================== Filtrage par Catégorie ====================
function filterByCategory(category) {
    const filtered = tutorials.filter(t => t.category === category);
    displayTutorials(filtered);
    
    // Afficher la catégorie sélectionnée
    const categoryTitle = document.querySelector('.section-title');
    if (categoryTitle) {
        categoryTitle.textContent = category;
    }
}

// ==================== Récupérer les Catégories Uniques ====================
function getUniqueCategories() {
    const categories = [...new Set(tutorials.map(t => t.category))];
    return categories.sort();
}

// ==================== Recherche (optionnel) ====================
function searchTutorials(query) {
    const searchTerm = query.toLowerCase();
    const filtered = tutorials.filter(t => 
        t.title.toLowerCase().includes(searchTerm) ||
        t.description.toLowerCase().includes(searchTerm) ||
        t.category.toLowerCase().includes(searchTerm)
    );
    displayTutorials(filtered);
}

// ==================== Export des Données ====================
function exportTutorialsAsJSON() {
    const dataStr = JSON.stringify(tutorials, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'tutorials-cemos.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// ==================== Statistiques ====================
function getTutorialStats() {
    return {
        totalTutorials: tutorials.length,
        totalCategories: getUniqueCategories().length,
        categories: getUniqueCategories().map(cat => ({
            name: cat,
            count: tutorials.filter(t => t.category === cat).length
        }))
    };
}

// ==================== Console pour Debug ====================
console.log('Tutoriels CEMOS CLAAS chargés');
console.log('Total de tutoriels:', tutorials.length);
console.log('Catégories:', getUniqueCategories());
console.log('Statistiques:', getTutorialStats());
