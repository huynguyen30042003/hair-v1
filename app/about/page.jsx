"use client"
import React from "react";
import img1 from "@data/img/img1.svg";
import img2 from "@data/img/img2.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


const About =   () => {
  const { data: session } = useSession()
  
  if(!session){
    redirect('/login')
    return null;
  }

  return (
    <>
    <div className="container m-auto">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <Image src={img2} alt="image"  />
          <p>“Making every woman beautiful one day at a time.”</p>
          <p>
            Opened in 1992, Lucia Harrison opened her hair Salon in Colorado
            Springs, Colorado. At Lucia’s Majic Touch, our mission is to provide
            a friendly personalized service that allows customers to achieve
            their hair goals.{" "}
          </p>
          <p>
            Having a more intiamate setting of the salon, can help with
            customers be more personal about their hair struggles and finding
            ways to remedy their issues with their hair.{" "}
          </p>
        </div>
        <Image src={img1} alt="image" />
      </div>
    </div>
    </>

  );
};

export default About;