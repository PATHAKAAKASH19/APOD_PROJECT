import React from 'react'

export default function Main(props) {
 
  const {nasaData} = props
 
  return (
    <div className='imgDiv'>
        <img src={nasaData.hdurl} alt={nasaData.title || "bg-img"} />
    </div>
  )
}
