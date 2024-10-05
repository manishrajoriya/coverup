"use client"

import React from 'react'
import upload from '../components/upload'
import { Button } from '@/components/ui/button'
import { CldUploadWidget } from 'next-cloudinary'
import cloudinery from 'cloudinary'

function Home() {
  // cloudinery.config({ cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  //    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  //   api_secret: process.env.CLOUDINARY_API_SECRET });

   const handleSuccess = (result: any) => {
        console.log(result);
    };
    const handleError = (error: any) => {
        console.log(error);
    };
  return (
    <div>
        <CldUploadWidget uploadPreset="ml_default"
            onSuccess={
                handleSuccess
            }
            onError={
                handleError
            }
            options={{
                multiple: true,
                resourceType: "image",

            }}
        >
            {({ open }) => {
                return (
                    <Button onClick={() => open?.()}>
                        upload 
                    </Button>
                )
            }}
        </CldUploadWidget>
        
    </div>
  )
}

export default Home