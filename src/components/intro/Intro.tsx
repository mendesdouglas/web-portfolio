import React, { useEffect, useRef } from 'react'
import './intro.scss'
import hero from '../../assets/hero.png'
import {ExpandMore} from '@material-ui/icons'
import { init } from 'ityped'


export default function Intro() {

  // const textRef = useRef<HTMLInputElement>();

  useEffect(() => {
    
  },[])

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
            <h3>Desenvolvedor  <span >Front e Back-end</span></h3>
            
            
            
            

            <div className='scrolldown' ></div>
            
            
          </div>
      
      </div>
    </div>
  )
}
