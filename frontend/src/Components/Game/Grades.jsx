import React from 'react'
import './Grades.css'

export default function Grades({handleGrading, ratedFilms}) {
  return (
    <div className='game-grades text-center'>
        <div>
            <button id='grade-1' onClick={(e) => handleGrading(e)}>😟</button>
            <button id='grade-2' onClick={(e) => handleGrading(e)}>🙁</button>
            <button id='grade-3' onClick={(e) => handleGrading(e)}>😐</button>
            <button id='grade-4' onClick={(e) => handleGrading(e)}>🙂</button>
            <button id='grade-5' onClick={(e) => handleGrading(e)}>😊</button>
        </div>
        <div className='skip-continue'>
            <button id='skip-film' onClick={(e) => handleGrading(e)}>skip</button>
            <button id='continue' onClick={(e) => handleGrading(e)} disabled={ratedFilms.length < 5}>continue</button>
        </div>
    </div>
  )
}
