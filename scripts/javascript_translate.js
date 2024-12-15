// Funkce pro získání seznamu dostupných jazyků
function get_Available_Languages() {
    const languages = new Set();
    Object.values(translations).forEach(translation => {
        Object.keys(translation).forEach(lang => languages.add(lang));
    });
    // Vrátí pole unikátních jazyků
    return Array.from(languages);
}

// Funkce pro změnu jazyka
function change_Language() {
    // Získáme všechny dostupné jazyky
    const available_Languages = get_Available_Languages();
    // Aktuální jazyk
    const current_Language = get_Current_Language();
    const next_Index = (available_Languages.indexOf(current_Language) + 1) % available_Languages.length;
    const new_Language = available_Languages[next_Index];

    // Uložíme nový jazyk do localStorage
    localStorage.setItem('language', new_Language);

    // Aktualizujeme texty na stránce podle nového jazyka
    update_Text(new_Language);
}

// Funkce pro aktualizaci textů na stránce podle jazyka
function update_Text(language) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        // Získáme klíč z data-translate
        const key = el.dataset.translate;
        let text = translations[key]?.[language] || translations[key]?.["en"] || key;

        // Pokud text obsahuje placeholder [language], nahradíme jej aktuálním jazykem
        if (text.includes("[language]")) {
            text = text.replace("[language]", language);
        }

        el.textContent = text;
    });
}

// Funkce pro získání aktuálně nastaveného jazyka z localStorage (pokud není nastaven, vrátí 'en' jako výchozí)
function get_Current_Language() {
    return localStorage.getItem('language') || 'en';
}

// Po načtení stránky (DOM je připraven) nastavíme jazyk na základě uložené hodnoty v localStorage
document.addEventListener("DOMContentLoaded", () => {
    update_Text(get_Current_Language());
});
