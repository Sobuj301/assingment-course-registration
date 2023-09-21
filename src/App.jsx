import './App.css'
import Cards from './Components/Cards/Cards'
import Course from './Components/Course/Course'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
     <Header></Header>
     <div className='flex gap-6'>
       <Cards></Cards>
       <Course></Course>
     </div>
    </>
  )
}

export default App
