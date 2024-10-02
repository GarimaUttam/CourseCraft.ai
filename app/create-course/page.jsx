"use client";

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { HiArrowLeft, HiArrowRight, HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from 'react-icons/hi2'
import SelectCategory from './_components/SelectCategory';

function CreateCourse() {
    const StepperOptions=[
        {
            id:11,
            name:'Category',
            icon:<HiMiniSquares2X2/>
        },
        {
            id:22,
            name:'Topics',
            icon:<HiLightBulb/>
        },
        {
            id:33,
            name:'Options',
            icon:<HiClipboardDocumentCheck/>
        }
    ]
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
        {/* {Stepper} */}
        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className = 'text-3xl text-primary font-medium'>Create course with <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-900">
            CourseCraft.ai</span>
            </h2>

            <div className='flex mt-10'>
                {StepperOptions.map((item,index)=>(
                    <div className='flex items-center'>
                        <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                            <div className={`bg-gray-200 p-3 rounded-full text-white
                                ${activeIndex >= index && 'bg-primary'}`}>
                                {item.icon}
                            </div>
                            <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                        </div>

                        {index != StepperOptions?.length-1 && <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${activeIndex-1>= index && 'bg-blue-500'}
                        `}></div>}
                    </div>       
                ))}
            </div>
        </div>

        <div className='px-10 md:px-20 lg:px-44 mt-20'>
        {/* Component */}
        {activeIndex==0?<SelectCategory/>:null}

        {/* Next Privious Button */}
            <div className='flex justify-between mt-10'>
                <Button disabled={activeIndex==0} variant='outline' onClick={()=>setActiveIndex(activeIndex-1)}><HiArrowLeft />Previous</Button>

                {activeIndex<2 && <Button onClick={()=>setActiveIndex(activeIndex+1)}>Next  <HiArrowRight />
                </Button>}   
                {activeIndex==2 && <Button onClick={()=>setActiveIndex(activeIndex+1)}>Generate Course Layout</Button>}

            </div>

        </div>
    </div>
  )
}

export default CreateCourse