import TopBar from './components/TopBar'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import TherapyPrograms from './pages/TherapyPrograms'
import Contact from './pages/Contact'
import SuccessStories from './pages/SuccessStories'

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Gallery />} />
        <Route path="/therapy-programs" element={<TherapyPrograms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success-stories" element={<SuccessStories  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
