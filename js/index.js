"use strict"

const requestUrl = "../peliculas.json";

async function fetchMoviesJson() {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}

fetchMoviesJson().then(data => {
    const movies = data.peliculas;
    for (let index = 0; index < movies.length; index++) {
        const moviesSection = document.getElementById("moviesSection");
        /* let id = movies[index].id; */
        let image = movies[index].img;
        let title = movies[index].nombre;
        let description = movies[index].descripción;
        moviesSection.innerHTML += `
        <div class="col">
            <div class="card text-bg-dark h-100">
                <img src="../img/camera.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <img src="${image}" class="card-img-top">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
            </div>
        </div>
        `;
    }
})