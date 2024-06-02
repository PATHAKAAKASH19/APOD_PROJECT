import React from 'react'

export default function Main(props) {
 
  const {nasaData} = props
 
  return (
    <div className='imgDiv'>
        
        {nasaData.media_type === "video"?(<iframe  src={nasaData.url}
         frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen></iframe>): (<img src={nasaData.hdurl} alt={nasaData.title}/>)}
    </div>
  )
}
