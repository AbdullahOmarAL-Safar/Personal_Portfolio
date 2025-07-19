const searchInput = document.getElementById("movie-search");
const suggestionsList = document.getElementById("suggestions");
const movieTitle = document.getElementById("movie-title");
const moviePoster = document.getElementById("movie-poster");
const movieRating = document.getElementById("movie-rating");
const moviePlot = document.getElementById("movie-plot");

// Fetch movie details by ID
function fetchMovieDetails(movieId) {
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=1123b3e`)
        .then(response => response.json())
        .then(data => {
            movieTitle.textContent = data.Title;
            moviePoster.src = data.Poster;
            movieRating.textContent = `IMDb Rating: ${data.imdbRating}`;
            moviePlot.textContent = data.Plot;
        })
        .catch(error => console.error("Error fetching movie data:", error));
}

// Fetch movie suggestions by search term
function fetchMovieSuggestions(query) {
    if (query.length < 3) {
        suggestionsList.innerHTML = ""; // Clear suggestions if query is too short
        return;
    }

    fetch(`http://www.omdbapi.com/?s=${query}&apikey=1123b3e`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                suggestionsList.innerHTML = ""; // Clear previous suggestions
                data.Search.forEach(movie => {
                    const li = document.createElement("li");
                    li.textContent = movie.Title;
                    li.addEventListener("click", () => {
                        fetchMovieDetails(movie.imdbID); // Fetch details for selected movie
                        suggestionsList.innerHTML = ""; // Clear suggestions
                        searchInput.value = ""; // Clear search input
                    });
                    suggestionsList.appendChild(li);
                });
            } else {
                suggestionsList.innerHTML = `<li>No results found</li>`;
            }
        })
        .catch(error => console.error("Error fetching movie suggestions:", error));
}

// Add event listener for input
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    fetchMovieSuggestions(query);
});