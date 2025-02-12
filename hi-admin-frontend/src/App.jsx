
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPersonComponent from './components/ListPersonComponent'
import {BrowserRouter} from 'react-router-dom'

function App() {
  

  return (
    <>
      <HeaderComponent />
      <ListPersonComponent />
      <FooterComponent />
    </>
  )
}

export default App
