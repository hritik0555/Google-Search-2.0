import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Routing from './components/Routing';


const App = () => {

const [darkTheme,setdarkTheme] = useState(false); 


  return (
    <div className={darkTheme ? " dark" : ""} >
    <div className="bg-gray-200 dark:bg-gray-900 min-h-screen ">
   <Navbar  darkTheme={darkTheme} setdarkTheme={setdarkTheme} />
   <Routing />
   <Footer />


    </div>


    </div>
  )
}

export default App;
