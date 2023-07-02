import React from 'react'
import Layout from '../components/Layout'
import { MarketStories } from '../api/marketStories'

const posts = () => {
  return (
    <Layout>

<div>
  <h1 style={{color:"red"}} className="font-semibold ml-10"> MARKET STORIES </h1>
</div>
<div className='justify-center items-center flex'>
 
 <div className="grid grid-cols-2 justify-center items-center ml-6 mt-5 gap-10">
 {MarketStories.map((item)=>(
  <div>
 <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div className='justify-center items-center flex'>
  <img class="w-1.2" src={item?.image} alt="Sunset in the mountains"/>
  </div>
  
  <div class="px-6 py-4">
    
    <p class="text-gray-700 text-xs text-text">
     {item?.content}
    </p>
  </div>

</div>
  </div>
))}
 </div>

 
</div>

    </Layout>
  )
}

export default posts