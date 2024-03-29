import React from 'react'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
    var cloudinary: any;
}

type ImageUploadProps = {
    onChange: (value:string) => void
    value:string
}

const ImageUpload = ({ onChange, value}: ImageUploadProps) => {


    const handleUpload = useCallback((result:any) => {
        onChange(result.info.secure_url)
    },[onChange])

  return (
    <CldUploadWidget
    onUpload={handleUpload}
    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
    options={{
        maxFiles:1
    }}>

        {({open}) => {
            return (
                <div onClick={() => open?.()} className='relative cursor-pointer hover:opacity-70 border-dashed border-2 flex flex-col justify-center items-center h-[500px] '>
                    <TbPhotoPlus/>        
                    <div className='text-lg'>
                        Click to upload
                    </div>

                    {value && (
                        <div className='absolute inset-0 w-full h-full'>
                            <Image alt='upload' fill style={{objectFit:'cover'}} src={value}/>
                        </div>
                    )}
                </div>
            )
        }}

    </CldUploadWidget>
  )
}

export default ImageUpload