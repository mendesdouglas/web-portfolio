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
            <li>
                <a href='#intro'>Home</a>
            </li>
            <li>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
                <a href='#works'>Trabalhos</a>
            </li>
            <li>
                <a href='#testimonals'>Testimonials</a>
            </li>
            <li>
                <a href='#contact'>Contato</a>
            </li>
        </ul>

    </div>
  )
}
