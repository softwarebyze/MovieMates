import React from 'react'
import './Grades.css'

export default function Grades({handleGrading}) {
  return (
    <div className='game-grades'>
        <div>
            <button id='grade-1' onClick={(e) => handleGrading(e)}>😟</button>
            <button id='grade-2' onClick={(e) => handleGrading(e)}>🙁</button>
            <button id='grade-3' onClick={(e) => handleGrading(e)}>😐</button>
            <button id='grade-4' onClick={(e) => handleGrading(e)}>🙂</button>
            <button id='grade-5' onClick={(e) => handleGrading(e)}>😊</button>
        </div>
        <div>
            <button id='skip-film' onClick={(e) => handleGrading(e)}>skip</button>
        </div>
    </div>
  )
}
