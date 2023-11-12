import { useRouter } from "next/router"
import * as L from "./LayoutHeader.styles"

const NAVIGATION_MENUS = [
  { name: "영화", page: "/movie" },
  { name: "TV 프로그램", page: "/TV" },
  {name: "인물", page: "/people"},
]

export default function LayoutHeader() {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/home")
  }
  const onClickItems = (event) => {
    router.push(event.currentTarget.id)
  }

  return (
    <>
      <L.Wrapper>
        <L.ItemWrapper>
          <L.Logo
            onClick={onClickLogo}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
          {NAVIGATION_MENUS.map((el) => (
            <L.Items id={el.page} key={el.page} onClick={onClickItems}>{el.name}</L.Items>
          ))}
        </L.ItemWrapper>
      </L.Wrapper>
    </>
  )
}