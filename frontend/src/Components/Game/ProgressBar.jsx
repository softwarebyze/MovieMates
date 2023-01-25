import React from 'react'
import './ProgressBar.css'

export default function ProgressBar({ratedFilms}) {

  const length = ratedFilms.length;

  return (
    <div id='progress-bar'>
        {ratedFilms?.length > 5 && <div className='border border-warning ghost-card' style={{ backgroundImage: `url(${ratedFilms[length-6]?.picture})` }}>{ratedFilms[length-6]?.filmId || ''}</div> }
        <div className='border border-warning' style={{ backgroundImage: `url(${ratedFilms[length-5]?.picture})` }}>{ratedFilms[length-5]?.filmId || ''}</div>
        <div className='border border-warning' style={{ backgroundImage: `url(${ratedFilms[length-4]?.picture})` }}>{ratedFilms[length-4]?.filmId || ''}</div>
        <div className='border border-warning' style={{ backgroundImage: `url(${ratedFilms[length-3]?.picture})` }}>{ratedFilms[length-3]?.filmId || ''}</div>
        <div className='border border-warning' style={{ backgroundImage: `url(${ratedFilms[length-2]?.picture})` }}>{ratedFilms[length-2]?.filmId || ''}</div>
        <div className='border border-warning' style={{ backgroundImage: `url(${ratedFilms[length-1]?.picture})` }}>{ratedFilms[length-1]?.filmId || ''}</div>
    </div>
  )
}
