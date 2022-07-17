import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({children}) => {

    const [results,setResults] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [searchTerm ,setSearchTerm] = useState("");


// images ,videos,news etc
  const getResults =  async (type) => {

    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`,{
        method:"GET",
        headers:{
          'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'EU',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
    });
    if(response.status == 200)
    {
      console.log("Success");
      
    }
    const data = await response.json();
  
      
   
     if(type.includes("/image"))
    {
      setResults(data.image_results);
    }
    else if(type.includes("/news"))
    {
      setResults(data.entries);  
    }
    else{
      setResults(data.results);
    }

    console.log(data);

   
    
    setIsLoading(false);



  }


  return (<ResultContext.Provider value={{results,getResults,searchTerm,setSearchTerm,isLoading}}>
     
     {children}
      
  </ResultContext.Provider>
  );

}


export const useResultContext = () => useContext(ResultContext);
