function _load() {

    // Tervezés
    
    // Pontosság, figyelem (;,(),{},[],stb)
    
    // Search

    let rootE = document.getElementById("root");
    
    let notes = [];
    
    notes.push({
        tag: "div",
        content: `
        Mindig úgy kezdjük a scriptet hogy a load esemény function-t létrehozzuk és meghívjuk
        `
    });
    notes.push({
        tag: "code",
        content: `
        function _load() {
    
        }
        window.addEventListener("load", _load);
        `
    });
    
    for (note of notes) {
    
            rootE.insertAdjacentHTML("beforeend", `
                <${note.tag}>${note.content}</${note.tag}>
            `);
    };

}

window.addEventListener("load", _load);