import React from 'react'
import Carousel from '../../Components/Game/Carousel'
import Grades from '../../Components/Game/Grades'
import ProgressBar from '../../Components/Game/ProgressBar'

export default function GamePage() {

    


  return (
    <div className='d-flex flex-column'>
        <ProgressBar />
        <Carousel />
        <Grades />
    </div>
  )
}
