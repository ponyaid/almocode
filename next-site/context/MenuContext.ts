import { createContext } from 'react'


const inititalContext = {
    isMenu: false,
    menuToggle: (e: any) => { },
}

export const MenuContext = createContext(inititalContext)