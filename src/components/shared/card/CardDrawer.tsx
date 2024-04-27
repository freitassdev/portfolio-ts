import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { CardProps } from "./card"

const CardDrawer: React.FC<CardProps> = (props) => {
  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger>
        {/* pra aumentar ou diminuir a margin-top mexe no translate-y */}
        <img className="w-[85%] bottom-0 absolute left-[50%] translate-x-[-50%] translate-y-[10%] rounded-t-lg transition duration-200 hover:translate-x-[-50%] hover:scale-110 hover:rotate-2 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb14H0pL8piAfDyR1f5Ua-m14lva9t9POQ&amp;usqp=CAU" alt="image" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader className="flex flex-col items-center">
            <img className="h-[250px] w-auto rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb14H0pL8piAfDyR1f5Ua-m14lva9t9POQ&amp;usqp=CAU" alt="image" />
          </DrawerHeader>
          <div className="px-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-3xl font-bold tracking-tighter">
                  {props.title}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground mt-2">
                  {props.tech}
                </div>
                <div className="text-lg text-justify max-md:text-md max-sm:text-base">
                  {props.description}
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Fechar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default CardDrawer;