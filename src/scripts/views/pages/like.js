import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <section class="content">
          <div class="latest">
              <h1 class="latest__label">Your Liked Movie</h1>
              <div class="posts" id="movies">
              </div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default Like;
