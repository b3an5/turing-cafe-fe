import React from 'react'
import ResCard from '../ResCard/ResCard'
import './ResContainer.css'

export default function ResContainer(props) {


  return(
    <div className='res-container'>
      {props.resArr.map((res) => {
        return <ResCard deleteRes={props.deleteRes} res={res} />
      })}
    </div>
  )
}