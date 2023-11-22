import styled from "styled-components";

import React from 'react'

export default function NotFound() {
  return (
    <div>
      <ContentLayout>NotFound</ContentLayout>
    </div>
  )
}


const ContentLayout = styled.div`
  height: 1vh;
  font-size: 100px;
  padding: 12px;
  color: white;
`;