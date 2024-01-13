import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
        <Link to = "/">
            <img className='h-10 sm:h-12 ' src="unnamed.png" alt="Logo" />
        </Link>
    </div>
  )
}

export default Logo