import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { FcKindle, FcPortraitMode } from 'react-icons/fc'

function TopicDescription() {
  return (
    <div className='mx-20 lg:mx-44'>
      {/* Input Topic */}
      <div className='mt-5'>
        <label className='text-sm flex gap-1'><FcPortraitMode />Write the topic for which you want to generate the course (e.g., Python course, yoga, etc.) :</label>
        <Input placeholder={'Topic'}/>
      </div>

      <div className='mt-8'>
        <label className='text-sm flex gap-1'><FcKindle />Tell us more about your course, what you want to include in the course i.e., specifications (Optional) :</label>
        <Textarea placeholder="About your course"/>
      </div>
      {/* Text area Description */}


      </div>
  )
}

export default TopicDescription