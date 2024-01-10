async function afficher() {

    let template = document.querySelector("#card-template");
    for (let k = 1; k < 101; k++){
        let clone = document.importNode(template.content, true);

        let response = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + k)
        let response_json = await response.json()

        newContent = clone.firstElementChild.innerHTML
        .replace(/{{nom}}/g, response_json.names[4].name)
        .replace(/{{image}}/g, )
        .replace(/{{numero}}/g, k)
        .replace(/{{lien_image}}/g, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + k + ".svg")

        clone.firstElementChild.innerHTML = newContent;
        affichage_poke.appendChild(clone);
    }

    document.getElementById("button").style.display = "none";
}

async function get(item) {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    let fetchOptions = {method: 'GET' };

    try {
        const responsetype = await fetch(url, fetchOptions);
        const responsetype_json = await responsetype.json();
        
    }
    catch(error) {
        console.error('erreur', error);
    }
}
