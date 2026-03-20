"use client"
import { MockInterview } from '@/utils/schema'
import React, { useEffect , useState} from 'react'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'
import Webcam from 'react-webcam'
import { WebcamIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function Interview({params}) {
    const [interviewData,setInterviewData] = useState();
    const [webCamEnabled,setWebCamEnabled] = useState(false);
    useEffect(()=>{
        console.log(params.interviewId)
        GetInterviewDetails();
    },[])
    const GetInterviewDetails=async()=>{
        const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))
        
        setInterviewData(result[0]);
    }
  return (
    <div className='my-10 flex justify-center flex-col items-center'>
        <h2 className='font-bold text-2xl'>Lets get Started</h2>
        <div className='grid grid-cols-1 md:grid-cols-1'>
            <div>
            {webCamEnabled? <Webcam
            onUserMedia={()=> setWebCamEnabled(true)}
            onUserMediaError={()=> setWebCamEnabled(false)}
            mirrored={true}
            style={{
                height: 300,
                width: 300
            }}
            />
            :
            <>
            <WebcamIcon className='h-72 w-full my-7 p-15 bg-secondary rounded-lg border'/>
            <Button variant='ghost' onClick={()=>setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
            </>
        }
        </div>
        <div className='flex flex-col my-5 gap-5'>
            <h2><strong>All the best!</strong></h2>
        </div>

        </div> 
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
        <Button>Start Interview</Button>
        </Link>
    </div>
  )
}

export default Interview