import React, { useState } from 'react'

export default function Ad() {
  const [toggle, setToggle] = useState(true);

  const onClickBtn = () => {
    setToggle(!toggle);
  }

  return (
    <div style={{margin: "30px 0 0 0"}}>
      <button onClick={onClickBtn}>{toggle ? "광고안보기" : "광고보기"}</button>
      <img style={toggle ? {display: "flex"} : {display: "none"}} src="/ad.svg" />
    </div>
  )
}
