import React, { useEffect } from 'react'
import Wrapper from '../components/Wrapper'


import { useNewsContext } from '../context/NewsContext';
const News = ({ className }) => {
  const {news , setNews,fetchNews} = useNewsContext();

  





  useEffect(()=>{
    (async ()=>{
      const data = await fetchNews();
   setNews(data.articles)
    })()
  },[])

  return (
 <Wrapper>
    <div className={`grid grid-cols-4 gap-6 ${className}`}>
      {
        news.map((newsDetails,id)=>{
          if(!newsDetails.urlToImage)return null;
        return   (
          
          <NewsCard key={id} detials = {newsDetails}/>
        )
        })
      }
     
     
    </div>

 </Wrapper>
  )
}

const NewsCard = ({detials})=>{
  return <>
  <div className="card bg-base-200  shadow-sm">
  <figure className='cursor-pointer' onClick={()=>{
    window.open(detials.url)
  }}>
    <img className='w-full aspect-video object-contain'
      src={detials?.urlToImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2">{detials?.title}</h2>
    <p className='line-clamp-3'>{detials.description} </p>
    <div className="card-actions mt-4 justify-end">
      <button onClick={()=>{
        window.open(detials.url)
      }} className="badge-outline btn">Read More</button>
    </div>
  </div>
</div>
  </>
}


export default News
