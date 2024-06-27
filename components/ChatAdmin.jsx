import React, { useState,useEffect } from 'react'


const ChatAdmin = ({dataMessage,setIndex,setUserName}) => {
    const hanldeShowMessage=(e,data)=>{
        console.log(e);
        setIndex(e)
        console.log(data.userName);
        setUserName(data.userName)
    }
  return (
    <div class="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
      <div class="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
        <div class="flex flex-row items-center">
          <div class="flex flex-row items-center">
            <div class="text-xl font-semibold">Messages</div>
            <div class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">5</div>
          </div>
          <div class="ml-auto">
            <button class="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
              <svg class="w-4 h-4 stroke-current"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-5">
          <ul class="flex flex-row items-center justify-between">
            <li>
              <a href="#"
                 class="flex items-center pb-3 text-xs font-semibold relative text-indigo-800">
                <span>All Conversations</span>
                <span class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
              </a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                <span>Archived</span>
              </a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                <span>Starred</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <div class="text-xs text-gray-400 font-semibold uppercase">Personal</div>
        </div>
        <div class="h-full overflow-hidden relative pt-2">
          <div class="flex flex-col divide-y h-full overflow-y-auto -mx-4">

            {
                dataMessage ? (dataMessage.map((data,index)=>(
                    <div class="flex flex-row items-center p-4 relative"
                    onClick={()=>hanldeShowMessage(index,data)}
                    >
                    <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">2 hours ago</div>
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                        T
                    </div>
                    <div class="flex flex-col flex-grow ml-3">
                        <div class="text-sm font-medium">{data.userName}</div>
                        <div class="text-xs truncate w-40">Good after noon! how can i help you?</div>
                    </div>
                    <div class="flex-shrink-0 ml-2 self-end mb-1">
                        <span class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">3</span>
                    </div>
                    </div>

                ))):""
            }
          </div>
          <div class="absolute bottom-0 right-0 mr-2">
            <button class="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
              <svg class="w-6 h-6"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  ) 
}

export default ChatAdmin