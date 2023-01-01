import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>Rating</h4>
    <p>⭐️${resto.rating}</p>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (resto) => `
  <article class="post-item">
      <img class="post-item__thumbnail" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}"
      alt="${resto.name}">
        <div class="post-item__content">
          <p>⭐️<span class="resto-item__header__rating__score">${
  resto.rating
}</span></p>
          <h1 class="post-item__title" ><a href="/#/detail/${resto.id}">${
  resto.name
} - ${resto.city}</a></h1>
            <p class="post-item__description">${resto.description}</p>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
