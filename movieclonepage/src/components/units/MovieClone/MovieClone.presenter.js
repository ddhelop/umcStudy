import * as M from "./MovieClone.styles.js";

export default function MovieCloneUI(props) {
  return (
    <M.All>
      <M.Wrapper>
        {props.movies?.results.map((el) => (
          <M.MovieDiv>
            <M.Poster src={el.poster_path} />
            <M.MovieNameDiv>
              <M.MovieName>{el.title}</M.MovieName>
              <M.More>-</M.More>
            </M.MovieNameDiv>

            <M.MovieHoverDiv>
              <M.MovieTitle>{el.title}</M.MovieTitle>
              <M.MovieDec>{el.overview}</M.MovieDec>
            </M.MovieHoverDiv>
          </M.MovieDiv>
        ))}
      </M.Wrapper>
    </M.All>
  );
}
