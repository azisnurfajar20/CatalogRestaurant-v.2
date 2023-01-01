import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="resto"></div>
      <div class="resto">
        <div class="resto__overview">
          <h3>Foods Menu</h3>
          <p id="food"></p>
          <h3>Drink Menu</h3>
          <p id="drink"></p>
          <h3>Review Customer</h3>
          <p id="review"></p>
        </div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheRestaurantDbSource.detailRestaurant(url.id);

    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie.restaurant);

    const foodContainer = document.querySelector('#food');
    Object.keys(movie.restaurant.menus.foods).forEach((index) => {
      foodContainer.innerHTML += `<li>${movie.restaurant.menus.foods[index].name}</li>`;
    });

    const drinkContainer = document.querySelector('#drink');
    Object.keys(movie.restaurant.menus.drinks).forEach((index) => {
      drinkContainer.innerHTML += `<li>${movie.restaurant.menus.drinks[index].name}</li>`;
    });

    const reviewContainer = document.querySelector('#review');
    Object.keys(movie.restaurant.customerReviews).forEach((index) => {
      reviewContainer.innerHTML += `
      <article class="post-item">
        <div class="post-item__content">
          <h1 class="post-item__title" >${movie.restaurant.customerReviews[index].name}</h1>
          <h3 class="post-item__title" >${movie.restaurant.customerReviews[index].review}</h3>
          <p class="post-item__description">${movie.restaurant.customerReviews[index].date}</p>
        </div>
      </article>
      `;
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.restaurant.id,
        name: movie.restaurant.name,
        description: movie.restaurant.description,
        pictureId: movie.restaurant.pictureId,
        rating: movie.restaurant.rating,
        city: movie.restaurant.city,
      },
    });
  },
};

export default Detail;
