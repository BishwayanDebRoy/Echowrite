import React from 'react'
import { logoimg } from '../assets';
const Logo = ({width='100px'}) => {
  return (
    <img src={logoimg} alt=""  className='w-9 h-9'/>
  )
}

export default Logo