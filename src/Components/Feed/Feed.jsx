import React from 'react';
import { MenuBar, SuggestionBar } from "../index";

function Feed() {
  return (
    <>
    <div className="flex mx-32 my-8 gap-2 lg:mx-6">
        <div className="container">
          {/* post */}
          <div className="flex flex-col">
            <div className="p-3 rounded-lg bg-gray-200 text-center font-semibold">
             Feed
            </div>

            <div className="flex rounded-lg bg-gray-100 text-center font-medium my-3 justify-evenly">
            <div className='w-1/2 cursor-pointer p-2 hover:bg-purple-300 hover:text-white'>Latest Posts</div>
            <div className='w-1/2 border-l-2 p-2  border-purple-600 cursor-pointer hover:bg-purple-300 hover:text-white'>Trending</div>
            </div>

            {/* feed */}
            {/**Post-feed */}
            <div className="flex flex-col gap-4 bg-nav-background drop-shadow-2xl p-5 rounded-lg border-gray-base border-2 mt-4">
              {/** post header */}
              <div className="flex gap-4  flex-grow">
                <img
                  className="rounded-full h-12 w-12"
                  src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192"
                  alt="post-hero"
                />
                <div className="flex justify-between flex-grow">
                  <div className="flex flex-col">
                    <p className="text-xl">Kristien Stewart</p>
                    <p className="text-xs text-txt-secondary-color">
                      July 26 2018
                    </p>
                  </div>
                  <i className="ri-more-fill text-xl cursor-pointer"></i>
                </div>
              </div>
              {/**Post details */}
              <div className="flex flex-col gap-2 flex-grow">
                <p>
                  The most beautiful things are not associated with money; they
                  are memories and moments. If you don't celebrate those, they
                  can pass you by!
                </p>
                <img
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1558236617-7d65d9dbcd02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNlbGVicmF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt="post-details"
                />
              </div>
              {/**Post footer */}
              <div className="flex gap-4 flex-grow py-1  items-center justify-evenly font-normal text-txt-secondary-color">
                <div className="flex items-center  cursor-pointer gap-1 cursor-pointer">
                  <i className="fa fa-heart-o mr-1 fa-solid"></i>
                  <span>1 Likes</span>
                </div>
                <div className="flex items-center cursor-pointer gap-1 cursor-pointer">
                  <i className="fa fa-bookmark fa-solid mr-1"></i>
                  <span>Bookmarked</span>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  className="h-8 rounded-full"
                  src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192"
                />
                <div className="self-center w-full border-solid border border-gray-400 grow flex justify-start rounded-md px-2 py-1">
                  <input
                    className="grow focus:outline-none cursor-pointer"
                    placeholder="post comment"
                  ></input>
                  <button className="text-sm text-purple-500 cursor-pointer font-semibold hover:cursor-not-allowed ml-auto cursor-pointer">
                    Comment
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  className="h-8 rounded-full"
                  src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192"
                />
                <div className="w-full bg-gray-200 grow flex flex-col rounded-md px-2 py-1">
                  <p className="text-sm">Ragini Singh</p>
                  <p className="text-xs text-gray-500">great to see you enjoying</p>
                </div>
              </div>


            </div>
          </div>
        </div>
        <SuggestionBar />
      </div>
    </>
  )
}

export {Feed}