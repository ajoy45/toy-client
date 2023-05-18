
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './shared/Navbar/Header'
import Footer from './shared/Footer/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
