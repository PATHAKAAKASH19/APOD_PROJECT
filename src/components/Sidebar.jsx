import React from 'react'

export default function Sidebar(props) {
  const {handleSidebarToggle , sidebar , nasaData} = props
  return (
   
    <div className='sidebar' onClick={handleSidebarToggle}>
          <div className="sidebar2" ></div>
        <div className='sidebarContent' >
            <h1>{nasaData?.title}</h1>
        
           <div className='explain'>
            <p className='discription'>{nasaData?.date}</p>
            <p  >{nasaData?.explanation}</p>
            </div>

         <button onClick={handleSidebarToggle}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        
       
       
    </div>
  )
}
