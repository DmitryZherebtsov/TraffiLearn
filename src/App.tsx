import './App.css'
import Header from './components/Header/header'
import TestsPage from './components/TestsPage/testsPage'
import Footer from './components/Footer/footer'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>

        <Header />

        <Routes>

          <Route path='/' element={<MainPage />} />

          <Route path='/TestsPage' element={<TestsPage/>}/>

        </Routes>

        <Footer />

      </Router>
    </>
  )
}

export default App
