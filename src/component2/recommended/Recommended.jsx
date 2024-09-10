import React from 'react'
import './reco.css'
import Button from '../button/Button'
const Recommended = ({handleClick, companies}) => {
  console.log(companies[0])
  return (
    <div className='recommended'>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          {companies.map((item, index) => (
            <Button key={index} onClickHandler={handleClick} value={item} title={item}/>
          ))}
          
        </div>
      </div>
  )
}

export default Recommended