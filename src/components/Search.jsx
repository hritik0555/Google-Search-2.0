import React, { useState } from 'react'
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links';




const Search = () => {


  const {setSearchTerm} =useResultContext();
 
  const [text,setText] = useState(""); 
  

  const handleSearch = (event) =>{
  
    if(event.key === "Enter")
    {
      console.log("pressed enter");
      setSearchTerm(text);


    }

  }
  
   console.log(text);

  return (
   
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input 
      value={text}
      type="text"
      placeholder='Search or type url'
      onChange={(e)=> setText(e.target.value)}
      onKeyDown= {handleSearch} 
      className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg' >
      
      </input>
      
      <button className='p-1 m-1 h-10 bg-green-200 border rounded-full text-black '
       onClick={handleSearch}
      >🔍Go</button>
     <Links/>
    </div>
    
  )
}

export default Search;