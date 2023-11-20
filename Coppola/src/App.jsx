
import './App.css'
import ScrollHander from './Helpers/ScrollHander'
import Home from './Pages/Home'
import "./assets/scss/main.scss"
import AOS from 'aos'
import'aos/dist/aos.css'
AOS.init();

function App() {


  return (
    
    <>
    <ScrollHander/>

    <Home/>
    </>
  )
}

export default App
