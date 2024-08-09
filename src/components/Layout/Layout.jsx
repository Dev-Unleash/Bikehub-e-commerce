import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  const location = useLocation();

  return (
    <div className='App-Container'>
      <section className='App-Content'>
        <Header />
        {location.pathname === '/' && <Hero />}
        <div className='App-Items'>
          <Outlet />
        </div>
       {location.pathname === '/' && <Footer />}
      </section>
    </div>
  )
}

export default Layout