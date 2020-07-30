import React from 'react'
import {Navbar} from './components/Navbar'

import {Switch, Route} from 'react-router-dom'
import { TodosPage } from './pages/TodosPage'
import { AboutPage } from './pages/AboutPage'

function App() {
  return (
    <>
      <Navbar/>

      <div className='container'>
        <Switch>
          <Route path='/about' component={AboutPage}/>
          <Route path='/' component={TodosPage}/>  
        </Switch>  
      </div>
    </>
  )
}


export default App
