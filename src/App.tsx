import { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import DishDetails from './pages/DishDetails'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/': 'Bakulaharchulo | Home',
      '/menu': 'Bakulaharchulo | Menu',
      '/about': 'Bakulaharchulo | About',
      '/gallery': 'Bakulaharchulo | Gallery',
      '/contact': 'Bakulaharchulo | Contact',
    }

    if (location.pathname.startsWith('/menu')) {
      document.title = 'Bakulaharchulo | Menu'
      return
    }

    const nextTitle = titleMap[location.pathname] ?? 'Bakulaharchulo'
    document.title = nextTitle
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:dishId" element={<DishDetails />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
