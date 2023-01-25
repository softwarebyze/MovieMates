import React from 'react'

export default function ProgressBar({ratedFilms}) {
  return (
    <div id='progress-bar'>
        <div className='d-inline border border-danger'>{ratedFilms[0]?.filmId || ''}</div>
        <div className='d-inline border border-danger'>{ratedFilms[1]?.filmId || ''}</div>
        <div className='d-inline border border-danger'>{ratedFilms[2]?.filmId || ''}</div>
        <div className='d-inline border border-danger'>{ratedFilms[3]?.filmId || ''}</div>
        <div className='d-inline border border-danger'>{ratedFilms[4]?.filmId || ''}</div>
    </div>
  )
}
