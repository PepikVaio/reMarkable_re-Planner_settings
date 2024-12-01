// Funkce pro export nastavení do souboru
function export_Settings() {
    // Získání hodnot pro jednotlivá nastavení
    var settings = {
        account_Name_First: get_ValueById("account_Name_First"),
        account_Name_Last: get_ValueById("account_Name_Last"),
        account_Password: get_ValueById("account_Password"),
        // Další nastavení mohou být přidána zde stejně
    };

    // Sestavení názvu souboru
    var file_Name = settings.account_Name_First + "_" + settings.account_Name_Last;
    
    // Volitelné přidání hesla
    var file_Password = settings.account_Password.replace(/\s+/g, '_'); // Nahrazení mezer podtržítky
    if (file_Password) {
        file_Name += '_' + file_Password;
    }

    // Generování CSS obsahu
    var content_CSS = generate_CSS(settings);

    // Vytvoření datového URL pro stažení
    var data_Uri = 'data:text/css;charset=utf-8,' + encodeURIComponent(content_CSS);

    // Vytvoření odkazu pro stažení
    var link = document.createElement('a');
    link.href = data_Uri;
    link.download = 'settings_' + file_Name + '.css';

    // Přidání odkazu na stránku a vyvolání stažení
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Funkce pro získání hodnoty z inputu podle ID
function get_ValueById(id) {
    var element = document.getElementById(id);
    return element ? element.value : ''; // Vrátí hodnotu inputu nebo prázdný řetězec
}

// Funkce pro generování CSS obsahu
function generate_CSS(settings) {
    let content_CSS = ':root {\n';
    for (const [key, value] of Object.entries(settings)) {
        if (typeof value === 'boolean') {
            content_CSS += `    --${key}: ${value ? 'true' : 'false'};\n`;
        } else {
            content_CSS += `    --${key}: ${value};\n`;
        }
    }
    content_CSS += '}\n\n';
    return content_CSS;
}