import React from 'react'
import './ProgressBar.css'

export default function ProgressBar({ratedFilms}) {

  const length = ratedFilms.length;

  return (
    <div id='progress-bar'>
        <div className='border border-warning'>{ratedFilms[length-5]?.filmId || ''}</div>
        <div className='border border-warning'>{ratedFilms[length-4]?.filmId || ''}</div>
        <div className='border border-warning'>{ratedFilms[length-3]?.filmId || ''}</div>
        <div className='border border-warning'>{ratedFilms[length-2]?.filmId || ''}</div>
        <div className='border border-warning'>{ratedFilms[length-1]?.filmId || ''}</div>
    </div>
  )
}
