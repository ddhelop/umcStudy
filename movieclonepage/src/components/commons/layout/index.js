import LayoutHeader from "./header/LayoutHeader.container";

export default function Layout(props) {

  return (
    <>
      <LayoutHeader />
      <div style={{ margin: "-8px"}}>
        <div>{props.children}</div>
      </div>
    </>
  )
}