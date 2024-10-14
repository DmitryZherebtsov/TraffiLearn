import './App.css'
import Header from './components/header/header'
import TestsPage from './components/TestsPage/testsPage'
import Footer from './components/footer/footer'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignInUp from './components/SignIn/SignInUp'

function App() {

  return (
    <>
      <Router>
      <Header />
        

        <Routes>

          <Route path='/' element={<MainPage />} />

          <Route path='/TestsPage' element={<TestsPage/>}/>
          <Route path='/TestsPage' element={<TestsPage/>}/>
          <Route path='/SignUp' element={<SignInUp />}/>


        </Routes>

        <Footer />

      </Router>
    </>
  )
}

export default App
