import React from 'react'

const NameBox = () => {
  return (
    <div className='name-box'>
        <div className='nb-text-container'>
            <img src='./name.svg' className='name-img-xl'/>
        </div>
        <div className='nb-text-container'>
            <div className='nb-text-tag'>{'<h1>'}</div>
            <div className='nb-text'>Full-stack Developer</div>
            <div className='nb-text-tag'>{'<h1/>'}</div>
        </div>
    </div>
  )
}

export default NameBox