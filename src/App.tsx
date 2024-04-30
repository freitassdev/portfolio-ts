import brazil from '@/assets/images/brazil.svg';
import usa from '@/assets/images/usa.svg';
import './App.css'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Loader from '@/components/shared/loader/loader';
import Navbar from '@/components/shared/navbar/navbar';
import { HeroSection, AboutSection, ProjectsSection, FormationSection, CarrerSection } from '@/components/sections';
import { ArrowLeft, ArrowRight, Github, Linkedin, Mail, RotateCw, SquareMousePointer } from 'lucide-react';
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

function App() {
  const [selectedLang, setSelectedLang] = useState<string>();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.classList.add("dark")
  }, []);

  useEffect(() => {
    setSelectedLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="app-container">
            <Toaster />

            <Loader loading />
            <Navbar />
            <div className="mt-[4.5rem]">
              <div className="hero-section mx-auto max-w-[880px]">
                <HeroSection />
              </div>
              <hr className="mt-[5rem] w-0" />
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
                <FormationSection />
              </div>
              <div className='mt-4'>
                <CarrerSection />
              </div>
              <br />
              <br />
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset disabled>
            {t("components.contextMenu.back")}
            <ContextMenuShortcut><ArrowLeft className='w-4 h-4' /></ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            {t("components.contextMenu.forward")}
            <ContextMenuShortcut><ArrowRight className='w-4 h-4' /></ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset onClick={() => location.reload()}>
            {t("components.contextMenu.reload")}
            <ContextMenuShortcut><RotateCw className='w-4 h-4' /></ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset onClick={() => {
            toast(t("components.contextMenu.inspect.toastTitle"), {
              description: t("components.contextMenu.inspect.toastDescription"),
              action: {
                label: t("general.close"),
                onClick: () => toast.dismiss(),
              },
            })
          }}>
            {t("components.contextMenu.inspect.label")}
            <ContextMenuShortcut><SquareMousePointer className='w-4 h-4' /></ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem onClick={() => changeLanguage("pt")} checked={selectedLang == "pt"}>
            {t("components.contextMenu.languagePt")}
            <ContextMenuShortcut><img src={brazil} className='h-7' /></ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem onClick={() => changeLanguage("en")} checked={selectedLang == "en"}>
            {t("components.contextMenu.languageEn")}
            <ContextMenuShortcut><img src={usa} className='h-7' /></ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel inset>Links</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuItem inset>
            Github
            <ContextMenuShortcut><Github className='h-4 w-4' /></ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Linkedin
            <ContextMenuShortcut><Linkedin className='h-4 w-4' /></ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            {t("components.contextMenu.contact")}
            <ContextMenuShortcut><Mail className='h-4 w-4' /></ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

    </>
  )
}

export default App
