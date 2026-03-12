import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'
import '../index.css'
const Category = ({className}) => {
const Categories = ["Buisness","Entertainment","General","Health","Science","Sports","Technology"]
const { setNews,fetchNews} = useNewsContext();
const handleClick = async (e)=>{
  const category = e.target.value;
  const data = await fetchNews(`/everything?q=${category}`)
  setNews(data.articles);
  
}
  return (

    <Wrapper>
    <div className= {`max-w-full  w-fit m-auto flex overflow-x-auto px-4 gap-5 scrollbar-none 4 ${className}`}>
      {
        Categories.map((item,id)=>{
 return <button onClick={handleClick} key={id}  value = {item} className="btn btn-active btn-primary">{item}</button>
        })
      }
     
     
    </div>

    </Wrapper>

  )
}

export default Category
