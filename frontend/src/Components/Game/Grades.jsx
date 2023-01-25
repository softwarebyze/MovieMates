import React from 'react'

export default function Grades({handleGraging}) {
  return (
    <div>
        <button id='grade-1' onClick={(e) => handleGraging(e)}>☹</button>
        <button id='grade-2' onClick={(e) => handleGraging(e)}>🙁</button>
        <button id='grade-3' onClick={(e) => handleGraging(e)}>😐</button>
        <button id='grade-4' onClick={(e) => handleGraging(e)}>🙂</button>
        <button id='grade-5' onClick={(e) => handleGraging(e)}>😊</button>
    </div>
  )
}
