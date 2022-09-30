import React, {SetStateAction} from 'react'
import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'


interface StateElements {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<SetStateAction<boolean>>; 
}

export default function Topbar({menuOpen, setMenuOpen}: StateElements) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#works" className='logo'>Douglas Dev</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+55 45 99134-9711</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>douglas.aquinomendes@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>

    </div>
  )
}
