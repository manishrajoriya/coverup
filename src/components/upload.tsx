import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from './ui/button';

function upload() {
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

export default upload