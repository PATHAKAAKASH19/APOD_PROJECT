import React from 'react'

export default function Footer(props) {

  const {handleSidebarToggle , sidebar ,nasaData } = props
  return (
   <footer>
      
        <div className='bgGradient'>
        <h2>APOD PROJECT</h2>
        <h1>{nasaData?.title}</h1>
       
        </div>
      

      <button onClick={handleSidebarToggle}>
        <i className="fa-solid fa-info"></i>
        </button>
   </footer>
  )
}
