import Header from "./Header"
import Footer from "./Footer"

export default function HeaderFooter(props) {
  return(
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  )
}