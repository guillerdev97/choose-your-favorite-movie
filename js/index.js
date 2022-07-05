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
        let title = movies[index].nombre;
        let director = movies[index].director;
        let gender = movies[index].clasificacion;
        moviesSection.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img src="../img/camera.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
    }
})