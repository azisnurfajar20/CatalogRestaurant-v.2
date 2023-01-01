import NowPlaying from '../views/pages/now-playing';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
