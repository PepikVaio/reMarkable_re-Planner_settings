// Funkce pro přepínání viditelnosti podmenu
function show_Submenu(ul_Id) {
    var ul = document.getElementById(ul_Id);
    if (ul.style.display === "flex") {
        ul.style.display = "none";
    } else {
        ul.style.display = "flex";
    }
}
