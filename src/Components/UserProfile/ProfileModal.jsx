import React from 'react'

function ProfileModal() {
  return (
   <>
     <div class="bg-black bg-opacity-60 fixed inset-0 justify-center items-center z-10" >
        <div class="bg-white max-w-sm py-4 px-6 rounded shadow-xl text-gray-800 mx-auto my-40">
            <div class="flex justify-between items-center mb-4">
                <h4 class="text-lg font-bold text-gray-700">Edit Profile</h4>
                <svg class="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full"  fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="mt-2 flex flex-col gap-4">
                <div className='flex gap-8 mb-2'>
                    <div>Avatar</div>
                    <div className='relative'>
                    <img
                    className="h-14 w-14 rounded-full"
                    src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192"
                    alt="profile-img"
                  />
    <i className='fa-solid fa-camera text-white flex justify-center absolute right-0 top-8 cursor-pointer bg-purple-500 h-6 w-6 rounded-full'></i>
                        </div>
                </div>
                <div className='flex gap-12 mb-2'>
                    <div>Bio</div>
                    <input className='pl-2 grow font-light bg-purple-300 px-1 py-0.5 rounded-sm focus:outline-none' type="text" value="ec fer rfe"/>
                </div>
                <div className='flex gap-3 mb-2'>
                    <div className=''>Website</div>
                    <input className='pl-2 grow focus:outline-none font-light bg-purple-300 px-1 py-0.5 rounded-sm' type="text" value="ec fer rfe"/>
                </div>
            </div>
            <div class="mt-3 flex justify-end space-x-3 mt-2">
                
                <button class="px-3 py-1 text-gray-200 bg-purple-500 hover:bg-purple-600 rounded">Update</button>
            </div>
        </div>
    </div>
   </>
  )
}

export {ProfileModal}