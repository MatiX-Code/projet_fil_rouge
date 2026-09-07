let burger = document.querySelector("#burger");
let nav = document.querySelector("#nav-links");

burger.addEventListener("click",() =>{
    nav.classList.toggle("open");
})

// Attendre que le DOM soit chargé
    document.addEventListener('DOMContentLoaded', function() {
    
// 1. Sélectionner la div par son ID
    const calendarEl = document.getElementById('calendrier');

 // 2. Initialiser FullCalendar
    const planning = new FullCalendar.Calendar(calendarEl, {
// 1. Vue par mois au démarrage
    initialView: 'dayGridMonth',
    
    // 2. Langue française
    locale: 'fr',

    // 3. Barre de navigation en haut du calendrier
    headerToolbar: {
      left: 'prev,next,today', // Boutons Précédent, Suivant, Aujourd'hui (à gauche)
      center: 'title',         // Titre du mois et de l'année (au centre)
    //   right: 'dayGridMonth,timeGridWeek,timeGridDay' // Choix des vues : Mois, Semaine, Jour (à droite)
    },
// Nos événements de test (Mock Data)
        events: [
        {
            title: "Tout Conte fée",
            start: '2026-09-10',
            
        },
        {
            title: "Un Ado peut en cacher un autre",
            start : "2026-09-10"
        },
        {
            title : " Le Diner de Cons",
            start : "2026-10-26"
        }
        ]
    });

// 3. Afficher le calendrier
    planning.render();
});