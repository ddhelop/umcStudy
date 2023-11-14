import {movies } from '../../movieDummy'
import * as M from './Movie.style'

export default function Movie() {
  return (
    <M.All>
    <M.Wrapper>
      {movies.results.map((el) => (
        <M.MovieDiv>
          <M.Poster src={"https://www.themoviedb.org/t/p/original"+el.poster_path} />
          <M.MovieNameDiv>
            <M.MovieName>{el.title}</M.MovieName>
            <M.More>{el.vote_average}</M.More>
          </M.MovieNameDiv>

          <M.MovieHoverDiv>
            <M.MovieTitle>{el.title}</M.MovieTitle>
            <M.MovieDec>{el.overview}</M.MovieDec>
          </M.MovieHoverDiv>
        </M.MovieDiv>
      ))}
    </M.Wrapper>
  </M.All>
  )
}