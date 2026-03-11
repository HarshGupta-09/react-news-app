import React from 'react'
import Wrapper from './Wrapper'
import '../index.css'
const Category = ({className}) => {
const Categories = ["Buisness","Entertainment","General","Health","Science","Sports","Technology"]

  return (

    <Wrapper>
    <div className= {`max-w-full  w-fit m-auto flex overflow-x-auto px-4 gap-5 scrollbar-none 4 ${className}`}>
      {
        Categories.map((item,id)=>{
 return <button key={id} className="btn btn-active btn-primary">{item}</button>
        })
      }
     
     
    </div>

    </Wrapper>

  )
}

export default Category
