
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPersonComponent from './components/ListPersonComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PersonComponent from './components/PersonComponent'

function App() {
  

  return (
    <>
      <BrowserRouter>
         <HeaderComponent />
           <Routes>
              {/* //http://localhost:3000 */}
              <Route path='/' element= {<ListPersonComponent />}></Route>
              {/* //http://localhost:3000/person */}
              <Route path='person' element= {<ListPersonComponent />}></Route>
              {/* //http://localhost:3000/add-person */}
              <Route path='/add-person' element={ <PersonComponent />}></Route>
           
           </Routes>
         <FooterComponent />
      </BrowserRouter>
      
    </>
  )
}

export default App
