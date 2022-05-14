import React from "react";
import {useNavigate} from 'react-router-dom'

function SuggestionBar() {
  const navigate = useNavigate()

  return (
    <div className="p-4 md:hidden border-2 rounded-lg sticky top-24 w-2/6 h-full">
      <div className="grid grid-cols-4 gap-1 mb-6 items-center">
        <div className="flex items-center justify-between col-span-1">
          <img
            className="rounded-full w-16 flex"
            src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192"
          ></img>
        </div>
        <div className="col-span-3 cursor-pointer"
        onClick={() =>  navigate('/userprofile')}>
          <p className="font-bold text-sm">Adarash Balika</p>
          <p className="text-sm">@adarshbalika</p>
        </div>
      </div>

      <div className="rounded flex flex-col">
        <div className="text-sm flex items-center align-items justify-between mb-2">
          <p className="font-bold text-gray-base">Suggestions for you</p>
        </div>
        <div className="mt-4 grid gap-5">
          <div className="grid grid-cols-4 gap-1 mb-6 items-center">
            <div className="flex items-center justify-between col-span-1">
              <img
                className="rounded-full w-12 flex"
                src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192"
              ></img>
            </div>
            <div className="col-span-3 cursor-pointer"
            onClick={() =>  navigate('/otherprofile')}>
              <p className="font-bold text-sm">Adarash Balika</p>
              <p className="text-sm">@adarshbalika</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1 mb-6 items-center">
            <div className="flex items-center justify-between col-span-1">
              <img
                className="rounded-full w-12 flex"
                src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192"
              ></img>
            </div>
            <div className="col-span-3">
              <p className="font-bold text-sm">Adarash Balika</p>
              <p className="text-sm">@adarshbalika</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1 mb-6 items-center">
            <div className="flex items-center justify-between col-span-1">
              <img
                className="rounded-full w-12 flex"
                src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192"
              ></img>
            </div>
            <div className="col-span-3">
              <p className="font-bold text-sm">Adarash Balika</p>
              <p className="text-sm">@adarshbalika</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export { SuggestionBar };
