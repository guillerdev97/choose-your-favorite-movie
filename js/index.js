"use strict"

const requestUrl = "../peliculas.json";

async function fetchMoviesJson() {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}

fetchMoviesJson().then(data => {
    const movies = data.movies;
    const characters = data.characters;
    for (let index = 0; index < movies.length; index++) {
        const moviesSection = document.getElementById("moviesSection");
        /* let id = movies[index].id; */
        let image = movies[index].img;
        let title = movies[index].nombre;
        let director = movies[index].director;
        let gender = movies[index].gender;
        let link = movies[index].link;
        moviesSection.innerHTML += `
        <div class="col">
            <div class="card text-bg-dark" style="height: 385px;">
                <div class="card-body">
                    <img src="${image}" class="card-img-top" style="height: 210px;">
                    <h5 class="card-title fw-bold">${title}</h5>
                    <p class="card-text">${director}<br>${gender}</p>
                    <a href="${link}" target="_blank" class="btn btn-dark btnHover">Watch Detail</a>
            </div>
        </div>
        `;
    }
    for (let index = 0; index < characters.length; index++) {
        const charactersSection = document.getElementById("charactersSection");
        /* let id = movies[index].id; */
        let image = characters[index].img;
        let title = characters[index].nombre;
        let description = characters[index].descripción;
        let link = characters[index].link;
        charactersSection.innerHTML += `
        <div class="col">
            <div class="card text-bg-dark" style="height: 385px;">
                <div class="card-body">
                    <img src="${image}" class="card-img-top" style="height: 210px;">
                    <h5 class="card-title fw-bold">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${link}" target="_blank" class="btn btn-dark btnHover">Watch Detail</a>
            </div>
        </div>
        `;
    }
})

