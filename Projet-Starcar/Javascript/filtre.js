function appliquerFiltres() {
    
    const categories = Array.from(document.querySelectorAll("#filtres section:nth-of-type(1) input[type='checkbox']:checked"))
        .map(input => input.value.toLowerCase());
    const marques = Array.from(document.querySelectorAll("#filtres section:nth-of-type(2) input[type='checkbox']:checked"))
        .map(input => input.value.toLowerCase());
    const consommations = Array.from(document.querySelectorAll("#filtres section:nth-of-type(3) input[type='checkbox']:checked"))
        .map(input => input.value.toLowerCase());

    
    const offres = document.querySelectorAll(".offre-voiture");

    offres.forEach(offre => {
        const categorie = offre.getAttribute("data-categorie").toLowerCase();
        const marque = offre.getAttribute("data-marque").toLowerCase();
        const consommation = offre.getAttribute("data-consommation").toLowerCase();

        
        const correspondanceCategorie = categories.length === 0 || categories.includes(categorie);
        const correspondanceMarque = marques.length === 0 || marques.includes(marque);
        const correspondanceConsommation = consommations.length === 0 || consommations.includes(consommation);

        
        if (correspondanceCategorie && correspondanceMarque && correspondanceConsommation) {
            offre.classList.remove("hidden");
        } else {
            offre.classList.add("hidden");
        }
    });
}


document.querySelectorAll("#filtres input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", appliquerFiltres);
});
