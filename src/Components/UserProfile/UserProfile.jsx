import React from 'react';
import { MenuBar, SuggestionBar } from "../index";
import {useDispatch , useSelector} from 'react-redux';

function UserProfile() {
  const {users , status}  = useSelector(state => state.user)
  const {user} = useSelector(state => state.auth)
  console.log(user)
  const dispatch = useDispatch()
  return (
    <>
       <div className="flex mx-32 my-8 gap-2 lg:mx-6">
        <div className="container">

          <div className="flex flex-col">
            <div className="p-4 rounded-lg border-gray-base border-2">
              <div className="flex gap-4 grow items-start">
             
                  <img
                    className="h-16 w-16 rounded-full"
                    src={user.profilePhoto}
                    alt="user-profile-img"
                  />
                
                <div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <div className='text-lg'>{user.firstName} {user.lastName}</div>
                            <div className='text-gray-400 text-sm'>@{user.userHandle}</div>
                        </div>
                       
                    </div>
                    <p className='text-gray-600 font-semibold'>{user.bio}</p>
                    <p className='text-blue-500 font-medium text-sm cursor-pointer'>{user.portfolioURL}</p>
                    <div className='flex text-gray-500 gap-10 mt-2'>
                        <p>1 Post</p>
                        <p>{user.followers.length} Followers</p>
                        <p>{user.following.length} Following</p>
                    </div>
                </div>
                <button className='ring-2 ring-purple-500 m-2 py-1 px-2 hover:bg-gray-200 rounded-lg text-gray-600 ml-auto cursor-pointer'>Edit</button>
               
              </div>
            </div>

           
            <div className="flex flex-col gap-4 bg-nav-background drop-shadow-2xl p-5 rounded-lg border-gray-base border-2 mt-4">
            
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
            
              <div className="flex gap-4 flex-grow py-1  items-center justify-evenly font-normal text-txt-secondary-color">
                <div className="flex items-center  cursor-pointer gap-1 cursor-pointer">
                  <i className="fa fa-heart-o mr-1 fa-solid"></i>
                  <span>1 Likes</span>
                </div>
                <div className="flex items-center cursor-pointer gap-1 cursor-pointer">
                  <i className="fa fa-bookmark-o fa-solid mr-1"></i>
                  <span>Bookmark</span>
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

export {UserProfile}