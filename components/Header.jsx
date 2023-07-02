import React from 'react'

function Header() {
  return (
    <>
    <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow-lg ml-2 mr-2 mt-2">
        <div class="flex  justify-start md:justify-between items-center  max-w-screen-xl">
         
         
            <a href="https://flowbite.com" class="flex items-center">


                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div class="flex  items-center   lg:w-auto  relative" id="mobile-menu-2">
               <input  className='shadow-inner' style={{backgroundColor:"lightgray",height:"35px"}}  type="text" value="" />
              
               <div className='absolute right-0 top-1 p-1'>
               <button type="submit" >
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
               </div>
            </div>
            <div class="hidden items-center  md:flex">
                <a href="http://" className=' mr-4' >Contact Us</a>
                <button type="button" className=' mr-4 pl-4 pr-4 p-2 border border-black rounded-lg'>SIGNUP</button>
                <button type="button" className=' pl-4 pr-4 p-2  border border-black rounded-lg'>SIGNIN</button>
            </div>
          
        </div>
    </nav>
</header>
    
    
    
    
    
    </>
  )
}
export default Header