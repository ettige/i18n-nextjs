"use client"

import React, { createContext, useContext } from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


interface ModalContextProps {
    open: boolean,
    onClose: () => void,
    onOpen: () => void,
    title?: string,
    description?: string,
    children?: React.ReactNode
}

const ModalContext = createContext<ModalContextProps>({ open: false, onClose: () => { }, onOpen: () => { } })

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
        <ModalContext.Provider value={{ open: isOpen, onClose: () => { setIsOpen(false) }, onOpen: () => { setIsOpen(true) } }}>
            {children}
        </ModalContext.Provider>
    );
}


export const useModal = () => {
    const modal = useContext(ModalContext)

    return modal
}
export default ModalProvider;