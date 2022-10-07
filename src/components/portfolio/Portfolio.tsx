import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'javascript',
      title: 'Javascript',
    },
    {
      id: 'reactjs',
      title: 'ReactJS',
    },
    {
      id: 'nextjs',
      title: 'NextJS',
    },
    

  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfólio</h1>
      <ul>
        
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://images.pexels.com/photos/2260561/pexels-photo-2260561.jpeg?cs=srgb&dl=pexels-engin-akyurt-2260561.jpg&fm=jpg" height={200} alt="" />
          <h3>Web Pizza</h3>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/2260561/pexels-photo-2260561.jpeg?cs=srgb&dl=pexels-engin-akyurt-2260561.jpg&fm=jpg" height={200} alt="" />
          <h3>Web Pizza</h3>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/2260561/pexels-photo-2260561.jpeg?cs=srgb&dl=pexels-engin-akyurt-2260561.jpg&fm=jpg" height={200} alt="" />
          <h3>Web Pizza</h3>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/2260561/pexels-photo-2260561.jpeg?cs=srgb&dl=pexels-engin-akyurt-2260561.jpg&fm=jpg" height={200} alt="" />
          <h3>Web Pizza</h3>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/2260561/pexels-photo-2260561.jpeg?cs=srgb&dl=pexels-engin-akyurt-2260561.jpg&fm=jpg" height={200} alt="" />
          <h3>Web Pizza</h3>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/2260561/pexels-photo-2260561.jpeg?cs=srgb&dl=pexels-engin-akyurt-2260561.jpg&fm=jpg" height={200} alt="" />
          <h3>Web Pizza</h3>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/2260561/pexels-photo-2260561.jpeg?cs=srgb&dl=pexels-engin-akyurt-2260561.jpg&fm=jpg" height={200} alt="" />
          <h3>Web Pizza</h3>
        </div>

        <div className="item">
          <img src="https://images.pexels.com/photos/2260561/pexels-photo-2260561.jpeg?cs=srgb&dl=pexels-engin-akyurt-2260561.jpg&fm=jpg" height={200} alt="" />
          <h3>Web Pizza</h3>
        </div>

      </div>
    </div>
  )
}
