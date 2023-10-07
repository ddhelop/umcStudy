import styled from "@emotion/styled";

export const All = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #252548;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieDiv = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;
  margin: 10px 15px 7px 15px;
  background-color: #3a3b66;
  position: relative;
`;

export const Poster = styled.img`
  width: 200px;
  height: 230px;
`;

export const MovieNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  color: white;
  padding: 8px;
`;

export const MovieName = styled.p``;

export const More = styled.p``;

export const MovieHoverDiv = styled.div`
  width: 200px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  opacity: 0;
  :hover {
    opacity: 1;
    transition: top 0.3s, opacity 0.3s;
  }
`;
export const MovieTitle = styled.p`
  margin: 40px 0 0 15px;
  font-size: 16px;
  font-weight: 700;
`;
export const MovieDec = styled.p`
  margin: 20px 0 0 15px;
  font-size: 13px;
`;
