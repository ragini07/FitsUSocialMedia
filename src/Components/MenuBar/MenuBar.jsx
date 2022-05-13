import React from 'react'

function MenuBar() {
  return (
    <>
    <section className='flex flex-col w-1/5 bg-gray-600 border-red-800 border-r mr-2 fixed top-10'>
        <div className='my-6 px-2'>
            <li>
                <span>Home</span>
            </li>
            <li>
                <span>Bookmarks</span>
            </li>
            <li>
                <span>Notifications</span>
            </li>
            <li>
                <span>Liked Posts</span>
            </li>

        </div>
    </section>
    </>
  )
}

export {MenuBar}