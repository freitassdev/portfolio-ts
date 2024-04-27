import { useEffect } from 'react'
import './App.css'
import Loader from '@/components/shared/loader/loader';
import Navbar from '@/components/shared/navbar/navbar';
import { HeroSection } from '@/components/sections';
function App() {

  useEffect(() => {
    document.body.classList.add("dark")
  }, []);

  return (
    <>
      <div className="app-container">
        <Loader />
        <Navbar />
        <div className="mt-[4.5rem]">
          <div className="hero-section mx-auto max-w-[980px]">
            <HeroSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
