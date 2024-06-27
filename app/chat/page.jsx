"use client";
import Chat from "components/Chat";
import ChatAdmin from "components/ChatAdmin";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { socket } from "app/socket";
import BoxChat from "components/BoxChat";

const Page = () => {
  const [index,setIndex]=useState(0)
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [dataMessage, setDataMessage] = useState([]);
  const [userName, setUserName] = useState('')
  const [userID,setUserID]=useState('')
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/conversation/admin"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result.userConversations);
      setDataMessage(result.userConversations); // Assuming the API returns an object with a 'users' array
      return result; // Return the fetched users
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      return []; // Return an empty array in case of error
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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

  useEffect(() => {
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {session?.user?.role === "admin" ? (
        <div class="flex flex-row h-screen antialiased text-gray-800 pt-[50px]">
          <ChatAdmin dataMessage={dataMessage} setIndex={setIndex} setUserName={setUserName}/>
          <BoxChat messages={dataMessage[index]}  userName={userName} userID={userID} fetchData={fetchData} />
        </div>
      ) : (
        <Chat />
      )}
    </div>
  );
};

export default Page;
