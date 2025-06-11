
import Menu from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'
 
export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}