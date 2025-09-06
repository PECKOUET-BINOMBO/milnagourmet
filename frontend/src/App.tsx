import Navbar from './components/navbar'
import { Banier } from './components/banier'
import { Categories } from './components/categories'
import { SlideMenuCremeux } from './components/slide-menu-cremeux'
import { SlideMenuLiquide } from './components/slide-menu-liquide'

import './App.css'

function App() {

  return (
    <>
       <Navbar />
       <Banier />
       <Categories />
       <SlideMenuCremeux />
       <SlideMenuLiquide />
    </>
  )
}

export default App
