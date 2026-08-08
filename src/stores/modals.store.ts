import { ReactNode } from "react";
import { create } from "zustand";

type ModalsStoreI = {
    isOpen: boolean;
    child: ReactNode | null;
    onOpen: (child: ReactNode) => void;
    onClose: () => void;
}

export const useModalesStore = create<ModalsStoreI>((set) => (
    {
        isOpen: false,
        child: null,
        onOpen: (child) => {
            set({
                isOpen: true,
                child
            })
        },
        onClose: () => {
            set({
                isOpen: false,
                child: null
            })
        }
    }
)) 