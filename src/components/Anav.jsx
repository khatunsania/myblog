import React from 'react'

const Anav = () => {
  return (
    <>
    <div className='w-[90%] m-auto  flex justify-between py-6 bg-[#fff]'>
        <div>
          <span className='mr-3 text-[#63738b]'><i class="fa-solid fa-magnifying-glass pl-4"></i></span>
            <input  type="text" placeholder='Type a search' />
        </div>
        <div>
            <ul className='flex'>
                <li className='mr-3'><span className='rounded-[50%] px-2.5 py-1.5 bg-[#e2e8f0] 
                text-[#63738b]'><i class="fa-regular fa-bell"></i></span></li>
                <li className='mr-3' ><span span className='rounded-[50%] px-2.5 py-1.5 bg-[#e2e8f0] 
                text-[#63738b]'><i class="fa-regular fa-comment"></i></span></li>
                <li className='mr-3' ><span span className='rounded-[50%] px-2.5 py-1.5 bg-[#e2e8f0] 
                text-[#63738b]'><i class="fa-solid fa-user"></i></span></li>
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default Anav