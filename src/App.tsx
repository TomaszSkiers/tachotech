import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
// import Footer from './components/Footer'
import Home from './pages/Home'
// import Services from './pages/Services'
// import About from './pages/About'
// import Contact from './pages/Contact'

function App() {



  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        {/* <Route path="/uslugi" element={<Services />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/kontakt" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App