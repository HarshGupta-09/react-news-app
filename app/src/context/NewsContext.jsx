
import { createContext, useContext } from 'react'

  const NewsContext = createContext();

  const NewsContextProvider = ({children}) =>{

    return (
        <NewsContext.Provider value={"Harsh"}>
                {children}
        </NewsContext.Provider>
    )
  }

  const useNewsContext = ()=>{
        return useContext(NewsContext)
  }

  export { NewsContextProvider,useNewsContext}