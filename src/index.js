// Your code here
document.addEventListener('DOMContentLoaded', function() {
        fetchMovieDetails('http://localhost:3000/films/1');
        fetchMovies('http://localhost:3000/films');
      });
      
      function fetchMovieDetails(url) {
        fetch(url)
          .then(response => response.json())
          .then(movie => {
            displayMovieDetails(movie);
          })
          .catch(error => {
            console.error('Error fetching movie details:', error);
          });
      }
      
      function fetchMovies(url) {
        const filmsList = document.getElementById('films');
      
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const placeholderLi = filmsList.querySelector('.film.item');
            if (placeholderLi) {
              filmsList.removeChild(placeholderLi);
            }
      
            data.forEach(movie => {
              const li = createMovieListItem(movie);
              filmsList.appendChild(li);
            });
          })
          .catch(error => {
            console.error('Error fetching movie data:', error);
          });
      }
      
      function createMovieListItem(movie) {
        const li = document.createElement('li');
        li.classList.add('film', 'item');
        li.textContent = movie.title;
      
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.style.background = "maroon"
        deleteButton.addEventListener('click', function(event) {
          event.stopPropagation();
          deleteFilm(movie.id, li);
        });
      
        li.appendChild(deleteButton);
        li.addEventListener('click', function() {
          displayMovieDetails(movie);
        });
      
        return li;
      }
  
  function displayMovieDetails(movie) {
    const poster = document.getElementById('poster');
    poster.src = movie.poster;
    poster.alt = movie.title;
  
    document.getElementById('title').textContent = movie.title;
    document.getElementById('runtime').textContent = movie.runtime + ' minutes';
    document.getElementById('showtime').textContent = movie.showtime;
    document.getElementById('film-info').textContent = movie.description;
  
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById('ticket-num').textContent = availableTickets;
  
  }
  
  function deleteFilm(filmId, listItem) {
    if (confirm('Are you aware of the concequece?')) {
      fetch(`http://localhost:3000/films/${filmId}`, {
        method: 'DELETE'
      })
      body: json.stringify(data)
      .then(response => {
        if (response.ok) {
          listItem.remove();
        } else {
          throw new Error('Failed to delete film');
        }
      })
      .catch(error => {
        console.error('Error deleting film:', error);
      });
    }

  }
let body = document.getElementById("bodi")
body.style.background = "black"
let header = document.getElementById("head1")
header.style.background = "orange"