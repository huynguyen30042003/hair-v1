import Image from 'next/image'
import React from 'react'
import ServicesImg1 from '@data/img/ServicesImg1.webp'
import ServicesImg2 from '@data/img/ServicesImg2.png'
import ServicesImg3 from '@data/img/ServicesImg2.png'

const ServicesHome = () => {
    const dataServices=[{
        title:"Shampoo and style",
        price:60,
        img:ServicesImg1,
    },
    {
        title:"Shampoo and style",
        price:60,
        img:ServicesImg2
    },{
        title:"Shampoo and style",
        price:60,
        img:ServicesImg3
    }]
  return (
    <div className="container m-auto">
        <div className="flex">
            {
                dataServices.map((e)=>(
                    <div className="flex flex-col">
                        <p className='text-[20px]'>{e.title}</p>
                        <p className='text-[16px]'>{e.price}</p>
                        <Image src={e.img}/>
                    </div>
                ))
            }
        </div>
    </div>

  )
}

export default ServicesHome