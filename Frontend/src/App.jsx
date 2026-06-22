import React from 'react'
import Navbar from './components/Navbar'
import Entry from './pages/entry'
import Footer from './pages/footer'

const App = () => {
  return (
    <div className='bg-[#071428] min-h-screen'>
      <Navbar/>
      <Entry/>
      <Footer/>
    </div>
  )
}

export default App
