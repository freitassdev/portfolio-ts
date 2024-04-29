import { useEffect } from 'react'
import './App.css'
import Loader from '@/components/shared/loader/loader';
import Navbar from '@/components/shared/navbar/navbar';
import { HeroSection, AboutSection, ProjectsSection } from '@/components/sections';
// import { useTranslation } from 'react- i18next';
function App() {
  // const { t } = useTranslation();
  useEffect(() => {
    document.body.classList.add("dark")
  }, []);

  return (
    <>
      <div className="app-container">
        <Loader loading />
        <Navbar />
        <div className="mt-[4.5rem]">
          <div className="hero-section mx-auto max-w-[880px]">
            <HeroSection />
          </div>
          <hr className="mt-[6rem]" />
          <div className="mt-[2rem] topo-bg py-10 px-[5%] max-sm:px-[3%] xl:px-14 flex flex-col items-center justify-center">
            <div className="box shadow-xl shadow-primary/50 border border-border/90 backdrop-blur-sm bg-primary-foreground/15 h-auto w-full rounded-3xl px-14 py-8 max-sm:px-5 max-md:px-6">
              <div className="about-me-section">
                <AboutSection />
              </div>
              <div className="projects-section mt-16">
                <ProjectsSection />
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
