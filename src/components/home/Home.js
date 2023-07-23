import React from 'react'
import './home.css'
import Cards from '../card/Cards'

function Home() {
  return (
    <div className='home'>
        <h1>Most Starred Repos</h1>
        <Cards />
    </div>
  )
}

export default Home