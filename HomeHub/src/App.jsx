import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home.jsx'
// import Favorites from '../src/Pages/Favorites.jsx'
// import Details from '../src/Pages/Details.jsx'
// import Contact from '../src/Pages/Contact.jsx'
// import Catalogue from '../src/Pages/Catalogue.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
    <Navbar/>
      {/* <Router>
        <Routes>
          <Route>
          <Route path="/" element={<Home/>} />
            <Route />
          </Route>
        </Routes>
      </Router> */}
      <h1>Hola</h1>
    </>
  )
}

export default App
