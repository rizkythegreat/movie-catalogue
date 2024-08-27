import FavoriteMovieIdb from '../../data/favorite-movie-idb'
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteMovieView from './liked-movies/favorite-movie-view'

const view = new FavoriteMovieView();

const Like = {
  async render () {
    return view.getTemplate();
  },

  async afterRender () {
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb})
  }
}

export default Like
