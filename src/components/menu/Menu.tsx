import React, {SetStateAction} from 'react'
import './menu.scss'

interface StateElements {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<SetStateAction<boolean>>; 
  }

export default function Menu({menuOpen, setMenuOpen}: StateElements) {
  return (
    <div className={'menu '+(menuOpen && 'active')}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#works'>Trabalhos</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#testimonals'>Testimonials</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#contact'>Contato</a>
            </li>
        </ul>

    </div>
  )
}
