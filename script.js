// Funkce pro export nastavení do souboru
function exportSettings() {
    var hideSubheaderCheckbox = document.getElementById("hideSubheader");

    // Vytvoření objektu s aktuálními nastaveními
    var settings = { hideSubheader: hideSubheaderCheckbox.checked };

    // Převedení objektu na JSON
    var settingsJSON = JSON.stringify(settings, null, 2);

    // Požádáme uživatele o zadání jména souboru
    var fileName = prompt("Zadejte jméno souboru (bez přípony):") || 'styles';

    // Vytvoření obsahu pro CSS soubor s aktuálními hodnotami
    var cssContent = ':root {\n' +
        '    --set-Subheader_Hide: ' + (settings.hideSubheader ? 'true' : 'false') + ';\n' +
        '}\n\n' +



        '/* Zde můžete pokračovat s dalším CSS stylováním, přidávat nové proměnné podle potřeby... */';

    // Vytvoření datového URL pro stažení
    var dataUri = 'data:text/css;charset=utf-8,' + encodeURIComponent(cssContent);

    // Vytvoření odkazu pro stažení
    var link = document.createElement('a');
    link.href = dataUri;
    link.download = 'styles_' + fileName + '.css';

    // Přidání odkazu na stránku a vyvolání stažení
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
