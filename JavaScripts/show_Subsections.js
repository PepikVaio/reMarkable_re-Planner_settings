// Funkce pro přepínání viditelnosti sekcí a zajištění, že se neztratí obsah
function show_Settings(section_Id) {
    // Skrýt všechny sekce
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = "none"; // Skrytí všech sekcí
    });

    // Zobrazit požadovanou sekci
    var section = document.getElementById(section_Id);
    if (section) {
        section.style.display = "flex"; // Zobrazení požadované sekce
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
            targetElement.setAttribute('data-loaded', 'true'); // Označíme sekci jako načtenou
            targetElement.style.display = "flex"; // Ukážeme sekci
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
            section.style.display = "none"; // Skrytí všech sekcí, kromě té aktuální
        }
    });
}