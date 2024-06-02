import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {

  const [nasaData , setNasaData] = useState(null)
 
 const [sidebar, setSidebar ] = useState(false)

 function handleSidebarToggle() {
   setSidebar(!sidebar)
 }
 

  

  
 
 useEffect(() => {
  
  async function fetchApiData(){
    const apiKey = import.meta.env.VITE_NASA_API_KEY
    console.log(apiKey)
    const url = "https://api.nasa.gov/planetary/apod"+`?api_key=${apiKey}`
   
    console.log(url)
    const today = (new Date()).toDateString();
    const localKey = `nasa_${today}`

    if(localStorage.getItem(localKey)){
    const apiData =  JSON.parse(localStorage.getItem(localKey))
    setNasaData(apiData)
    console.log("fetch from local storage")
    return
  }

  localStorage.clear()
    try{
    const res = await fetch(url)
    const data = await res.json()
    localStorage.setItem(localKey, JSON.stringify(data))
    setNasaData(data)
    console.log("fetch from api")
    }catch(err){
      console.log(err.message)
    }
  }
  fetchApiData()
 }, [])
  
 return (
    <>
     {nasaData ? (<Main nasaData={nasaData}></Main>) : (<div className="loadingState"><i className="fa-solid fa-gear"></i></div>)}
     {sidebar &&(<Sidebar nasaData={nasaData} handleSidebarToggle={handleSidebarToggle} sidebar={sidebar}></Sidebar>)}
     {nasaData && (<Footer nasaData={nasaData} handleSidebarToggle={handleSidebarToggle} sidebar={sidebar}></Footer>)}
    </>
  )
}

export default App
