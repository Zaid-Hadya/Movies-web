async function fetchMovies() {
    try {
        const response = await fetch('http://localhost:3000/getMovies');
        const movies = await response.json();
        const movieList = document.getElementById('movie-list');

       
        movieList.innerHTML = '';
        let rowContainer = '';

        // Loop through the movies and create rows of 4 movies each
        movies.forEach((movie, index) => {
            if (index % 4 === 0) {
                if (index > 0) {
                    rowContainer += '</div>';
                }
                // Start a new row
                rowContainer += '<div class="movie-row">';
            }
            
            // Add the movie to the current row
            rowContainer += `
                <div class="movie">
                    
                    <img src="${movie.image_url}" alt="${movie.title}" class="center" style="width:200px;height:auto;">
                    <h2>${movie.title}</h2>
                    <p>Release Date: ${new Date(movie.release_date).toDateString()}</p>
                    <p>${movie.description}</p>
                </div>
            `;

            // If it's the last movie, close the row div
            if (index === movies.length - 1) {
                rowContainer += '</div>';
            }
        });

       
        movieList.innerHTML = rowContainer;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

window.onload = fetchMovies;
