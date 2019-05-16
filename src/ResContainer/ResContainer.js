import React from 'react'
import ResCard from '../ResCard/ResCard'

export default function ResContainer(props) {


  return(
    <div>
      {props.resArr.map((res) => {
        return <ResCard deleteRes={props.deleteRes} res={res} />
      })}
    </div>
  )
}