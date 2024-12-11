function show_Settings(section_Id) {
    // Získat aktuální událost
    var event = window.event;
    if (event && event.stopPropagation) {
        event.stopPropagation();
    }

    // Skrýt všechny sekce
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        // Skrytí všech sekcí
        section.style.display = "none";
    });

    // Zobrazit požadovanou sekci
    var section = document.getElementById(section_Id);
    if (section) {
        // Zobrazení požadované sekce
        section.style.display = "flex";
    }
}







// Funkce pro zobrazení již načteného obsahu, aniž by se načítal znovu
function show_Settings2(targetId, url) {
    var targetElement = document.getElementById(targetId);

    // Pokud sekce ještě není načtena
    if (!targetElement.hasAttribute('data-loaded')) {
        fetch(url)
            .then(response => {
            if (!response.ok) {
                throw new Error('Chyba při načítání obsahu.');
            }
            return response.text();
        })
            .then(data => {
            targetElement.innerHTML = data; // Načteme obsah
            // Označíme sekci jako načtenou
            targetElement.setAttribute('data-loaded', 'true');
            // Ukážeme sekci
            targetElement.style.display = "flex";
        })
            .catch(error => console.error('Chyba:', error));
    } else {
        // Pokud je již obsah načtený, jenom zviditelníme sekci
        targetElement.style.display = "flex";
    }

    // Skrytí všech ostatních sekcí
    var allSections = document.querySelectorAll('section');
    allSections.forEach(function(section) {
        if (section !== targetElement) {
            // Skrytí všech sekcí, kromě té aktuální
            section.style.display = "none";
        }
    });
}