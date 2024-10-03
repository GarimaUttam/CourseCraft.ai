import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'
import { FcKindle, FcPortraitMode } from 'react-icons/fc'

function TopicDescription() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);

  const handleInputChange=(fieldName,value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fieldName]:value
    }))
  }

  return (
    <div className='mx-20 lg:mx-44'>
      {/* Input Topic */}
      <div className='mt-5'>
        <label className='text-sm flex gap-1'><FcPortraitMode />Write the topic for which you want to generate the course (e.g., Python course, yoga, etc.) :</label>
        <Input placeholder={'Topic'} 
        className="h-14 text-md text-gray-700"
        defaultValue={userCourseInput?.topic}
        onChange={(e)=>handleInputChange('topic',e.target.value)}
        />
      </div>

      <div className='mt-8'>
        <label className='text-sm flex gap-1'><FcKindle />Tell us more about your course, what you want to include in the course i.e., specifications (Optional) :</label>
        <Textarea placeholder="About your course" className="h-24 text-md text-gray-700"
        defaultValue={userCourseInput?.description}
        onChange={(e)=>handleInputChange('description',e.target.value)}
        />
      </div>
      {/* Text area Description */}


      </div>
  )
}

export default TopicDescription