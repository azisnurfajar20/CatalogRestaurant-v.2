import TheRestaurantDbSource from '../../data/themoviedb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <section class="content">
          <div class="latest">
              <h1 class="latest__label">Katalog Restaurant</h1>
              <div class="posts" id="restos">
              </div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restos = await TheRestaurantDbSource.ListResto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default NowPlaying;
