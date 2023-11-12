import { useState } from 'react';

export default function Ad() {
  
  const [ toggle, setToggle ] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <button style={{margin:"20px"}} onClick={onClickToggle}>{toggle ? "광고보기" : "광고안보기"}</button>
      <div>
        <img style={toggle ? {display:"none"}:{display: "flex"}} src="./ad/image.svg" />
      </div>
    </>
  )

}