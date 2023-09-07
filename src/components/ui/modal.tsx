"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from "react";

interface ModalProps {
    title?: string,
    description?: string,
    children?: React.ReactNode
    isOpen?: boolean
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, children, isOpen,onClose }) => {
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      };
    
    return (
        <Dialog open={isOpen}  onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>

    );
}

export default Modal;