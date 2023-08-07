import React from 'react'
import Icon from '../assets/Icon'

const Header = () => {
  return (
    <div className='p-3 m-3 flex justify-between'>
    <Icon/>
    <button className=' bg-gray-500 text-white rounded-xl h-11 w-36 p-1 text-center' onClick={()=>{ window.location.href='https://paychek.uni.club/'}} > Uni Paycheck</button>
    </div>
  )
}

export default Header