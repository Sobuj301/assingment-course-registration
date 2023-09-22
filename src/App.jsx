import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Course from './Components/Course/Course'
import Header from './Components/Header/Header'

function App() {
  const [course, setCourse] = useState([])
  
  const handleAdCourse = (card)=>{
    const newCourse = [...course,card]
    setCourse(newCourse)
    
  }
  return (
    <>
     <Header></Header>
     <div className='flex gap-6 max-w-7xl m-auto'>
       <Cards
        handleAdCourse={handleAdCourse}
       ></Cards>
       <Course
       course={course}
       ></Course>
     </div>
    </>
  )
}

export default App
