import React from 'react'
import { useLocation, useParams } from "react-router-dom"
import * as D from './MovieDetail.style'

const IMG_BASE_URL = 'https://www.themoviedb.org/t/p/original';

export default function MovieDetail() {
  const location = useLocation();

  const { title } = useParams();
  const { poster_path, overview } = location.state
  console.log(location)
  

  return (
    <div>
      <D.Wrapper>
        <D.ImgBox>
          {poster_path && (
            <img src={IMG_BASE_URL + poster_path} alt="Movie Poster" width="500" />
          )}
        </D.ImgBox>
      <D.MovieDetail>
          <h1 style={{ color: 'white' }}>영화 소개 페이지</h1>
          <h2 style={{ color: 'white' }}>{title}</h2>
          <p style={{ color: 'white' }}>{overview}</p>
      </D.MovieDetail>
      </D.Wrapper>
    </div>
  )
}
