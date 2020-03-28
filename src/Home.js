import React from 'react'
import { Link } from 'react-router-dom'
import { SpecialButton } from './SpecialButton'

export const Home = ({ history, location, match }) => {
  return (
    <div class="container">
      <div>Home</div>
      <Link to="/about">To About</Link>
      <button onClick={() => {
        history.push('/about')
        console.log('go to about')
      }}>Go to about</button>
      <SpecialButton />
    </div>
  )
}