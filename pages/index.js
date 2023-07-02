import Layout from "../components/Layout";

export default function Home() {
  return <Layout>



<div className="grid grid-cols-1 md:grid-cols-2">
  <card className="rounded overflow-hidden shadow-lg">
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">

  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-8">
    <div class="text-sm lg:flex-grow ">
      <button className="p-2 rounded-2xl" style={{backgroundColor: 'red'}}>
        Section 1
      </button>
      <button className="p-2 rounded-2xl ml-2" style={{backgroundColor: 'blue'}}>
        Section 2
      </button>
      <button className="p-2 rounded-2xl ml-2" style={{backgroundColor: 'yellow'}}>
        Section 3
      </button>
    </div>
    <div>
    <div class="flex  items-center   lg:w-auto  relative" id="mobile-menu-2">
               <input  className='shadow-inner' style={{backgroundColor:"lightgray",height:"35px"}}  type="text" value="" />
              
               <div className='absolute right-0 top-1 p-1 text-text'>
               <button type="submit" >
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               
            </button>
               </div>
            </div>    
    </div>
  </div>
</nav>


<div class="max-w-sm rounded overflow-hidden shadow-lg text-text">
 <div className="justify-center items-center text-center">
  <h1>INFIBEAM AVENUES</h1>
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xs mb-2">Lorem Ipsum</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  </card>

  

  <div>
hei

</div>



</div>










  </Layout>;
}
