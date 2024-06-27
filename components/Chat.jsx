"use client"
import React from "react";
import { socket } from "app/socket";
import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";


const Chat = () => {
  const[updateMessage,setUpdateMessage]=useState()
  const { data: session } = useSession()
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([""]);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/conversation/${userName}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      setMessages(result.Conversations); // Assuming the API returns an object with a 'users' array
      return result.Conversations; // Return the fetched users
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      return []; // Return an empty array in case of error
    }
  };

//   useEffect(() => {
//     fetchData();
//   }, []);
  useEffect(() => {
    if(session){
        setUserID(session.user.id)
        setUserName(session.user.username)
        fetchData();
    }

  }, [session]);
  const sendMessage = async () => {
    console.log(userID,
        userName,
        message);
    try {
      const response = await fetch(
        `http://localhost:3000/api/conversation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID,
            userName,
            message
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await fetchData();
      console.log(result);
      setUpdateMessage(result)
      socket.emit("sendMessage", result);
      return result.Conversations; // Return the fetched users
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      return []; // Return an empty array in case of error
    }
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("sendMessage", (updateMessage) => {
    //   console.log("User deleted");
      setMessages(updateMessage);
      console.log(updateMessage);
    });

    return () => {
      socket.off("connect");
      socket.off("sendMessage");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold pt-[50px]">Chat Messages {session ? session.user.id : "unnull"}</h1>
      <div className="flex-grow overflow-y-auto w-[300px]">
        {messages ? messages.map((mess, index) => (
          <div key={index} className="flex flex-col mb-4 gap-4 py-4">
            {mess.admin_message
              ?             <div class="flex justify-start">
              <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                  <p class="text-gray-900 text-sm">{mess.admin_message}</p>
              </div>
          </div>
              : <div class="flex justify-end">
              <div class="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                  <p class="text-white text-sm">{mess.message}</p>
              </div>
          </div>}
          </div>
        )) : <p className="text-gray-500">No messages yet</p>}
      </div>
      <div className="w-[300px] mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message"
        />
        <button 
          onClick={sendMessage}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
    
  );
};

export default Chat;
