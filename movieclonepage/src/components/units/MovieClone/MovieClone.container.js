import MovieCloneUI from "./MovieClone.presenter.js";
import { movies } from "./movieDummy.js";

export default function MovieClone() {
  console.log(movies.results);
  return <MovieCloneUI movies={movies} />;
}
