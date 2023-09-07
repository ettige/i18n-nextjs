"use client"

import React, { createContext, useContext } from "react"

interface ModalContextProps {
    open: boolean,
    onClose: () => void,
    onOpen: () => void,
    title?: string,
    description?: string,
    children?: React.ReactNode
}

 const ModalContext = createContext<ModalContextProps>({ open: false, onClose: () => { }, onOpen: () => { } })

 export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
        <ModalContext.Provider value={{ open: isOpen, onClose: () => { setIsOpen(false) }, onOpen: () => { setIsOpen(true) } }}>
            {children}
        </ModalContext.Provider>
    );
}


export const useModal = () => {
    const modal = useContext(ModalContext)
    if(!modal){
        console.error("Fail To initilize ModalProvider!!!")
    }

    return modal
}
export default ModalProvider;