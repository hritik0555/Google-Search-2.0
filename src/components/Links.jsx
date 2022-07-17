import React from 'react'
import { NavLink } from "react-router-dom";


const links = [

{url:"/search" , text: "All"},
{url:"/news" , text: "News"},
{url:"/image" , text: "Images"},
{url:"/videos" , text: "Videos"},

];


const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between 
    items-center mt-4'>
    {links.map(({url,text},index) => (

<NavLink key={index} to={url}  className="m-2"
 >
 {text}
 </NavLink>  


)  )}

       
   </div>
  )
}

export default Links