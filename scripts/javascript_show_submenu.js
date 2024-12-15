// Funkce pro přepínání viditelnosti podmenu
function show_Submenu(ul_Id) {
    var ul = document.getElementById(ul_Id);
    if (ul.style.display === "flex") {
        ul.style.display = "none";
    } else {
        ul.style.display = "flex";
    }
}


//function show_Submenu2(parent_Id) {
//    // Získat aktuální událost
//    var event = window.event;
//    if (event && event.stopPropagation) {
//        event.stopPropagation();
//    }
//
//    // Skrýt všechna ostatní submenu
//    var allSubmenus = document.querySelectorAll('ul');
//    allSubmenus.forEach(function(submenu) {
//        if (submenu.id !== parent_Id) {
//            submenu.style.display = "none"; // Skryje submenu ostatních rodičů
//        }
//    });
//
//    // Přepnout viditelnost aktuálního submenu
//    var submenu = document.getElementById(parent_Id);
//    if (submenu) {
//        submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
//    }
//}
