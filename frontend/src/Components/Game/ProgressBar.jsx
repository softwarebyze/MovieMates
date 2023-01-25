import React from 'react'

export default function ProgressBar({ratedFilms}) {
  return (
    <div id='progress-bar'>
        <div className='d-inline border border-danger'>{ratedFilms[0] || ''}</div>
        <div className='d-inline border border-danger'>{ratedFilms[1] || ''}</div>
        <div className='d-inline border border-danger'>{ratedFilms[2] || ''}</div>
        <div className='d-inline border border-danger'>{ratedFilms[3] || ''}</div>
        <div className='d-inline border border-danger'>{ratedFilms[4] || ''}</div>
    </div>
  )
}
