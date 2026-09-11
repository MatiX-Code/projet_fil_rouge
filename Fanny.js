let burger = document.querySelector("#burger");
let nav = document.querySelector("#nav-links");

burger.addEventListener("click",() =>{
    nav.classList.toggle("open");
})

document.addEventListener('DOMContentLoaded', function() {
    
    const calendarEl = document.getElementById('calendrier');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'fr',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        buttons: {
            today: {
                text: "Aujourd'hui" // Force le texte affiché en français
            }
        },
        // AJOUT CORRECTION V7 : Injecte une classe personnalisée sur le jour d'aujourd'hui
        dayCellClass: function(state) {
            if (state.isToday) {
                return 'mon-jour-actuel'; // Le nom de classe que nous allons styliser en CSS
            }
            return '';
        },
        events: [
            {
                title: 'Concert - Fanny Egéa',
                start: '2026-09-15',
                color: '#64DFDF',
                textColor: '#111111'
            }
        ]
    });
    
    calendar.render();
});

