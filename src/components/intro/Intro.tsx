import React from 'react'
import './intro.scss'
import hero from '../../assets/hero.png'
export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src={hero} alt="" />
        </div>
        </div>
        
        <div className="right">
          <div className="wrapper">
            <h2>Olá, Eu sou</h2>
            <h1>Douglas Mendes</h1>
            <h3>Desenvolvedor Front e Back-end <span></span></h3>
          </div>
        
      
      </div>
    </div>
  )
}
